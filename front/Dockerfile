# Wybieramy oficjalny obraz Node.js
FROM node:20-slim

# Ustawiamy katalog roboczy
WORKDIR /app

# Kopiujemy plik package.json oraz package-lock.json
COPY package*.json ./

# Instalujemy zależności
RUN npm install

# Kopiujemy wszystkie pliki aplikacji do kontenera
COPY . .

# Budujemy aplikację w trybie produkcyjnym
RUN npm run build

# Instalujemy serwer statyczny do serwowania plików
RUN npm install -g serve

# Ustawiamy port, na którym będzie działał serwer
EXPOSE 3000

# Uruchamiamy serwer produkcyjny
CMD ["serve", "-s", "dist"]
