DROP DATABASE IF EXISTS `Goomer`;

CREATE DATABASE `Goomer`;

CREATE TABLE `Goomer`.`restaurants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `image_url` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `Goomer`.`address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_restaurant` INT NOT NULL,
  `postal_code` INT NULL,
  `street` VARCHAR(255) NOT NULL,
  `number` INT NULL,
  `complement` VARCHAR(255) NULL,
  `city` VARCHAR(100) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_rest_idx` (`id_restaurant` ASC) VISIBLE,
  CONSTRAINT `id_rest`
    FOREIGN KEY (`id_restaurant`)
    REFERENCES `Goomer`.`restaurants` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `Goomer`.`restaurant_hours` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_restaurant` INT NOT NULL,
  `start` TIME NULL,
  `end` TIME NULL,
  `day_week` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_restaurant_idx` (`id_restaurant` ASC) VISIBLE,
  CONSTRAINT `id_restaurant`
    FOREIGN KEY (`id_restaurant`)
    REFERENCES `Goomer`.`restaurants` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `Goomer`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `Goomer`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `image_url` VARCHAR(255) NULL,
  `price` INT NOT NULL,
  `id_category` INT NULL,
  `id_restaurant` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_category_idx` (`id_category` ASC) VISIBLE,
  INDEX `restaurant_id_idx` (`id_restaurant` ASC) VISIBLE,
  CONSTRAINT `id_category`
    FOREIGN KEY (`id_category`)
    REFERENCES `Goomer`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `restaurant_id`
    FOREIGN KEY (`id_restaurant`)
    REFERENCES `Goomer`.`restaurants` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `Goomer`.`offers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_product` INT NOT NULL,
  `description` VARCHAR(255) NULL,
  `price` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_product_idx` (`id_product` ASC) VISIBLE,
  CONSTRAINT `id_product`
    FOREIGN KEY (`id_product`)
    REFERENCES `Goomer`.`products` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `Goomer`.`offer_calendar` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_offer` INT NOT NULL,
  `start` TIME NULL,
  `end` TIME NULL,
  `day_week` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_offer_idx` (`id_offer` ASC) VISIBLE,
  CONSTRAINT `id_offer`
    FOREIGN KEY (`id_offer`)
    REFERENCES `Goomer`.`offers` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

INSERT INTO Goomer.restaurants (name, image_url)
  VALUES
    ('Mais Sabor', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0rm36h5J9yfG_Cb37l48DrJMS4TsUJBdhw&usqp=CAU'),
    ('Restaurante da Ilha','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-c5QYggP1bi9wBT16MJO9ULK-oDQAoEFzA&usqp=CAU'),
    ('Café Gourmet', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0ZRmXBJYtQz4Ip5iZfT44GsmfgxHPL5-EA&usqp=CAU');

INSERT INTO Goomer.address (id_restaurant, postal_code, street, number, complement, city, state)
  VALUES
    (1, 35680000, 'Rua das Flores', 20, '', 'Belo Horizonte', 'Minas Gerais'),
    (2,45012000, 'Rua Bonita', 10, '', 'Florianópolis', 'Santa Catarina'),
    (3, 79090000, 'Rua Dois', 100, '', 'Belo Horizonte', 'Minas Gerais');

INSERT INTO Goomer.restaurant_hours (id_restaurant, start, end, day_week)
  VALUES
    (1, '18:00:00', '22:00:00', 1),
	(1, '18:00:00', '22:00:00', 2),
	(1, '18:00:00', '22:00:00', 3),
	(1, '18:00:00', '22:00:00', 4),
	(1, '18:00:00', '22:00:00', 5),
	(2, '12:00:00', '16:00:00', 6),
	(2, '12:00:00', '16:00:00', 7),
	(3, '10:00:00', '18:00:00', 2),
    (3, '10:00:00', '18:00:00', 3),
    (3, '10:00:00', '18:00:00', 4),
    (3, '10:00:00', '18:00:00', 5),
    (3, '10:00:00', '18:00:00', 6);

INSERT INTO Goomer.categories (name)
  VALUES
    ('bebidas'),
    ('doces'),
    ('salgados'),
    ('sucos'),
    ('pratos'),
    ('porções'),
    ('sanduíches');

INSERT INTO Goomer.products (name, image_url, price, id_category, id_restaurant)
  VALUES
    ('Prato feito do dia', '', 1500, 5, 1),
    ('Macarrão a bolonhesa', '', 1500, 5, 1),
    ('Refrigerante de maçã', '', 500, 1, 1),
    ('Suco de laranja', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpC03U8LZd4X7rLU71QtUeEXRYjtpXiW3FzA&usqp=CAU', 800, 4, 1),
    ('Arroz de polvo', '', 5500, 5, 2),
    ('Camarão ao alho', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJlHPtNHA4hYxIzWf9FEeD-7bjuQng8lepQ&usqp=CAU', 4000, 6, 2),
    ('Batata frita', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvSQYRFhsLse57Lx4gHpuoaMAiy_eI3bFtw&usqp=CAU', 2500, 6, 2),
    ('Suco de laranja', '', 1000, 4, 2),
    ('Cerveja lata', '', 1200, 1, 2),
    ('Café coado', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_UJhjZH6GNujdd6ZX_dCOS0yhFjxGsb0JLg&usqp=CAU', 500, 1, 3),
    ('Cappuccino', '', 1000, 1, 3),
    ('Café com leite', '', 800, 1, 3),
    ('Pão de queijo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3l3UHu1SnV65InMBKwDSYMasiSEfVsH3TQ&usqp=CAU', 900, 3, 3),
    ('Torta de limão', '', 1200, 2, 3);

INSERT INTO Goomer.offers (id_product, description, price)
  VALUES
    (2, 'Toda segunda-feira o macarrão a bolonhesa está com desconto de 5 reais!', 1000);

INSERT INTO Goomer.offer_calendar (id_offer, start, end, day_week)
  VALUES
    (1, '18:00:00', '22:00:00', 1);
