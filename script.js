let addbtn = document.getElementById("addCard");
addbtn.addEventListener("click",()=>{
  validateFields()
})

// validate fields 
function validateFields(){
  let ques = document.getElementById("question");
  let ans = document.getElementById("answer");
  if(ques.value=="" || ans.value==""){
    document.getElementById("msg").innerHTML = "Fields can't be empty";
  }else{
    acceptstoredData();
    document.getElementById("msg").innerHTML = "";
    // clearFields();


  }
};
 

// without using local storage  getting and storing values
// let data = {};

// function acceptstoredData(){
  // data["question"] = question.value;
  // data["answer"] = answer.value;
  // addFlashCards();
  // };


  // by using local storage  getting and storing values

  let data = []; 
  function acceptstoredData(){
    let ques = document.getElementById("question");
    let ans = document.getElementById("answer");

    data.push({
      question :  ques.value,
      answer :  ans.value,
    });
  
    localStorage.setItem("myData",JSON.stringify(data));
    addFlashCards();
    // console.log(data)
  };
  
  // to add cards in my ui record 
function addFlashCards(){
  let flashcards = document.querySelector(".flashcards");
  flashcards.innerHTML = "";
data.map((element,index)=>{
  return   flashcards.innerHTML += `
  <div class="record" id=${index}>
               <div>
                   <label>Question : </label>
                   <span class="finalQuestion">${element.question}</span>
                   <br><br>
                   <br>
                   <label>Answer : </label>
                   <span class="finalAnswer">${element.answer}</span>

               </div>
               <button id="removeCard" onclick="deleteCard(this)">Delete</button>

           </div> 
 `;
})
clearFields();
console.log(data)

};


// to clear fields 
function clearFields(){
  question.value = ""
  answer.value = ""
}
// to delete cards manually 
function deleteCard(e){
  e.parentElement.remove();
  data.splice(e.parentElement.index, 1);
  localStorage.setItem("myData",JSON.stringify(data))
}


// using IIFE to fetch data from local storage 
(
  ()=>{
    data = JSON.parse(localStorage.getItem("myData"));
    addFlashCards();
  }
)();





let someBtns = document.querySelectorAll("button");
let card = document.querySelector(".card");

someBtns.forEach(button=>{
  button.addEventListener("click",(e)=>{
    if(e.target.id=="closeCard"){
      card.classList.add("close");
    }
    if(e.target.id=="newCard"){
      card.classList.remove("close");
    }
  })
});
