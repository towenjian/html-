function bodyone(){
    var imgid = document.getElementById("imgbanner");//获取画廊id
    var a=1;
    function banner(){//改变图片
        imgid.src="image/"+a+".png";
        a++;
        if(a==7){
            a=1;
        }
    }
    var time = setInterval(banner,2000);
    var colorid = document.getElementById("color");//渐变颜色
    var color1=0,color2,color3=0;
    function colorroll(){
        if(color3==0)
        {
            color2 = 100 - color1;
            color1++;
            if(color1==100)
            {
                color3=1
            }
        }
        else 
        {
            color2 = 100 - color1;
            color1--;
            if(color1==0)
            {
                color3=0;
            }
        }
        // console.log(color1);
        if(color1<50)
        {
            colorid.style.backgroundImage = "linear-gradient(to right, #92fe9d "+color1+"%, #00c9ff "+color2+"%)";
        }
        else
        {
            colorid.style.backgroundImage = "linear-gradient(to left, #00c9ff "+color2+"%, #92fe9d "+color1+"%)";
        }
    }
    setInterval(colorroll,100);
}
window.onload=bodyone;