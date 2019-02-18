/**
 Author: TALE
 Model : Csp
**/

DROP SCHEMA IF EXISTS csp;

CREATE SCHEMA csp;
USE csp;

/* Table: user (Application Users) */
CREATE TABLE user (
    user_id     NVARCHAR(20) NOT NULL,
    password    NVARCHAR(20) NOT NULL,
    first_name  NVARCHAR(50) ,
    last_name   NVARCHAR(50) ,
    email       NVARCHAR(70) ,
    security_provider_id INT ,
    default_customer_id  INT ,
    phone       NVARCHAR(20) ,
    address    NVARCHAR(100),
    country     NVARCHAR(20) ,
    postal      NVARCHAR(20) ,
    role        NVARCHAR(20) ,
    other_roles NVARCHAR(80) ,
    is_active   TINYINT  ,
    is_blocked  TINYINT  ,
    secret_question     NVARCHAR(100),
    secret_answer       NVARCHAR(100),
    CONSTRAINT user_id PRIMARY KEY(user_id)
);

/* Table: theme  */
CREATE TABLE theme (
    id     INT NOT NULL AUTO_INCREMENT,
    name   VARCHAR(80) ,
    parent_id INT ,
    CONSTRAINT id PRIMARY KEY(id)
);

/* Table: themeTree  */
CREATE TABLE theme_tree (
    id     INT NOT NULL,
    parent_id INT NOT NULL,
    depth INT,
    CONSTRAINT theme_tree_key PRIMARY KEY(id, parent_id)
);

delimiter |
CREATE TRIGGER themeInsert BEFORE INSERT ON theme FOR EACH ROW
BEGIN
	insert into theme_tree (id, parent_id, depth) values
    (NEW.id, NEW.id, 0);

    insert into theme_tree (id, parent_id, depth)
    select NEW.id, t.parent_id, t.depth + 1
    from theme_tree t
    where t.id = NEW.parent_id;
END;|

/* Table: organisation  */
CREATE TABLE organisation (
    id     INT NOT NULL AUTO_INCREMENT,
    name   VARCHAR(80) NOT NULL,
    level INT NOT NULL,
    parent_id INT ,
    CONSTRAINT id PRIMARY KEY(id)
);

/* Table: config_presentation  */
CREATE TABLE config_presentation (
    id     INT NOT NULL AUTO_INCREMENT,
    type   VARCHAR(1) NOT NULL,
    organisation_id INT ,
    theme_id INT ,
    CONSTRAINT id PRIMARY KEY(id)
);

/* Table: config_present_slide  */
CREATE TABLE config_present_slide (
    configpresent_id INT NOT NULL,
    configslide_id INT NOT NULL,
    order_slide INT NOT NULL,
    CONSTRAINT config_present_slide_key PRIMARY KEY(configpresent_id, configslide_id)
);

/* Table: config_image  */
CREATE TABLE config_image (
    id    INT NOT NULL AUTO_INCREMENT,
    nom   VARCHAR(150) NOT NULL,
    configslide_id INT NOT NULL,
    CONSTRAINT config_image_key PRIMARY KEY(id)
);

/* Table: comite  */
CREATE TABLE comite (
    id    INT NOT NULL AUTO_INCREMENT,
    semaine   VARCHAR(6) NOT NULL,
    encours BOOLEAN NOT NULL,
    configpresent_id INT NOT NULL,
    organisation_id INT NOT NULL,
    CONSTRAINT comite_key PRIMARY KEY(id)
);

/* Table: presentation  */
CREATE TABLE presentation (
    id     INT NOT NULL AUTO_INCREMENT,
    type   VARCHAR(1) NOT NULL,
    configslide_id INT ,
    comite_id INT ,
    CONSTRAINT presentation_key PRIMARY KEY(id)
);

/* Table: comment  */
CREATE TABLE comment (
    id     INT NOT NULL AUTO_INCREMENT,
    text VARCHAR(500),
    slide_id INT NOT NULL,
    CONSTRAINT comment_key PRIMARY KEY(id)
);

/* Table: current_config_presentation  */
CREATE TABLE current_config_presentation (
    configpresent_id INT NOT NULL UNIQUE,
    organisation_id INT NOT NULL UNIQUE
);

