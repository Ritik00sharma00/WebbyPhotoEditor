const imageInput = document.getElementById('imageInput');
const previewImage = document.getElementById('previewImage');


let blackWhite = document.getElementById('B&W');
let brightness = document.getElementById('brightness');
let contrast = document.getElementById('contrast');
let bluro = document.getElementById('blur');
let sepia = document.getElementById('sepia');
let invert = document.getElementById('invert');
let saturate = document.getElementById('saturate');
let bordersize = document.getElementById('border_size');
let colors = document.getElementsByClassName('colors');
let download = document.getElementById("download");
let Nimg = document.getElementById("Nimg");
const colorPicker = document.getElementById('colorPicker');

let borderColor, size;

let brightnessval, saturateval, sepiaval, contrastval, invertval;


function generateImage() {
  


}




colorPicker.addEventListener('input', function () {
    const selectedColor = colorPicker.value;
    console.log('Selected color:', selectedColor);
    borderColor = selectedColor;
    previewImage.style.cssText = `border:2px solid ${borderColor}`;



    bordersize.addEventListener('input', (e) => {
        const size = e.target.value;
        console.log(size);
        previewImage.style.cssText = `border:${size}px solid ${borderColor}`
    })
});

blackWhite.addEventListener('click',
    () => {
        colors[0].classList.toggle("show");
        // previewImage.classList.toggle("blackwhite");
        // console.log(generateImage())

        console.log(previewImage)
        // previewImage.style.cssText=`border-color:${borderColor}`;
    });



brightness.addEventListener('change', (e) => {
    console.log(e.target.value);
    brightnessval = e.target.value;
    previewImage.style.cssText += `filter:brightness(${e.target.value})`;
    generateImage();
    // console.log(previewImage.style.cssText);
});

contrast.addEventListener('change', (e) => {
    console.log(e.target.value);
    contrastval = e.target.value;
    generateImage();
    previewImage.style.cssText += `filter:contrast(${e.target.value})`;

    // console.log(previewImage.style.cssText);
});



sepia.addEventListener('change', (e) => {
    console.log(e.target.value);
    sepiaval = e.target.value;
    previewImage.style.cssText += `filter:sepia(${e.target.value})`;
    generateImage();
    // console.log(previewImage.style.cssText);
});

invert.addEventListener('change', (e) => {
    console.log(e.target.value);
    invertval = e.target.value;
    previewImage.style.cssText += `filter:invert(${e.target.value})`;
    generateImage();
    // console.log(previewImage.style.cssText);
});

saturate.addEventListener('change', (e) => {
    console.log(e.target.value);
    saturateval = e.target.value;
    previewImage.style.cssText += `filter:saturate(${e.target.value})`;
    generateImage();
    // console.log(previewImage.style.cssText);
});




function previewSelectedImage(x) {
    const file = x;
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            previewImage.src = e.target.result;
        }
    }
}
imageInput.addEventListener('change', () => { previewSelectedImage(imageInput.files[0]) });





download.addEventListener('click', () => {
    domtoimage.toPng(Nimg)
        .then(function (dataUrl) {
            const img = new Image();
            img.src = dataUrl;

            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = 'converted_image.png';
            a.appendChild(img);


            document.body.appendChild(a);


            a.click();

            document.body.removeChild(a);
        })
        .catch(function (error) {
            console.error("Error converting div to image:", error);
        });
});




