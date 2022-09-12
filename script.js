function cot () {
    
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=1m');
    ajax.send();

    ajax.onload = function () {
        
        let obj = JSON.parse(this.responseText);
        let price = obj[499];
        let price0 = parseFloat(price[4]);
        console.log(price0);
        document.getElementById('texto').innerHTML = price0;

    }
    
}
    

setInterval(cot,400);