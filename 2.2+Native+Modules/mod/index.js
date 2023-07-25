const fs=require('fs'); 
// fs.writeFile("MEssage.txt","Hello World",function(err){
//     if(err) throw err;
//     console.log("File Created");
// })



fs.readFile("message.txt","utf8",function(err,data){
    if(err) throw err;
    console.log(data);
})