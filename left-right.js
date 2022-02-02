function introimg(){
    if(document.getelementbyid('imagec').value== 'src="./intro/bankin.jpg"')
    {
        document.getElementById('imagec').src='./intro/calorie.jpg';
    }
    if else(document.getelementbyid('imagec').value== 'src="./intro/calorie.png"')
    {
        document.getElementById('imagec').src='./intro/eating-snow.png';
    }
    if else(document.getelementbyid('imagec').value== 'src="./intro/eating-snow.png"')
    {
        document.getElementById('imagec').src='./intro/nobose.png';
    }
    if else(document.getelementbyid('imagec').value== 'src="./intro/nobose.png"')
    {
        document.getElementById('imagec').src='./intro/ohuro.png';
    }
    else
    {
        document.getElementById('imagec').src='./intro/bankin.jpg';
    }
}

