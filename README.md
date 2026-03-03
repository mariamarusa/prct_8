# Практическая работа №8: Каталог товаров

---

## О проекте

Веб-приложение "Каталог товаров" с возможностью просмотра товаров и фильтрации по категориям.

**Технологий:**
- Python + FastAPI (backend)
- SQLite + SQLAlchemy (база данных)
- HTML, CSS, JavaScript (frontend)

---

## Функционал

- ✅ Просмотр всех товаров
- ✅ Фильтрация по категориям
- ✅ Детальная информация о товаре
- ✅ Адаптивный дизайн

---

## 🛠️ Установка и запуск

### 1. Клонировать репозиторий
```bash
git clone https://github.com/mariamarusa/prct_8.git
cd prct_8
2. Создать виртуальное окружение
bash
python -m venv venv
venv\Scripts\activate  # для Windows
3. Установить зависимости
bash
pip install -r requirements.txt
4. Создать базу данных
bash
python createdb.py
5. Запустить сервер
bash
python -m uvicorn main:app --reload
6. Открыть в браузере
text
http://localhost:8000/static/index.html
📁 Структура проекта
text
prct_8/
│
├── main.py              # серверная часть
├── models.py            # модели базы данных
├── createdb.py          # создание и заполнение БД
├── requirements.txt     # зависимости
├── shop.db              # база данных SQLite
│
└── static/              # фронтенд
    ├── index.html       # главная страница
    ├── style.css        # стили
    └── script.js        # логика на JavaScript
📸 Скриншоты работы
Главная страница
[вставить скриншот главной страницы]

Фильтрация по категориям
[вставить скриншот с фильтром]

Детальная информация о товаре
[вставить скриншот модального окна]

🎯 Вывод
В ходе работы было создано полноценное веб-приложение с использованием FastAPI и SQLite. Все требования выполнены:

✅ Реализованы маршруты /products/all и /products/get/{id}

✅ Созданы связанные таблицы categories и products

✅ Разработан интерфейс на HTML/CSS/JS

✅ Проект загружен на GitHub

