const artistData = [];

// Assuming 'data' contains the retrieved data from the Google Sheets API
for (let i = 1; i < data.length; i++) {
  const row = data[i];

  // Extract the relevant data from each column of the row
  const id = row[0];
  const artistName = row[1];
  const day = row[2];
  const confirmed = row[3] === "TRUE"; // Convert to boolean
  const type = row[4];
  const bio = row[5];
  const imageSmall = row[6];
  const imageLarge = row[7];
  const mediaLink = row[8];

  // Create the artistData object
  const artist = {
    artistName: artistName,
    bio: [bio], // Convert the bio string to an array
    imageSmall: imageSmall,
    imageLarge: imageLarge,
    mediaLink: mediaLink,
    confirmed: confirmed,
    artistType: type,
    day: day,
    time: time,
  };

  // Add the artistData object to the array
  artistData.push(artist);
}

// Output the artistData array
console.log(artistData);
