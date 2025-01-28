const fs = require('fs');

const file_name = 'log.txt';

const content = "India vs England T20 series and india win first 2  matches..\n";
// store the data with current system date 
const new_log_entry = `Some one try to open a file ${new Date().toISOString()}\n`;
//check first file exist or not if it not then append a first data then add a entry
if(!fs.existsSync(file_name))
{
  fs.writeFileSync(file_name, content, 'utf8')
  console.log("Initial data added in file..");
}
else 
{
  fs.appendFileSync(file_name, new_log_entry, 'utf8');
  console.log("New Entry added in log file");
}



function readBlocking(){
  console.log("\nBlocking data read");
  const data = fs.readFileSync(file_name, 'utf8');
  console.log(data);
}
// non blocking scope are executed after all block synchronized run after that it run in queue order
function readNonBlocking(){
  console.log("\nNon Blocking data");
  fs.readFile(file_name, 'utf8', (err, data)=>{
    if(err){
      console.log("Error occure during read file");
      return;
    }
    console.log(data);
  });
}

readBlocking();
readNonBlocking();

//Event loop demonstrate 

process.nextTick(()=>{console.log("Executes its callback immediately after the current operation completes, before moving to other phases of the event loop.")});

//execute a callback after 1 second delay
setTimeout(()=>{
console.log("setTime out example...")
}, 0);

setImmediate(()=>{
console.log("Executes its callback in the 'check' phase of the event loop, after I/O events.")
});





