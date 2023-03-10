var { 
spawn, 
exec 
} = require('child_process');
var cp = require('child_process')
var { promisify } = require('util');
function start(cmd) {
return spawn(cmd, [], {
stdio: ['inherit', 'inherit', 'inherit', 'ipc']
})
}
start('clear')
console.log("Installing modules....")
var botcahx = exec('npm i systeminformation && npm i chalk@4.1.2 && npm i cfonts', (error, stdout, stderr) => {
console.log("Done....")
async function show(format) {
const chalk = require('chalk');
const log = console.log;
const si = require('systeminformation');
const cfont = require("cfonts")
let OsInfo = await si.osInfo()
let System = await si.system()
let Cpu = await si.cpu()
let Mem =  await si.mem()
const { say } = cfont
const os = require('os');  
var ut_sec = os.uptime(); 
var ut_min = ut_sec/60; 
var ut_hour = ut_min/60; 
ut_sec = Math.floor(ut_sec); 
ut_min = Math.floor(ut_min); 
ut_hour = Math.floor(ut_hour); 
ut_hour = ut_hour%60; 
ut_min = ut_min%60; 
ut_sec = ut_sec%60; 
let uptime = ut_hour + " Jam, "  + ut_min + " Menit, " + ut_sec + " Detik"
let {platform,distro,release,codename,kernel,arch,hostname,fqdn,codepage,logofile} = OsInfo
let { manufacturer,brand,vendor,family,model,stepping,revision,voltage,speed,speedMin,speedMax,governor,cores,physicalCores,processors} = Cpu
let { total,free,used,active,available,buffers,cached,slab,buffcache} = Mem
say('BOTCAHX', {
  font: 'pallet',
  align: 'left',
  colors: ['green', 'magenta']
})
let teks =`Instagram : @prm2.0\nWhatsapp : 082221792667\n`
teks +=`
• Os: ${distro} ${arch}
• Cpu : ${manufacturer} ${brand}
• Memory : ${format(used)}/${format(total)} 
• Uptime : ${uptime}

Terminal Sudah siap, silahkan ketik command file mu di bawah

`
return log(teks)
}
show(formatBytes)
function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
        })
start('bash')
