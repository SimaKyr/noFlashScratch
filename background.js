//Thank phosphorus,surforus for the good html5 players

/*
var url = window.location.href.replace(/[^a-z]/g, '').replace('https','').replace('http','').replace('player','')
if(url == 'scratchmiteduprojects'){
*/

//Get id project
//var player = 1; //enter here player 3-Scratch 3.0 1-phosphorus 2-surforus
var num = parseInt(window.location.href.split('#')[0].replace(/\D+/g,""));

if('null' == localStorage.getItem('playerScratch')){
localStorage.setItem('playerScratch', '0');
}
player = localStorage.getItem('playerScratch');
if(player != 0){

    //Create element html
    var html = '<iframe height=400 width=480 frameborder="0" style="position:absolute;top:50%;left:50%;margin:-200px 0 0 -250px;" '
        if(player==1){
            html = html + 'src=https://phosphorus.github.io/embed.html?id=' + num + '&turbo=false&full-screen=false></iframe>';
        }
        if(player==2){
            html = html + 'src=https://sulfurous.aau.at/html/app.html?id=' + num + '&turbo=false&full-screen=false></iframe>';
        }

    //Delete the flash player
    var i = document.getElementsByTagName('object')[0];
    i.parentNode.removeChild(i);
    //Add the phosphorus
    document.getElementById('scratch-loader').innerHTML = html;
    document.getElementById('scratch-loader').style = '';
}
