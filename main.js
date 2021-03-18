function clock() {
    var hour = document.querySelector('#hour');
    var minutes = document.querySelector('#minutes');
    var seconds = document.querySelector('#seconds');
    var ampm = document.querySelector('#ampm');
    
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = 'AM';

    if(h < 12) {
        ampm.innerHTML = 'PM';
    }

    
}

var interval = setInterval(clock,1000);