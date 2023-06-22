function openOverlay(index) {
  const overlayData = artistOverlays[index];

  // Show the overlay
  var overlay = document.getElementById("overlay");
  overlay.style.display = "block";

  // Populate the overlay with artist data
  document.getElementById("artist-name").textContent = overlayData.name;
  document.getElementById("artist-bio").textContent = overlayData.bio;
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
