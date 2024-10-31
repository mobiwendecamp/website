
## About Mobiwende.camp

Mobiwende.camp is seperated in to two seperated Projects, Backend and Frontend. They are deployed separately.

### Backend

#### Stack
- PHP 8.3
- [Laravel 11](https://laravel.com/)
- SQLite

#### Developing
We use Docker with [Sail](https://laravel.com/docs/11.x/sail#main-content) for local development.

##### Step 1
Clone Repo
go into backend folder
```bash
cd backend
```

##### Step 2
Run composer install 

with Docker:
```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs
```
with local installed Composer:
```bash
composer install
```


##### Step 3
copy `.env.example` to `.env`

```bash
cp .env.exmple .env
```

##### Step 4
Start Docker Image with Sail
```bash
./vendor/bin/sail up
```
An URL should be shown in the Console. The Port can be changed via the `.env` with the key `APP_PORT`

> Tipp:
> You can create an alias for sail
> ```bash
> alias sail='sh $([ -f sail ] && echo sail || echo 
> vendor/bin/sail)'
> ```

##### Step 5

Create an Application Key
```bash
./vendor/bin/sail artisan key:generate
```

##### Step 6

Create database
```
touch database/database.sqlite
```

##### Step 7

Execute migrations
```
./vendor/bin/sail artisan migrate
```

Done!


### Frontend

#### Developing

Go into Frontend folder
```bash
cd frontend
```
Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

#### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
