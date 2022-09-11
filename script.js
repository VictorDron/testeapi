function cot () {
    
    let time = '5m';
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=time');
    ajax.send();

    ajax.onload = function () {
        let obj = JSON.parse(this.responseText);
        let price = obj[498];
        let price0 = price[4]
        console.log(price0);
    }
    
}
    

setInterval(cot,400);