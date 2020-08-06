const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {document.body.classList.toggle('dark');
});

function changeGit(){
    let git = document.getElementById('git');
    git.innerHTML = "&#xf09b;";

    setTimeout(function(){
        git.innerHTML = "&#xf092;"
    }, 1000);
}

changeGit();

setInterval(changeGit, 2000);

function changeLink(){
    let link = document.getElementById('linkedin');
    link.innerHTML = "&#xf0e1;";

    setTimeout(function(){
        link.innerHTML = "&#xf08c;"
    }, 1000);
}

changeLink();

setInterval(changeLink, 2000);