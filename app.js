
function cot () {
    
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=1m');
    ajax.send();


    function calcRSI(closes) {

        let gains = 0;
        let losses = 0;
        
        for(let i = obj.length - 6; i < obj.length; i++){
            const diff = obj[i] -  obj[i - 1];
            if (diff >= 0)
               gains += diff;
            else
               losses -= diff;   
        }
        const strength = gains/losses;
        return 100 - (100/ (1 + strength));
        
    }
    
    ajax.onload = function () {
        
        let obj = JSON.parse(this.responseText);
        let price1 = obj[499];
        let price0 = parseFloat(price1[4]);
        console.log(obj.length);
        document.getElementById('texto2').innerHTML = price0;
        
        const closes = obj.data.map(candle => parseFloat(candle[4]))
        let rsi = parseFloat(calcRSI(closes));
        console.log(rsi);
        

    }

    
    
}
    

setInterval(cot,1000);