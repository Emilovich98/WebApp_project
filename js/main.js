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

// ========== READ ==========
// watch the database ref for changes
programsRef.onSnapshot(function (snapshotData) {
    let programs = [];
    snapshotData.forEach(function (doc) {
        //console.log(doc);
        let program = doc.data();
        console.log(program);
        program.id = doc.id;
        programs.push(program);
    });
    appendPrograms(programs);
});

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
                            <button class="visit-btn"><a href="${program.visitSite}"> <b>Visit Site</b></a></button>
                            <div class="likes-container">
                                <button class="like-btn"><img class="like-img" src="img/motion-graphics.jpg"
                                        alt="Like button"></button>
                                <div class="like-display">

                                </div>
                            </div>
                            <div class="favorites-container">
                                <button class="add-to-fav-btn"><img class="star-img" src="img/graphic-design.jpg"
                                        alt="Favorites"></button>
                                <p class="fav-text">add to favorites</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-main-container">
                        <div class="card-main-container_left">
                            <p class="card-desc-container">${program.description}
                            </p>
                            <div class="card-filter-container">
                                <table class="filter-table">
                                    <tr>
                                        <td>
                                            <p>Price</p>
                                        </td>
                                        <td>
                                            <p>Program Difficulty</p>
                                        </td>
                                        <td>
                                            <p>Platform</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h3><b>${program.price}</b></h3>
                                        </td>
                                        <td><img class="difficulty-img" src="${program.programDifficulty}"></td>
                                        <td><img class="platform-img" src="${program.platform}">
                                           </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="keyword-container">
                                <p class="keyword">${program.keywords[0]}</p>
                                <p class="keyword">${program.keywords[1]}</p>
                                <p class="keyword">${program.keywords[0]}</p>
                                <p class="keyword">${program.keywords[0]}</p>
                            </div>
                        </div>
                        <div class="card-main-container-right">
                            <video class="video" src="/vid/file_example_.mp4" onmouseover="videoPlay()"></video>
                            <button class="course-btn"><a href="${program.course}"> <b>Start YouTube course</b></a> </button>
                        </div>
                    </div>
                </article>
    `;
    }
    document.querySelector('#content-area').innerHTML = htmlTemplate;
}