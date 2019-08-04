//solution for counting amount of listening 

window.addEventListener('load', function () {

    var sectionAudio = document.querySelectorAll('.section__controler__audio')

    for (let f = 0; f < sectionAudio.length; f++) {

        // audio container
        let audio = sectionAudio[f].querySelector('.js__audio');
        let playBarContainer = sectionAudio[f].querySelector('.js__play__bar__container');
        let playBar = sectionAudio[f].querySelector('.js__play__bar');
        let playButton = sectionAudio[f].querySelector('.js__play__button');
        let timeField = sectionAudio[f].querySelector('.js__play__time');
        let soundButton = sectionAudio[f].querySelector('.js__sound__button');
        let soundBarContainer = sectionAudio[f].querySelector('.js__sound__bar__container');
        let soundBar = sectionAudio[f].querySelector('.js__sound__bar');

        audio.load();

        audio.addEventListener('canplay', function () {
            playButton.addEventListener('click', playOrPause, false);
        }, false);

        playBarContainer.addEventListener('click', skip, false);
        audio.addEventListener('durationchange', function () {
            updatePlayer();
        });

        soundButton.addEventListener('click', muteOrUnmute, false);

        soundBarContainer.addEventListener('click', changeVolume, false);

        // function play or pause and change icons and set Interval
        function playOrPause() {
            if (audio.paused) {
                audio.play();
                playButton.innerHTML = "&#10074;&#10074;";
                update = setInterval(updatePlayer, 30);
            } else {
                audio.pause();
                playButton.innerHTML = "&#9658;";
                window.clearInterval(update);
            };
        };

        // function updating bar with percentage duration of audio
        function updatePlayer() {
            var percentage = (audio.currentTime / audio.duration) * 100;
            playBar.style.width = percentage + '%';
            timeField.innerHTML = getFormattedTime();
            if (audio.ended) {
                window.clearInterval(update);
                playButton.innerHTML = '&#8634;'
            };
        };

        // function for skipping audio through clicking on the bar
        function skip(ev) {
            var mouseX = ev.pageX - playBarContainer.offsetLeft; //0 from start point of bar
            var barWidth = window.getComputedStyle(playBarContainer).getPropertyValue('width') //takes value of width of bar
            barWidth = parseFloat(barWidth.substr(0, barWidth.length - 2)); //changes from string to number

            audio.currentTime = (mouseX / barWidth) * audio.duration; // making magic
            updatePlayer(); // making magic when audio is stopped

        };

        // time of audio
        function getFormattedTime() {
            var showSeconds = Math.round(audio.duration - audio.currentTime);
            var showMinutes = Math.floor(showSeconds / 60);
            if (showSeconds > 60) showSeconds -= showMinutes * 60;
            if (showSeconds.toString().length < 2) showSeconds = '0' + showSeconds;
            if (showSeconds === 60) showSeconds = '00'
            if (showMinutes.toString().length < 2) showMinutes = '0' + showMinutes;
            return showMinutes + ':' + showSeconds
        };

        // muting sound
        function muteOrUnmute() {
            if (!audio.muted) {
                audio.muted = true;
                soundButton.innerHTML = '&#9899';
                soundBar.style.display = 'none';
                changeVolume();
            } else {
                audio.muted = false;
                soundButton.innerHTML = '&#128266;';
                soundBar.style.display = 'block';
            }
        };

        // change volume by sound bar
        function changeVolume(ev) {
            var mouseX = ev.pageX - soundBar.offsetLeft;
            var width = window.getComputedStyle(soundBarContainer).getPropertyValue('width') //takes value of width of bar
            width = parseFloat(width.substr(0, width.length - 2)); //changes from string to number
            console.log(width)

            audio.volume = (mouseX / width);
            soundBar.style.width = (mouseX / width) * 100 + '%';
            audio.muted = false;
            soundButton.innerHTML = '&#128266;';
            soundBar.style.display = 'block';
        };
    }
});