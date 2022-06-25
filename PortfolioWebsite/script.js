
/*Hide and show fotomatic description*/
let fotomaticHead = document.getElementById("fotomatic-head"); 
let fotomaticClose =  document.getElementById("close-fotomatic");
let fotomaticDescription = document.getElementById("fotomatic-description");

function showItem() {
    fotomaticDescription.style.display = 'block';
}

function hideItem() {
    fotomaticDescription.style.display = 'none';
}

fotomaticClose.addEventListener('click', hideItem);
fotomaticHead.addEventListener('click', showItem);

/*Hide and show static website project description*/
let staticwebHead = document.getElementById("static-website"); 
let staticwebClose =  document.getElementById("close-staticweb");
let staticwebDescription = document.getElementById("static-website-description");

function showItem2() {
    staticwebDescription.style.display = 'block';
}

function hideItem2() {
    staticwebDescription.style.display = 'none';
}

staticwebClose.addEventListener('click', hideItem2);
staticwebHead.addEventListener('click', showItem2);

/*Hide and show website style guide project description*/
let webstyleHead = document.getElementById("web-style"); 
let webstyleClose =  document.getElementById("close-webstyle");
let webstyleDescription = document.getElementById("web-style-description");

function showItem3() {
    webstyleDescription.style.display = 'block';
}

function hideItem3() {
    webstyleDescription.style.display = 'none';
}

webstyleClose.addEventListener('click', hideItem3);
webstyleHead.addEventListener('click', showItem3);

