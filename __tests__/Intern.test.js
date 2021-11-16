const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates a new intern object', () => {
    const employee = new Employee('max', '123', '@gmail.com');
    const intern = new Intern('university of utah');

    expect(employee.name).toBe('max');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('@gmail.com');

    expect(intern.school).toBe('university of utah');
})