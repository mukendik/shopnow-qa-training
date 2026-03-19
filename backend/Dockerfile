# Dockerfile
# Utiliser Node.js 20 Alpine (léger)
FROM node:20-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances et installer
COPY package.json package-lock.json* ./
RUN npm install --production

# Copier le reste du code source
COPY . .

# Exposer le port que le backend utilisera
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]
