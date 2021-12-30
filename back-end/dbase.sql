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
    origin                varchar(50),
    product_image		  varchar(255)
);


INSERT INTO public.stores_authentications (store_manager,manager_email,"password") VALUES
	 ('Juan Perez','ecoalimentaria@mail.com','$2b$06$vvA/RFJp39jbufgfZNr3FuPW2cor/Ns0sttmlBo1naSNQ/jT3RNl6'),
	 ('Marta Navarra','lodemarta@gmail.com','$2b$06$pgWIHM7jCmqUoZeeY.ovZ.XJSBEXWp3TP/kykJ5hkaeibkh8ue8i.'),
	 ('Dario Mercado','dario@gmail.com','$2b$06$6HcTn7KOVWqCS4qxGzMwfuhyYCqZvIrio00S7rnOBdt/RoR1npxyu'),
	 ('Luisa Delfo','luisa@gmail.com','$2b$06$KB/oFRC7XPCPyN/UkjwznuZJFNssZRX55ZbDbqExevSV1U6qr/PaW'),
	 ('Mauro Talasi','mauro@gmail.com','$2b$06$Idx5DfgQ2Y4nev0XuQGrSupK5L87Kamf.zLJ2v/FMlXoAwBeJYkkK'),
	 ('Pedro Sosa','pedros@gmail.com','$2b$06$5HroktstePkjA/GvcbdLE.er2Gef8gmN3NWLpaqfPfDSf7wcL4Fda');
	 
INSERT INTO public.stores (store_id,"name",store_description,store_category,web_page,store_email,phone_number,image) VALUES
	 (2,'Lo de Marta','Created in honor of a renowned farmer, Lo de Marta is a store specialized in organic and local products.','alimentación','https://www.lodemarta.com','marta@mail.com','634675637','http://www.pro-cert.org/wp-content/uploads/2018/02/LogoBioCanadaRGBpresse.jpg'),
	 (5,'De Campo','De Campo is a local business that works with certified organic farming suppliers. .','alimentación','https://www.decampo.com','decampo@mail.com','634233897','https://resizer.glanacion.com/resizer/CYTG8S8LC9PNJ0x2pm35InPpe8E=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/YTICVD45SJGWLC5W4B63A76IOQ.jpg'),
	 (4,'con ciencia','ConCiencia tiene la misión de fomentar un estilo de vida más conciente y saludable para toda la comunidad. Para eso nos enfocamos en ofrecer productos organicos y de calidad.','alimentación','https://www.conciencia.com','ciencia@mail.com','634675565','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.AAxO7zForjUEsmdl5uZ_sAHaFB%26pid%3DApi&f=1'),
	 (3,'El mercadito','El Mercadito offers a wide variety of organic and local products so that you can take care of your health and the environment.','alimentación','https://www.mercadito.com','mercaditoa@mail.com','634453434','https://noroeste.ayeryhoyrevista.com/wp-content/uploads/sites/8/2019/12/empresab.jpg'),
	 (6,'PEcos','Pecos is a store specialized in the sale of organic products. Created in 2016 with the mission of promoting conscious consumption.','alimentación','https://www.pecos.com','pecos@mail.com','63424476','https://www.freepik.es/vector-gratis/diseno-logotipo-tienda-salud_7248528.htm#page=1&query=bio%20store&position=22&from_view=search'),
	 (1,'Ecoalimentaria','Ecoalimentaria is a family business dedicated to organic food. Born in 2010 with the aim of offering a complete range of organic, seasonal and local food. ','alimentación','https://www.ecoalimentaria.es/es/','eco@mail.com','632347635','https://scontent.fbcn7-2.fna.fbcdn.net/v/t1.18169-9/74265_436358423093621_2118048283_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=cwb__zaKqcUAX8lZTe-&_nc_ht=scontent.fbcn7-2.fna&oh=00_AT_-n_w7UC1lEkHu1dNpYwHyaEbMxHMK1VgK0Rx8BqH5Kw&oe=61DDB3BE');	
	 
INSERT INTO public.stores_locations (store_id,address,city,postcode,country,maps_url) VALUES
	 (1,'carrer de Asturies 9','Barcelona','08015','Spain','https://www.google.com/maps/search/?api=1&query=ecoalimentaria+asturies+9+barcelona'),
	 (2,'carrer de Córsega 464','Barcelona','08025','Spain','https://www.google.com/maps/search/?api=1&query=carrer+de+corsega+464+barcelona'),
	 (3,'Carrer de Cardedeu 33','Barcelona','08023','Spain','https://www.google.es/maps/search/?api=1&query=carrer+de+cardedeu+33+barcelona'),
	 (4,'carrer de Rosello 314','Barcelona','08037','Spain','https://www.google.es/maps/search/?api=1&query=carrer+de+rosello+314+barcelona'),
	 (5,'carrer de Rector 65','Badalona','08912','Spain','https://www.google.es/maps/search/?api=1&query=carrer+de+rector+65+badalona');
	 
