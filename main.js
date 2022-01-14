Webcam.set({
    width:350,
    height:350,
    image_format : 'png',
    png_quality:100
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AuSS-1qsX/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
  }
  