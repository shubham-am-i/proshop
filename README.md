# Proshop


> eCommerce platform built with the MERN stack & Redux.
![2022-11-27 (2)](https://user-images.githubusercontent.com/88419331/204145936-0b1a6c11-4ec8-4323-9223-5e2f53c8b0ef.png)


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
