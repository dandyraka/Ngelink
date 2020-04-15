function ngganti(){
    var i, status, matches, ganti, elem, push, rgx;
    elem = document.getElementsByTagName("p");
    rgx = "(\s+|\*|#|,|-|\(.\)|\[.\]|\{.\}|\s+.\s+|.\s+|\s+.)";
    for (i=0; i<elem.length; i++) {
        status = elem[i].textContent;
        matches = status.match(/(https|http)\:\/\/(.*?)(\s+|\*+|#+|,+|-+|\(dot\)|\(.\)|\[.\]|\{.\}|\s+\.\s+|\.\s+|\s+\.)(.*)/g);
        if(matches){
            ganti = matches[0].replace(/\s+|\*+|#+|,+|-+|\(dot\)|\(.\)|\[.\]|\{.\}|\s+\.\s+|\.\s+|\s+\./, ".").trim();
            ganti = ganti.replace(/\.+/, ".");
            //ganti = ganti.replace(/\.(?=[^.]*$)/, ' ');
            push = status.replace(matches, '<a href="' + ganti + '" target="_blank">' + ganti + '</a>');
            elem[i].innerHTML = push;
        }
    }
}
ngganti();
window.onscroll = function (e) {
    ngganti();
}