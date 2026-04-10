const colors = ["var(--color1)", "var(--color2)", "var(--color3)"];

const textGroups = document.querySelectorAll(".text-group");
textGroups.forEach((group) => group.count = group.querySelectorAll("text").length);
const uses = document.querySelectorAll("#textClip use");
const blobs = document.querySelectorAll("#background path");

let currCount = 1;

function colorBlobs() {
  blobs.forEach((blob) => {
    blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
  });
}

function nextIteration() {
  // Change the color of all the blobs
  colorBlobs();

  // Show new set of lines
  uses.forEach((use, i) => {
    use.setAttribute('href', i < textGroups[currCount].count ? `#text${currCount + 1}.${i + 1}` : '');
  });
  
  currCount = currCount + 1 < textGroups.length ? currCount + 1 : 0;
}

// Since all of our blobs are using the same animation, we only
// need to listen to one of them
blobs[0].addEventListener("animationiteration", nextIteration);

colorBlobs();