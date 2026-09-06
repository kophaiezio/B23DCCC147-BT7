const greetingElement = document.getElementById('greeting-text');
const currentHour = new Date().getHours(); 

if (currentHour < 12) {
    greetingElement.innerText = "Chào buổi sáng! Chúc bạn một ngày tốt lành.";
} else if (currentHour < 18) {
    greetingElement.innerText = "Chào buổi chiều! Tràn đầy năng lượng nhé.";
} else {
    greetingElement.innerText = "Chào buổi tối! Nghỉ ngơi thôi.";
}

const colorBtn = document.getElementById('color-btn');
colorBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); 
});