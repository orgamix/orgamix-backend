"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
//begin setup for testing
/*const isLocal = (process.env.NODE_ENV !== "production");
if(isLocal) {
    
    import cors from 'cors'; //for cross origin access during testing. Ajax calls, etc.
    app.use(cors()); // !!! ALLOWS ALL CROSS ORIGINS. LATER ON REDUCE TO ONLY SPECIFIC ROUTES
    app.enable('trust proxy'); //use only during testing

};
*/
//end of setup for testing
//these two lines are needed to be able to read 'req.body' info from API requests from front end.
//https://stackoverflow.com/questions/11625519/how-to-access-the-request-body-when-posting-using-node-js-and-express
const body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1.default.json()); // support json encoded bodies
//export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Documents/babyneedslove/babyneedslove-bbb16727a0aa.json"
//import {Datastore} from '@google-cloud/datastore';
//NEED PROPER authentication info for Orgamix project. 
/*
const GDatabase =  new Datastore({
    //projectId: 'babyneedsloveprojectid',
    //keyFilename: 'babyneedslove-bbb16727a0aa.json'
});
*/
///////////////////
//API METHODS BELOW
/////////////////
app.get('/api/v1', (req, res) => {
    console.log('Welcome to Orgamix; feel at home');
    let results = 'Welcome to Orgamix; feel at home';
    res.send(JSON.stringify({ results }));
}); //end of app.get('/'
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
//# sourceMappingURL=server.js.map