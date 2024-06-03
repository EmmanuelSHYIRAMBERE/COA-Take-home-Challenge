// Function to create and return the overlays container
function createOverlays(item) {
  const overlays = document.createElement("div");
  overlays.classList.add("overlays");

  const subjectName = document.createElement("h2");
  subjectName.classList.add("subject-name");
  const subjectNameParts = item.subjectName.split(" ");
  const lastPartIndex = subjectNameParts.length - 1;
  subjectName.innerHTML =
    subjectNameParts.slice(0, lastPartIndex).join(" ") +
    "<br>" +
    subjectNameParts[lastPartIndex];

  const location = document.createElement("p");
  location.classList.add("location");
  location.textContent = item.location;

  overlays.appendChild(subjectName);
  overlays.appendChild(location);

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
  img.src = item.image;
  img.alt = item.subjectName;
  img.addEventListener("click", () =>
    openFullSizeImage(item.image, item.subjectName)
  );

  const rectangle1 = document.createElement("div");
  rectangle1.classList.add("rectangle-1");

  imageContent.appendChild(img);
  imageContainer.appendChild(rectangle1);
  imageContainer.appendChild(imageContent);
  imageInteraction.appendChild(overlays);
  imageInteraction.appendChild(imageContainer);

  return imageInteraction;
}

// Function to open a full-size image view
function openFullSizeImage(src, alt) {
  const overlay = document.createElement("div");
  overlay.classList.add("full-size-overlay");
  overlay.innerHTML = `
    <div class="full-size-container">
      <img src="${src}" alt="${alt}" />
      <button class="close-btn">Close</button>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelector(".close-btn").addEventListener("click", () => {
    document.body.removeChild(overlay);
  });
}

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const galleryData = [
    {
      subjectName: "fennec fox",
      location: "India",
      image: "./images/fennec-fox.png",
    },
    {
      subjectName: "humpback whale",
      location: "South Africa",
      image: "./images/humpback-whale.png",
    },
    {
      subjectName: "common brown baboon",
      location: "South Africa",
      image: "./images/common-brown-baboon.png",
    },
    {
      subjectName: "spotted deer",
      location: "Amazon",
      image: "./images/spotted-deer.png",
    },
  ];

  const gallery = document.getElementById("gallery");
  galleryData.forEach((item) => {
    const imageContainer = createImageContainer(item);
    gallery.appendChild(imageContainer);
  });
});
