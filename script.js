
    window.onload = function() {
    var counter = 0

    function changebg(anim) {
        let stage = document.querySelectorAll('.stage');
        //stage.style.display = 'none';
        stage[counter].style.display = 'block';
        stage[counter].style.animation = anim + ' 1s 1';
        counter++;
        //console.log(url)
    }

    function flash() {
        document.querySelector('#flash').style.display = 'block'
        document.querySelector('#flash').style.animation = 'flash 0.1s 8';
        setTimeout(function() {
            document.querySelector('#flash').style.display = 'none';
        }, 800);
    }
    
    var audio = document.querySelector('audio');
    audio.currentTime = 31;
    audio.playbackRate = 0.85;
    audio.oncanplay = function(){
        //console.log('audio ready');
        document.querySelector('.loader_container').style.display = "none";
        if (counter == 0){
            Swal.fire({
                html: `Are you ready to go ?`
            });
        }
        document.body.addEventListener('click',function(){
            if (counter == 0){
                overall();
                audio.play();
                window.navigator.vibrate(200);
            }
        });
    }
    
    function overall() {
        changebg('null');
        setTimeout(function() {
            changebg('one');
            flash()
        }, 2000);

        setTimeout(function() {
            changebg('two');
            //flash()
        }, 5000);

        setTimeout(function() {
            changebg('two');
            flash()
        }, 8000);
        setTimeout(function() {
            changebg('one');
            //flash()
        }, 11000);
        setTimeout(function() {
            changebg('one');
            flash()
        }, 14000);
        setTimeout(function() {
            changebg('two');
            flash()
        }, 17000);
        setTimeout(function() {
            changebg('one');
            //flash()
        }, 20000);
        setTimeout(function() {
            changebg('one');
            flash()
        }, 23000);
        setTimeout(function() {
            changebg('two');
            //flash()
        }, 26000);
        setTimeout(function() {
            changebg('two');
            flash()
        }, 29000);
        setTimeout(function() {
            changebg('one');
            flash()
        }, 32000);
        setTimeout(function() {
            changebg('two');
            flash()
        }, 35000);
        setTimeout(function() {
            changebg('two');
            flash()
        }, 38000);
        setTimeout(function() {
            changebg('one');
            flash()
        }, 41000);
        setTimeout(function() {
            changebg('two');
            flash()
        }, 44000);
        setTimeout(function() {
            changebg('one');
            flash()
        }, 47000);
    }
    //flash()
}
