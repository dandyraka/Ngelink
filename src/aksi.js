function ngganti(){
    var i, status, matches, ganti, elem, push;
    elem = document.getElementsByTagName("p");
    for (i=0; i<elem.length; i++) {
        status = elem[i].textContent;
        matches = status.match(/(https|http)\:\/\/(.*?)(\*|#|,|-|\(.\)|\[.\]|\{.\}|\s+.\s+|.\s+|\s+.)(.*)/g);
        if(matches){
            ganti = matches[0].replace(/\*|#|,|-|\(.\)|\[.\]|\{.\}|\s+\.\s+|\.\s+|\s+\./, ".");
            push = status.replace(matches, '<a href="' + ganti + '" target="_blank">' + ganti + '</a>');
            elem[i].innerHTML = push;
        }
    }
}
ngganti();
window.onscroll = function (e) {
    ngganti();
}