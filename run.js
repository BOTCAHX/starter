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
console.log("Installing Modules....")
var botcahx = exec('npm i systeminformation && npm i chalk@4.1.2 && npm i cfonts', (error, stdout, stderr) => {
console.log("Done....")
async function show(format) {
var chalk = require('chalk');
var log = console.log;
var si = require('systeminformation');
var cfont = require("cfonts")
var OsInfo = await si.osInfo()
var System = await si.system()
var Cpu = await si.cpu()
var Mem =  await si.mem()
var { say } = cfont
var os = require('os');  
var ut_sec = os.uptime(); 
var ut_min = ut_sec/60; 
var ut_hour = ut_min/60; 
ut_sec = Math.floor(ut_sec); 
ut_min = Math.floor(ut_min); 
ut_hour = Math.floor(ut_hour); 
ut_hour = ut_hour%60; 
ut_min = ut_min%60; 
ut_sec = ut_sec%60; 
var uptime = ut_hour + " Jam, "  + ut_min + " Menit, " + ut_sec + " Detik"
var {platform,distro,release,codename,kernel,arch,hostname,fqdn,codepage,logofile} = OsInfo
var { manufacturer,brand,vendor,family,model,stepping,revision,voltage,speed,speedMin,speedMax,governor,cores,physicalCores,processors} = Cpu
var { total,free,used,active,available,buffers,cached,slab,buffcache} = Mem
say('BOTCAHX', {
  font: 'pallet',
  align: 'left',
  colors: ['green', 'magenta']
})
let caption =`Instagram : @prm2.0\nWhatsapp : 082221792667\n`
caption +=`
• Os : ${distro} ${arch}
• Cpu : ${manufacturer} ${brand}
• Memory : ${format(used)}/${format(total)} 
• Uptime : ${uptime}

Type Command:~$
`
return log(caption)
}
show(formatBytes)
function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'
    var k = 1024
    var dm = decimals < 0 ? 0 : decimals
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    var i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
        })
start('bash')
