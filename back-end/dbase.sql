
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
    name                    varchar(50) not null,
    store_description   varchar(255), 
    store_category      varchar(50),
    web_page            varchar(100), 
    store_email         varchar(120),
    phone_number        varchar(20), 
    image			    varchar(255)
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
insert into stores_authentications (store_manager, manager_email, password)
		values ('Dario Mercado', 'dario@gmail.com', 'mima12'); 
insert into stores_authentications (store_manager, manager_email, password)
		values ('Luisa Delfo', 'luisa@gmail.com', 'saran98'); 
insert into stores_authentications (store_manager, manager_email, password)
		values ('Mauro Talasi', 'mauro@gmail.com', 'maurin245'); 
	
insert into stores (store_id, name, store_description, store_category, web_page,  store_email, phone_number, image) 
     values (1, 'Ecoalimentaria', '', 'alimentación' , 'https://www.ecoalimentaria.es/es/', 'eco@mail.com', '632347635', 'https://scontent.fbcn7-2.fna.fbcdn.net/v/t1.18169-9/74265_436358423093621_2118048283_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=cwb__zaKqcUAX8lZTe-&_nc_ht=scontent.fbcn7-2.fna&oh=00_AT_-n_w7UC1lEkHu1dNpYwHyaEbMxHMK1VgK0Rx8BqH5Kw&oe=61DDB3BE');
insert into stores (store_id, name, store_description, store_category, web_page,  store_email, phone_number, image) 
        values (2, 'Lo de marta', '' , 'alimentación', 'https://www.lodemarta.com', 'marta@mail.com', '634675637', 'http://www.pro-cert.org/wp-content/uploads/2018/02/LogoBioCanadaRGBpresse.jpg');
insert into stores (store_id, name, store_description, store_category, web_page,  store_email, phone_number, image) 
        values (3, 'El mercadito', '' , 'alimentación', 'https://www.mercadito.com', 'mercaditoa@mail.com', '634453434', 'https://noroeste.ayeryhoyrevista.com/wp-content/uploads/sites/8/2019/12/empresab.jpg');
insert into stores (store_id, name, store_description, store_category, web_page,  store_email, phone_number, image) 
        values (4, 'con ciencia', '' , 'alimentación', 'https://www.conciencia.com', 'ciencia@mail.com', '634675565', 'https://restaurantecasaantonio.net/wp-content/uploads/2018/08/10-consejos-para-una-alimentaci%C3%B3n-saludable.jpg');
insert into stores (store_id, name, store_description, store_category, web_page,  store_email, phone_number, image) 
        values (5, 'De Campo', '' , 'alimentación', 'https://www.decampo.com', 'decampo@mail.com', '634233897', 'https://resizer.glanacion.com/resizer/CYTG8S8LC9PNJ0x2pm35InPpe8E=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/YTICVD45SJGWLC5W4B63A76IOQ.jpg');


insert into stores_locations (store_id, address, city, postcode, country, maps_url) 
        values (1, 'carrer de Asturies 9', 'Barcelona', '08015' , 'Spain', 'https://www.google.com/maps/search/?api=1&query=ecoalimentaria+asturies+9+barcelona'); 
insert into stores_locations (store_id, address, city, postcode, country, maps_url) 
        values (2, 'carrer de Córsega 464', 'Barcelona', '08025' , 'Spain', 'https://www.google.com/maps/search/?api=1&query=lo+de+marta+carrer+de+corsega+464+tarragona');
insert into stores_locations (store_id, address, city, postcode, country, maps_url) 
        values (3, 'Carrer de Cardedeu 33', 'Barcelona', '08023' , 'Spain', 'https://www.google.es/maps/search/?api=1&query=el+mercadito+carrer+de+cardedeu+33+barcelona'); 
insert into stores_locations (store_id, address, city, postcode, country, maps_url) 
        values (4, 'carrer de Rosello 314', 'Barcelona', '08037' , 'Spain', 'https://www.google.es/maps/search/?api=1&query=con+ciencia+carrer+de+rosello+314+barcelona');
insert into stores_locations (store_id, address, city, postcode, country, maps_url) 
        values (5, 'carrer de Rector 65', 'Badalona', '08912' , 'Spain', 'https://www.google.es/maps/search/?api=1&query=lta+carrer+de+rector+65+badalona');

INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(1, 'yogurt', 'La Lacteo', 'huevos y lacteos', '', 'pack x6', '2.10', 'Laborolo', 'Lleida');   
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(1, 'vino', 'vent de mar', 'bebidas', '', '1 botella', '4.65', 'Locrau', 'Ganedas'); 
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		values(1, 'Leche entera', 'Klen', 'huevos y lacteos', '', '1 envase', '1.70', 'granja chocha', 'Solsona');   
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(2, 'yogurt', 'Casandra', 'huevos y lacteos', '', 'pack x6', '2.90', 'Laborolo', 'Lleida');  
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(2, 'vino', 'vent de mar', 'bebidas', '', '1 botella', '3.98', 'Locrau', 'Ganedas');  
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(2, 'cerveza pilsener', 'Budel', 'bebidas', '', 'pack x6', '12.30', 'Budel', 'Manresa');  
insert INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(3, 'Turrón chocolate con avellanas', 'Sole', 'chocolate', '', '200 gramos', '3.05', 'Sole', 'Barbera del valles');  
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(3, 'Penne', 'carolo', 'pasta', '', '250 gr', '1.87', 'niola', 'Vallgorguina'); 	
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(3, 'huevos', 'la roncha', 'huevos y lacteos', '', '12 unidades', '3.05', 'la roncha', 'Can Bou');  
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(4, 'Turrón chocolate con avellanas', 'Sole', 'chocolate', '', '200 gramos', '2.55', 'Sole', 'Barbera del valles');  
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(4, 'Espirulina', 'Sakai', 'superalimentos', '', '120 comprimidos', '9.65', 'Sakai', 'Sant cugat del valles'); 	
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(4, 'Macarrones', 'Bonaldo', 'Pasta', '', '250 gramos', '2.10', 'minalta', 'Vielha');  
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(4, 'cerveza pilsener', 'Budel', 'bebidas', '', 'botella 30 cl', '2.15', 'Budel', 'Manresa'); 	
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(5, 'Whisky', 'Tutan', 'bebidas', '', '75 cl', '30.12', 'Tutan', 'Premia de mar');  
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(5, 'Tomate', 'Sinusin', 'frutas y verduras', '', '1 kg', '1.89', 'Sinusin', 'Bono'); 	
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(5, 'Miel', 'Gibson', 'Miel', '', '500 gramos', '7.95', 'Wallace', 'Sitges');  
INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) 
		VALUES(5, 'Soja', 'secanla', 'Legumbres', '', '500 gr', '3.15', 'secanla', 'Manresa'); 	