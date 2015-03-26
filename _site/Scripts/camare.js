function camera(element) {
    var videoObj = { video: true };

    if (!window.URL) {
        window.URL = window.URL || window.webkitURL || window.msURL|| window.mozURL || window.oURL;
    }
    if (!navigator.getUserMedia) {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia;
    }

    window.navigator.getUserMedia(
        videoObj,
        function(stream){
            try{
                element.src = window.URL.createObjectURL(stream);
                element.play();
            } catch (err) {
                element.src = stream;
                element.play();
            }
        },
        function(){
            throw Error('未发现摄像头');
        }
    );
}