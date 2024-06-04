// Function to create and return the overlays container
function createOverlays(item) {
  const overlays = document.createElement("div");
  overlays.classList.add("overlays");

  const info = document.createElement("div");
  info.classList.add("info");

  const subjectName = document.createElement("h2");
  subjectName.classList.add("subject-name");

  // Splitting subject name into parts and add line break
  const subjectNameParts = item.subjectName.split(" ");
  const lastPartIndex = subjectNameParts.length - 1;
  subjectName.innerHTML =
    subjectNameParts.slice(0, lastPartIndex).join(" ") +
    "<br>" +
    subjectNameParts[lastPartIndex];

  const location = document.createElement("p");
  location.classList.add("location");
  location.textContent = item.location;

  info.appendChild(subjectName);
  info.appendChild(location);

  overlays.appendChild(info);

  return overlays;
}

// Function to create and return the image container
function createImageContainer(item) {
  const imageInteraction = document.createElement("div");
  imageInteraction.classList.add("image-interaction");

  const overlays = createOverlays(item);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image");

  const imageContent = document.createElement("div");
  imageContent.classList.add("imagecontent");

  const img = document.createElement("img");
  img.src = item.thumbNailImage || item.image;
  img.alt = item.subjectName;

  const rectangle1 = document.createElement("div");
  rectangle1.classList.add("rectangle-1");

  imageContent.appendChild(img);

  imageContainer.appendChild(rectangle1);
  imageContainer.appendChild(imageContent);

  imageInteraction.appendChild(overlays);
  imageInteraction.appendChild(imageContainer);

  // Swap the thumbnail with the main image after a brief delay
  setTimeout(() => {
    img.src = item.image;
  }, 100);
  return imageInteraction;
}

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const galleryData = [
    {
      subjectName: "fennec fox",
      location: "India",
      image: "./images/fennec-fox.png",
      thumbNailImage: "./images/fennec-fox-thumbnail.jpg",
    },
    {
      subjectName: "humpback whale",
      location: "South Africa",
      image: "./images/humpback-whale.png",
      thumbNailImage: "./images/humpback-whale-thumbnail.jpg",
    },
    {
      subjectName: "common brown baboon",
      location: "South Africa",
      image: "./images/common-brown-baboon.png",
      thumbNailImage: "./images/common-brown-baboon-thumbnail.jpg",
    },
    {
      subjectName: "spotted deer",
      location: "Amazon",
      image: "./images/spotted-deer.png",
      thumbNailImage: "./images/spotted-deer-thumbnail.jpg",
    },
  ];

  const gallery = document.getElementById("gallery");

  // Iterate over each item in the gallery data
  galleryData.forEach((item) => {
    const imageContainer = createImageContainer(item);
    gallery.appendChild(imageContainer);
  });
});
