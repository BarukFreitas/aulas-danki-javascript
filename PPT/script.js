document.addEventListener('DOMContentLoaded', function () {
    var icons = document.querySelectorAll('.player-options img');

    icons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            icons.forEach(function (otherIcon) {
                otherIcon.style.opacity = 0.3;
            });
            this.style.opacity = 1;
        });
    });
});
