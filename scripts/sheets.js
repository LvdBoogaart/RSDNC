const { google } = require("googleapis");

// Load the credentials from a JSON file (created during the OAuth client ID creation process)
const credentials = require("./credentials.json");

// Specify the Google Sheets API version
const version = "v4";

// Create a new Google Sheets API client
const sheets = google.sheets({ version, auth: credentials });

async function fetchData(sheetId, range) {
  try {
    // Make an API request to retrieve the data
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: range,
    });

    const data = response.data.values;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

module.exports = { fetchData };
