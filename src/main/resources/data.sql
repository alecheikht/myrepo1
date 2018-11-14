/* User */
insert into user (user_id, password, first_name, last_name, email,  phone, address, country, postal, role, is_active, is_blocked, security_provider_id, default_customer_id, secret_question, secret_answer) values
('demo'      , 'demo'     , 'Mrinmoy'  , 'Majumdar', 'arivera2@joomla.org'   , '7-(740)701-4547', '80429 Garrison Crossing'              , 'Maroc'        , '64890', 'USER' , 1, 0, 10001, 20000, 'Diverse'       , 'Yellow'),
('admin'     , 'admin'    , 'Theresa'  , 'Russell' , 'trussell1@about.me'     ,  '383-(779)851-3208', '30874 Graceland Terrace' , 'Maroc'        , '51065', 'ADMIN', 1, 0, 10001, 20000, 'knowledge base', 'Mauv'),
('user'      , 'user'     , 'Virginia' , 'Reynolds', 'vreynolds0@slashdot.org',  '84-(228)809-9998', '0118 Burrows Plaza'    , 'Maroc'        , '94086', 'USER' , 1, 0, 10001, 20000, 'Innovative'    , 'Turquoise'),
('alechcheikht'  , 'password' , 'ALECHCHEIKH'    , 'Tahar'  , 'tahar.alechcheikh@cgi.com' , '64-(272)961-0086', '2 Ludington Point'   , 'Maroc', null   , 'ADMIN', 1, 1, 10000, 20000, 'empowering'    , 'Maroon');


