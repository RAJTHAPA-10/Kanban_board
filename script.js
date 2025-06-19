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
    const taskDate=new Date().toLocaleString();
    inputcard=getcosmadecard(inputvalue,taskDate);
    document.getElementById(`${columnid}-tasks`).appendChild(inputcard);
    input.value="";
    updateTaskCount(columnid);
}

function getcosmadecard(inputvalue,taskDate)
{
    const inputcard=document.createElement("div");
    inputcard.innerHTML=`<span>${inputvalue}</span><br><small class="time" >${taskDate}</small>`;
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
    ["todo","doing","done"].forEach((columnid)=>
    {
        updateTaskCount(columnid);
    })

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
        const columnid = rightclickedcard.parentElement.id().replace("-tasks","");
        rightclickedcard.remove();
        updateTaskCount(columnid);
    }

}

function updateTaskCount(columnId)
{
    const count=document.querySelectorAll(`#${columnId}-tasks .card`).length;
    
    document.getElementById(`${columnId}-count`).textContent=count;
}