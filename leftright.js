function introimgn()
{
    if(document.getElementById('imagec').getAttribute('src') == './intro/bankin.jpg')
    {
        document.getElementById('imagec').src='./intro/calorie.jpg';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro/calorie.jpg')
    {
        document.getElementById('imagec').src='./intro/eating-snow.png';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro/eating-snow.png')
    {
        document.getElementById('imagec').src='./intro/nobose.png';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro/nobose.png')
    {
        document.getElementById('imagec').src='./intro/ohuro.png';
    }
    else
    {
        document.getElementById('imagec').src='./intro/bankin.jpg';
    }
}
function introimgb(){
    if(document.getElementById('imagec').getAttribute('src') == './intro/bankin.jpg')
    {
        document.getElementById('imagec').src='./intro/ohuro.png';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro/ohuro.png')
    {
        document.getElementById('imagec').src='./intro/nobose.png';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro/nobose.png')
    {
        document.getElementById('imagec').src='./intro/eating-snow.png';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro/eating-snow.png')
    {
        document.getElementById('imagec').src='./intro/calorie.jpg';
    }
    else
    {
        document.getElementById('imagec').src='./intro/bankin.jpg';
    }
}
function expc()
{
    if(document.getElementById('imagec').getAttribute('src') == './intro/bankin.jpg')
    {
        document.getElementById('setsumei').innerHTML ='1';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro/calorie.jpg')
    {
        document.getElementById('setsumei').innerHTML ='2';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro/eating-snow.png')
    {
        document.getElementById('setsumei').innerHTML ='3';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro/nobose.png')
    {
        document.getElementById('setsumei').innerHTML ='4';
    }
    else
    {
        document.getElementById('setsumei').innerHTML ='5';
    }
}