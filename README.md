# sesi7_anandayudhistira
# sesi7_anandayudhistira

This project contains automated API tests for [reqres.in](https://reqres.in) using Mocha and Chai.

## Project Structure

- `reques_GET.js` – Test for fetching user list (GET)
- `reques_POST.JS` – Test for creating a new user (POST)
- `reques_PATCH.JS` – Test for updating a user (PATCH)
- `reques_DELETE.JS` – Test for deleting a user (DELETE)
- `package.json` – Project dependencies and scripts

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```

## Running Tests

Run individual test files with Mocha:
```sh
npx mocha reques_GET.js
npx mocha reques_POST.JS
npx mocha reques_PATCH.JS
npx mocha reques_DELETE.JS
```

## API Endpoints Tested

- `GET /api/users?page=2` – List users
- `POST /api/users/10` – Create user
- `PATCH /api/users/10` – Update user
- `DELETE /api/users/10` – Delete user

## License

ISC
