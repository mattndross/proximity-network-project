create table stores (
    id              serial PRIMARY key,
    name            varchar(50) not null,
    mail            varchar(120) not null,
    store_category  varchar(50) ,
    web_page        varchar(100), 
    phone_number    varchar(20), 
    image 			varchar(255)
);

create table store_location(
	store_id		int ,
	address         VARCHAR(120),
    city            VARCHAR(30),
    postcode        VARCHAR(12),
    country         VARCHAR(20), 
    foreign key(store_id) references stores(id)
 );

 create table userStore_authentication(
 	store_id        int primary key, 
 	foreign key(store_id) references stores(id),
    store_manager   varchar(50) not null, 
    mail 			varchar(120) not null, 
    password 		varchar(100) not null
    );

create table products (
    id              serial primary key,
    store_id        int,
    foreign key(store_id) REFERENCES stores(id),
    name            varchar(50) not null, 
    category        varchar(50) not null, 
    product_type    varchar(50),
    quantity_weight numeric(4,2), 
    price           numeric(4,2), 
    producer        varchar(50), 
    origin          varchar(50) 
);
