var el = document.getElementById('modal-click'),
    modl = document.getElementById('modal-window'),
    modlCl = document.getElementById('modal-close');

el.addEventListener('click', function(e) {
    e.preventDefault();
    modl.className += " " + "modal-visible";
}, false);

modlCl.addEventListener('click', function() {
    modl.className = "modal-window";
}, false);