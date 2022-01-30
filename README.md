# API-Security

### Start Project

NPM install dependencies
```sh
npm ci
```

Start Docker
```sh
docker-compose up -d
```

Start Server
```sh
npm start
```

### `GET` Route that lists users

```sh
GET http://localhost:3000/User/<token>
```

### `POST` Route to login

```sh
http://localhost:3000/Auth/<username>/<password>
```