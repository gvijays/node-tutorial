const user = os.userInfo();
console.log (user);
console.log (`the system uptime is ${os.uptime()} seconds`)

//currentos

const currentOs = {
name:os.type(),
release:os.release(),
totalmem:os.totalmem()

}

console.log(currentOs);