const row = document.querySelector(".row");
const backgroundContainer = document.querySelector(".presentation")
for (let j = 0; j < 10; j++) {
    row.innerHTML += `
    <div class="elements">
        <i class="far fa-envelope"></i>
        <i class="far fa-comments"></i>
        <i class="fas fa-mobile-alt"></i>
        <i class="fas fa-female"></i>
        <i class="fas fa-code"></i>
        <i class="far fa-file-code"></i>
        <i class="far fa-window-close"></i>
        <i class="fas fa-mouse-pointer"></i>
        <i class="fas fa-at"></i>
        <i class="fas fa-cogs"></i>
        <i class="fas fa-graduation-cap"></i>
        <i class="far fa-keyboard"></i>
        <i class="fas fa-laptop-code"></i>
        <i class="fas fa-laptop"></i>
        <i class="fas fa-battery-half"></i>
    </div>
    `;
}
for (let i = 0; i < 20; i++) {
    backgroundContainer.innerHTML += `
    <div class="row">
        ${row.innerHTML}
    </div>
    `;
}