let coins = 0;
let level = 1;

// افزودن سکه با کلیک
function addCoins() {
    coins += 1;
    updateScore();
}

// به‌روزرسانی امتیاز نمایش داده شده
function updateScore() {
    document.getElementById('score').innerHTML = `<img src="coin.png" alt="Coin" class="coin-icon"> ${coins}`;
}

// مدیریت نمایش بخش‌ها
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// شروع استخراج
function startMining() {
    console.log('Mining started');
    document.querySelector('#miningBear p').textContent = 'Status: Mining';
}

// توقف استخراج
function stopMining() {
    console.log('Mining stopped');
    document.querySelector('#miningBear p').textContent = 'Status: Idle';
}

// خرید ارتقاء
function buyUpgrade(upgradeType) {
    if (upgradeType === 'hamster') {
        if (coins >= 5000) {
            coins -= 5000;
            console.log('Hamster upgraded');
            updateScore();
        } else {
            alert('Not enough coins!');
        }
    } else if (upgradeType === 'speed') {
        if (coins >= 10000) {
            coins -= 10000;
            console.log('Speed upgraded');
            updateScore();
        } else {
            alert('Not enough coins!');
        }
    }
}

// ارتقاء تولید
function upgradeProduction() {
    if (coins >= 20000) {
        coins -= 20000;
        // افزایش تولید یا ارتقاء ویژگی دیگر
        console.log('Production upgraded');
        updateScore();
    } else {
        alert('Not enough coins!');
    }
}

// افزایش نرخ کلیک
function upgradeClickRate() {
    if (coins >= 15000) {
        coins -= 15000;
        // افزایش نرخ کلیک یا ارتقاء ویژگی دیگر
        console.log('Click rate upgraded');
        updateScore();
    } else {
        alert('Not enough coins!');
    }
}
