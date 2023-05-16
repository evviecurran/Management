const db = require("./db");

class QueryClass {
    constructor(db) {
        this.db = db;
    }
}

async viewDepartments() {
    const [rows] = await this.db.query("SELECT * FROM department");
    return rows; 
}

async viewRoles() {
    const [rows] = await this.db.query("SELECT * FROM role");
    return rows; 
}

async viewEmployees() {
    const [rows] = await this.db.query("SELECT * FROM employee");
    return rows; 
}

async addDepartment() {
    const [rows] = await this.db.query("SELECT * FROM department");
    return rows; 
}

async addRole() {
    const [rows] = await this.db.query("SELECT * FROM department");
    return rows; 
}

async addEmploye() {
    const [rows] = await this.db.query("SELECT * FROM department");
    return rows; 
}

async updateEmployeeRole() {
    const [rows] = await this.db.query("SELECT * FROM department");
    return rows; 
}

async updateEmployeeManager() {
    const [rows] = await this.db.query("SELECT * FROM department");
    return rows; 
}

async upadteEmployeeName() {
    const [rows] = await this.db.query("SELECT * FROM department");
    return rows; 
}

async viewEmployeesByManager() {
    const [rows] = await this.db.query("SELECT * FROM department");
    return rows; 
}

async viewEmployeesByDepartment() {
    const [rows] = await this.db.query("SELECT * FROM department");
    return rows; 
}


async deleteEmployee(employee_id) {
    await this.db.query("DELETE FROM employee WHERE id = ?", [employee_id]);
  }

async deleteRole(employee_id) {
    await this.db.query("DELETE FROM employee WHERE id = ?", [employee_id]);
  }
async deleteDepartment(employee_id) {
    await this.db.query("DELETE FROM employee WHERE id = ?", [employee_id]);
  }

// FINISH
async viewDepartmentBudget(department_id) {
    const [rows] = await this.db.query
}

async getEmployeesByRoleId(roleId) {
    const [rows] = await this.db.query("SELECT * FROM employee WHERE role_id = ?", [roleId]);
    return rows;
  }


module.exports = new QueryClass(db);