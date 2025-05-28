import sqlite3
from contextlib import closing

DB_NAME = 'meqr.db'

# Automatically initialize the database and table if not present
def init_db():
    with closing(sqlite3.connect(DB_NAME)) as conn:
        with conn:
            conn.execute('''
                CREATE TABLE IF NOT EXISTS url_map (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_key TEXT UNIQUE NOT NULL,
                    long_url TEXT NOT NULL
                )
            ''')

def insert_url_mapping(user_key: str, long_url: str):
    with closing(sqlite3.connect(DB_NAME)) as conn:
        with conn:
            conn.execute(
                'INSERT INTO url_map (user_key, long_url) VALUES (?, ?)',
                (user_key, long_url)
            )

def get_long_url(user_key: str) -> str | None:
    with closing(sqlite3.connect(DB_NAME)) as conn:
        cur = conn.execute(
            'SELECT long_url FROM url_map WHERE user_key = ?',
            (user_key,)
        )
        row = cur.fetchone()
        return row[0] if row else None

# Initialize the database on import
init_db() 