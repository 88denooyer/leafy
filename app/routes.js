const sceneList = [{sceneItem: 'Bedtime'}, {sceneItem: 'Color Burst'}, {sceneItem: 'Dracarys'}, {sceneItem: 'Fade In'},
    {sceneItem: 'Fireworks'}, {sceneItem: 'Flames'}, {sceneItem: 'Inner Peace'},
    {sceneItem: 'Just Like St Patricks Day'}, {sceneItem: 'Meteor Shower'}, {sceneItem: 'Nemo'},
    {sceneItem: 'Netflix And Chill'}, {sceneItem: 'Northern Lights'}, {sceneItem: 'Paint Splatter'},
    {sceneItem: 'Pulse Pop Beats'}, {sceneItem: 'Red Nightlight'}, {sceneItem: 'Sick'}, {sceneItem: 'Scanner'}];
let help = require('./modules/stems');
var bodyParser = require('body-parser');
var encodedParser = bodyParser.urlencoded({ extended: false });

function isSceneChangeRequest(req){
    let requestInfo = JSON.parse(JSON.stringify(req.body));
    //console.log(requestInfo.value);
    if(requestInfo.name === 'true' || requestInfo.name === 'false'){
        // then this request SHOULD be a power toggle request
        // complete request
        let status = null;
        if(requestInfo.name === 'true'){
            status = 'on';
        }
        else{
            status = 'off';
        }
        console.log('Request Received!');
        console.log('Changing status to ' + status);
        help.toggleOnOff(requestInfo.name);
    }
    else{
        // this request SHOULD be a scene change
        // complete request
        console.log('Request Received!');
        console.log('Changing scene to: ' + requestInfo.name);
        help.setEffect(requestInfo.name);
    }
}

function determineRequest(req){
    let requestInfo = req.body.name;
    if(requestInfo >= 1 || requestInfo <= 100){
        console.log('Determined Request... changing brightness');
        changeBrightness(req);
    }
    else{
        console.log('Determined Request... scene change or toggle power');
        isSceneChangeRequest(req);
    }

}

function changeBrightness(req){
    let requestInfo = req.body.name;
    console.log('Request Received!');
    console.log('Changing brightness to ' + requestInfo);
    help.setBrightness(requestInfo);
}


module.exports = function(app) {
    app.get('/', function(req, res){
        res.render(__dirname + '/public/index.ejs', {scenes: sceneList});
    });
    app.post('/', encodedParser, function(req, res){
        determineRequest(req);
        res.render(__dirname + '/public/index.ejs', {scenes: sceneList});
    })
};