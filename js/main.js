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
        htmlTemplate += `
    <article>
      <h2>${program.name}</h2>
    </article>
    `;
    }
    document.querySelector('#content').innerHTML = htmlTemplate;
}