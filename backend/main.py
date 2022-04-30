from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.database.azure_db import table_client
from dotenv import load_dotenv
import random
import os
load_dotenv()

app = FastAPI()

origins = [
   "http://localhost:3000",
   "https://westleft.github.io/fortuneStick/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

@app.post("/stick")
def read_root():
    num = str(random.randint(1, 4))
    try:
        entities = table_client.query_entities(query_filter=f"PartitionKey eq '{num}'")
        for entity in entities:
            return entity
    except:
        return {"??": "??"}