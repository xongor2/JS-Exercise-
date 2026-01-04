


function changeImage() {
    const image = document.getElementById("myImage");
  
  
    const newUrl = prompt("Enter the new image URL:", image.src);
    const borderColor = prompt("Enter the border color (e.g., red,rgb(59, 18, 122)):", "black");
    const width = prompt("Enter the width in pixels:", "150");
    const height = prompt("Enter the height in pixels:", "150");
    const borderRadius = prompt("Enter the border radius in pixels:", "0");
  

    if (newUrl) image.src = newUrl;
    image.style.borderColor = borderColor || "black";
    image.style.width = width ? `${width}px` : "150px";
    image.style.height = height ? `${height}px` : "150px";
    image.style.borderRadius = borderRadius ? `${borderRadius}px` : "0px";
  }