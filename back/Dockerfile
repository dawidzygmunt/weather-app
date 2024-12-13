# Używamy obrazu Node.js
FROM node:20-alpine

# Ustawiamy katalog roboczy
WORKDIR /app

# Kopiujemy package.json i package-lock.json do katalogu roboczego
COPY package*.json ./

# Instalujemy zależności
RUN npm install

# Kopiujemy wszystkie pliki aplikacji do kontenera
COPY . .

# Kompilujemy aplikację (jeśli używasz TypeScript)
RUN npm run build

# Eksponujemy port, na którym będzie działać aplikacja
EXPOSE 3000

# Uruchamiamy aplikację
CMD ["npx", "prisma", "generate"]
CMD ["npx", "prisma", "migrate", "dev"]
CMD ["npm", "run", "start:prod"]
