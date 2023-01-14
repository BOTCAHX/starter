var { 
spawn 
} = require("child_process");
var cp = require("child_process");
var {
 promisify 
 } = require("util");
var exec = promisify(cp.exec).bind(cp)
function start(cmd) {
	return spawn(cmd, [], {
		stdio: ['inherit', 'inherit', 'inherit', 'ipc']
	})
};
start('clear')
start('bash')
console.log('♫♫♫.•*¨`*•..¸♥☼♥ ¸.•*¨`*•.♫♫♫')
console.log('╔═══════ ೋღღೋ ═══════╗')
console.log(' ೋ Terminals are ready to use  ೋ')
console.log('╚═══════ ೋღღೋ ═══════╝')  
console.log('♫♫♫.•*¨`*•..¸♥☼♥ ¸.•*¨`*•.♫♫♫')
