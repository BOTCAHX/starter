/**
Create by : BOTCAHX
Repo : https://github.com/BOTCAHX/starter
**/

async function connection() {
  const readline = require('readline');
  const { spawn } = require('child_process')
  const { promisify } = require('util')
  const exec = promisify(require('child_process').exec)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    fgGreen: '\x1b[32m',
    fgRed: '\x1b[31m',
    fgYellow: '\x1b[33m',
    fgCyan: '\x1b[36m',
  }
  let terminal_in_use = false; // true;

  function start(cmd) {
    if (!terminal_in_use && cmd === "bash") {
      terminal_in_use = true;
      console.log(`${colors.fgRed}${colors.bright}Terminal Ready To Use: -$ ${colors.reset}`);
      try {
        process.stdin.setRawMode(false);
      } catch (err) {
        console.log(`${colors.fgRed}${colors.bright}Error: ${err.message}${colors.reset}`);
        process.stdin.setRawMode(true);
        return;
      }
      const terminal = spawn(cmd, [], {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      }).on('exit', () => {
        terminal_in_use = false; // true;
      }).on('error', () => {
        terminal_in_use = false; // true;
      });
      return terminal;
    } else {
      return spawn(cmd, [], {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
    }
  }

  function loading() {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= 100) { //loading persentase 
        clearInterval(interval);
        console.log(`${colors.fgGreen}${colors.bright}Loading completed!${colors.reset}`);
        console.log(`${colors.fgRed}${colors.bright}Select Number [1] To Continue${colors.reset}`);
      } else {
        console.log(`${colors.fgGreen}${colors.bright}[${i}%] Loading...${colors.reset}`);
        i += 1;
      }
    }, 50); // seconds 
  }

  let choice = "";

  while (choice !== '12') {  // jumlah case
    console.log(`${colors.fgYellow}${colors.bright}Choose an option:${colors.reset}`);
    console.log(`${colors.fgCyan}${colors.bright}[1] Use Terminal${colors.reset}`);
    console.log(`${colors.fgCyan}${colors.bright}[2] WhatsApp | RTXZY-MD Bot${colors.reset}`);
    console.log(`${colors.fgCyan}${colors.bright}[3] WhatsApp | BETABOTZ-MD2 Bot${colors.reset}`);
    console.log(`${colors.fgCyan}${colors.bright}[4] WhatsApp | Dylux-fg Bot${colors.reset}`);
    console.log(`${colors.fgCyan}${colors.bright}[5] WhatsApp | TheMystic-Bot Bot${colors.reset}`);
    console.log(`${colors.fgCyan}${colors.bright}[6] WhatsApp | Neoxr Bot${colors.reset}`);
    console.log(`${colors.fgCyan}${colors.bright}[7] WhatsApp | Azami Bot${colors.reset}`);
    console.log(`${colors.fgCyan}${colors.bright}[8] Telegram | TikTok Bot${colors.reset}`);
    console.log(`${colors.fgCyan}${colors.bright}[9] Telegram | Ai Bot${colors.reset}`);
    console.log(`${colors.fgCyan}${colors.bright}[10] Telegram | Tele Bot${colors.reset}`);   
    console.log(`${colors.fgCyan}${colors.bright}[11] Clear Console Logs${colors.reset}`);
    console.log(`${colors.fgCyan}${colors.bright}[12] Kill All Process${colors.reset}`);

    choice = await new Promise((resolve, reject) => {
      rl.question("Enter your choice: ", (input) => {
        resolve(input);
      });
    });

    switch (choice) {
      case '1':
        console.log(`${colors.fgRed}${colors.bright}Use Terminal selected${colors.reset}`);
        start('bash')
        choice = '12'; // bertambah = jumlah case
        break;
      case '2':
        console.log(`${colors.fgRed}${colors.bright}Starting git clone...${colors.reset}`);
        await exec('git clone https://github.com/BOTCAHX/RTXZY-MD');
        console.log(`${colors.fgGreen}${colors.bright}Git clone completed!${colors.reset}`);
        start('clear')
        loading();
        break;
      case '3':
      console.log(`${colors.fgRed}${colors.bright}Starting git clone...${colors.reset}`);
        await exec('git clone https://github.com/ERLANRAHMAT/BETABOTZ-MD2');
        console.log(`${colors.fgGreen}${colors.bright}Git clone completed!${colors.reset}`);
        start('clear')
        loading();
        break;
        case '4':
      console.log(`${colors.fgRed}${colors.bright}Starting git clone...${colors.reset}`);
        await exec('git clone https://github.com/FG98F/dylux-fg');
        console.log(`${colors.fgGreen}${colors.bright}Git clone completed!${colors.reset}`);
        start('clear')
        loading();
        break;
        case '5':
      console.log(`${colors.fgRed}${colors.bright}Starting git clone...${colors.reset}`);
        await exec('git clone https://github.com/BrunoSobrino/TheMystic-Bot-MD');
        console.log(`${colors.fgGreen}${colors.bright}Git clone completed!${colors.reset}`);
        start('clear')
        loading();
        break;
        case '6':
      console.log(`${colors.fgRed}${colors.bright}Starting git clone...${colors.reset}`);
        await exec('git clone https://github.com/neoxr/neoxr-bot');
        console.log(`${colors.fgGreen}${colors.bright}Git clone completed!${colors.reset}`);
        start('clear')
        loading();
        break;
        case '7':
      console.log(`${colors.fgRed}${colors.bright}Starting git clone...${colors.reset}`);
        await exec('git clone https://github.com/clicknetcafe/azamibot-md-multi');
        console.log(`${colors.fgGreen}${colors.bright}Git clone completed!${colors.reset}`);
        start('clear')
        loading();
        break;
        case '8':
      console.log(`${colors.fgRed}${colors.bright}Starting git clone...${colors.reset}`);
        await exec('git clone https://github.com/BOTCAHX/tiktok-tele-bot');
        console.log(`${colors.fgGreen}${colors.bright}Git clone completed!${colors.reset}`);
        start('clear')
        loading();
        break;
        case '9':
      console.log(`${colors.fgRed}${colors.bright}Starting git clone...${colors.reset}`);
        await exec('git clone https://github.com/ERLANRAHMAT/ai-telebot');
        console.log(`${colors.fgGreen}${colors.bright}Git clone completed!${colors.reset}`);
        start('clear')
        loading();
        break;
        case '10':
      console.log(`${colors.fgRed}${colors.bright}Starting git clone...${colors.reset}`);
        await exec('git clone https://github.com/ERLANRAHMAT/telebot');
        console.log(`${colors.fgGreen}${colors.bright}Git clone completed!${colors.reset}`);
        start('clear')
        loading();
        break;                              
      case '11':
        start('clear');
        console.log(`${colors.fgGreen}${colors.bright}Console cleared${colors.reset}`);
        break;
      case '12':
        console.log(`${colors.fgGreen}${colors.bright}Killing all processes ...${colors.reset}`);
        process.exit();
        break;
      default:
        console.log(`${colors.fgRed}${colors.bright}Invalid option${colors.reset}`);
        break;
    }
  }

  rl.close();
}

connection();
