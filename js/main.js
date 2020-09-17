"use strict";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5ZzBbO5Ighm9NcExnwFekxyFJyKJXCxo",
    authDomain: "webapp-51d44.firebaseapp.com",
    databaseURL: "https://webapp-51d44.firebaseio.com",
    projectId: "webapp-51d44",
    storageBucket: "webapp-51d44.appspot.com",
    messagingSenderId: "334142694342",
    appId: "1:334142694342:web:aba32ef1363b4370b588c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const programsRef = db.collection("program-cards");

let selectedProgramsId = "";
let _programs = [];
// ========== READ ==========
// watch the database ref for changes
programsRef.onSnapshot(function (snapshotData) {
    _programs = [];
    snapshotData.forEach(function (doc) {
        //console.log(doc);
        let program = doc.data();
        console.log(program);
        program.id = doc.id;
        _programs.push(program);
    });
    appendPrograms(_programs);
});

function searchPrograms(value) {
    console.log(value);
    let filteredPrograms = [];
    for (let program of _programs) {
        let companyName = program.companyName.toLowerCase();
        let name = program.name.toLowerCase();
        let price = program.price.toLowerCase();
        let keywordsOne = program.price.toLowerCase();
        //let keywords = program.keywords.chilld.toLowerCase()
        if (companyName.includes(value.toLowerCase())) {
            filteredPrograms.push(program);
        } else if (name.includes(value.toLowerCase())) {
            filteredPrograms.push(program);
        } else if (price.includes(value.toLowerCase())) {
            filteredPrograms.push(program);
        }
        /*lse if (keywords.includes(value.toLowerCase()))
        {
          filteredPrograms.push(program);
        }*/
    }

    console.log(filteredPrograms);
    appendPrograms(filteredPrograms);
}


function appendKeyword(_keyword) {
    let keyWordHtml = "";
    for (let keyword of _keyword) {
        keyWordHtml += ``;
    }
}

// append users to the DOM

function appendPrograms(programs) {
    let htmlTemplate = "";
    for (let program of programs) {
        console.log(program.id);
        console.log(program.name);
        console.log(program.logo)
        htmlTemplate += `
                <article class="program-card">
                    <div class="card-top-container">
                        <div class="logo-name-container">
                            <div class="card-program-logo-container">
                                <img class="card-program-logo" src="${program.logo}" alt="Program logo">
                            </div>
                            <div class="program-name-container">
                                <h3>${program.companyName}</h3>
                                <h2>${program.name}</h2>
                            </div>
                        </div>
                        <div class="buttens-right-container">
                            <a href="${program.visitSite}" target="_blank" class="visit-btn">Visit site</a>
                            <div class="likes-container">
                                <button class="like-btn"><img class="like-img" src="img/like-icon.svg"
                                        alt="Like button"></button>
                                <div class="like-display">
                                    <p>123 likes</p>
                                </div>
                            </div>
                            <div class="favorites-container">
                                <button class="add-to-fav-btn"><img class="star-img" src="img/star-icon.svg"
                                        alt="Favorites"></button>
                                <p class="fav-text">Add to favorites</p>
                            </div>
                        </div>
                    </div>
                    <hr class="line-devider">
                    <div class="card-main-container">
                        <div class="card-main-container-left">
                            <div class="card-description-container">
                                <p class="description">${program.description}</p>
                            </div>
                            <div class="card-filter-container">
                                <div class="filter-box">
                                    <h4>Price</h4>
                                    <div class="price-container">
                                        <p>${program.price}</p>
                                    </div>
                                </div>
                                <div class="filter-box">
                                    <h4>Difficulty</h4>
                                    <div class="diffculty-container">
                                        <img src="${program.programDifficulty}" alt="Difficulty">
                                    </div>
                                </div>
                                <div class="filter-box">
                                    <h4>Platform</h4>
                                    <div class="platform-container">
                                        <img src="${program.platform}" alt="Platform">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-main-container-right">
                            <div class="video-container">
                                <iframe class="video" src="">
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <hr class="line-devider">
                    <div class="card-bottum-container">
                        <div class="card-keywords-container">
                            <p class="keyword">${program.keywords}</p>
                        </div>
                        <div class="course-btn-container">
                            <a class="course-btn" target="_blank" href="${program.course}">Start YouTube course</a>
                        </div>
                    </div>
                </article>
    `;
    }
    document.querySelector('#content-area').innerHTML = htmlTemplate;
};



function addit() {
    let number = document.querySelector("#number").value;
    console.log(number);
}