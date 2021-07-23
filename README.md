# React (frontend) + Strapi (backend)

- YouTube: https://www.youtube.com/watch?v=4Ntd414raYc&list=PL4cUxeGkcC9h6OY8_8Oq6JerWqsKdAPxn
- Github: https://github.com/iamshaunjp/Strapi-Crash-Course

### Install Strapi
```
npx create-strapi-app backend
```

http://localhost:1337/admin/
admin password: Admin123

```
cd backend

npm develop | npm run develop

"scripts": {
  "develop": "strapi develop",
  "start": "strapi start",
  "build": "strapi build",
  "strapi": "strapi"
}

```

### Install React

```
npx create-react-app frontend

cd frontend
npm start | npm run start

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

```
npm install react-router-dom
```