INSERT INTO public.products (store_id,product_type,brand,category,product_description,unit,price,producer,origin, product_image) VALUES
	 (1,'yogurt','La Lacteo','eggs and dairy','','pack x6',2.10,'Laborolo','Lleida', 'https://image.freepik.com/foto-gratis/alto-angulo-yogur-natural-frascos-avena_23-2148566181.jpg'),
	 (1,'red wine','vent de mar','beverages','','1 bottle 750ml',4.65,'Locrau','Ganedas', 'https://image.freepik.com/foto-gratis/vista-frontal-botella-vino-tinto-negro-piso-brillante_140725-14488.jpg'),
	 (1,'milk','Klen','eggs and dairy','','1lt',1.70,'granja chocha','Solsona','https://image.freepik.com/foto-gratis/vista-cerca-botella-vidrio-abierta-taza-llena-leche-toalla-pelada-purpura-sobre-tabla-cortar-madera_140725-142160.jpg'),
	 (2,'yogurt','Casandra','eggs and dairy','','pack x6',2.90,'Laborolo','Lleida', 'https://image.freepik.com/foto-gratis/alto-angulo-yogur-natural-frascos-avena_23-2148566181.jpg'),
	 (2,'red wine','vent de mar','beverages','','1 bottle 750ml',3.98,'Locrau','Ganedas', 'https://image.freepik.com/foto-gratis/vista-frontal-botella-vino-tinto-negro-piso-brillante_140725-14488.jpg'),
	 (2,'Pilsener beer','Budel','beverages','','1 bottle 30cl',2.30,'Budel','Manresa', 'https://image.freepik.com/foto-gratis/botellas-vidrio-cerveza-vidrio-hielo-sobre-fondo-oscuro_1150-8904.jpg'),
	 (3,'Turrón chocolate con avellanas','Sole','sweets','','200gr',3.05,'Sole','Barbera del valles', 'https://image.freepik.com/foto-gratis/cerca-sabroso-chocolate-avellanas_144627-16003.jpg'),
	 (3,'Penne','carolo','pasta','','250gr',1.87,'niola','Vallgorguina', 'https://image.freepik.com/foto-gratis/vista-superior-penne-pasta-cruda-tazon-madera_114579-59702.jpg'),
	 (3,'Eggs','la roncha','eggs and dairy','','12 units',3.05,'la roncha','Can Bou', 'https://image.freepik.com/foto-gratis/huevos-sacos-canamo-madera-paja_1150-20769.jpg'),
	 (4,'Turrón chocolate con avellanas','Sole','sweets','','200 gramos',2.55,'Sole','Barbera del valles', 'https://image.freepik.com/foto-gratis/cerca-sabroso-chocolate-avellanas_144627-16003.jpg'),	
	 (4,'Spirulina','Sakai','superfood','','60 tablets',9.65,'Sakai','Sant cugat del valles', 'https://asesornatural.com/3326-thickbox_default/espirulina-en-polvo-125g-eco.jpg'),
	 (4,'Macaroni','Bonaldo','Pasta','','250gr',2.10,'minalta','Vielha', 'https://www.photos-public-domain.com/wp-content/uploads/2018/03/macaroni-pasta.jpg'),
	 (4,'Pilsener beer','Budel','beverages','','1 bottle 30cl',2.15,'Budel','Manresa', 'https://image.freepik.com/foto-gratis/botellas-vidrio-cerveza-vidrio-hielo-sobre-fondo-oscuro_1150-8904.jpg'),
	 (5,'Whisky','Tutan','beverages','','1 bottle 75cl',30.12,'Tutan','Premia de mar', 'https://image.freepik.com/foto-gratis/bebida-alcoholica-botella_176474-6029.jpg'),
	 (5,'Tomatoes','Sinusin','fruits and vegetables','','1kg',1.89,'Sinusin','Bono', 'https://image.freepik.com/foto-gratis/monton-tomates-frescos-deliciosos_87374-34.jpg'),
	 (5,'Honey','Gibson','Honey','','500gr',7.95,'Wallace','Sitges', 'https://image.freepik.com/foto-gratis/miel_144627-27678.jpg'),
	 (5,'Soy beans','secanla','fruits and vegetables','','500gr',3.15,'secanla','Manresa', 'https://image.freepik.com/foto-gratis/haba-soja_1150-13411.jpg'),
	 (6,'Strawberries','Sol de Mayo','fruits and vegetables','organic strawberries','500gr',2.99,'Sol de Mayo','Ganedas', 'https://image.freepik.com/foto-gratis/fresas-frescas-mesa-madera_1150-8055.jpg');