let draggedelement=null;
let rightclickedcard=null;
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
    inputcard.addEventListener("dragstart",funstart);
    inputcard.addEventListener("dragend",funend);
    inputcard.addEventListener("contextmenu",function(event){
         event.preventDefault();
         rightclickedcard=this;
         showContextMenu(event.pageX,event.pageY);
    });
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

const contextmenu = document.querySelector(".context-menu");
function showContextMenu(x,y)
{
    contextmenu.style.left=`${x}px`;
    contextmenu.style.top=`${y}px`;
    contextmenu.style.display="block";
}

document.addEventListener("click",()=>
{
    contextmenu.style.display="none";
});

function edittask()
{
    if(rightclickedcard!==null)
    {
        const newtext=prompt("edit Message-",rightclickedcard.innerText);
        if(newtext!="")
        {
            rightclickedcard.innerText=newtext;
        }
    }
}

function deletetask()
{
    if(rightclickedcard!==null)
    {
        rightclickedcard.remove();
    }
}