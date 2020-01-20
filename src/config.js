export default {
    MAX_ATTACHMENT_SIZE: 5000000,

    STRIPE_KEY: "PUBLISHABLE_STRIPE_KEY_GOES_HERE",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notespd-app-upload"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: " https://2lgms07mtl.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_tPdejmFXD",
        APP_CLIENT_ID: "7mib6q8nqm0sq24mihno4333uo",
        IDENTITY_POOL_ID: "us-east-1:6a16aa56-9ea4-45a9-8bd2-edd689453bac"
    }
};

