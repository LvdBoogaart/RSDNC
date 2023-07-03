function insertBio(artistBio) {
  let html = ``;
  artistBio.forEach((bio) => {
    return (html += `<p>${bio}</p>`);
  });
  return html;
}

function openOverlay(index) {
  const overlayData = artistOverlays[index];

  // Show the overlay
  var overlay = document.getElementById("overlay");
  overlay.style.display = "block";

  // Populate the overlay with artist data
  document.getElementById("artist-name").textContent = overlayData.name;
  document.getElementById("artist-bio").innerHTML = insertBio(
    overlayData.bio
  ); /*overlayData.bio;*/
  document.getElementById("artist-image").src = overlayData.image;

  // Embed the Spotify web player
  const spotifyPlayerDiv = document.getElementById("spotify-player");
  spotifyPlayerDiv.innerHTML = `<iframe src="https://open.spotify.com/embed/artist/${overlayData.spotifyId}" width="100%" height="420" frameborder="0" allowtransparency="false" allow="encrypted-media"></iframe>`;

  // Disable scrolling on the body while the overlay is open
  document.body.style.overflow = "hidden";
}

function closeOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";

  // Enable scrolling on the body
  document.body.style.overflow = "auto";
}

import { fetchData } from "./sheets";

// Replace 'YOUR_SHEET_ID' and 'YOUR_RANGE' with your actual values
const sheetId = "1c8l5nXF-vjHXFI8H7DB8yaxsUnHWdBTqeeP2-lrWZWg";
const range = "A2:J";

// Call the fetchData function to retrieve the data from the Google Sheet
fetchData(sheetId, range)
  .then((data) => {
    // Process the retrieved data and generate HTML elements
    // ...
    // Attach the HTML elements to the DOM
    // ...
  })
  .catch((error) => {
    // Handle any errors that occurred during data retrieval
    console.error("Error:", error);
  });
