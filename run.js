
const request = require('request');

const run = (url, mobile = false) => {

    return new Promise( (resolve, reject) => {  

        const headers = (mobile) ? {'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36'} : {};
        
        request({url: url,headers:headers}, (error, response, body)  => {
        
            if( typeof response == "undefined" ||  error ) return reject(error);
        
            if( response.statusCode !== 200 && ! body )  return reject('Wrong status code or body response');
        
            return resolve(response.statusCode);
        
        });

    })
}


module.exports = run;
 