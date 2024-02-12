document.getElementById("revealButton").addEventListener("click", function() {
    var hiddenMessage = document.getElementById("hiddenMessage");
    hiddenMessage.style.display = "block";
    this.style.display = "none";
});