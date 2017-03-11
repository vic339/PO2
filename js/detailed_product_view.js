  
  function show(){
          document.getElementById("description").style.display= "block";
          document.getElementById("details").style.display= "none"; 
          document.getElementById("delivery").style.display= "none"; 
          document.getElementById("des-bottom").style.borderBottom= "2px solid black";
          document.getElementById("details-bottom").style.borderBottom= "";
          document.getElementById("delivery-bottom").style.borderBottom= "";
                  // document.getElementById("des-bottom").style.border= "2px";
        }
        function showDetail(){
          document.getElementById("details").style.display= "block";
          document.getElementById("description").style.display= "none";
          document.getElementById("delivery").style.display= "none";
          document.getElementById("details-bottom").style.borderBottom= "2px solid black";
          document.getElementById("des-bottom").style.borderBottom= "";
          document.getElementById("delivery-bottom").style.borderBottom= "";
        }

         function showDetail1(){
          document.getElementById("delivery").style.display= "block";
          document.getElementById("description").style.display= "none";
          document.getElementById("details").style.display= "none";
          document.getElementById("delivery-bottom").style.borderBottom= "2px solid black";
          document.getElementById("details-bottom").style.borderBottom= "";
          document.getElementById("des-bottom").style.borderBottom= "";
        }

        function showImage(image){
        var bigImage=document.getElementById("big-image");
        bigImage.src=image;

        }
