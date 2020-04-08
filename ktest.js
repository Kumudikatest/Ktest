let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
const kinesis = new AWS.Kinesis();

exports.handler = async (event) => {

    try {
        let data = await kinesis.putRecord({
            StreamName: "K",
            Data: "d",
            PartitionKey: "d"
        }).promise();

    } catch (err) {
        // error handling goes here
    };
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: process.env.UserPoolId_cognitoNewpool,
            Limit: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};