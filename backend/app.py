# app.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Autorise toutes les origines
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Bienvenue chez ShopNow !"}

@app.get("/products")
def get_products():
    return [
        {"id": 1, "name": "Produit A", "price": 10.5},
        {"id": 2, "name": "Produit B", "price": 15.0},
        {"id": 3, "name": "Produit C", "price": 7.25}
    ]
