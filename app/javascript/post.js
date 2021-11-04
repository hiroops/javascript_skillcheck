function post (){
  // console.log("非同期投稿を実装");
  const submit = document.getElementById("submit_btn");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(document.getElementById("new_article"))
    const form = document.getElementById("new_article")
    const formData = new FormData(form)
    const XHR = new XMLHttpRequest()
    XHR.open("POST", "/articles", true)
    XHR.responseType = "json"
    XHR.send(formData) 
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const item = XHR.response.article
      const contentsArea = document.getElementById("contents_area")
      const contentsTExt = document.getElementById("article_text")
      const HTML = `
        <div class="article">
          ${ item.text}
        </div>`
      // const countArticle = document.getElementById
      contentsArea.insertAdjacentHTML("afterbegin", HTML)
      contentsTExt.value = ""

      const countNum = document.getElementById("char_num")
      countNum.innerHTML = `０文字`

    }
  })
};

window.addEventListener('load', post);