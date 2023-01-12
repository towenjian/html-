var a=25;
var b=250;
function lick(){
    var meun=document.getElementById("meun_a");
    a=((a*10)-5)/10;
    meun.style.width=a+"px";
    if(a>0){
        setTimeout(lick,1);
        // console.log(a);
    };

    if(a==0.5){
        // console.log("wdsdw");
        function cebian(){
            var cebianlan=document.getElementById("cebian");
            b=((b*10)-100)/10;
            cebianlan.style.left=-b+"px";
            if(b>0){
                setTimeout(cebian,1);
                // console.log(b);
            }
        }
        cebian();
    }
}
function lick_back(){
    // console.log(a);
    // console.log(b);
    function cebian_back(){
        var cebianlan_back=document.getElementById("cebian");
        b=(b*10+100)/10;
        cebianlan_back.style.left=-b+"px";
        if(b<=250){
            setTimeout(cebian_back,1);
            // console.log(b);
        };
        if(b==250){
            function lick_back(){
                var meun_back=document.getElementById("meun_a");
                a=(a*10+5)/10;
                meun_back.style.width=a+"px";
                if(a<=25){
                    setTimeout(lick_back,1);
                }
            }
            lick_back();
        }
    }
    cebian_back();
}
function home(){
    var home_a=document.getElementById("body_a");
    var video_a=document.getElementById("video_a");
    var build_a=document.getElementById("build_a")
    home_a.style.display="inline";
    video_a.style.display="none";
    build_a.style.display="none"
    // console.log(111);
}
function video(){
    var video_a=document.getElementById("video_a");
    var home_a=document.getElementById("body_a");
    var build_a=document.getElementById("build_a")
    home_a.style.display="none";
    video_a.style.display="inline";
    build_a.style.display="none"
}
// if(window.onload!=null){
//     var bil=document.getElementById("bilbil");
//     bil.innerHTML='<iframe src="//player.bilibili.com/player.html?aid=861386260&bvid=BV1mV4y1A73D&cid=928702024&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'
// }
function build(){
    var video_a=document.getElementById("video_a");
    var home_a=document.getElementById("body_a");
    var build_a=document.getElementById("build_a")
    home_a.style.display="none";
    video_a.style.display="none";
    build_a.style.display="inline"
}
///ss
