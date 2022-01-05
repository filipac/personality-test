## Personality test

The JS files are pre-compiled to avoid installing node_modules and compiling locally.
To compile the JS and CSS assets, run `npm install` and `npm run dev`.

### Requirements
- The application requires at least PHP 8.1 to run locally. 8.0 should work but not supported.

### Install the app

- `cp .env.example .env`
- `composer install`
- `php artisan key:generate`
- `touch database/database.sqlite`
- `php artisan migrate --seed`

### Running the app in development/testing
- `php artisan serve`
- Visit http://localhost:8000
