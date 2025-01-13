# Dockerfile
# Вибір офіційного образу Node.js
FROM node:20-alpine

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо файли package.json і package-lock.json
COPY package*.json ./

# Встановлюємо залежності (лише продакшн-залежності)
RUN npm install --production

# Копіюємо всі файли проекту (включаючи .next)
COPY . .

# Встановлюємо порт для додатку
EXPOSE 3000

# Запускаємо Next.js у production-режимі
CMD ["npm", "start"]




## Вказуємо базовий образ
#FROM node:20-alpine AS builder
#
## Встановлюємо робочу директорію
#WORKDIR /app
#
## Копіюємо package.json та package-lock.json для встановлення залежностей
#COPY package*.json ./
#
## Встановлюємо залежності
#RUN npm install
#
## Копіюємо всі файли проєкту
#COPY . .
#
## Виконуємо збірку Next.js
#RUN npm run build
#
## Етап запуску
#FROM node:20-alpine AS runner
#
## Встановлюємо робочу директорію
#WORKDIR /app
#
## Копіюємо файли з етапу збірки
#COPY --from=builder /app/package*.json ./
#COPY --from=builder /app/node_modules ./node_modules
#COPY --from=builder /app/.next ./.next
#COPY --from=builder /app/public ./public
#
## Встановлюємо змінну середовища
#ENV NODE_ENV=production
#
## Відкриваємо порт 3000
#EXPOSE 3000
#
## Команда запуску
#CMD ["npm", "start"]







## Dockerfile
## Вибір офіційного образу Node.js
#FROM node:20-alpine
#
## Встановлення робочої директорії
#WORKDIR /app
#
## Копіюємо package.json та package-lock.json
#COPY package*.json ./
#
## Встановлюємо залежності
#RUN npm install
#
## Копіюємо весь проєкт
#COPY . .
#
## Створення Next.js додатка
#RUN npm run build
#
## Відкриття порту 3000
#EXPOSE 3000
#
## Команда запуску
#CMD ["npm", "start"]