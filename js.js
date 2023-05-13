let listurl = []
let names = []
function Createurl() {
   let array = ["ฮานอย", "ไทย", "ลาว"]
   for (let index = 0; index < array.length; index++) {
      const element = array[index];
      var canvas = document.getElementById('mycanvas');
      var ctx = canvas.getContext("2d");

      var img = new Image();
      img.src = "user2.jpg"
      img.onload = function () {
         ctx.drawImage(img, 10, 10);
         ctx.font = "30px Chonburi"
         ctx.textAlign = "center"
         ctx.fillText(element, canvas.width / 2, canvas.height / 2);
         





         
         var dataUrl = canvas.toDataURL();
         // console.log(dataUrl);
         listurl.push(dataUrl)
         names.push(element)
      }
   }
   console.log(array);
}

var download = function () {

   for (let index = 0; index < listurl.length; index++) {
      const element = listurl[index];
      var link = document.createElement('a');
      link.download = names[index] + '.png';
      // link.href = document.getElementById('mycanvas').toDataURL()
      link.href = element
      link.click();
   }

}

function getdata() {
   console.log(array);
}
