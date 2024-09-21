const inputbox=document.getElementById("input-box");
let listcontainer=document.getElementById("list-container");
let button=document.querySelector("button");
button.addEventListener("click",()=>{
    if(inputbox.value==" "){
        alert("Yoou must write something");
    }else{
        let li=document.createElement("li");
        li.innerText=inputbox.value;
        listcontainer.append(li);
        let span=document.createElement("span");
        span.innerHTML=" \u00d7";
    
        li.appendChild(span);
        inputbox.value=" ";
        
    }
    savedata();
})
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
}
    
},);
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function insertdata(){
    listcontainer.innerHTML=localStorage.getItem("data");

}
insertdata();