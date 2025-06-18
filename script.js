let draggedelement=null;
function addtask(columnid)
{
    const input = document.getElementById(`${columnid}-input`);

    const inputvalue=input.value.trim();
    if(inputvalue==="")
    {
        return;
    }
    inputcard=getcosmadecard(inputvalue);
    document.getElementById(`${columnid}-tasks`).appendChild(inputcard);
    input.value="";
}

function getcosmadecard(inputvalue)
{
    const inputcard=document.createElement("div");
    inputcard.innerText=inputvalue;
    inputcard.classList.add("card");
    inputcard.draggable=true;
    inputcard.addEventListener("dragstart",funstart)
    inputcard.addEventListener("dragend",funend)
    return inputcard;

}

function funstart()
{
    this.classList.add("dragable");
    draggedelement=this;

}
function funend()
{
    this.classList.remove("dragable");
}

const columns=document.querySelectorAll(".column .tasks");
columns.forEach((elements)=>
{
    elements.addEventListener("dragover",funover)
})

function funover(event)
{
    event.preventDefault();
    this.appendChild(draggedelement);
    
}