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


INSERT INTO public.stores_authentications (id,store_manager,manager_email,"password") VALUES
	 (1,'Juan Perez','ecoalimentaria@mail.com','pepe93'),
	 (2,'Marta Navarra','lodemarta@gmail.com','martitaveni'),
	 (3,'Dario Mercado','dario@gmail.com','mima12'),
	 (4,'Luisa Delfo','luisa@gmail.com','saran98'),
	 (5,'Mauro Talasi','mauro@gmail.com','maurin245'),
	 (6,'Pedro Sosa','pedros@gmail.com','$2b$06$5HroktstePkjA/GvcbdLE.er2Gef8gmN3NWLpaqfPfDSf7wcL4Fda');
	 
INSERT INTO public.stores (store_id,"name",store_description,store_category,web_page,store_email,phone_number,image) VALUES
	 (2,'Lo de marta','Especialistas en conseguir alimentos de calidad, organicos y de proximidad. ','alimentación','https://www.lodemarta.com','marta@mail.com','634675637','http://www.pro-cert.org/wp-content/uploads/2018/02/LogoBioCanadaRGBpresse.jpg'),
	 (5,'De Campo','De Campo se especializa en productos de proximidad y organicos, trabajamos con productos de origen.','alimentación','https://www.decampo.com','decampo@mail.com','634233897','https://resizer.glanacion.com/resizer/CYTG8S8LC9PNJ0x2pm35InPpe8E=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/YTICVD45SJGWLC5W4B63A76IOQ.jpg'),
	 (4,'con ciencia','Nuestra misión es aportar a un estilo de vida más conciente y saludable para toda la comunidad. Para eso nos enfocamos en ofrecer productos organicos y de calidad.','alimentación','https://www.conciencia.com','ciencia@mail.com','634675565','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.AAxO7zForjUEsmdl5uZ_sAHaFB%26pid%3DApi&f=1'),
	 (3,'El mercadito','En el Mercadito encontraras una variedad muy amplia de productos organicos y de proximidad para que cuides de tu salud y el medioambiente.','alimentación','https://www.mercadito.com','mercaditoa@mail.com','634453434','https://noroeste.ayeryhoyrevista.com/wp-content/uploads/sites/8/2019/12/empresab.jpg'),
	 (6,'PEcos','En Pecos nos especializamos en la venta de productos ecologicos y promovemos el consumo conciente.','alimentación','https://www.pecos.com','pecos@mail.com','63424476','https://www.freepik.es/vector-gratis/diseno-logotipo-tienda-salud_7248528.htm#page=1&query=bio%20store&position=22&from_view=search'),
	 (1,'Ecoalimentaria','Ecoalimentaria es una empresa familiar dedicada a la alimentación ecológica. Nace en 2010 con el objetivo de ofrecer una gama completa de alimentos ecológicos, de temporada y proximidad.','alimentación','https://www.ecoalimentaria.es/es/','eco@mail.com','632347635','https://scontent.fbcn7-2.fna.fbcdn.net/v/t1.18169-9/74265_436358423093621_2118048283_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=cwb__zaKqcUAX8lZTe-&_nc_ht=scontent.fbcn7-2.fna&oh=00_AT_-n_w7UC1lEkHu1dNpYwHyaEbMxHMK1VgK0Rx8BqH5Kw&oe=61DDB3BE');	
	 
INSERT INTO public.stores_locations (store_id,address,city,postcode,country,maps_url) VALUES
	 (1,'carrer de Asturies 9','Barcelona','08015','Spain','https://www.google.com/maps/search/?api=1&query=ecoalimentaria+asturies+9+barcelona'),
	 (2,'carrer de Córsega 464','Barcelona','08025','Spain','https://www.google.com/maps/search/?api=1&query=carrer+de+corsega+464+barcelona'),
	 (3,'Carrer de Cardedeu 33','Barcelona','08023','Spain','https://www.google.es/maps/search/?api=1&query=carrer+de+cardedeu+33+barcelona'),
	 (4,'carrer de Rosello 314','Barcelona','08037','Spain','https://www.google.es/maps/search/?api=1&query=carrer+de+rosello+314+barcelona'),
	 (5,'carrer de Rector 65','Badalona','08912','Spain','https://www.google.es/maps/search/?api=1&query=carrer+de+rector+65+badalona');
	 
