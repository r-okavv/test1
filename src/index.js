import "./styles.css";

const onClickaAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  // liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;
  console.log(li);

  //button(done)tag生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "done";
  completeButton.addEventListener("click", () => {
    alert("done");
  });

  //button(remove)tag生成
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.addEventListener("click", () => {
    const removeTarget = removeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(removeTarget);
  });

  // divタグの子要素にliタグを入れる
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(removeButton);

  // ulタグの子要素にdivタグを入れる;
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickaAdd());
