// Kiểm tra mật khẩu và chuyển hướng trangs

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const password = document.getElementById('password').value;
    
    // Kiểm tra mật khẩu
    if (password === '18072001') {
        window.location.href = 'sc.html';
    } else {
        alert('Mật khẩu sai, vui lòng thử lại.'); // Thông báo lỗi
    }
});

// Tạo trái tim rơi từ trên xuống dưới

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const size = Math.random() * 20 + 10;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';

    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 5) + 's';
    heart.style.animationName = 'fall';

    heart.style.setProperty('--size', size + 'px');

    // Thay đổi kích thước cho phần ::before và ::after
    heart.style.setProperty('--before-width', size + 'px');
    heart.style.setProperty('--before-height', size + 'px');
    heart.style.setProperty('--after-width', size + 'px');
    heart.style.setProperty('--after-height', size + 'px');

    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });

    // Tạo phần trước và sau cho trái tim
    const before = document.createElement('div');
    before.style.width = size + 'px';
    before.style.height = size + 'px';
    before.style.position = 'absolute';
    before.style.top = `-${size / 2}px`;
    before.style.left = '0';
    before.style.backgroundColor = '#ff2a68';
    before.style.borderRadius = '50%';

    const after = document.createElement('div');
    after.style.width = size + 'px';
    after.style.height = size + 'px';
    after.style.position = 'absolute';
    after.style.top = '0';
    after.style.left = `${size / 2}px`;
    after.style.backgroundColor = '#ff2a68';
    after.style.borderRadius = '50%';

    heart.appendChild(before);
    heart.appendChild(after);
}

setInterval(createHeart, 170);