CREATE TABLE Building(b_id int primary key, b_name varchar(50) NOT NULL, mar_floor int NOT NULL);
insert into building values(1, 10, 'B1');
insert into building values(2, 20, 'B2');
insert into building values(3, 15, 'B3');

select * from building;

create table floor(b_id int ,CONSTRAINT fk_building FOREIGN KEY (b_id) REFERENCES building(b_id),up_request bool, down_request bool, cur_floor int not null);
insert into floor values(1, False, False, 1);
insert into floor values(1, False, False, 2);
insert into floor values(1, False, False, 3);

select * from floor;

create table lift(b_id int ,CONSTRAINT fk_building FOREIGN KEY (b_id) REFERENCES building(b_id), lift_no int not null, cur_floor int not null, capacity int not null, cur_capacity int not null, status bool not null, direction varchar(10) not null);
insert into lift values(1, 1, 2, 10, 0, False, 'Default');
insert into lift values(1, 3, 5, 10, 3, True, 'Up');
insert into lift values(1, 2, 6, 10, 1, True, 'Down');

select * from lift;

create table request(b_id int ,CONSTRAINT fk_building FOREIGN KEY (b_id) REFERENCES building(b_id), request_id int primary key, cur_floor int not null, destination_floor int not null, direction varchar(10) not null);
insert into request values(1, 1, 0, 4, 'Up');
insert into request values(2, 2, 2, 6, 'Up');
insert into request values(1, 3, 6, 0, 'Down');

select * from request;

select b_name, lift_no, capacity, status from building left join lift on lift.b_id = lift.b_id where b_name = 'B1';

select lift.lift_no, lift.cur_floor from request left join lift on lift.cur_floor = request.cur_floor where lift.b_id = 1;

select * from request where b_id = (select b_id from building where b_name = 'B1');

select building.b_name, lift.lift_no, lift.cur_floor, lift.direction from building left join lift on building.b_id = lift.b_id where lift.direction = 'Default';
