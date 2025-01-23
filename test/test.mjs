import AWS from 'aws-sdk';

const s3 = new AWS.s3();

async function main(event) {
    try {

        console.log(`event: ${JSON.stringify(event)}`);

        return {
            statusCode: 200,
            body: JSON.stringify("Success")
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify("Error")
        }
    }
}