const addForm = document.getElementById("addForm");
const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");

let createMyOwnElement = (parent,element, classes,txt,attributes = []) => {

    let myEl = document.createElement(element);
    if(classes) myEl.classList = classes;
    myEl.innerText = txt;
    parent.appendChild(myEl);
    attributes.forEach(attr => myEl[attr.attrName] = attr.attrVal)
    // [ {attrName:"src", attrVal:ele.val} ]
    return myEl;
  
  }
  

const readFromStorage = () =>{
    let data;
   try{
     data = JSON.parse(localStorage.getItem("tasks")) || [];
      if(!Array.isArray(data)) throw new Error("No Data");
    }
    catch{
        data = []
    }

    return data;
}


const writeFromStorage = (data)=>{
    localStorage.setItem("tasks",JSON.stringify(data))
}


if(addForm){
    addForm.addEventListener("submit",function(e){
        e.preventDefault();
    
        task = {
            title   : addForm.elements.title.value,
            content : addForm.elements.content.value,
            dueDate : addForm.elements.dueDate.value,
            status  : false,
            id      : Date.now()
    
        }
        const data = readFromStorage()
        data.push(task);
        writeFromStorage(data)
       this.reset();
      
        window.location.href="index.html"
        
    });



}




let trHead = createMyOwnElement(thead,"tr",null,null);
let tableHeads = ["id","title","content","dueDate", "status"];
tableHeads.forEach(head =>{
    createMyOwnElement(trHead,"th",null,head,[{attrName:"scope",attrVal:"col"}]);
})


{/* <tr>

<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr>
<tr> */}



let data = JSON.parse(localStorage.getItem("tasks"));

data.forEach(task=>{
    let trBody = createMyOwnElement(tbody,"tr",null,null);
    tableHeads.forEach(head=>{
        
        createMyOwnElement(trBody,"td",null,task[head]);
    })
    
})