let d=new Date()
let time=d.toLocaleTimeString()

function second() {
    let d=new Date();
    let time=d.toLocaleTimeString();
    console.log(time);
}

setInterval(second, 1000);
