function main() {
    var iframe = document.getElementById('lal'); 
    var site = prompt("site")
    iframe.setAttribute('src', site);
    
}

document.onload = main
