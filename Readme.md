# README.md

## JavaScript Functions and API Tests

This repository contains the implementation and testing of basic JavaScript functions, along with some simple API endpoint tests.

### Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [Basic JavaScript Functions](#basic-javascript-functions)
3. [API Tests](#api-tests)
   - [Simple API Tests](#simple-api-tests)
   - [Item API Tests](#item-api-tests)
   - [Product API Tests](#product-api-tests)
   - [User API Tests](#user-api-tests)

---

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/FarooQ-2113/nodejs_RESTFull_api_practise.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run tests:
    ```bash
    npm test0
    ```
    ```bash
    npm test1
    ```
    ```bash
    npm test2
    ```
    ```bash
    npm test3
    ```
    ```bash
    npm test4
    ```


---

# Test 0: Basic JavaScript Functions

This section describes the basic JavaScript functions being tested.

### Data Types

**Test Description:**
- Verifies that the function `getDataTypes` returns the correct data types for number, string, array, and object.

### Test 1: Sum Using For Loop

**Test Description:**
- Tests the `sumUsingForLoop` function to ensure it correctly sums numbers from 1 to a given number using a for loop.

### Test 2: Sum Using While Loop

**Test Description:**
- Tests the `sumUsingWhileLoop` function to ensure it correctly sums numbers from 1 to a given number using a while loop.

### Test 3: Positive Number Check

**Test Description:**
- Verifies that the function `isPositive` correctly identifies if a number is positive.

### Test 4: Even or Odd Check

**Test Description:**
- Tests the `isEven` function to determine if a number is even or odd.

### Test 5: Substring Check

**Test Description:**
- Verifies that the function `containsSubstring` correctly identifies if a string contains a specific substring.


## JavaScript Functions and API Tests

This repository contains the implementation and testing of basic JavaScript functions, along with some simple API endpoint tests.

### Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [Basic JavaScript Functions](#basic-javascript-functions)
3. [API Tests](#api-tests)
    - [Simple API Tests](#simple-api-tests)
    - [Item API Tests](#item-api-tests)
    - [Product API Tests](#product-api-tests)
    - [User API Tests](#user-api-tests)

---

## Setup Instructions

1. Clone the repository:
     ```bash
     git clone https://github.com/FarooQ-2113/nodejs_RESTFull_api_practise.git
     ```

2. Install dependencies:
     ```bash
     npm install
     ```

3. Run tests:
     ```bash
     npm test0
     ```
     ```bash
     npm test1
     ```
     ```bash
     npm test2
     ```
     ```bash
     npm test3
     ```
     ```bash
     npm test4
     ```


---

# Test 0: Basic JavaScript Functions

This section describes the basic JavaScript functions being tested.

### Data Types

**Test Description:**
- Verifies that the function `getDataTypes` returns the correct data types for number, string, array, and object.

### Test 1: Sum Using For Loop

**Test Description:**
- Tests the `sumUsingForLoop` function to ensure it correctly sums numbers from 1 to a given number using a for loop.

### Test 2: Sum Using While Loop

**Test Description:**
- Tests the `sumUsingWhileLoop` function to ensure it correctly sums numbers from 1 to a given number using a while loop.

### Test 3: Positive Number Check

**Test Description:**
- Verifies that the function `isPositive` correctly identifies if a number is positive.

### Test 4: Even or Odd Check

**Test Description:**
- Tests the `isEven` function to determine if a number is even or odd.

### Test 5: Substring Check

**Test Description:**
- Verifies that the function `containsSubstring` correctly identifies if a string contains a specific substring.
## Output:
![test0.png](/output_images/test0.png)
---

# Test 1 to 4: API Tests

This section describes the API tests for various endpoints.

### Simple API Tests

**Test Descriptions:**
- **GET /api/simpleApi**: Verifies the GET request returns a status 200 and a response message.
- **POST /api/simpleApi**: Ensures the POST request returns a status 200 and a response message.
- **PUT /api/simpleApi**: Confirms the PUT request returns a status 200 and a response message.
- **DELETE /api/simpleApi**: Ensures the DELETE request returns a status 200 and a response message.

## Output:

![test1.png](/output_images/test1.png)


### Item API Tests

**Test Descriptions:**
- **POST /api/items/create**: Tests creating an item and checks the response status and content.
- **GET /api/items/getAll**: Verifies retrieval of all items and checks the response status and content.
- **GET /api/items/getById/:id**: Ensures retrieval of a specific item by ID and checks the response status and content.
- **PUT /api/items/updateById/:id**: Tests updating an item and checks the response status and content.
- **DELETE /api/items/deleteById/:id**: Confirms deletion of an item and checks the response status and content.

## Output:

![test2.png](/output_images/test2.png)

### Product API Tests

**Test Descriptions:**
- **POST /api/products/create**: Tests creating a product and checks the response status and content.
- **GET /api/products/getAll**: Verifies retrieval of all products and checks the response status and content.
- **GET /api/products/getById/:id**: Ensures retrieval of a specific product by ID and checks the response status and content.
- **PUT /api/products/updateById/:id**: Tests updating a product and checks the response status and content.
- **DELETE /api/products/deleteById/:id**: Confirms deletion of a product and checks the response status and content.

## Output:

![test3.png](/output_images/test3.png)

### User API Tests

**Test Descriptions:**
- **POST /api/users/signup**: Verifies user signup and checks the response status and content.
- **POST /api/users/login**: Ensures user login, token generation, and checks the response status and content.
- **GET /api/users/protected**: Tests access to protected content with and without a valid token and checks the response status and content.

## Output:

![test4.png](/output_images/test4.png)

---
