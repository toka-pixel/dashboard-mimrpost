$(function(){
    window.onload = function() {
        //Check File API support
        if (window.File && window.FileList && window.FileReader) {
          let filesInput = document.getElementById("files");
          filesInput.addEventListener("change", function(event) {
            let files = event.target.files; //FileList object
            let output = document.getElementById("result");
            for (var i = 0; i < files.length; i++) {
              let file = files[i];
              //Only pics
              if (!file.type.match('image'))
                continue;
             let picReader = new FileReader();
              picReader.addEventListener("load", function(event) {
              let picFile = event.target;
              let div = document.createElement("div");
                let span=document.createElement('span');

                div.style.position='relative';

                div.innerHTML = "<img  class='thumbnail' src='" + picFile.result + "'" +
                  "title='" + picFile.name + "'/>";
                span.innerHTML=' &times';
                span.setAttribute('id','removephoto');
                span.addEventListener('click',function () {
                   
                    $(this).parent().remove();

                   
                })

                output.insertBefore(div, null);
                div.insertBefore(span,null)
              });
              //Read the image
              picReader.readAsDataURL(file);
            }
          });
        } else {
          console.log("Your browser does not support File API");
        }
      }


      // $("#clear").on("click", function() {
      //   $(".thumbnail").parent().remove();
      //   $("#result").hide();
      //   $("#files").val("");
      //   $(this).hide();
      //   });

      

});







 
