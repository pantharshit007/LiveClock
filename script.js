document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const toggleContainer = document.getElementById('toggleContainer');
    const updateClockElement = document.getElementById('clock');
    let is24HourFormat = true;

    //switch format
    function updateClock() {
        if (is24HourFormat) {
            updateClock24hrs();
        } else {
            updateClock12hrs();
        }
    }

    function updateClock24hrs() {
        const clockTime = new Date();
        //.toString().padStart(2, 0) is used to add extra '0' before 
        const hours = clockTime.getHours().toString().padStart(2, 0);
        const minutes = clockTime.getMinutes().toString().padStart(2, 0);
        const seconds = clockTime.getSeconds().toString().padStart(2, 0);

        const currentClock = `${hours} : ${minutes} : ${seconds}`;
        updateClockElement.textContent = currentClock;
    }

    function updateClock12hrs() {
        const clockTime = new Date();
        let hours = clockTime.getHours();
        const midDay = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 0;
        hours = hours.toString().padStart(2, 0);
        const minutes = clockTime.getMinutes().toString().padStart(2, 0);
        const seconds = clockTime.getSeconds().toString().padStart(2, 0);

        const currentClock = `${hours} : ${minutes} : ${seconds}  ${midDay}`;
        updateClockElement.textContent = currentClock;
    }

    // Initial clock update
    updateClock();

    // Toggle button click event
    toggleContainer.addEventListener('click', function() {
        is24HourFormat = !is24HourFormat;
        toggleButton.classList.toggle('active');
        updateClock();
    });

    //calling the function every 1 sec.
    setInterval(updateClock, 1000)
});
