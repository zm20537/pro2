function wmoment(){
    document.getElementById('loading').src='./top-image/loading.gif';
    setTimeout("alredy()",5000);
}
function alredy(){
    document.getElementById('loading').src='./top-image/alredy.jpg';
}

function introimgn()
{
    if(document.getElementById('imagec').getAttribute('src') == './intro-image/ishi.png')
    {
        document.getElementById('imagec').src='./intro-image/eda.png';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/eda.png')
    {
        document.getElementById('imagec').src='./intro-image/kinoyumi.png';
    }


    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/kinoyumi.png')
    {
        document.getElementById('imagec').src='./intro-image/sunset.png';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/sunset.png')
    {
        document.getElementById('imagec').src='./intro-image/wolf.png';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/wolf.png')
    {
        document.getElementById('imagec').src='./intro-image/house.png';
    }


    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/house.png')
    {
        document.getElementById('imagec').src='./intro-image/tenkou.png';
    }


    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/tenkou.png')
    {
        document.getElementById('imagec').src='./intro-image/techtree.png';
    }


    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/techtree.png')
    {
        document.getElementById('imagec').src='./intro-image/talent.png';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/talent.png')
    {
        document.getElementById('imagec').src='./intro-image/highlight.png';
    }


    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/highlight.png')
    {
        document.getElementById('imagec').src='./intro-image/dethpenalty.png';
    }

    else
    {
        document.getElementById('imagec').src='./intro-image/ishi.png';
    }
}





function introimgb()
{
        if(document.getElementById('imagec').getAttribute('src') == './intro-image/ishi.png')
        {
            document.getElementById('imagec').src='./intro-image/dethpenalty.png';
        }
        else if(document.getElementById('imagec').getAttribute('src') == './intro-image/dethpenalty.png')
        {
            document.getElementById('imagec').src='./intro-image/highlight.png';
        }
    
    
        else if(document.getElementById('imagec').getAttribute('src') == './intro-image/highlight.png')
        {
            document.getElementById('imagec').src='./intro-image/talent.png';
        }
        else if(document.getElementById('imagec').getAttribute('src') == './intro-image/talent.png')
        {
            document.getElementById('imagec').src='./intro-image/techtree.png';
        }
        else if(document.getElementById('imagec').getAttribute('src') == './intro-image/techtree.png')
        {
            document.getElementById('imagec').src='./intro-image/tenkou.png';
        }
    
    
        else if(document.getElementById('imagec').getAttribute('src') == './intro-image/tenkou.png')
        {
            document.getElementById('imagec').src='./intro-image/house.png';
        }
    
    
        else if(document.getElementById('imagec').getAttribute('src') == './intro-image/house.png')
        {
            document.getElementById('imagec').src='./intro-image/wolf.png';
        }
    
    
        else if(document.getElementById('imagec').getAttribute('src') == './intro-image/wolf.png')
        {
            document.getElementById('imagec').src='./intro-image/sunset.png';
        }
        else if(document.getElementById('imagec').getAttribute('src') == './intro-image/sunset.png')
        {
            document.getElementById('imagec').src='./intro-image/kinoyumi.png';
        }
    
    
        else if(document.getElementById('imagec').getAttribute('src') == './intro-image/kinoyumi.png')
        {
            document.getElementById('imagec').src='./intro-image/eda.png';
        }
    
        else
        {
            document.getElementById('imagec').src='./intro-image/ishi.png';
        }
}


    
function expc()
{
    if(document.getElementById('imagec').getAttribute('src') == './intro-image/sunset.png')
    {
        document.getElementById('setsumei').innerHTML ='次に、夕方（18時）になると日が沈み、一気に暗くなります。猛獣は、狂暴になり、あなたは痛い目に遭うでしょう。そのため、動物に対して、剝ぎ取りを行い「皮」を集め寝袋を作りましょう。「寝袋」と「焚火」があなたを暗闇の悪夢から救うでしょう。（洞窟か家の中に限る）';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/wolf.png')
    {
        document.getElementById('setsumei').innerHTML ='次に、夕方（18時）になると日が沈み、一気に暗くなります。猛獣は、狂暴になり、あなたは痛い目に遭うでしょう。そのため、動物に対して、剝ぎ取りを行い「皮」を集め寝袋を作りましょう。「寝袋」と「焚火」があなたを暗闇の悪夢から救うでしょう。（洞窟か家の中に限る）';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/house.png')
    {
        document.getElementById('setsumei').innerHTML ='次に、夕方（18時）になると日が沈み、一気に暗くなります。猛獣は、狂暴になり、あなたは痛い目に遭うでしょう。そのため、動物に対して、剝ぎ取りを行い「皮」を集め寝袋を作りましょう。「寝袋」と「焚火」があなたを暗闇の悪夢から救うでしょう。（洞窟か家の中に限る）';
    }


    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/tenkou.png')
    {
        document.getElementById('setsumei').innerHTML ='あなたがいる星は、天候が悪くなりやすいです。天候が悪い中では、経験値が貯まりにくいし、移動しにくいです。すぐに家や洞窟に逃げましょう。また、家は風雨や雷に打たれると壊れてしまいます。家の耐久地が0になる前に、「リペアハンマー」で直しましょう。';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/techtree.png')
    {
        document.getElementById('setsumei').innerHTML ='レベルが上がると様々な物が作れるようになります。製作物の性能は基本的に、わら＜木＜石＜骨＜鉄＜銅、のようになっています。また、さらに上級の金属も存在します。';
    }


    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/talent.png')
    {
        document.getElementById('setsumei').innerHTML ='作るだけではなく、実は、「タレント」からプロスペクターの能力や武器が与える効果を向上させることもできます。どこを伸ばすかはあなたの自由です。ただし、「中型動物感知」を早めにとることをお勧めします。これは、動物をハイライトしてくれ、不意打ちから守ってくれます。';
    }
    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/highlight.png')
    {
        document.getElementById('setsumei').innerHTML ='作るだけではなく、実は、「タレント」からプロスペクターの能力や武器が与える効果を向上させることもできます。どこを伸ばすかはあなたの自由です。ただし、「中型動物感知」を早めにとることをお勧めします。これは、動物をハイライトしてくれ、不意打ちから守ってくれます。';
    }


    else if(document.getElementById('imagec').getAttribute('src') == './intro-image/dethpenalty.png')
    {
        document.getElementById('setsumei').innerHTML ='果たしてあなたは、無事に探索をし、「ポッド」に乗り込み帰還できるでしょうか。（デスペナルティは、現レベルで入手した経験値のリセットとインベントリ内のアイテムのドロップ。レベルは下がらない）';
    }
    else
    {
        document.getElementById('setsumei').innerHTML ='ようこそ。今回紹介するゲームは、「Icarus」です。早速ですが、プロスペクター（探索者）のあなたは、酸素、水、食料を確保する手段を手に入れなければいけません。 それら3つは、時間の経過に伴い徐々に減ります。0になってしまうと、HPが徐々に減り始めます。 そのため、「弓」と「矢」を作り、狩りができる状態まで進めましょう。';
    }
}