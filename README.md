## Personality test

The JS files are pre-compiled to avoid installing node_modules and compiling locally.
To compile the JS and CSS assets, run `npm install` and `npm run dev`.

### Requirements
- The application requires at least PHP 8.1 to run locally. 8.0 should work but not supported.

### Tech Stack
- Laravel 8
- Inertia JS
- React
- Tailwind CSS
- Pest PHP for unit testing

### Install the app

- `cp .env.example .env`
- `composer install`
- `php artisan key:generate`
- `touch database/database.sqlite`
- `php artisan migrate --seed`

### Running the app in development/testing
- `php artisan serve`
- Visit http://localhost:8000


### Unit testing

The application uses [Pest PHP](https://pestphp.com) for Unit Testing.

Seeders are automatically run before each test that interacts with data.
The database is refreshed before each test.

Tests are located in `tests/Unit`.

To run the tests, type the following command into the terminal:

`php artisan test`

Example response:
```
   PASS  Tests\Unit\EndpointTest
  ✓ results are returned by the controller
  ✓ visiting the results page without post method returns a redirect to quiz

   PASS  Tests\Unit\OutcomeTest
  ✓ outcome can be introvert
  ✓ outcome can be extrovert
  ✓ ties are set to last response result

  Tests:  5 passed
  Time:   0.17s
```
