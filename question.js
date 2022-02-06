function toi1r(){
    alert('はずれー');
}
function toi1f(){
    alert('あたり！');
}
function Commentary1(){
    document.getElementById('kaisetsu').innerHTML='リフレッシュレートを高く出せるモニターだったとしても、CPU、GPU、メモリの性能が足りなければ、意味がありません。そのため、丁度いいリフレッシュレートが出せるモニターを選ぶべきです。';
}

function toi2(){
    if(document.getElementById('answer1').value=='世代')
    {
        alert('あたり！');
    }
    else
    {
        alert('はずれ！');
    }
}
function Commentary2(){
    document.getElementById('kaisetsu2').innerHTML='ごくまれに、cpuの世代を表記せずに販売されていることがあります。そういうところのは、買わないようにしましょう。また、i7-11700Kよりi5-12600KFの方が性能が上です。気を付けましょう。';
}

function Commentary3(){
    document.getElementById('kaisetsu3').innerHTML='ゲームをする程度であれば、16GBあれば十分なことが多いです。（使用率が8割超えることはほとんどない）動画編集（書き出し）やDTMをする人は、32GBあった方がいいです。'
}

function toi4()
{
    if(document.getElementById('answer2').value=='読み込み速度が速い')
    {
        alert('あたり！');
    }
    else if(document.getElementById('answer2').value=='読み込み速度がはやい')
    {
        alert('あたり！');
    }
    else if(document.getElementById('answer2').value=='読み込み速度が高速')
    {
        alert('あたり！');
    }
    else if(document.getElementById('answer3').value=='高価')
    {
        alert('あたり！');
    }
    else if(document.getElementById('answer3').value=='高値')
    {
        alert('あたり！');
    }
    else
    {
        alert('はずれー');
    }
}
function Commentary4(){
    document.getElementById('kaisetsu4').innerHTML='SSDはHDDに比べて、かなり速いため、デスクトップであるのならば必ずSSDにした方が良い。また、筆者のようにゲームを10個以上遊びたい人は、予算が許すのであれば2TBをお勧めします。（現在の空き容量：40GB/1TB）'
}