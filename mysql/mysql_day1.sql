show databases;
use mern;
show tables;
describe students;
drop table students;

create table students (
	sid int primary key auto_increment,
    first_name char(30) not null,
    last_name char(30),
    gender enum("M","F"),
    phone_number char(12) unique
);

desc students;

create table courses(
	cid int auto_increment ,
    course_name varchar(40) unique,
    price decimal(4,2),
    teacher char(30),
    primary key(cid)
);

desc courses;

create table orders(
	oid int auto_increment primary key,
    course_id int ,
    student_id int ,
    order_time datetime,
    foreign key (course_id) references courses(cid),
    foreign key (student_id) references students(sid)
);

desc orders;

insert into students(first_name , gender , phone_number)
values
("pratik","m",1111),
("rohit","m",2323),
("sahil","m",4545);

select * from students;

insert into courses(course_name , price , teacher) values
("mongodb",4.5,"vimal"),
("devops",2.5,"harry"),
("ml",6.5,"tom");

select * from courses;

insert into orders(course_id , student_id , order_time)
values
(2 , 1 ,"2022-07-13");

select * from orders;
select course_id from orders where oid=1;

show tables;
drop tables courses , students;