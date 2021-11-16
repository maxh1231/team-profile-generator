const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates new engineer object', () => {
    const employee = new Employee('max', '123', '@gmail.com');
    const engineer = new Engineer('maxh1231')

    expect(employee.name).toBe('max');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('@gmail.com');

    expect(engineer.github).toBe('maxh1231');
})