prediction = ""

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
  
  function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }

  function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "It is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
  }

  function gotResult(error, results){
    if(error){
      console.error(error);
    }
    else{
      console.log(results);
      document.getElementById("result_emotion_name").innerHTML = results[0].label;
      document.getElementById("result_emotion_name2").innerHTML = results[1].label;
      prediction_1 = results[0].label;
      prediction_2 = results[1].label;
      speak();
      if(results[0].label == "good"){
        document.getElementById("update_gesture").innerHTML = "&#128077;";
      }  
      if(results[0].label == "victory"){
        document.getElementById("update_gesture").innerHTML = "&#9996;";
      }  
      if(results[0].label == "awesome"){
        document.getElementById("update_gesture").innerHTML = "&#128076;";
      }  
      if(results[0].label == "rock & roll"){
        document.getElementById("update_gesture").innerHTML = "&#129304;";
      }  
      if(results[0].label == "heart"){
        document.getElementById("update_gesture").innerHTML = "&#65039;";
      }  
    }
  }