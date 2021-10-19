const picsumIds = [
    237,
    433,
    577,
    582,
    593,
    659,
    718,
    783,
    790,
    837,
    1024,
    1025,
    1074,
    1084
];
const images = document.querySelector(".gallery");
let pictures = " ";

// 1. Create a function `handleItem()` that accepts the array `item` (the Picsum image id) as a parameter
picsumIds.forEach(function(item) {
    pictures = pictures + `<img src="https://picsum.photos/id/` + item + `/300/300" alt = "Lorem Picsum Image">`

})
images.innerHTML = pictures;


//images = '<img src="https://picsum.photos/id/${item}/300/300" alt="Lorem Picsum Image"></img>'
// 2. In this new function, take the Picsum image id and create a valid img element that's 300px x 300px
// <img src="https://picsum.photos/id/[imageId]/300/300" alt="Lorem Picsum Image">

// 3. Using a method of your choice, output the image to `index.html` so that a gallery of all images is displayed on the page

// 4. Using Array.forEach(): loop through each Picsum image id, invoking handleItem() for each item.