// Run the firebase cloud functions locally for testing
firebase serve

// Deploy the serverless functions
firebase deploy

Notes:
- Under firebase.json there is a rewrites section that has a "source". You will need to change that when there are routes you want to change in the API as well.