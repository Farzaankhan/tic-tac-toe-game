let input = document.getElementById("input");
let list = document.getElementById("list");
let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
  if (input.value.trim() === "") {
      return;
  }
  let li = document.createElement("li");
  li.textContent = input.value;

  let delbtn = document.createElement("button");
  delbtn.textContent = "delete";

  delbtn.addEventListener("click", () => {
    li.remove();
  });

  li.append(delbtn);
  list.append(li);
  console.log("click");
  input.value="";

 
})
 