const fs = require('fs');
const inquirer = require('inquirer');
const template = require('./src/template');

const promptManagerInfo = promptData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Manager's name?"
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Employee ID?'

        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Email address?'

        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Office Number?'

        },
        {
            type: 'list',
            choices: ['Add Engineer', 'Add Intern', 'Finish'],
            name: 'continueOrFinish',
            message: 'Select an option.'

        },
    ])
}

const promptEngineerInfo = promptData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            Message: "Engineer's name?",
        },
        {
            type: 'input',
            name: 'engineerID',
            Message: "Employee ID?",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            Message: "Engineer's email?",
        },
        {
            type: 'input',
            name: 'engineerGithub',
            Message: "Engineer's GitHub?",
        },
        {
            type: 'list',
            choices: ['Add Engineer', 'Add Intern', 'Finish'],
            name: 'continueOrFinish',
            message: 'Select an option.'

        },
    ])
}

const promptInternInfo = promptData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            Message: "Intern's name?",
        },
        {
            type: 'input',
            name: 'internID',
            Message: "Employee ID?",
        },
        {
            type: 'input',
            name: 'internEmail',
            Message: "Intern's email?",
        },
        {
            type: 'input',
            name: 'internSchool',
            Message: "Intern's School?",
        },
        {
            type: 'list',
            choices: ['Add Engineer', 'Add Intern', 'Finish'],
            name: 'continueOrFinish',
            message: 'Select an option.'

        },
    ])
}

promptManagerInfo()
    .then(promptEngineerInfo)
    .then(promptInternInfo)
    .then(promptData => {
        const pageHTML = template(promptData);

        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) throw new Error(err);
        })
    })



// initApp = function () {
//     promptManagerInfo();
//     if (continueOrFinish === 'Add Engineer') {
//         promptEngineerInfo()
//     } else if (continueOrFinish === 'Add Intern') {
//         promptInternInfo()
//     } else {
//         const pageHTML = generatePage();

//         fs.writeFile('/dist/index.html', pageHTML, err => {
//             if (err) throw new Error(err);

//             console.log('Success');
//         })
//     }
// }

// initApp();