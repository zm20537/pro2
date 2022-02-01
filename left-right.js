function intro-img(){
    if(document.getelementbyid('imagec').value== 'src="./image/intro-img1.jpg"')
    {
        document.getElementById('imagec').src='./image/intro-img2.jpg';
    }
    else
    {
        alert('はずれ！');
    }
}