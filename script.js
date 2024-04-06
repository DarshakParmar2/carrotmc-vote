// Hide loader when page finishes loading
window.onload = function() {
    document.querySelector('.loader').style.display = 'none';
};
// script.js
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".vote-buttons button");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            openVoteLink(this.getAttribute("data-url"));
        });
    });
});

function openVoteLink(url) {
    window.open(url, '_blank');
}


// Hide loader when page finishes loading
window.onload = function() {
    document.querySelector('.loader').style.display = 'none';
};

