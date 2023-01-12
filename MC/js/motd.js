function online(){
    function onlineplayer(){
        var xmlhttp=new XMLHttpRequest();
        var url="https://motdbe.blackbe.work/api/java?host=mcbtc.cn:20202";//mcbtc.cn:20202  Shiyunyun.com:20405 mc.hypixel.net:25565
        var type="GET";//方法
        xmlhttp.open(type,url,true);//方法，接口，异步
        xmlhttp.send();//发送请求
        xmlhttp.onreadystatechange=function(){
            if(xmlhttp.status==200&&xmlhttp.readyState==4){
                var result=JSON.parse(xmlhttp.response); //获取到的json数据
                // console.log(result);
                // console.log(result.max);
                if(result.online==0){
                    document.getElementById("online").innerText="好像没有人在线唉";
                }else{
                    // console.log(result.online);
                    document.getElementById("online").innerText=result.online;
                }
                if(result.status=="offline"){
                    document.getElementById("status").innerText="当前离线中";
                    document.getElementById("motd").innerText="暂时无法获取";
                    document.getElementById("version").innerText="暂时无法获取";
                    // console.log("好像没有人在线唉");
                    document.getElementById("delay").innerText="离线中无法获取";
                    document.getElementById("max").innerText="离线中无法获取";
                }else{
                    document.getElementById("status").innerText=result.status;
                    document.getElementById("motd").innerText=result.motd;
                    document.getElementById("version").innerText=result.version;
                    document.getElementById("delay").innerText=result.delay;
                    document.getElementById("max").innerText=result.max;
                    document.getElementById("img_favicon").src=result.favicon;
                }
                // console.log(result.delay);
                // console.log(result.status);
                // console.log(result.motd+"motd");
                // console.log(result.version);
                // console.log(result.agreement);
                // console.log(result.favicon);
                // console.log(result.max);
                }
        }
    }
    onlineplayer();
    setInterval(onlineplayer,10000);
        var xia = document.getElementById('imge');//箭头闪烁
        // console.log(xia);
        var a=10;
        function ss(){
            if(a==-10){
                a=10;
            }
            a=a-1;
            xia.style.opacity=Math.abs(a/10);
        }
        setInterval(ss,50);
        // function scree(){
        //     // console.log(document.body.offsetWidth);
        //     // console.log(document.body.offsetHeight);
        //     // console.log(document.body.offsetWidth/document.body.offsetHeight);
        //     onsole.log(window.screen.availWidth);
        //     console.log(window.screen.availHeight);
        // }
        // setInterval(scree,1000);
        function load_a(){
            var load=document.getElementById("load");
            load.style.display="none"
        }
        load_a();
    }
    window.onload=online;
    //cscs