
import http from 'http';
import express from 'express';

const app = express();

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
import bodyParser from 'body-parser';
app.use(bodyParser.json()); // support json encoded bodies

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


app.get('/', (req, res) => {

  console.log('Welcome to Orgamix; feel at home');
  let results : string = 'Welcome to Orgamix; feel at home';
  res.send(JSON.stringify( { results}));

});//end of app.get('/'




// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});