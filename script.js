let currentAudio = null;

function playSound(filename) {
  // Stop currently playing audio if any
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Create new audio and play
  currentAudio = new Audio(`sounds/${filename}`);
  currentAudio.play();
}
