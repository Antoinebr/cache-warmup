const request = require('request');
const parser = require('xml2json');

module.exports = get = (url) => {

    return new Promise((resolve, reject) => {

        request({
            url: url
        }, (error, response, body) => {

            if (typeof response == "undefined" || error) return reject(error);

            if (response.statusCode !== 200 && !body) return reject('Wrong status code or body response');

            return resolve(JSON.parse(parser.toJson(body)));

        });

    })
}