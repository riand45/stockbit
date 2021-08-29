# Stockbit Test application
System Design code using repository pattern, and database using mysql

## Getting Started

## Test 2
```sh
cd test2
```

```sh
npm install
```

```sh
add file .env
```

configuration
```sh
SERVER_PORT=3000

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=bibit-test
DB_USERNAME=root
DB_PASSWORD=

OMDB_API_BASE_URL=http://www.omdbapi.com
OMDB_KEY=faf7e5bb
```

Run application
```sh
nodemon exec
```

## Example Test 2
Endpoint API - All Data
```sh
http://localhost:3000/search?apikey=faf7e5bb&s=Batman&page=2
```

Endpoint API - Detail Data
```sh
http://localhost:3000/tt4853102/detail
```
