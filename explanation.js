function introimgn()
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