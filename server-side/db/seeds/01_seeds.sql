INSERT INTO users (first_name, last_name, email, password, phone_number)
VALUES ('Harry', 'Potter', 'harry12@abc.com', '$2b$10$v91MD38dkLuCqMp028xlbu9SwcShJ9n8rAd0rl/4t.Q4m1Ewm79Kq', '9876543210'),
('Hermione', 'Granger', 'hermione1@abc.com', '$2b$10$v91MD38dkLuCqMp028xlbu9SwcShJ9n8rAd0rl/4t.Q4m1Ewm79Kq', '9976543210'),
('Ronald', 'Weasley', 'weasley2@abc.com', '$2b$10$v91MD38dkLuCqMp028xlbu9SwcShJ9n8rAd0rl/4t.Q4m1Ewm79Kq', '9886543210'),
('John', 'Doe', 'johndoe@abc.com', '$2b$10$v91MD38dkLuCqMp028xlbu9SwcShJ9n8rAd0rl/4t.Q4m1Ewm79Kq', '9877543210'),
('Jane', 'Doe', 'janedoe@abc.com', '$2b$10$v91MD38dkLuCqMp028xlbu9SwcShJ9n8rAd0rl/4t.Q4m1Ewm79Kq', '9876643210');

INSERT INTO addresses (address_line1, address_line2, city, postal_code)
VALUES ('Apt 008', '12 Henday Street', 'Edmonton', 'a7y3i9'),
('213', 'Anthony Street', 'Vancouver', 'v3c6r1'),
('1712', 'Rathburn Road', 'Mississauga', 'l5b0g9'),
('23', 'Bunny Dr', 'London', 'l5h6n8'),
('812', 'Harvey Street', 'Toronto', 't4f1k9');

INSERT INTO user_addresses (user_id, address_id)
VALUES(1, 1), (1, 5), (2, 5), (4, 4);

INSERT INTO restaurants (name, address_line1, address_line2, city, postal_code)
VALUES ('Leela''s Roti', '23412','Davidson Road W', 'Edmonton', 'a7y3i8'),
('Savoy', '418','Hillcreek Road', 'Toronto', 't4f6k9'),
('Domino''s', '9812','Jasper Ave', 'Mississauga', 'l5b0g3'),
('Royal Paan', '2232','Anton Street', 'Vancouver', 'v3u6r1'),
('Earl''s', '212','Buckley Dr', 'St. John''s', 'l4h2v5');


INSERT INTO dishes (name, description, price, restaurant_id)
VALUES ('veg. chowmein', 'it is a stir-fried dish consisting of noodles, onions and other veggies, soy sauce, aromatics and spices', 15, 5),
('chicken noodles', 'stir-fried noodles with onions and chicken, soy sauce, aromatics and spices', 18, 5),
('french fries', 'crispy fried potato slices with sprinkled salt, herbs and pepper', 5, 1),
('french fries', 'fried slices of potatoes', 6.5, 4),
('french fries', 'fried potato slices with salt', 8, 5);

INSERT INTO carts (id, dish_id, quantity)
VALUES ('uuid1', 1, 1),
('uuid1', 5, 1),
('uuid2', 2, 1);

INSERT INTO couriers (first_name, last_name, email, password, phone_number)
VALUES ('Alex', 'Davidson', 'alex@abc.com', 'password', '8976357835'),
('Jenny', 'Gump', 'jenny12@abc.com', 'password', '8570537835'),
('Alex', 'Davidson', 'alex@abc.com', 'password', '7976357999');

INSERT INTO orders (id, restaurant_id, dish_id, dish_quantity, price, courier_id) 
VALUES ('uuid01', 5, 1, 1, 15, 1),
('uuid01', 5, 5, 1, 8, 1),
('uuid02', 4, 4, 3, 19.5, 2);

-- `\i server-side/db/migrations/schema.sql`
-- \i server-side/db/seeds/01_seeds.sql