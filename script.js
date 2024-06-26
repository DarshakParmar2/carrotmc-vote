// script.js
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("vote1").addEventListener("click", function() {
        openVoteLink('https://minecraftservers.org/server/659341');
    });
    document.getElementById("vote2").addEventListener("click", function() {
        openVoteLink('https://bestmcservers.org/server-carrot-mc.3233/vote');
    });
    document.getElementById("vote3").addEventListener("click", function() {
        openVoteLink('https://minecraft-mp.com/server-s328885');
    });
    document.getElementById("vote4").addEventListener("click", function() {
        openVoteLink('https://topminecraftservers.org/server/36625');
    });
    document.getElementById("vote5").addEventListener("click", function() {
        openVoteLink('https://minecraftbestservers.com/server-carrotmc.2571/');
    });
    document.getElementById("vote6").addEventListener("click", function() {
        openVoteLink('https://mc-server-list.com/server/1669-carrotmc/');
    });
    document.getElementById("vote7").addEventListener("click", function() {
        openVoteLink('https://bestmcservers.org/server-carrot-mc.3233/vote');
    });
});

function openVoteLink(url) {
    window.open(url, '_blank');
}

// Hide loader when page finishes loading
window.onload = function() {
    document.querySelector('.loader').style.display = 'none';
};

