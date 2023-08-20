

const inquirer = require("inquirer");
const QueryClass = require('./queries');
const db = require('./queries');

const queries = require('./queries');

async function main () {
    const { action } = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do",
            choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "View employees by manager",
            "View employees by department",
            "View total department budget",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Update an employee manager",
            "Update a manager's name",
            "Delete a department",
            "Delete a role",
            "Delete an employee",
            "Exit",
            ],
        },
    ]);

    switch (action) {
        case "View all departments":
        const departments = await queries.viewDepartments();
        console.table(departments);
        break;

        case "View all roles":
        const roles = await queries.viewRoles();
        console.table(roles);
        break;

        case "View all employees":
        const employees = await queries.viewEmployees();
        console.table(employees);
        break;


        case "Add a department":
      const { departmentName } = await inquirer.prompt({
        type: "input",
        name: "departmentName",
        message: "What is the name of the department?",
      });
      await queries.addDepartment(departmentName);
      console.log(`Added new department: ${departmentName}`);
      break;


      case "Add a role": 
        const roleResponses = await inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title of the role?",
            },
            {
                type: "input",
                name: "salary",
                message: "What is the role's salary",  
            },
            {
                type: "input",
                name: "departmentId",
                message: "What is the role's department ID?",
            },

    ]);
    await queries.addRole(roleResponses.title, roleResponses.salary, roleResponses.departmentId);
    console.log(`Added new role: ${roleResponses.title}`);
    break;


    case "Add an employee": 
        const employeeResponses = await inquirer.prompt([
            {
                type: "input",
                name: "firstName",
                message: "What is the first name of the employee?",
            },
            {
                type: "input",
                name: "lastName",
                message: "What is last name of the employee",  
            },
            {
                type: "input",
                name: "roleId",
                message: "What is the employee's role ID?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the employee's manager ID?",
            },

    ]);

    await queries.addEmployee(employeeResponses.firstName, employeeResponses.lastName, employeeResponses.roleId, employeeResponses.managerId);
    console.log(`Added new employee: ${employeeResponses.firstName} ${employeeResponses.lastName}`);
    break;
   

        case "Update an employee's name":
        const updateEmployeeResponses = await inquirer.prompt([
            {
                type: "input",
                name: "employeeId",
                message: "What is the ID of the employee you want to update?",
            },
            {
            type: "input",
                name: "firstName",
                message: "What is the new first name of the employee?",
            },
                {
                    type: "input",
                        name: "lastName",
                        message: "What is the new last name of the employee?",
                    },
        ]);
        await queries.updateEmployeeName(updateManagerResponses.managerId, updateManagerResponses.firstName, updateManagerResponses.lastName);
        console.log(`Updated manager ID ${updateManagerResponses.managerId}'s name to ${updateManagerResponses.firstName} ${updateManagerResponses.lastName}`);
        break;

        case "Update an manager's name":
            const updateManagerResponses = await inquirer.prompt([
        {
            type: "input",
            name: "managerId",
            message: "What is the ID of the manager you want updated?",
        },
        {
        type: "input",
            name: "firstName",
            message: "What is the new first name of the manager?",
        },
        {
            type: "input",
                name: "lastName",
                message: "What is the new lasat name of the manager?",
            },

    ]);
    await queries.updateEmployeeName(updateManagerResponses.managerId, updateManagerResponses.firstName, updateManagerResponses.lastName);
    console.log(`Updated manager ID ${updateManagerResponses.managerId}'s name to ${updateManagerResponses.firstName} ${updateManagerResponses.lastName}`);
    break;


    case "Delete a department":
        const { departmentId } = await inquirer.prompt({
          type: "input",
          name: "departmentId",
          message: "What is the ID of the department you want to delete?",
        });
        await queries.deleteDepartment(departmentId);
        console.log(`Deleted department with ID: ${departmentId}`);
        break;

        case "Delete a role":
            const { roleId } = await inquirer.prompt({
              type: "input",
              name: "roleId",
              message: "What is the ID of the role you want to delete?",
            });
            await queries.deleteRole(roleId);
            console.log(`Deleted role with ID: ${roleId}`);
            break;

            case "Delete an employee":
                const { employeeId } = await inquirer.prompt({
                  type: "input",
                  name: "employeeId",
                  message: "What is the ID of the employee you want to delete?",
                });
                await queries.deleteEmployee(employeeId);
                console.log(`Deleted employee with ID: ${employeeId}`);
                break;
            
            case "Exit":
                console.log("Exiting..");
                process.exit();
                break;
            
            default: 
            console.log("Invalid action. Please choose a valid action.");
            main();
            break;
            }

            main();
        }

        main();

