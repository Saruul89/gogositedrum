// DOM selector exercises
//  Write a script to change the text content of all paragraphs to "Updated Paragraph" using a for loop.
// <p class="text">Paragraph 1</p>

// <p class="text">Paragraph 2</p>

// <p class="text">Paragraph 3</p>

//       2. Write a script to add 5 list items to the unordered list using a for loop

// <ul id="itemList"></ul>

//       3.  Write a script to change the class of each paragraph to "highlight" using a for loop.

// <p class="text">Paragraph 1</p>

// <p class="text">Paragraph 2</p>

// <p class="text">Paragraph 3</p>

//      4. Write a script to append 5 list items to the unordered list, but only append items with even numbers.

// <ul id="itemList"></ul>

//  1. Write a script to change the text content of all paragraphs to "Updated Paragraph" using a for loop.
let paragraphs = document.getElementsByClassName("text"); //text class-iin buh ogogdliig songono
for (let i = 0; i < paragraphs.length; i++) {
  // ogogdol tus buriin loop
  paragraphs[i].textContent = "Updated Paragraph"; //i - iinhaa textContent-iig yu bhiig zaaj ogno
}

// //2. Write a script to add 5 list items to the unordered list using a for loop
let ulList = document.getElementById("itemList"); //ul-iigee barij awna
for (let i = 1; i <= 5; i++) {
  //5n list item nemne
  let li = document.createElement("li"); //ul dotor li bhgu blhooor shine element uusgene
  li.textContent = "List-iin item" + i; // li-iin dotorh text content yg yu bhwe shiidej ogno
  ulList.appendChild(li); //ul-d li-g child blgoj ogno
}

// //3.  Write a script to change the class of each paragraph to "highlight" using a for loop.
let paragraph = document.getElementsByClassName(`text1`);
for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].textContent = `highlight`;
}

// //4. Write a script to append 5 list items to the unordered list, but only append items with even numbers.
let list = document.getElementById(`itemList1`);
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    //zowhon tegsh toonuudiig awna gsn uchraas
    let li = document.createElement(`li`);
    li.textContent = `listiin item even number` + i;
    list.appendChild(li);
  }
}

// 1.  id selector, classname selector, tagname ashiglan doort elementiig select hiine uu
// <h1 id="title">Welcome to DOM Manipulation</h1>
// <p class="description">This is a paragraph.
// </p><button id="changeTextButton">Change Text</button>

//       2. Doorh div dotor p tag dotor "Hello World" gesen ugtei text nemne uu

// <div id="addChild"></div>
// let hello = document.getElementById(`addChild`);
// // let ptag = document.createElement(`hello`);
// hello.textContent = `Hello World`;
// addchild.appendChild(ptag);

//       3. Doorh p tag dotor baigaa text iig Hello Pinecone bolgoj uurchilnu uu

// <p id="editText">   Hello World  </p>

//       4. p , div, span gesen elementiig div dotor uusgene uu

// <div id="create"></div>

for (let i = 5; i > 0; i--) {
  //ene gadnah loop ni row-iig uusgeh zorilgotoi
  let row = " ";
  for (let j = 0; j < i; j++) {
    //i-aas baga bagasah shaltgaan ni i=5 geed 5,4,3,2,1 boloh ystoi uchras
    row += "*";
  }
}
console.log(row);
