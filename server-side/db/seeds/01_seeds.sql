INSERT INTO
  users (
    first_name,
    last_name,
    email,
    password,
    phone_number
  )
VALUES
  (
    'Harry',
    'Potter',
    'harry12@abc.com',
    '$2b$10$v91MD38dkLuCqMp028xlbu9SwcShJ9n8rAd0rl/4t.Q4m1Ewm79Kq',
    '9876543210'
  ),
  (
    'Hermione',
    'Granger',
    'hermione1@abc.com',
    '$2b$10$v91MD38dkLuCqMp028xlbu9SwcShJ9n8rAd0rl/4t.Q4m1Ewm79Kq',
    '9976543210'
  ),
  (
    'Ronald',
    'Weasley',
    'weasley2@abc.com',
    '$2b$10$v91MD38dkLuCqMp028xlbu9SwcShJ9n8rAd0rl/4t.Q4m1Ewm79Kq',
    '9886543210'
  ),
  (
    'John',
    'Doe',
    'johndoe@abc.com',
    '$2b$10$v91MD38dkLuCqMp028xlbu9SwcShJ9n8rAd0rl/4t.Q4m1Ewm79Kq',
    '9877543210'
  ),
  (
    'Jane',
    'Doe',
    'janedoe@abc.com',
    '$2b$10$v91MD38dkLuCqMp028xlbu9SwcShJ9n8rAd0rl/4t.Q4m1Ewm79Kq',
    '9876643210'
  );

INSERT INTO
  addresses (
    address_line1,
    city,
    province,
    postal_code,
    latitude,
    longitude
  )
VALUES
  (
    '17143 69 Avenue NW',
    'Edmonton',
    'Alberta',
    't5t2w6',
    53.503500,
    113.617660
  ),
  (
    'Anthony Street',
    'Edmonton',
    'Alberta',
    'v3c6r1',
    67.343324,
    193.325433
  ),
  (
    'Rathburn Road',
    'Mississauga',
    'Ontario',
    'l5b0g9',
    55.43432,
    121.454657
  ),
  (
    'Bunny Dr',
    'London',
    'Ontario',
    'l5h6n8',
    87.54335,
    112.323122
  ),
  (
    'Harvey Street',
    'Toronto',
    'Ontario',
    't4f1k9',
    45.34232,
    132.43344
  );

INSERT INTO
  user_addresses (user_id, address_id)
VALUES
  (1, 1),
  (1, 5),
  (2, 5),
  (4, 4);

INSERT INTO
  restaurants (
    name,
    image_url,
    address_line1,
    address_line2,
    city,
    province,
    postal_code,
    latitude,
    longitude
  )
