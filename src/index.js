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

  // divタグの子要素にliタグを入れる
  div.appendChild(li);
  console.log(div);

  // ulタグの子要素にdivタグを入れる;
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickaAdd());
