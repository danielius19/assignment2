//JS for the dark theme button
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {document.body.classList.toggle('dark');
});
//JS for the github icon change
function changeGit(){
    let git = document.getElementById('git');
    git.innerHTML = "&#xf09b;";

    setTimeout(function(){
        git.innerHTML = "&#xf092;"
    }, 1000);
}

changeGit();
//Sets the interval for the changes
setInterval(changeGit, 2000);
//JS for the linkedin icon change
function changeLink(){
    let link = document.getElementById('linkedin');
    link.innerHTML = "&#xf0e1;";

    setTimeout(function(){
        link.innerHTML = "&#xf08c;"
    }, 1000);
}

changeLink();
//Sets the interval for the changes
setInterval(changeLink, 2000);

//displays date after date and time button is clicked
function displayDate() {
    document.getElementById('showDateTime').innerHTML = Date();
}

//Makes profile picture transition effect
new hoverEffect({
    parent: document.querySelector(".photo"),
    intensity: 0.2,
    image1: "./images/profile.jpg",
    image2: "./images/profile2.jpg",
    displacementImage: "./images/diss.png"
});