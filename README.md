# Kurawa League

Application to record "Remi" games.

## Prerequisites

- Node.js >= 18.17.0
- PostgreSQL >= 15 or Docker

## Development

#### 1. Set env

```
cp env.sample .env
```

#### 2. Install depedencies

```
yarn
```

#### 3. Setup database

> [!NOTE] if you have PostgreSQL on your local machine, you can **skip** this
> step.

```
docker-compose -f docker-compose.yaml up -d
```

create database from your docker.

```
$ docker ps
$ docker exec -it <container_id> bash
# createdb -U postgres pipeline
```

Also make sure `/var/lib/postgresql/data/pg_hba.conf` allowing network
connection. Add host to your file:

```
...
host all all all scram-sha-256
...
```

#### 4. Migrate database

```
npx prisma migrate dev
```

#### 5. Run development

```
yarn dev
```

## Links

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)

## Attributions

- [Playing cards icon created by bearicons - Flaticon](https://www.flaticon.com/free-icons/playing-cards)
- [Playing cards photo created by Anna Shvets - Pexels](https://www.pexels.com/id-id/foto/bertaruh-kasino-keberuntungan-permainan-6664193)
