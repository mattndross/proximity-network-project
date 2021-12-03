create table stores (
    id              serial PRIMARY key,
    name            varchar(50) not null,
    mail            varchar(120) not null,
    store_category  varchar(50),
    web_page        varchar(100), 
    image         
    address         VARCHAR(120),
    city            VARCHAR(30),
    postcode        VARCHAR(12),
    country         VARCHAR(20), 
    store_manager   varchar(50) not null, 
    manager_contact varchar(120) not null
)

create table products (
    id              serial PRIMARY key,
    store_id        int REFERENCES stores(id);
    name            varchar(50) not null, 
    category        varchar(50) not null, 
    product_type    varchar(50),
    quantity_weight numeric(4,2), 
    price           numeric(4,2),  
    producer        varchar(50), 
    origin          varchar(50), 
    image
)

insert into stores (name, mail, store_category, web_page, address, city, postcode, country, store_manager, manager_contact) 
        values ('Ecoalimentaria', 'eco@mail.com', 'https://www.ecoalimentaria.es/es/', 'carrer canigo 94', 'Barcelona', '08031', 'Jose Luis Perez', 'pepe@mail.com');

insert into products (name, category, product_type, quantity_weight, price, producer, origin)       
        values ()
