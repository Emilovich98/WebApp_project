let categoriesArray = [{
    categoryName: "Video editing",
    categoryImage: "../img/video-editing.jpg"
},
{
    categoryName: "Photo editing",
    categoryImage: "../img/photo-editing.jpg"
},
{
    categoryName: "Digital painting",
    categoryImage: "../img/digital-drawing.jpg"
},
{
    categoryName: "Color grading",
    categoryImage: "../img/color-grading.jpg"
},
{
    categoryName: "Graphic design",
    categoryImage: "../img/graphic-design.jpg"
},
{
    categoryName: "Motion graphics",
    categoryImage: "../img/motion-graphics.jpg"
},
{
    categoryName: "Animation",
    categoryImage: "../img/animation.jpg"
},
{
    categoryName: "Visual effects",
    categoryImage: "../img/vfx.jpg"
},
{
    categoryName: "Audio editing",
    categoryImage: "../img/audio-editing.jpg"
}
];

console.log(categoriesArray);
appendCategories(categoriesArray);

/*
Appends json data to the DOM
*/
function appendCategories(categories) {
    let htmlTemplate = "";
    for (let category of categories) {
        htmlTemplate += /*html*/ `
            <div onclick="searchPrograms('${category.categoryName}')" class="category">
                <img class="category-icon" src="${category.categoryImage}" alt="category icon">
                <p  class="category-name">${category.categoryName}</p>
            </div>
    `;
    }
    document.querySelector("#categories-spawn").innerHTML = htmlTemplate;
}