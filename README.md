# E-commerce App README

Author: Lujain AL-Jarrah

Version: 1.0.0

This is an e-commerce application built using Node.js, Express, and Sequelize.

## Description

This e-commerce web application enables users to browse a wide range of products, add them to their cart, and place orders. It offers functionalities for both administrators and customers. Administrators can add, edit, and delete products, while customers can view products, manage their cart, and place orders securely.

The application incorporates session management using `express-session` for user authentication and authorization. Additionally, it employs CSRF protection via `csurf` and integrates flash messaging through `connect-flash` for a smooth user experience.

## Prerequisites

- Node.js installed
- MySQL database set up
- Git clone of this repository

## Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:Lujain92/e-commerce-app.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up MySQL database:

    - Create a MySQL database named `node-complete`.
    - Modify `options` object in `app.js` to match your database configuration.

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Access the application in your web browser:

    ```
    http://localhost:3000/
    ```

## API Endpoints

### Admin Routes

- `GET /admin/add-product`: Add a new product
- `GET /admin/products`: Get all products
- `POST /admin/add-product`: Add a product
- `GET /admin/edit-product/:productId`: Edit a product
- `POST /admin/edit-product`: Update a product
- `POST /admin/delete-product`: Delete a product

### Authentication Routes

- `GET /login`: Display login form
- `GET /signup`: Display signup form
- `POST /login`: User login
- `POST /signup`: User signup
- `POST /logout`: User logout

### Shop Routes

- `GET /`: Homepage
- `GET /products`: Get all products
- `GET /products/:productId`: Get a specific product
- `GET /cart`: View cart
- `POST /cart`: Add item to cart
- `POST /cart-delete-item`: Remove item from cart
- `POST /create-order`: Create a new order
- `GET /orders`: Get all orders

## Session Management

- Sessions are managed using `express-session`.
- CSRF protection is implemented using `csurf`.
- Flash messages are handled via `connect-flash`.

## Database Models

- Product
- User
- Cart
- CartItem
- Order
- OrderItem
