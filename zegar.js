function myFunction() {
    //DATA
    var today = new Date();
    var month = today.getMonth() + 1;
    month = month > 9 ? month : '0' + month;
    var day = today.getDate();
    day = day > 9 ? day : '0' + day;
    var date = today.getFullYear() + '/' + month + '/' + today.getDate();

    //TIME
    var hours = today.getHours();
    hours = hours > 9 ? hours : '0' + hours;
    var minutes = today.getMinutes();
    minutes = minutes > 9 ? minutes : '0' + minutes;
    var seconds = today.getSeconds();
    seconds = seconds > 9 ? seconds : '0' + seconds;
    var time = hours + ":" + minutes + ":" + seconds;
    var dateTime = date + ' ' + time;

    document.getElementById("interval").innerHTML = dateTime;
    setInterval(myFunction, 1000);
}