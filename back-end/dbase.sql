
drop table if exists stores_locations;
drop table if exists products;
drop table if exists stores;
drop table if exists stores_authentications;

create table stores_authentications(
    id                  	serial PRIMARY key,
    store_manager           varchar(50) not null, 
    manager_email	        varchar(120) not null, 
    password 		        varchar(100) not null
    );
   
create table stores (
 	store_id                serial primary key, 
 	foreign key(store_id)   references stores_authentications(id),
    name                varchar(50) not null,
    profile_name    varchar(50),
    store_description   varchar(255), 
    store_category      varchar(50),
    web_page            varchar(100), 
    store_email         varchar(120),
    phone_number        varchar(20), 
    image_url 			    varchar(255)
);
create table stores_locations(
	store_id		      int,
	address               VARCHAR(120),
    city                  VARCHAR(30),
    postcode              VARCHAR(12),
    country               VARCHAR(20),
    maps_url              VARCHAR(255),
    foreign key(store_id) references stores(store_id)
 );
create table products (
    id                    serial primary key,
    store_id              int,
    foreign key(store_id) REFERENCES stores(store_id),
    product_type          varchar(50) not null, 
    brand                 varchar(30) not null, 
    category              varchar(50) not null,
    product_description   varchar(255),
    unit                  varchar(20), 
    price                 numeric(4,2), 
    producer              varchar(50), 
    origin                varchar(50) 
);

insert into stores_authentications (store_manager, manager_email, password)
		values ('Juan Perez', 'ecoalimentaria@mail.com', 'pepe93');
insert into stores_authentications (store_manager, manager_email, password)
		values ('Marta Navarra', 'lodemarta@gmail.com', 'martitaveni');   

insert into stores (store_id, name, profile_name, store_description, store_category, web_page,  store_email, phone_number, image_url) 
     values (1, 'Ecoalimentaria', 'ecoalimentaria', '', 'alimentación' , 'https://www.ecoalimentaria.es/es/', 'eco@mail.com', '632347635', 'https://scontent.fbcn7-2.fna.fbcdn.net/v/t1.18169-9/74265_436358423093621_2118048283_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=cwb__zaKqcUAX8lZTe-&_nc_ht=scontent.fbcn7-2.fna&oh=00_AT_-n_w7UC1lEkHu1dNpYwHyaEbMxHMK1VgK0Rx8BqH5Kw&oe=61DDB3BE');
insert into stores (store_id, name, profile_name, store_description, store_category, web_page,  store_email, phone_number, image_url) 
        values (2, 'Lo de marta', 'lo-de-marta', '' , 'alimentación', 'https://www.lodemarta.com', 'marta@mail.com', '634675637', 'http://www.pro-cert.org/wp-content/uploads/2018/02/LogoBioCanadaRGBpresse.jpg');


insert into stores_locations (store_id, address, city, postcode, country, maps_url) 
        values (1, 'carrer de Asturies 9', 'Barcelona', '08015' , 'Spain', 'https://www.google.com/maps/search/?api=1&query=ecoalimentaria+asturies+9+barcelona'); 
insert into stores_locations (store_id, address, city, postcode, country, maps_url) 
        values (2, 'carrer de Córsega 464', 'Barcelona', '08025' , 'Spain', 'https://www.google.com/maps/search/?api=1&query=lo+de+marta+carrer+de+corsega+tarragona');

INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(2, 'yogurt', 'casandra', 'lacteos', '', '6', '2.10', 'Laborolo', 'Lleida');   
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(1, 'yogurt', 'casandra', 'lacteos', '', '6', '2.90', 'Laborolo', 'Lleida');  
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(1, 'vino', 'vent de mar', 'bebidas', '', '1', '4.65', 'Locrau', 'Ganedas'); 