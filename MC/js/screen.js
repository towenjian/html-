function main(){
    var weidth=window.screen.availWidth;
    var height=window.screen.availHeight;
    var join_s=document.getElementById("join_id");
    var title=document.getElementById("tt");
    var nj=document.getElementById("nj");
    if(weidth/height<(16/9)){
        title.style.backgroundAttachment="scroll";
        nj.style.backgroundAttachment="scroll";
        join_s.style.backgroundAttachment="scroll";
    }else{
        title.style.backgroundAttachment="fixed";
        nj.style.backgroundAttachment="fixed";
        join_s.style.backgroundAttachment="fixed";
    }
    if(weidth/height<1){
        nj.style.backgroundImage="url(image/z4.jpg)";
        nj.style.height="185vw";
    }else{
        nj.style.backgroundImage="url(image/z3.png)";
        nj.style.height="56.25vw";
    }
    if(window.screen.availWidth<1100){
        join_s.style.backgroundImage="url(image/cx1.jpg)";
        join_s.style.height="700px"
    }else{
        join_s.style.backgroundImage="url(image/z2.png)";
        join_s.style.height="56.25vw"
    }
    // console.log(window.screen.availHeight);
    // console.log(window.screen.availWidth);
}
setInterval(main,1000);
//cscscs