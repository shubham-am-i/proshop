# techshop
https://ecomm-proshop-app.herokuapp.com/

> eCommerce platform built with the MERN stack & Redux.
![proshop](https://user-images.githubusercontent.com/88419331/180167839-68a7a1c3-6e3b-491e-85d5-4a3f6d8158e1.png)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev
# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import
# Destroy data
npm run data:destroy
```

```
Sample User Logins
admin@example.com (Admin)
123456
user@gmail.com (Customer)
123456
akshay@gmail.com (Customer)
123456
```

![proshop2](https://user-images.githubusercontent.com/88419331/180167861-92906339-5176-4d91-ac81-feb307e3256d.png)