VALUES
  (
    'Leela''s Roti',
    'http://leelasroti.com/images/gl_8.jpg',
    '900',
    'Rathburn Rd W',
    'Mississauga',
    'Ontario',
    'L5C4L3',
    43.5790728,
    -79.660843
  ),
  (
    'Burrito Boyz',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9j2zMr8Is8rAvbFzZn6rT7HIxr2x8xForuw&usqp=CAU',
    '17',
    'Tannery St',
    'Mississauga',
    'Ontario',
    'L5M1V1',
    43.5812584,
    -79.7147008
  ),
  (
    'Rajdhani Indian Sweets and Restaurant',
    'https://d1ralsognjng37.cloudfront.net/da6f020a-695a-4bd7-a575-f9b0865e2178.jpeg',
    '811',
    'Bovaird Dr W Unit 19 -20',
    'Brampton',
    'Ontario',
    'L6X0T9',
    43.7059384,
    -79.788012
  ),
  (
    'Savoy',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKzH3CqkpNf2SmkYIs44iU0-PNx9MXy83fg&usqp=CAU',
    '418',
    '9261 34 Ave NW',
    'Edmonton',
    'Alberta',
    'T6E5T5',
    53.464920,
    -113.473860
  ),
  (
    'Domino '' s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxs6wBgyRz4Zshxjwob6FveZmkh_UPhjaBkg&usqp=CAU',
    '9812',
    '6821 177 St NW',
    'Edmonton',
    'Alberta',
    'T5T4K3',
    53.503380,
    -113.625430
  ),
  (
    'Royal Paan',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuLw3cG6qCfDuR-6RyGZU5012EaLL21Ldczw&usqp=CAU',
    '2232',
    '9189 25 Ave NW',
    'Edmonton',
    'Alberta',
    'T6N1N2',
    53.453720,
    -113.470863
  ),
  (
    'Earls Kitchen + Bar',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdS3jWFISOycMfpgV0wTdgHTTBUIX-4u-iQ&usqp=CAU',
    '212',
    'Buckley Dr',
    'St.John'' s',
    'Alberta',
    'T5T4J2',
    53.312443,
    -113.372351
  ),
  (
    'Earls Kitchen + Bar',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdS3jWFISOycMfpgV0wTdgHTTBUIX-4u-iQ&usqp=CAU',
    '8629',
    '112 St NW',
    'St.John'' s',
    'Alberta',
    'T6G1K8',
    53.31219,
    -113.31141
  ),
  (
    'The Old Spaghetti Factory',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5QVT3JbMLPFoDUv_vrum6fIeBjutADucnA&usqp=CAU',
    '8882',
    '170 St NW',
    'Edmonton',
    'Alberta',
    'T5T4M2',
    53.312443,
    -113.372351
  ),
  (
    'Wendy''s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLnr6trfdbxVaL_MddksXgzb6JAP5YFmnZQ&usqp=CAU',
    '7239',
    'Winterburn Road NW',
    'Edmonton',
    'Alberta',
    'T7X3Y3',
    53.504900,
    -113.688595
  ),
  (
    'Wendy '' s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLnr6trfdbxVaL_MddksXgzb6JAP5YFmnZQ&usqp=CAU',
    '18411',
    'Stony Plain Rd',
    'Edmonton',
    'Alberta',
    'T5S2X6',
    53.541294,
    -113.640996
  ),
  (
    'Edo Japan',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIiJDS8gE-jPXnk4_FRF0WS8Ev9nha-tWQA&usqp=CAU',
    '6819',
    '177 St NW',
    'Edmonton',
    'Alberta',
    'T5T4K3',
    53.50332,
    -113.625432
  ),
  (
    'Subway',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpS_eYMVPF2YNsmjRTMFTuZtMT6k_ujSyng&usqp=CAU',
    '6921',
    '172 St NW',
    'Edmonton',
    'Alberta',
    'T5T5Y1',
    53.5139296,
    -113.6184895
  ),
  (
    'Khazana',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwxfO9YHlaUs9ZlFQOqKMMzfEvHEKrwWFkg&usqp=CAU',
    '10177',
    '107 St NW',
    'Edmonton',
    'Alberta',
    'T5J1J5',
    53.5583174,
    -113.5047712
  ),
  (
    'Edo Japan',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIiJDS8gE-jPXnk4_FRF0WS8Ev9nha-tWQA&usqp=CAU',
    '5368',
    'Windermere Blvd NW',
    'Edmonton',
    'Alberta',
    'T6W0L9',
    53.4352416,
    -113.6065164
  ),
  (
    'Franco''s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPiyhAv8wlLw8TrKKqrw0z9PK5cwjrl6xm8A&usqp=CAU',
    '12881',
    '50 St NW',
    'Edmonton',
    'Alberta',
    'T5A3P3',
    53.5888977,
    -113.4176373
  );

INSERT INTO
  dishes (name, description, price, type, restaurant_id)
