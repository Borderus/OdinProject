// 2. Assign button function in here
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World 2!");

// 3. Assign function with event listener
const btn3 = document.querySelector('#btn3');
btn3.addEventListener("click", function (e) {
    alert("Hello World 3!");
    console.log(e);
})