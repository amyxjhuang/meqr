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
                    face_key TEXT UNIQUE NOT NULL,
                    face_embedding TEXT NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            ''')

def insert_face_embedding(face_key: str, face_embedding: str):
    with closing(sqlite3.connect(DB_NAME)) as conn:
        with conn:
            conn.execute(
                'INSERT INTO face_embeddings (face_key, face_embedding) VALUES (?, ?)',
                (face_key, face_embedding)
            )

def get_face_embedding_by_key(face_key: str) -> str | None:
    with closing(sqlite3.connect(DB_NAME)) as conn:
        cur = conn.execute(
            'SELECT face_embedding FROM face_embeddings WHERE face_key = ?',
            (face_key,)
        )
        row = cur.fetchone()
        return row[0] if row else None

def get_all_face_keys() -> list:
    with closing(sqlite3.connect(DB_NAME)) as conn:
        cur = conn.execute('SELECT face_key FROM face_embeddings')
        return [row[0] for row in cur.fetchall()]

# Initialize the database on import
init_db() 