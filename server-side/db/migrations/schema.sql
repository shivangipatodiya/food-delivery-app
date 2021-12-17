DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS addresses CASCADE;
DROP TABLE IF EXISTS user_addresses CASCADE;
DROP TABLE IF EXISTS restaurants CASCADE;
DROP TABLE IF EXISTS dishes CASCADE;
DROP TABLE IF EXISTS carts CASCADE;
DROP TABLE IF EXISTS deliveries CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS delivery_schedules CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number CHAR(10) NOT NULL,
  google_id VARCHAR(255),
  facebook_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp
);

CREATE TABLE addresses (
  id SERIAL PRIMARY KEY NOT NULL,
  address_line1 VARCHAR(255) NOT NULL,
  address_line2 VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  postal_code VARCHAR(6) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp
);

CREATE TABLE user_addresses (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  address_id INTEGER REFERENCES addresses(id) ON DELETE CASCADE
);

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  address_line1 VARCHAR(255) NOT NULL,
  address_line2 VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
  postal_code VARCHAR(6) NOT NULL
);

CREATE TABLE dishes (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(25) NOT NULL,
  description VARCHAR(400) NOT NULL,
  price INTEGER NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE
);

CREATE TABLE carts (
  id VARCHAR(255) NOT NULL,
  dish_id INTEGER REFERENCES dishes(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL
);

CREATE TABLE deliveries (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number CHAR(10) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp--,
  --delivery_schedule_id INTEGER REFERENCES delivery_schedules(id) ON DELETE CASCADE
);

CREATE TABLE orders (
  id VARCHAR(255) NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  dish_id INTEGER REFERENCES dishes(id) ON DELETE CASCADE,
  dish_quantity INTEGER NOT NULL,
  price INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp, 
  delivery_id INTEGER REFERENCES deliveries(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE delivery_schedules (
  id SERIAL PRIMARY KEY NOT NULL
  --start-time, end-time, delivery_id
)
