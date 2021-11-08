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
  accessKeyId: 'AKIAZSWMDM2YPLRRVAGS',
  secretAccessKey: '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',
  region: 'us-west-2',
  adminEmail: 'carl_solli@hotmail.com'
}
var ses = new AWS.SES(config)
// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const emailHandler = (req, res) => {
  const { name, email, subject, message } = req;
  const charset = "UTF-8";
  const body_html = `<html>
  <head></head>
  <body>
    <h1>Amazon SES Test (SDK for JavaScript in Node.js)</h1>
    <p>This email was sent with
      <a href='https://aws.amazon.com/ses/'>Amazon SES</a> using the
      <a href='https://aws.amazon.com/sdk-for-node-js/'>
        AWS SDK for JavaScript in Node.js</a>.</p>
  </body>
  </html>`;

  var params = {
    Source: config.adminEmail,
      Destination: {
        ToAddresses: [
          'csolli@calstatela.edu'
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: 'This is the body of my email!',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `Hello, Carl!`,
        }
      },
    };

  return ses.sendEmail(params).promise()
}
app.post('/contact', emailHandler);

app.post('/contact/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
