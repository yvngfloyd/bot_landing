# Biz Bot Landing

Простой лендинг под GitHub + Railway

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Что поменять перед деплоем

В файле `src/App.jsx` замени ссылки:
- `https://t.me/tgbotsetup`
- `https://wa.me/79500000000`

## Деплой на Railway

1. Загрузи проект в GitHub
2. В Railway создай новый проект
3. Выбери Deploy from GitHub Repo
4. Подключи репозиторий
5. Railway сам увидит Vite-проект и соберёт его
6. Если попросит команду:
   - Build Command: `npm run build`
   - Start Command: `npm run preview`
