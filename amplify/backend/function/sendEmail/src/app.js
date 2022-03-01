/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const AWS = require('aws-sdk')

const config = {
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
  sendEmail: process.env.SEND_EMAIL,
  receiveEmail: process.env.RECEIVE_EMAIL
}

const ses = new AWS.SES(config);
// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


app.post('/sendEmail', function(req, res) {
  const { name, email, subject, message } = req.body;
  console.log(req.body);
  const params = {
    Source: config.sendEmail,
    ReturnPath: config.sendEmail,
    Destination: {
      ToAddresses: [
        config.receiveEmail
      ]
    },
    Message: {
      Subject: {
        Data: `Carl Solli Website | ${subject}`
      },
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
            <h1>${name}</h1>
            <p>${message}</p>
            <h3>Email: ${email}</h3>
          `
        }
      }
    }
  }

  ses.sendEmail(params, (error, data) => {
    if(error){
      res.status(500).json({error: error});
    } else {
      res.status(200).json({
        message: 'Contact was successfull!',
        data: data
      })
    }
  })

});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
