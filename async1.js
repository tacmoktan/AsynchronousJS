//Requests
/*Note:
readystate  Request
    0       not initialized
    1       set up
    2       sent
    3       in process
    4       complete
*/
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


}