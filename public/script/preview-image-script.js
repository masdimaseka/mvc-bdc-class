const imgField = document.getElementById("img");
const imgPreviewBox = document.getElementById("uploadPreview");

imgField.addEventListener("change", (event) => {
  const objectUrl = URL.createObjectURL(event.target.files[0]);
  imgPreviewBox.src = objectUrl;
});
