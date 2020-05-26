const http = require('http');
const YOUR_KEY = '';

module.exports = {
    setEffect: function(name){
        const options = {
            hostname: '192.168.1.166',
            port: 16021,
            path: '/api/v1/' + YOUR_KEY + '/effects/',
            method: 'PUT'
        };
        const req = http.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`);
        });
        req.on('error', error => {
            console.error(error);
        });
        req.write(`{"select" : "${name}"}`);
        req.end();
    },

    toggleOnOff: function(code){
        const options = {
            hostname: '192.168.1.166',
            port: 16021,
            path: '/api/v1/' + YOUR_KEY + '/state/',
            method: 'PUT',
            header: 'Content-Type: application/json'
        };
        const req = http.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`);
        });
        req.on('error', error =>{
            console.error(error);
        });
        req.write(`{"on": {"value": ${code}}}`);
        req.end();
    },

    setBrightness: function(brightness){
        const options = {
            hostname: '192.168.1.166',
            port: 16021,
            path: '/api/v1/' + YOUR_KEY + '/state/',
            method: 'PUT'
        };
        const req = http.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`);
        });
        req.write(`{"brightness" : {"value":${brightness}, "duration":0}}`);
        req.end();
    }

};