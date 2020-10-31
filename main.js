function sendNotification(title, options) {
    // Проверим, поддерживает ли браузер HTML5 Notifications
    if (!("Notification" in window)) {
        alert('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.');
    }

    // Проверим, есть ли права на отправку уведомлений
    else if (Notification.permission === "granted") {
        // Если права есть, отправим уведомление

        var notification = new Notification(title, options);
        function clickFunc() {
            document.querySelector('body').style.background = "white";

        }
        notification.onshow = function () {
            document.querySelector('body').style.background = "red";
        }
        notification.onclick = clickFunc;
    }

    // Если прав нет, пытаемся их получить
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            // Если права успешно получены, отправляем уведомление
            if (permission === "granted") {
                var notification = new Notification(title, options);

            } else {
                alert('Вы запретили показывать уведомления');
            }
        });
    }
}

let btn = document.getElementById('btn');
if (btn != null) {
    btn.onclick = function () {
        sendNotification('Верните Линуса!', {
            body: 'Тестирование HTML5 Notifications',
            dir: 'auto'
        })
    }
} else {
    console.log(1)
}



