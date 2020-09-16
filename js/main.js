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
                                <img class="card-program-logo" src="img/premier-pro-logo.png" alt="Program logo">
                            </div>
                            <div class="program-name-container">
                                <h3>Adobe</h3>
                                <h2>${program.name}</h2>
                            </div>
                        </div>
                        <div class="buttens-right-container">
                            <button class="visit-btn">Visit site</button>
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
                            <p class="card-desc-container">Adobe Premiere Pro is a desktop video editing application for
                                professionals and enthusiasts. This software, used by Hollywood workers, lets users turn
                                raw footage into stunning cinematic products.
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
                                            <h3><b>Expensive</b></h3>
                                        </td>
                                        <td><img class="difficulty-img" src="img/beginner_has_to_delete.svg"></td>
                                        <td><img class="platform-img" src="img/windows-logo_DELETE.svg">
                                            <img class="platform-img" src="img/windows-logo_DELETE.svg"></td>
                                    </tr>
                                </table>
                            </div>
                            <div class="keyword-container">
                                <p class="keyword">Video Editing</p>
                                <p class="keyword">Video Editing</p>
                            </div>
                        </div>
                        <div class="card-main-container-right">
                            <video class="video" src="/vid/file_example_.mp4" onmouseover="videoPlay()"></video>
                            <button class="course-btn"><b>Start YouTube course</b> </button>
                        </div>
                    </div>
                </article>
    `;
    }
    document.querySelector('#content-area').innerHTML = htmlTemplate;
}