VALUES
  (
    'veg.chowmein',
    'it is a stir - fried dish consisting of noodles, onions and other veggies, soy sauce, aromatics and spices',
    15,
    'noodles',
    1
  ),
  (
    'chicken noodles',
    'stir - fried noodles with onions and chicken, soy sauce, aromatics and spices',
    18,
    'noodles',
    1
  ),
  (
    'french fries',
    'crispy fried potato slices with sprinkled salt, herbs and pepper',
    5,
    'appetizers',
    1
  ),
  (
    'french fries',
    'crispy fried potato slices with sprinkled salt, herbs and pepper',
    5,
    'appetizers',
    6
  ),
  (
    'french fries',
    'crispy fried potato slices with sprinkled salt, herbs and pepper',
    5,
    'appetizers',
    7
  ),
  (
    'french fries',
    'crispy fried potato slices with sprinkled salt, herbs and pepper',
    5,
    'appetizers',
    8
  ),
  (
    'french fries',
    'fried slices of potatoes',
    6.5,
    'appetizers',
    16
  ),
  (
    'french fries',
    'fried potato slices with salt',
    8,
    'appetizers',
    10
  ),
  (
    'CHOMA CHOMA',
    'Thinly sliced beef short ribs, char grilled with tangy African spices',
    18,
    'appetizers',
    14
  ),
  (
    'CHILLI CHICKEN 65',
    'An Indo Chinese delicacy, crispy chicken cubes tossed with onions & peppers',
    15,
    'appetizers',
    14
  ),
  (
    'MISHKAKI',
    'An African specialty! cubes of beef on a stick, barbecued with spicy masala',
    14,
    'appetizers',
    14
  ),
  (
    'french fries',
    'fried potato slices with salt',
    8,
    13
  ),
  (
    'Alfredo pasta',
    'Fusili baked with alfredo sauce and italian herbs',
    16,
    'pasta',
    9
  ),
  (
    'Alfredo pasta',
    'Fusili baked with alfredo sauce and italian herbs served with fresh garlic bread',
    18,
    'pasta',
    16
  ),
  (
    'Chhole Puri',
    'Chick peas cooked in onion and tomato gravy with indian spices served with puris',
    12,
    'curries',
    3
  ),
  (
    'Chhole Puri',
    'Chick peas cooked in onion and tomato gravy with indian spices served with puris',
    11,
    'curries',
    6
  ),
  (
    'SHAHI PANEER AKBARI',
    'Cottage paneer dish cooked in velvety tomato cream sauce, from the north east frontier',
    19,
    'curries',
    14
  ),
  (
    'BHINDI DO PIAZA',
    'Home style Okra dish, cooked with onions, tomatoes, flavoured with turmeric and cumin',
    17,
    'curries',
    14
  ),
  (
    'PALAK PANEER',
    'Spinach and cottage cheese – simple ingredients turn this curry into a magical dish',
    17,
    'curries',
    14
  ),
  (
    'CHANGEZI BOTI',
    'Alberta beef sirloin marinated in a combination of freshly ground spices, perfectly grilled',
    23,
    'tandoor',
    14
  ),
  (
    'SMOKEY PANEER TIKKA',
    'Cubes of cottage cheese, flavored with ginger garlic and herbs, immaculately grilled',
    19,
    'tandoor',
    14
  ),
  (
    'LAKHNAVI MUSHROOM',
    'Button mushrooms cooked in tandoor with a blend of spices.',
    18,
    'tandoor',
    14
  ),
  (
    'TANDOORI MURGH',
    'Half of spring chicken marinated in yoghurt and 21 spices, perfectly grilled in clay oven',
    21,
    'tandoor',
    14
  ),
  (
    'MANGO CREAM',
    'Fresh mango pudding',
    10,
    'desserts',
    14
  ),
  (
    ' VEGETABLE SAMOSA',
    'Crispy turnovers stuffed with potatoes and green peas',
    10,
    'appetizers',
    14
  ),
  (
    'CHOCOLATE CINNAMON NAAN',
    'Naan bread with Belgium chocolate and cinnamon',
    8,
    'desserts',
    14
  ),
  (
    'Chhole Puri',
    'Chick peas cooked in onion and tomato gravy with indian spices served with puris',
    12.99,
    'curries',
    14
  );

INSERT INTO
  carts (id, dish_id, quantity)
VALUES
  ('uuid1', 1, 1),
  ('uuid1', 5, 1),
  ('uuid2', 2, 1);

INSERT INTO
  couriers (
    first_name,
    last_name,
    email,
    password,
    phone_number
  )
VALUES
  (
    'Alex',
    'Davidson',
    'alex@abc.com',
    'password',
    '8976357835'
  ),
  (
    'Jenny',
    'Gump',
    'jenny1@abc.com',
    'password ',
    '8570537835 '
  ),
  (
    'Alex',
    'Davidson',
    'alex@abc.com',
    'password',
    '7976357999'
  );

INSERT INTO
  orders (
    id,
    restaurant_id,
    dish_id,
    dish_quantity,
    price,
    courier_id
  )
VALUES
  ('uuid01', 5, 1, 1, 15, 1),
  ('uuid01', 5, 5, 1, 8, 1),
  ('uuid02', 4, 4, 3, 19.5, 2);

-- `\i server-side/db/migrations/schema.sql`
-- \i server-side/db/seeds/01_seeds.sql