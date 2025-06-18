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
    return inputcard;

}