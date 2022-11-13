const child_process = require('child_process');


// commands list
const commands = [
    {
        name: 'Auth-Service',
        command: 'cd Authorization-Service && npm start'
    },
    {
        name: 'Details-Pensioners-Service',
        command: 'cd Pensioner Details Module && npm start'
    },
    {
        name: 'Process-Pension-Service',
        command: 'cd Process Pension Module && npm start'
    }
];

// run command
function runCommand(command, name, callback) {
    child_process.exec(command, function (error, stdout, stderr) {
        if (stderr) {
            callback(stderr, null);
        } else {
            callback(null, `Successfully executed ${name} ...`);
        }
    });
}

// main calling function
function main() {

    commands.forEach(element => {
        runCommand(element.command, element.name, (err, res) => {
            if (err) {
                console.error(err);
            } else {
                console.log(res);
            }
        });
    });


}

// call main
main();
console.log("running...")