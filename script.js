function cot () {
    
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=1m');
    ajax.send();

    ajax.onload = function () {
        


        let obj = JSON.parse(this.responseText);
        let price1 = obj[499];
        let price0 = parseFloat(price1[4]);
        console.log(price0);
        document.getElementById('texto').innerHTML = price0;
        
        const closes = obj.data.map(candle => parseFloat(candle[4]))
        let rsi = parseFloat(calcRSI(closes));
        document.getElementById('texto1').innerHTML = rsi;

    }

    
    
}
    

setInterval(cot,400);