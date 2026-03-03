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

 ##Структура
```text
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
```
    
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


##Скриншоты работы
###1. Главная страница каталога

<img width="1616" height="516" alt="image" src="https://github.com/user-attachments/assets/87028f59-3754-4be9-b589-6ef88040ed25" />

###2. Фильтрация

<img width="1529" height="332" alt="image" src="https://github.com/user-attachments/assets/b7e87c21-16a0-4989-a79e-f8117555ecb7" />

###3. Детальная информация о товаре 

<img width="521" height="262" alt="image" src="https://github.com/user-attachments/assets/f495eaba-8c8e-4fcb-a5ad-0b36178ad7bd" />

#Вывод

##В результате выполнения практической работы было создано веб-приложение "Каталог товаров", соответствующее всем поставленным требованиям:

✅ Разработан сервер на FastAPI с маршрутами /products/all и /products/get/{id}

<img width="1661" height="110" alt="image" src="https://github.com/user-attachments/assets/0010ce77-20e4-451b-b377-89652d4d4ee0" />

<img width="753" height="71" alt="image" src="https://github.com/user-attachments/assets/817654e7-ec66-4225-8e41-a25b8d2e8094" />


✅ Создана база данных SQLite3 с двумя связанными таблицами

✅ Реализованы миграции для создания и заполнения БД

✅ Разработан интерфейс на HTML, CSS и JavaScript

✅ Настроена документация Swagger UI

<img width="1837" height="832" alt="image" src="https://github.com/user-attachments/assets/6945f8b2-b50e-44ae-9c46-f666ad628fa4" />


Проект успешно запускается и работает локально. Код загружен на GitHub и доступен для проверки.





