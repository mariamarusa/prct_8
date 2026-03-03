from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from models import session, Product, Category

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/products/all")
def get_products():
    return session.query(Product).all()

@app.get("/products/get/{id}")
def get_product(id: int):
    product = session.query(Product).filter(Product.id == id).first()
    return product if product else {"error": "Не найден"}

@app.get("/categories")
def get_categories():
    return session.query(Category).all()

@app.get("/category/{cat_id}")
def get_by_category(cat_id: int):
    return session.query(Product).filter(Product.category_id == cat_id).all()

print("Сервер запущен! http://localhost:8000/static/index.html")