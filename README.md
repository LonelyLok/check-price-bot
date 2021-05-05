## Check crypto price and send notification on desktop

* Use CoinGecko api (https://www.coingecko.com/en/api)
* config.json have the setting
    * coinId is the id for the coin
    * pullRateSec is how many api call per second
    * notificationSetting have price and when
        * price is the price in usd
        * when is determine either notify above the price or below the price

### How to run
```
git clone https://github.com/LonelyLok/check-price-bot.git
cd check-price-bot
npm install
npm run build
node test.js
```