const config = require('./config.json');
const cron = require('node-cron');
const notifier = require('node-notifier');
import {api} from './src/api';

console.log(`running a task every ${config.pullRateSec} seconds`);

cron.schedule(`*/${config.pullRateSec} * * * * *`, () => {
    api().getPriceFromId({id: `${config.coinId}`}).then((r:any)=>{
      const price:number = r[`${config.coinId}`]['usd']
      const message:string = `${config.coinId} current price is usd ${price}, notification is set notify when ${config.notificationSetting.when} ${config.notificationSetting.price}`;
      ((price > Number(`${config.notificationSetting.price}`) && config.notificationSetting.when === 'above')||(price < Number(`${config.notificationSetting.price}`) && config.notificationSetting.when === 'below')) &&  notifier.notify(message);
      console.log(new Date(),r)
    })
  });