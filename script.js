
let imgBox = document.getElementById("imgBox");
let qrTxt = document.getElementById("qrTxt");
let qrImage = document.getElementById("qrImage");


function generate(){
  
    if(qrTxt.value.length > 0){

        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTxt.value ;

        imgBox.classList.add("show-img");
    }
    else{
        qrTxt.classList.add("error");
        setTimeout(()=>{
            qrTxt.classList.remove("error");
        },1000)
    }
  
}