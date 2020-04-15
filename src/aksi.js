function ngganti(){
    var i, status, matches, ganti, elem;
    elem = document.getElementsByTagName("p");
    for (i=0; i<elem.length; i++) {
        status = elem[i].textContent;
        matches = status.match(/(https|http)\:\/\/(.*?)(\*|#|,|-|\(.\)|\[.\]|\{.\}|\s+.\s+|.\s+|\s+.)(.*)/g);
        if(matches){
            ganti = status.replace(/\*|#|,|-|\(.\)|\[.\]|\{.\}|\s+\.\s+|\.\s+|\s+\./, ".");
            elem[i].innerHTML = '<a href="' + ganti + '" target="_blank">' + ganti + '</a>';
        }
    }
}
ngganti();
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        ngganti();
    }
 });