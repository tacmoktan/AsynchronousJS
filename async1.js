//1. Requests
/*Note:
readystate  Request
    0       not initialized
    1       set up
    2       sent
    3       in process
    4       complete
*/
/*
window.onload = () => {
    //vanilla js

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status ==200){
            console.log(JSON.parse(xhr.response)); //JSON.parse converts string to JSON object
        }           
    }
    xhr.open("GET","data/js.json",true); //true = async, false = sync
    xhr.send();
    console.log("random text");

    //jquery $.get(url,callbackfunction)
    $.get('data/js.json',function(data){
        console.log(data);
    })

}*/

//2. Callback functions  $.ajax({type,url,success,error})
//solving callback hell
window.onload = () =>{
    function errorHandler(xhr,status,error){
        console.log(error);
    }
    $.ajax({
        type: 'GET',
        url : "data/js.json",
        success: cbjs,
        error:errorHandler
    });

    function cbjs(js){ //callback function for js
        console.log(js);
        return $.ajax({
            type:'GET',
            url :"data/web.json",
            success:cbweb,
            error: errorHandler
        });
    }
    
    function cbweb(web){
        console.log(web);
        return $.ajax({
            type:'GET',
            url:'data/app.json',
            success: function(data){
                console.log(data)
            },
            error: errorHandler
        
        });
    }
}