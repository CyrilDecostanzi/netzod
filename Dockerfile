# Utiliser une version spécifique de Node correspondant à celle que tu utilises
FROM node:18.17

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers de configuration de l'application
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install --legacy-peer-deps

# Copier le reste des fichiers de l'application dans le conteneur
COPY . .

# Construire l'application pour la production
RUN npm run build

# Exposer le port sur lequel l'application s'exécutera
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]
