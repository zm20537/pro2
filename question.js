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