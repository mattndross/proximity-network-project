
create table stores (
    id              serial PRIMARY key,
    name            varchar(50) not null,
    mail            varchar(120) not null,
    store_category  varchar(50),
    web_page        varchar(100),
    address         varchar(120),
    city            varchar(30),
    postcode        varchar(12),
    country         varchar(20), 
    store_manager   varchar(50) not null, 
    manager_contact varchar(120) not null
)

create table products (
    id              serial PRIMARY key,
    store_id        int REFERENCES stores(id),
    name            varchar(50) not null, 
    category        varchar(50) not null, 
    product_type    varchar(50),
    quantity_weight numeric(4,2), 
    price           numeric(4,2),  
    producer        varchar(50), 
    origin          varchar(50)
)

insert into stores (name, mail, store_category, web_page, address, city, postcode, country, store_manager, manager_contact) 
        values ('Ecoalimentaria', 'eco@mail.com', 'alimenticia', 'https://www.ecoalimentaria.es/es/', 'carrer canigo 94', 'Barcelona', '08031', 'España', 'Jose Luis Perez', 'pepe@mail.com');
       insert into stores (name, mail, store_category,  address, city, postcode, country, store_manager, manager_contact)
       values ('Aromi Lab', 'aromilab@gmail.com', 'perfumery', 'carrer de les tres senyores 24', 'Barcelona', '08020', 'España', 'Romina Muinio', 'aromilab@gmail.com');

