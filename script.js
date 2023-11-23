// Assuming you have a NodeList of previews
const previews = document.querySelectorAll('.img_container img');
const model = document.querySelector('.model');
const original = document.querySelector('.full_img');
const caption = document.querySelector(".caption");

// Open pictures
previews.forEach(preview => {
    preview.addEventListener('click', () => {
        model.classList.add("open");
        original.classList.add('open');
        
        // Dynamic change text and image
        const originalSrc = preview.getAttribute('data-original');
        original.src = `./full/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

    //close pictures
model.addEventListener("click", (e) =>{
    if(e.target.classList.contains('model')){
        model.classList.remove('open');
        original.classList.remove('open');
    }
})