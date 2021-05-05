const got = require('got');

interface Api {
    ping:()=>Promise<Object>,
    getPriceFromId:({id}:{id: string}) => Promise<Object>
}

export function api (){
    const hostURL = 'https://api.coingecko.com/api/v3';
    const self:Api = {
        ping: async () => {
            const resp = await got(`${hostURL}/ping`)
            return (resp && resp.body) ? JSON.parse(resp.body) : {}
        },

        getPriceFromId: async ({id}:{id: string})=>{
            const resp = await got(`${hostURL}/simple/price`,{searchParams: {ids: id, vs_currencies: 'usd' }});
            return (resp && resp.body) ? JSON.parse(resp.body) : {}
        }
    };

    return self;
}