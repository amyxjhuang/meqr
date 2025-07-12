import sqlite3
from contextlib import closing

DB_NAME = 'meqr.db'

# Automatically initialize the database and table if not present
def init_db():
    with closing(sqlite3.connect(DB_NAME)) as conn:
        with conn:
            conn.execute('''
                CREATE TABLE IF NOT EXISTS face_embeddings (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_id TEXT NOT NULL,
                    face_key TEXT UNIQUE NOT NULL,
                    face_embedding TEXT NOT NULL,
                    url TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            ''')

def insert_face_embedding(face_key: str, face_embedding: str, url: str = None, user_id: str = "default"):
    with closing(sqlite3.connect(DB_NAME)) as conn:
        with conn:
            conn.execute(
                'INSERT INTO face_embeddings (face_key, face_embedding, url, user_id) VALUES (?, ?, ?, ?)',
                (face_key, face_embedding, url, user_id)
            )

def get_face_embedding_by_key(face_key: str) -> str | None:
    with closing(sqlite3.connect(DB_NAME)) as conn:
        cur = conn.execute(
            'SELECT face_embedding FROM face_embeddings WHERE face_key = ?',
            (face_key,)
        )
        row = cur.fetchone()
        return row[0] if row else None

def get_url_by_face_key(face_key: str) -> str | None:
    with closing(sqlite3.connect(DB_NAME)) as conn:
        cur = conn.execute(
            'SELECT url FROM face_embeddings WHERE face_key = ?',
            (face_key,)
        )
        row = cur.fetchone()
        return row[0] if row else None

def get_all_face_keys() -> list:
    with closing(sqlite3.connect(DB_NAME)) as conn:
        cur = conn.execute('SELECT face_key FROM face_embeddings')
        return [row[0] for row in cur.fetchall()]

def find_matching_face(face_embedding: str, threshold: float = 0.6) -> str | None:
    """Find a matching face in the database using cosine similarity"""
    import json
    import numpy as np
    from sklearn.metrics.pairwise import cosine_similarity
    
    with closing(sqlite3.connect(DB_NAME)) as conn:
        cur = conn.execute('SELECT face_key, face_embedding FROM face_embeddings')
        rows = cur.fetchall()
        
        if not rows:
            return None
            
        # Convert input embedding to numpy array
        input_embedding = np.array(json.loads(face_embedding)).reshape(1, -1)
        
        for face_key, stored_embedding in rows:
            stored_embedding_array = np.array(json.loads(stored_embedding)).reshape(1, -1)
            similarity = cosine_similarity(input_embedding, stored_embedding_array)[0][0]
            
            if similarity >= threshold:
                return face_key
                
        return None

def get_face_similarity(face_embedding: str, threshold: float = 0.6) -> list:
    """Get all faces with their similarity scores above threshold"""
    import json
    import numpy as np
    from sklearn.metrics.pairwise import cosine_similarity
    
    with closing(sqlite3.connect(DB_NAME)) as conn:
        cur = conn.execute('SELECT face_key, face_embedding FROM face_embeddings')
        rows = cur.fetchall()
        
        if not rows:
            return []
            
        # Convert input embedding to numpy array
        input_embedding = np.array(json.loads(face_embedding)).reshape(1, -1)
        
        matches = []
        for face_key, stored_embedding in rows:
            stored_embedding_array = np.array(json.loads(stored_embedding)).reshape(1, -1)
            similarity = cosine_similarity(input_embedding, stored_embedding_array)[0][0]
            
            if similarity >= threshold:
                matches.append({"face_key": face_key, "similarity": float(similarity)})
        
        # Sort by similarity (highest first)
        matches.sort(key=lambda x: x["similarity"], reverse=True)
        return matches

# Initialize the database on import
init_db() 