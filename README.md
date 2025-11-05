# NMDPRA DOCSTREAM II BACKEND

## Table of Content

- [[#Table of Content]]
- [[#Getting Started]]
- [[#Starting the dev server]]

## Prerequisites
1. Have Python installed
## Getting Started
1. Setup virtual environment in the root folder:
   ```
   python -m venv <env_name>
   ```
2. Start the virtual environment
```
<env_name>\Scripts\activate
```
3. Change the directory to e.g
```
cd <root_folder>/backend/
```
4. Install dependencies
```
pip install -r requirements.txt
```

## Starting the dev server
1. Change the directory to e.g
```
cd <root_folder>/backend/
```
**Note:** Make sure the directory contains the `manage.py` file.
2. Start the dev server
```
python manage.py runserver
```

**The development server will start at http://127.0.0.1:8000/**
**The api endpoints are available at http://127.0.0.1:8000/api/v1/**

You can visit  `http://127.0.0.1:8000/api/v1/` in the browser to view the api playgroud


# DocStream

