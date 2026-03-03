# Практическая работа №8: Каталог товаров

## Цель работы

Создать веб-приложение "Каталог товаров" с использованием:
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: FastAPI (Python)
- **База данных**: SQLite3 с связанными таблицами

## Используемые технологии

| Технология | Назначение |
|------------|------------|
| **FastAPI** | Серверная часть |
| **SQLite** | База данных |
| **HTML/CSS/JS** | Интерфейс |

catalog_project/
│
├── main.py                 # сервер
├── models.py               # модели БД
├── createdb.py             # миграции
├── requirements.txt        # зависимости
├── shop.db                 # база данных
│
└── static/                 # фронтенд
    ├── index.html
    ├── style.css
    └── script.js

    
### 1. Подготовка
```bash
mkdir catalog_project
cd catalog_project
python -m venv venv
venv\Scripts\activate
```

### 2. Установка
```bash
pip install fastapi uvicorn sqlalchemy
```
<img width="771" height="542" alt="Снимок экрана 2026-03-03 224934" src="https://github.com/user-attachments/assets/e23a9fcb-c20f-441a-8016-5cf8bde107e2" />


### 3.Создание БД
```bash
PS C:\Users\user\catalog_project> python createdb.py
```
<img width="614" height="113" alt="image" src="https://github.com/user-attachments/assets/17a0be0a-4fbc-4239-9f2e-e1c417c80156" />


### 4.Запуск 
```bash
PS C:\Users\user\catalog_project> python -m uvicorn main:app --reload
```
<img width="888" height="537" alt="image" src="https://github.com/user-attachments/assets/cf2fcdb2-01e9-4d3d-8949-9761ba08fb5a" />

### 5.Открыть сайт
```text
http://localhost:8000/static/index.html
```





