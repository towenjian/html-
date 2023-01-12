async function getDate(){
     const response = await   fetch("https://motdbe.blackbe.xyz/api/java?host=example.com:25565");
     const posts = await response.json();

     console.log(posts);
}

getDate();