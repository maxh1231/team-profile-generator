const Employee = require('../lib/Employee');

test('creates new employee object', () => {
    const employee = new Employee('max', '123', '@gmail.com');

    expect(employee.name).toBe('max');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('@gmail.com');
})

