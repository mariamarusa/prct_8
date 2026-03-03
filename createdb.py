from models import session, Category, Product

if session.query(Product).count() == 0:
    print("Добавляем товары...")
    
    cat1 = Category(name="Электроника")
    cat2 = Category(name="Одежда")
    cat3 = Category(name="Книги")
    session.add_all([cat1, cat2, cat3])
    session.commit()
    
    products = [
        Product(name="iPhone 15", price=89990, category_id=1),
        Product(name="MacBook", price=149990, category_id=1),
        Product(name="Наушники", price=12990, category_id=1),
        Product(name="Футболка", price=1990, category_id=2),
        Product(name="Джинсы", price=3990, category_id=2),
        Product(name="Python книга", price=1990, category_id=3),
    ]
    
    session.add_all(products)
    session.commit()
    print(f"Добавлено {len(products)} товаров")
else:
    print("Товары уже есть")
print("Готово!")