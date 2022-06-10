const form = document.getElementById("formData");
console.log(form);
const inputField = document.getElementById("input");

console.log(inputField);
const taskValues = [] ;
const addBtn = document.getElementById("addBtn");
console.log(addBtn);
// const saveBtn = document.getElementById("saveBtn");
// console.log(saveBtn);

let parent = true;
var editPress = false;
let index;
let childIndex
let parentindex;

addBtn.addEventListener('click', function (e) {
    if (inputField.value !='') {
     

        if (parent === true && editPress == false) {
            console.log("addbutton");
            console.log("inputvalue is" + inputField.value)

            taskValues.push({ title: inputField.value, sub: [] });
            console.log("value of task in parent" + taskValues);
            inputField.value = '';
            print();
        }

        if (parent === false && editPress == false) {
            // taskValues.sub = inputField.value;

            console.log("child value" + parentindex);
            console.log("child value" + taskValues[parentindex]);
            taskValues[parentindex].sub.push(inputField.value); // push value in it but no value syntax error
            inputField.value = '';
             parent=true;
            print();

        }


    }
}
);


function childinput(i) {
   
    parent = false;
    parentindex = i
    console.log(parentindex);
    console.log('parent is'+parent);
  
    
}




function print()
{
    console.log("taskValue in print"+taskValues);
    const ul = document.getElementById("list");
    ul.innerHTML ='';
    for (let i = 0; i < taskValues.length; i++)   // loop to iterate parent
    {
       
console.log('parent');
      
        if(taskValues[i].title!=='' )
        {

        console.log(i);
        ul.innerHTML += `<div> <li class='items'> ${taskValues[i].title}
        <div class="spanButton">

      
        <span onclick = "childinput(${i})">

        child
     </span>
     <span onclick = "EditSave()">

     save
  </span>

    <span>
            <span><i class="fa fa-edit" onclick = "editList(${i})">

                </i></span>
            <span>

                <i class="fa fa-remove" onclick = "deleteList(${i})">

                </i>
            </span>
        </div>
    </li>      </div>`;

}

    for (let j = 0; j < taskValues[i].sub.length; j++)   
    {
        if(taskValues[i].sub[j]!=='' )
        {
       
        console.log(i);
        ul.innerHTML += `<div> <li class='items'> ${taskValues[i].sub[j]}
        <div class="spanButton">

        <span onclick = "childSave()">

       save
    </span>


        
    <span>
            <span><i class="fa fa-edit" onclick = "EditList(${i},${j})">

                </i></span>
            <span>

                <i class="fa fa-remove" onclick = "DeleteList(${i},${j})">

                </i>
            </span>
        </div>
    </li>      </div>`;

}
   
    console.log(taskValues);
}
    }

}

// console.log()

function deleteList(i) {

console.log(i);
    taskValues.splice(i, 1);
    print();


}
function DeleteList(i , j) {


    taskValues[i].sub.splice(j, 1);
    print();


}

function editList(i) {

    index = i;
    editPress = true;
    
    inputField.value = taskValues[index].title;
  

}

function EditList(i,j) {

    index = i;
    childIndex = j;
    editPress = true;
    inputField.value = taskValues[index].sub[childIndex];
  

}

function EditSave() {
    let value = inputField.value;
    console.log("parentsave value"+value)
    if (value !=="" &&  value !==" ") {

            

      taskValues[index].title= value;
       
        editPress = true;
        print();
         inputField.value = "";
    }
}
function childSave()
{
    let value =inputField.value;
    console.log('child value:'+value,':')
if(value!==" " && value!=='')
{
  
    console.log('inputfield value'+value)
        taskValues[index].sub[childIndex]= value;
        // inputField.value = " ";
        editPress = true;


        print();
        inputField.value = " ";
}



}

