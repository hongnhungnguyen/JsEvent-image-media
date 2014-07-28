/**
 * Created by HongNhungNguyen on 7/28/2014.
 */
   // click on picture
   document.getElementById("pink").addEventListener("click",function(e){
    alert("You cicked pink picture");
      e.stopPropagation();
   });

   // Click pink of picture and others
/*document.getElementById('grid').addEventListener('click', function(e) {
    console.log("Clicked inside the UL");
}, false);
document.getElementById('pink').addEventListener('click', function(e) {
    console.log(e.toElement.alt);
    e.stopPropagation();
}, false);
    */

// remove image if you click this image

document.querySelector(".grid").addEventListener('click', function(e) {
    if(e.target.tagName == "IMG"){
        var howmany = this.querySelectorAll("li").length;
        if(howmany>1){
            var removeTarget = e.target.parentNode;
            removeTarget.parentNode.removeChild(removeTarget);
        }else{
            var photoTitle = e.target.alt;
            document.querySelector("#art p").innerHTML = "<p>The end</p>"
        }
    }

}, false);

// mouseover picture, appear others

document.querySelector('.grid').addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'IMG') {
        var myElement = document.createElement('div');
        myElement.className = 'preview';
        e.target.parentNode.appendChild(myElement);

        var myImg = document.createElement('img');
        var imgLoc = e.target.src;
        myImg.src = imgLoc.substr(0, imgLoc.length-7) + '.jpg';
        myElement.appendChild(myImg);

        myElement.style.left = e.offsetX + 15 + 'px';
        myElement.style.top = e.offsetY + 15 + 'px';

        e.target.addEventListener('mouseout', function handler(d){
            var myNode = d.target.parentNode.querySelector('div.preview');
            myNode.parentNode.removeChild(myNode);
            e.target.removeEventListener('mouseout',handler,false)
        },false);

        e.target.addEventListener('mousemove', function(f) {
            myElement.style.left = f.offsetX + 15 + 'px';
            myElement.style.top = f.offsetY + 15 + 'px';
        });

    }
},false);

// load img
document.querySelector('.load').addEventListener('click',function(e){
    var lowRes = e.target.src;
    var myOverlay = document.querySelector('.overlay');
    var highRes = document.createElement('img');
    var mySpinner = document.createElement('img');

    myOverlay.style.display = 'block';
    highRes.className = 'bgImg';
    highRes.src = lowRes.substr(0, lowRes.length-7) + '.jpg';
    myOverlay.appendChild(highRes);

    mySpinner.className = 'spinner';
    mySpinner.src = '../image/loadImg/spinner.gif';
    myOverlay.appendChild(mySpinner);

    highRes.addEventListener('load', function() {
        mySpinner.parentNode.removeChild(mySpinner);
    });
},false);

// media

var jukebox = document.querySelector('ul.player');
jukebox.addEventListener('click', function(e) {
    var audioPlayer = document.createElement('audio');
    var songName = e.target.getAttribute('data-src');
    audioPlayer.id = 'player';
    e.target.id = 'playing';
    audioPlayer.src = songName;
    document.body.appendChild(audioPlayer);
    audioPlayer.play();
}, false);