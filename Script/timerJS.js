(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let mardig = "Mar 1, 2022 12:00:00",
        countDown = new Date(mardig).getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown2 = document.getElementById("countdown2");

                headline.innerText = "Laissez Les Bons Temps Rouler";
                countdown2.style.display = "none";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());