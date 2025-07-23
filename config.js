const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'PUT SESSION ID HERE' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'VISPER-MD&u8A2RZbK#cGmL5qiksYGz-5pJmE3YU2sCpyg4wd1F29oKaNlOQMg' : process.env.SESSION_NAME, 

};

