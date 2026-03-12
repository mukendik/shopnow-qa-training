# Dockerfile
FROM python:3.11-slim

# Définit le répertoire de travail dans le container
WORKDIR /app

# Copie le fichier des dépendances dans le container
COPY requirements.txt .

# Installe les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Copie tous les fichiers du projet dans le container
COPY . .

# Commande pour lancer l’application
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
