# Встановлюємо Node.js
FROM node:22-alpine

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо файли проєкту
COPY package*.json ./
RUN npm install

COPY . .

# Створюємо продакшн-збірку
RUN npm run build

# Виставляємо порт
EXPOSE 3000

# Запускаємо додаток
CMD ["npm", "start"]
