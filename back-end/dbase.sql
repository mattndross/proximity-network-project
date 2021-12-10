drop table if exists stores_authentications;
drop table if exists stores_locations;
drop table if exists stores;
drop table if exists products;

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
    store_description   varchar(255), 
    store_category      varchar(50) ,
    web_page            varchar(100), 
    store_email         varchar(120) not null,
    phone_number        varchar(20), 
    image 			    varchar(255)
);
create table stores_locations(
	store_id		      int,
	address               VARCHAR(120),
    city                  VARCHAR(30),
    postcode              VARCHAR(12),
    country               VARCHAR(20), 
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

insert into stores (store_id, name, store_description, store_category, web_page,  store_email, phone_number) 
     values (1, 'Ecoalimentaria', '', 'alimentación' , 'https://www.ecoalimentaria.es/es/', 'eco@mail.com', '632347635');
insert into stores (store_id, name, store_description, store_category, web_page,  store_email, phone_number) 
        values (2, 'Lo de marta', '', 'alimentación' , 'https://www.lodemarta.com', 'marta@mail.com', '634675637');

insert into stores_locations (store_id, address, city, postcode, country) 
        values (2, 'asturies 9', 'barcelona', '08015' , 'Spain'); 
insert into stores_locations (store_id, address, city, postcode, country) 
        values (1, 'corsega 464', 'barcelona', '08025' , 'Spain'); 
 insert into stores_locations (store_id, address, city, postcode, country) 
        values (2, 'rec 15', 'barcelona', '08003' , 'Spain');   
 insert into stores_locations (store_id, address, city, postcode, country) 
        values (1, 'Enric Gurgui 23', 'Canovelles', '08420' , 'Spain'); 

INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(2, 'yogurt', 'casandra', 'lacteos', '', '6', '2.10', 'Laborolo', 'Lleida');   
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(1, 'yogurt', 'casandra', 'lacteos', '', '6', '2.90', 'Laborolo', 'Lleida');  
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(1, 'vino', 'vent de mar', 'bebidas', '', '1', '4.65', 'Locrau', 'Ganedas');  