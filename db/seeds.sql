INSERT INTO department (name)
VALUES 
("Under Water Basket Weaving"),
("Finance"),
("Receptionist");

INSERT INTO role (title, salary, department_id)
VALUES 
("Master Weaver", 8000.00, 1),
("Weaving Apprentice", 4000.16, 1),
("Junior Weaver", 3000.11, 1),
("Call Taker", 1223.23, 2),
("Food Getter", 2222.22, 2),
("Cleaner", 1111.29, 3),
("Stratagist", 2121.98, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Ken", "Griffey Sr", 1, null),
("Suzuki", "Ichiro", 2, 1),
("Ken", "Griffey Jr", 3, 1),
("Geno", "Smith", 3, 1),
("Tyler", "Lockett", 4, null),
("DK", "Metcalf", 5, 5),
("Bobby", "Lee", 5, 5),
("Kevin", "Heart", 6, null),
("Bert", "Krischer", 7, 8),
("Tom", "Segura", 7, 8);