INSERT INTO public.products (id,store_id,product_type,brand,category,product_description,unit,price,producer,origin, product_image) VALUES
	 (1,1,'yogurt','La Lacteo','huevos y lacteos','','pack x6',2.10,'Laborolo','Lleida', 'https://www.freepik.es/foto-gratis/alto-angulo-yogur-natural-frascos-avena_8511824.htm#page=1&query=yogurt&position=8&from_view=search'),
	 (2,1,'vino','vent de mar','bebidas','','1 botella 750ml',4.65,'Locrau','Ganedas', 'https://www.freepik.es/foto-gratis/vista-frontal-botella-vino-tinto-negro-piso-brillante_8853957.htm#page=1&query=wine%20bottle&position=5&from_view=search'),
	 (3,1,'Leche entera','Klen','huevos y lacteos','','1 envase',1.70,'granja chocha','Solsona','https://www.freepik.es/foto-gratis/vista-cerca-botella-vidrio-abierta-taza-llena-leche-toalla-pelada-purpura-sobre-tabla-cortar-madera_17181283.htm#page=1&query=milk%20bottle&position=2&from_view=search'),
	 (4,2,'yogurt','Casandra','huevos y lacteos','','pack x6',2.90,'Laborolo','Lleida', 'https://www.freepik.es/foto-gratis/mezcla-yogurt-alto-angulo-frutas-mermelada-avena_8511818.htm#page=1&query=yogur&position=0&from_view=search'),
	 (5,2,'vino','vent de mar','bebidas','','1 botella 750ml',3.98,'Locrau','Ganedas', 'https://www.freepik.es/foto-gratis/vista-lateral-vino-tinto-botella-vidrio-vertical_7838376.htm#page=1&query=wine%20bottle&position=14&from_view=search'),
	 (6,2,'cerveza pilsener','Budel','bebidas','','pack x6',12.30,'Budel','Manresa', 'https://www.freepik.es/foto-gratis/botellas-vidrio-cerveza-vidrio-hielo-sobre-fondo-oscuro_4334664.htm#page=1&query=beer%20bottle&position=1&from_view=search'),
	 (7,3,'Turrón chocolate con avellanas','Sole','chocolate','','200 gramos',3.05,'Sole','Barbera del valles', 'https://www.freepik.es/foto-gratis/cerca-sabroso-chocolate-avellanas_6900435.htm?query=chocolate%20con%20avellanas'),
	 (8,3,'Penne','carolo','pasta','','250 gr',1.87,'niola','Vallgorguina', 'https://www.freepik.es/foto-gratis/vista-superior-penne-pasta-cruda-tazon-madera_14422322.htm'),
	 (9,3,'huevos','la roncha','huevos y lacteos','','12 unidades',3.05,'la roncha','Can Bou', 'https://www.freepik.es/foto-gratis/huevos-sacos-canamo-madera-paja_7365942.htm#page=1&query=eggs&position=0&from_view=search'),
	 (10,4,'Turrón chocolate con avellanas','Sole','chocolate','','200 gramos',2.55,'Sole','Barbera del valles', 'https://www.freepik.es/foto-gratis/cerca-sabroso-chocolate-avellanas_6900435.htm?query=chocolate%20con%20avellanas'),	
	 (11,4,'Espirulina','Sakai','superalimentos','','120 comprimidos',9.65,'Sakai','Sant cugat del valles', 'https://asesornatural.com/3326-thickbox_default/espirulina-en-polvo-125g-eco.jpg'),
	 (12,4,'Macarrones','Bonaldo','Pasta','','250 gramos',2.10,'minalta','Vielha', 'https://www.photos-public-domain.com/wp-content/uploads/2018/03/macaroni-pasta.jpg'),
	 (13,4,'cerveza pilsener','Budel','bebidas','','botella 30 cl',2.15,'Budel','Manresa', 'https://www.freepik.es/foto-gratis/botellas-vidrio-cerveza-vidrio-hielo-sobre-fondo-oscuro_4334664.htm#page=1&query=beer%20bottle&position=1&from_view=search'),
	 (14,5,'Whisky','Tutan','bebidas','','75 cl',30.12,'Tutan','Premia de mar', 'https://www.freepik.es/foto-gratis/bebida-alcoholica-botella_8501495.htm#page=1&query=whisky%20botella&position=7&from_view=search'),
	 (15,5,'Tomate','Sinusin','frutas y verduras','','1 kg',1.89,'Sinusin','Bono', 'https://www.freepik.es/foto-gratis/monton-tomates-frescos-deliciosos_5203430.htm#page=1&query=tomate&position=2&from_view=search'),
	 (16,5,'Miel','Gibson','Miel','','500 gramos',7.95,'Wallace','Sitges', 'https://www.freepik.es/foto-gratis/miel_8172476.htm#page=1&query=miel&position=2&from_view=search'),
	 (17,5,'Soja','secanla','Legumbres','','500 gr',3.15,'secanla','Manresa', 'https://www.freepik.es/foto-gratis/haba-soja_5072028.htm#page=1&query=soja&position=0&from_view=search'),
	 (18,6,'fresas','Sol de Mayo','frutas','fresas orgánicas','500g',2.99,'Sol de Mayo','Ganedas', 'https://www.freepik.es/foto-gratis/fresas-frescas-mesa-madera_4283034.htm#page=1&query=fresas&position=8&from_view=search');