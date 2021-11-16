const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a new manager object', () => {
    const employee = new Employee('max', '123', '@gmail.com');
    const manager = new Manager('321');

    expect(employee.name).toBe('max');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('@gmail.com');

    expect(manager.officeNumber).toBe('321');
})