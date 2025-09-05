# sesi7_anandayudhistira

![API Test Icon](https://img.icons8.com/fluency/48/api.png)
![Node.js](https://img.icons8.com/color/48/nodejs.png)
![Mocha](https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-mocha-a-feature-rich-javascript-test-framework-for-nodejs-logo-color-tal-revivo.png)
![Chai](https://img.icons8.com/ios-filled/48/tea.png)

---

## Overview

**sesi7_anandayudhistira** is a Node.js project for automated API testing. It uses Mocha and Chai to validate endpoints from the [reqres.in](https://reqres.in) REST API, demonstrating best practices for HTTP method testing.

## Project Description

This repository provides sample scripts for testing RESTful APIs with JavaScript. Each script targets a specific HTTP method (GET, POST, PATCH, DELETE) and validates the response status and body. The project is ideal for learning API automation, practicing with Mocha/Chai, or serving as a template for similar testing needs.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/sesi7_anandayudhistira.git
   cd sesi7_anandayudhistira-main
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Usage

Run individual test files using Mocha:

```sh
npx mocha reques_GET.js
npx mocha reques_POST.JS
npx mocha reques_PATCH.JS
npx mocha reques_DELETE.JS
```

## System Output Language

All test output and error messages are in **English**.

## Example Output

```
  GET /api/users?page=2
    ✓ should return status 200 and a list of users

  POST /api/users/10
    ✓ should create a new user and return status 201

  PATCH /api/users/10
    ✓ should update the user and return status 200

  DELETE /api/users/10
    ✓ should delete the user and return status 204

  4 passing (1s)
```

## License

ISC
