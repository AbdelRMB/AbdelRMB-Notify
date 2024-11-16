window.addEventListener('message', function(event) {
    const { action, message, type, duration } = event.data;

    if (action === 'showNotification') {
        playSound();
        showNotification(message, type, duration);
    }
});

function showNotification(message, type, duration) {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    container.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.7s ease forwards';
        setTimeout(() => container.removeChild(notification), 700);
    }, duration);
}

function playSound() {
    const audio = new Audio('notification.mp3');
    audio.volume = 0.2;
    audio.play();
}
