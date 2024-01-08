# Order Management System

## Functional Requirement

- Role Based Access Control ( Customer, Admin, Suppport)
- Product Management
- Inventory Adjustmeent
- Order Management
- Order Tracking (Real Time Order Status Update and Real Time Inventory Adjustment)
- User Managment

## Non Functional Requirement

- Database Performance (Indexing, Sharding)
- Consider on security measure and scability
- Use Socket IO for real time
- Codes need to be clean and well-documented
- Documentation on database design and optimization strategies
- README.md file for set up instruction
- Caching (Redis)

## System Architecture

![SystemArchitecture.png](https://drive.google.com/uc?export=download&id=1eqAx1eZA8YAAx0GOCoZmfadigOPVAuIy)

## ERD

![erd.png](https://drive.google.com/uc?export=download&id=1AiUY9YeBCL0I5AEfch-CNBqoqKPX186Q)

## Gitflow

![Gitflow.png](https://drive.google.com/uc?export=download&id=12lSiOJs3Tj2wDlOa_73iaSXqKkT2c853)

### Backend Setup Guide

- Pre-requiristies
  1. Node Js
  2. Npm || Yarn
  3. MongoDb
  4. Redis
- Installation steps

  1. Clone the repo
  2. Go to the backend directory
  3. Install node modules
  4. Start the mongodb and Redis
  5. Create a new .env files and add the following fields

     ```
     MONGO_URI = mongodb://localhost:27017/order-management-system
     ACCESS_TOKEN_SECRET_KEY = testingaccesstoken
     REFRESH_TOKEN_SECRET_KEY = testingrefreshtoken
     REDIS_HOST = 127.0.0.1
     REDIS_PORT = 6379
     ```

  6. Run the server (yarn start)

### Performance Control

- Use **Redis** as a cache system for data fetching performance
- Use Node Js **Cluster module** to run multiple instances of Node.js that can distribute workloads among their application threads
- Use **compression** to decreases the downloadable amount of data that's served to users
- **Database indexing** for the efficient execution of queries in MongoDB.
- For **connection pooling**, I use mongoose as mongoose automatically manages a connection pool for each connection you create.The default pool size is 100 connections.

### Security Control

- Use **rate limiting** to puts a cap on how quickly and frequently a user can interact with a server or resource, preventing overload and abuse. (100 requests within 10 mins)
- Use **helmet** to secure Express apps by setting HTTP response headers.
- Use **auth rate limiting** to prevent abuse, protect against brute-force attacks, and ensure the security and availability of your authentication system. (20 requests within 15 mins)
- Use **password encryption** to secure user password
- **Limit the payload size** for preventing resource exhaustion attacks, maintaining efficient resource utilization, and optimizing network performance. It also contributes to a better user experience and helps mitigate security risks associated with buffer overflows and other vulnerabilities.
- **Schema validation** to maintain data consistency by verifying that it adheres to a defined structure, improving reliability and reducing the risk of errors in applications.

### Usage of Socket Io

- **For Product Stock Tracking**
  - Track the changes of product stock quantity using mongoose findOneAndUpdate middleware and emit product stock quantity update event to all the sockets connected.
- **For Order Status Tracking**
  - Normal users join socket room with their user id. Supports and admins join stuff room.
  - Track the changes of order status using mongoose findOneAndUpdate middleware and emit updated order status event to order related user room and stuff room.

### RBAC

- Customer
  - Can signup a new customer account and login
  - Can update their own profile and password
  - Can see all the products and their details
  - Can create order and see all the related orders and details
- Support
  - Can Login
  - Can update their own profile and password
  - Can do CRUD operations for inventory adjustments
  - Can do CRUD operations for orders
  - Can see all the products and their details
- Admin
  - Can Login
  - Can create, read and delete other user accounts
  - Can update their own profile and password
  - Can update other users’ profile and password
  - Can do CRUD operations for inventory adjustments
  - Can do CRUD operations for orders
  - Can do CRUD operations for products
