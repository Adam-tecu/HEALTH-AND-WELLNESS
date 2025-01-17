const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

const getGoogleFitData = async (userId) => {
  // Example integration with Google Fit API
  const tokens = await getUserTokens(userId); // Function to get stored tokens for the user
  oauth2Client.setCredentials(tokens);

  const fitness = google.fitness({ version: 'v1', auth: oauth2Client });
  const response = await fitness.users.dataSources.list({
    userId: 'me',
  });

  return response.data;
};

module.exports = getGoogleFitData;