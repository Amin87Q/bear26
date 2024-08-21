// تابع ذخیره‌سازی پروفایل و شروع بازی
function saveProfile() {
    const name = document.getElementById('nameInput').value;
    const profilePicInput = document.getElementById('profilePicInput');
    
    if (!name) {
        alert("Please enter your name.");
        return;
    }

    if (profilePicInput.files.length === 0) {
        alert("Please choose a profile picture.");
        return;
    }

    // ذخیره نام و تصویر کاربر
    const profilePicUrl = URL.createObjectURL(profilePicInput.files[0]);
    localStorage.setItem('userName', name);
    localStorage.setItem('profilePic', profilePicUrl);

    // هدایت به صفحه بازی
    window.location.href = "game.html";
}

// برای نمایش اطلاعات ذخیره شده در بازی استفاده می‌شود
function loadProfile() {
    const name = localStorage.getItem('userName');
    const profilePicUrl = localStorage.getItem('profilePic');

    if (name && profilePicUrl) {
        document.getElementById('userName').textContent = name;
        document.getElementById('profilePic').src = profilePicUrl;
    }
}
