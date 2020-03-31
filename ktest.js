let AWS = require('aws-sdk');
const eventBridge = new AWS.EventBridge();

exports.handler = async (event) => {
    try {
        let data = await eventBridge.putEvents({
            Entries: [{
                EventBusName: "default",
                Source: " !@#$%^&*()/",
                DetailType: " ",
                Detail: "{}",
                Time: "!@#$%^&*()_?/"
            }]
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};