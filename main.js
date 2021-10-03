Webcam.set({
    width:460, 
    height:350,
    image_format:'png',
    png_quality:90
 });
 
 camera= document.getElementById("camera");
 Webcam.attach('#camera');

 function take_snapshot()
 {
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/> ';
     });
 }

 console.log('ml5 version',ml5.version);

 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1Eqzxl-v7/',modelLodded);
 function modelLodded()
 {
     console.log('modelLodded');
 }

 function check()
 {
     img = document.getElementById("captured_image");
     console.log("Image Captured");

     classifier.classify(img, gotResult);
     
 }

 function gotResult(error,results)
 {
   if(error)
   {
     console.error(error);
   }  
   else
   {
       console.log(results);
       document.getElementById("result_object_name").innerHTML=results[0].label;
       document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2);
   } 
 }



 