function openVoteLink(url) {
    window.open(url, '_blank');
}
// Hide loader when page finishes loading
window.onload = function() {
    document.querySelector('.loader').style.display = 'none';
};
