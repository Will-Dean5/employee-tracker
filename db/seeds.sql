INSERT INTO department (name)
VALUES
('Management'),
('Engineering'),
('Web developer'),
('Finance'), 
('Under Water Basket Weaving');

INSERT INTO role (title, salary, department_id)
VALUES
('Manager', 165,000.00, 1),
('Intern', 20,000.00, 1),
('Top G', 20,000,000.00, 1),
('Influencer', 90,000, 1),
('Carpenter', 135,000.00, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Bobby', 'Lee', 1, null)
('Theo', 'Von', 2, null)
('Bert', 'Krischer', 3, null)
('Tom', 'Segura', 4, null)
('Kevin', 'Heart', 5 null)
