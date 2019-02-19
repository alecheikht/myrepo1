/* User */
insert into user (user_id, password, first_name, last_name, email,  phone, address, country, postal, role, is_active, is_blocked, security_provider_id, default_customer_id, secret_question, secret_answer) values
('demo'      , 'demo'     , 'Mrinmoy'  , 'Majumdar', 'arivera2@joomla.org'   , '7-(740)701-4547', '80429 Garrison Crossing'              , 'Maroc'        , '64890', 'USER' , 1, 0, 10001, 20000, 'Diverse'       , 'Yellow'),
('admin'     , 'admin'    , 'Theresa'  , 'Russell' , 'trussell1@about.me'     ,  '383-(779)851-3208', '30874 Graceland Terrace' , 'Maroc'        , '51065', 'ADMIN', 1, 0, 10001, 20000, 'knowledge base', 'Mauv'),
('user'      , 'user'     , 'Virginia' , 'Reynolds', 'vreynolds0@slashdot.org',  '84-(228)809-9998', '0118 Burrows Plaza'    , 'Maroc'        , '94086', 'USER' , 1, 0, 10001, 20000, 'Innovative'    , 'Turquoise'),
('alechcheikht'  , 'password' , 'ALECHCHEIKH'    , 'Tahar'  , 'tahar.alechcheikh@cgi.com' , '64-(272)961-0086', '2 Ludington Point'   , 'Maroc', null   , 'ADMIN', 1, 1, 10000, 20000, 'empowering'    , 'Maroon');

/* Themes */
insert into theme (id, name, parent_id ) values 
(1, 'Feux des dossiers', null),
(2, 'Charges', null),
(3, 'Synthèse du consommé', 2),
(4, 'Activité au devis', 2),
(5, 'Activité à l''UO', 2),
(6, 'INCIDENTS', 5);

/* Themes 
insert into theme_tree (parent_id, id, depth) values 
(1, 1, 0),
(1, 2, 1),
(1, 3, 1),
(1, 4, 2),
(1, 5, 2),
(2, 2, 0),
(2, 4, 1),
(3, 3, 0),
(3, 5, 1),
(4, 4, 0),
(5, 5, 0);
*/

/* organisation */
insert into organisation (id, name, level, parent_id ) values 
(1, 'Back Office', 0, null),
(2, 'Front Office', 0, null),
(3, 'Siège', 0, null),
(4, 'Supply Chain', 0, null),

(5, 'BO Globale', 1, 1),
(6, 'Magasin - Pôle BO Editeurs', 1, 1),
(7, 'Magasin - Pôle BO Caroline MARKET', 1, 1),
(8, 'Magasin - Pôle BO Caroline HYPER et CASH', 1, 1),

(9, 'FO Globale', 1, 2),
(10, 'Magasin - Pôle fidélité', 1, 2),
(11, 'Magasin - Pôle encaissement Hyper', 1, 2),
(12, 'Magasin - Pôle monétique', 1, 2),
(13, 'Magasin - Pôle encaissement SUPER', 1, 2);


/* config_presentation */
insert into config_presentation (id, type, organisation_id, theme_id ) values 
(1, 'P', 1, null),
(2, 'P', 2, null),
(3, 'P', 3, null),
(4, 'P', 4, null),

(5, 'P', 5, null),
(6, 'P', 6, null),
(7, 'P', 7, null),
(8, 'P', 8, null),

(9, 'P', 9, null),
(10, 'P', 10, null),
(11, 'P', 11, null),
(12, 'P', 12, null),
(13, 'P', 13, null),

(14, 'S', null, 1),
(15, 'S', null, 3),
(16, 'S', null, 4),
(17, 'S', null, 6),

(18, 'S', null, 1),
(19, 'S', null, 3),
(20, 'S', null, 4),
(21, 'S', null, 6);

/* config_present_slide */
insert into config_present_slide (configpresent_id, configslide_id,order_slide) values 
(1, 5, 0),
(1, 6, 1),
(1, 7, 2),
(1, 8, 3),

(2, 9, 0),
(2, 10, 1),
(2, 11, 2),
(2, 12, 3),
(2, 13, 4),

(5, 14, 0),
(5, 15, 1),
(5, 16, 2),
(5, 17, 3),

(9, 18, 0),
(9, 19, 1),
(9, 20, 2),
(9, 21, 3);


/* config_image */
insert into config_image (id, nom ,configslide_id) values 
(1, 'BO - domaine-Feux des dossiers.png', 14),
(2, 'BO - domaine-Analyse des charges consommées.png', 15),
(3, 'BO - domaine-Gains et dérives cumulés des dossiers en cours.png', 16),
(4, 'BO - domaine-Productivité des incidents.png', 17),
(5, 'BO - domaine-Taux de supervision VS traitement des incidents.png', 17),
(6, 'BO - domaine-Taux de pilotage sur le support.png', 17),
(7, 'FO - domaine-Feux des dossiers.png', 18),
(8, 'FO - domaine-Analyse des charges consommées.png', 19),
(9, 'FO - domaine-Gains et dérives cumulés des dossiers en cours.png', 20),
(10, 'FO - domaine-Productivité des incidents.png', 21),
(11, 'FO - domaine-Taux de supervision VS traitement des incidents.png', 21),
(12, 'FO - domaine-Taux de pilotage sur le support.png', 21);

/* Table: current_config_presentation  */
insert into current_config_presentation (configpresent_id, organisation_id ) values 
(1,1),
(2,2),
(3,3),
(4,4);

/* comite 
insert into comite (id, semaine, encours, configpresent_id, organisation_id ) values 
(1, '201902', true, 1, 1),
(2, '201902', false, 1, 1),
(3, '201901', true, 2, 2);
*/
/* presentation
insert into presentation (id, type, configslide_id, comite_id ) values 
(1, 'P', 1, 1),
(2, 'P', 5, 1),
(3, 'S', 13, 1),
(4, 'S', 14, 1),
(5, 'S', 15, 1),
(6, 'S', 16, 1);
 */
/* comment 
insert into comment (id, text, slide_id ) values 
(1, 'comment 1', 3),
(2, 'comment 2', 4),
(3, 'comment 3', 5),
(4, 'comment 4', 6);
*/

