function count (){
  const articleText = document.getElementById("article_text")
  const countNum = document.getElementById("char_num")
  articleText.addEventListener( "keyup", () => {
    // const countVal = articleText.value.length
    // countNum.innerHTML = `${countVal}文字`
    countNum.innerHTML = `${articleText.value.length}文字`
  })
  // console.log("文字数カウント")
}
window.addEventListener('load', count);
