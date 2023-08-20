INSERT INTO department (name)
VALUES  ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES  ('Sales Manager', 100000, 1),
        ('Sales Associate', 80000, 1),
        ('Software Engineer', 900000, 2),
        ('Lead Engineer', 150000, 2),
        ('Accountant', 850000, 3),
        ('HR Manager', 65000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('George', 'Doe', 1, NULL),
        ('Rain', 'Wilson', 2, 1),
        ('Tracey', 'Morgan', 3, 2),
        ('Serena', 'Williams', 4, 2),
        ('Karen', 'Hugh', 5, NULL),
        ('Rachel', 'Keller', 6, 5);
        
