const showUserName = () => {
    const userName = JSON.parse(localStorage.getItem('user-name'));
    const userBtn = document.getElementById('user');
    if (userName) {
        // استخراج حروف اول نام
        const initials = userName.split(' ').map(name => name[0]).join('');
        userBtn.innerHTML = `<div class="user-initials">${initials}</div>`;
        userBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("user-name");
            location.reload();
        });
    } else {
        userBtn.innerHTML =`<img class="user-icon size-icon-account "
    src="./assets/Icons/account_circle_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt=""> `;
    }
};
(async function render() {
    showUserName();
})();