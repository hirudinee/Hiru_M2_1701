let AWS = require('aws-sdk');
let SL = require('slappforge-aws');

const kinesis = new AWS.Kinesis();

exports.handler = function (event, context, callback) {


	// kinesis.describeStream({
	// 	StreamName: 'MyKStream',
	// 	Limit: 1
	// }).promise()
	// 	.then(describeStreamData => {
	// 		callback(null, describeStreamData);
	// 		console.log(describeStreamData);
	// 	})
	// 	.catch(err => {
	// 		callback(null, err);
	// 		console.log(err);
	// 	});


	kinesis.describeStream({
		StreamName: 'Hiru_stream'
	}).promise()
		.then(describeStreamData => {
			// your logic goes here
		})
		.catch(err => {
			// error handling goes here
		});



	//callback(null, 'Successfully executed');
	console.log('End of the execution');
}