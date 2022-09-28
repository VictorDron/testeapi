function calcRSI(closes) {

    let gains = 0;
    let losses = 0;
    
    for(let i = closes.length - 12; i < closes.length; i++){
        const diff = closes[i] - closes [i - 1];
        if (diff >= 0)
           gains += diff;
        else
           losses -= diff;   
    }
    const strength = gains/losses;
    return 100 - (100/ (1 + strength));
    
}

async function cot () {
    
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=1m');
    ajax.send();

    
    ajax.onload = function () {
        
        let obj = JSON.parse(this.responseText);
        let price1 = obj[499];
        let price0 = parseFloat(price1[4]);
        console.log(obj.length);
        document.getElementById('texto2').innerHTML = price0;
        
        const closes = obj.map(candle => parseFloat(candle[4]))
        let rsi = parseFloat(calcRSI(closes).toFixed(2));
        console.log(rsi);
        document.getElementById('rsia').innerHTML = rsi+'%';
        
        var buy = [0];
        var sell = [0];

        if (rsi < 15) {

           document.getElementById('img_eth').style.backgroundColor ='green';

        }else{
            document.getElementById('img_eth').style.backgroundColor = 'yellow';
        }

        if (rsi > 55) {
            document.getElementById('img_eth').style.backgroundColor ='red';
            
        }
    }
    
}
    
setInterval(cot,1000);