function welcomeFunc() {
    window.alert("Welcome to my Official Website\nby MisticG");
};

function discordinfo() {
    window.alert("You can text me on discord using the following name:\nMisticG#4211");
};

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h)
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}