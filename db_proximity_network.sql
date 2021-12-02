create table stores (
    id              serial PRIMARY key,
    name            varchar(50) not null,
    mail            varchar(120) not null,
    store_category  varchar(50),
    web_page        varchar(100), 
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
    quantity_weight varchar(20), 
    price           int, 
    producer        varchar(50), 
    origin          varchar(50) 
)

insert into stores (name, mail, store_category, web_page, address, city, postcode, country, store_manager, manager_contact) 
        values ()


