const inputbox1 = document.getElementById("input-s1");
const list1= document.getElementById("list-container");

function addtask(){
    if(inputbox1.value ===''){
        alert("Please Enter A task");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputbox1.value;
        list1.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox1.value='';
}

list1.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        document.getElementById("list-container").blur();
    }
    else if(e.target.tagName==="SPAN"){
         e.target.parentElement.remove();
    }
},false);s