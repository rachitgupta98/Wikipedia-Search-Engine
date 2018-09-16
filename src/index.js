//created by rachit

window.onload = function() {
  function wikiApi(url, call) {
    let req = new XMLHttpRequest();
    req.open("GET", url);

    //req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        call(JSON.parse(this.responseText));
      }
    };
    req.send();
  }
  function displayResult() {
    let searchUrl =
      "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" +
      searchInput.value;
    wikiApi(searchUrl, function(response) {
      const test = document.getElementById("test");
      test.classList.add("tes");
      test.innerHTML = response;
    });
  }
  function clearResult() {
    const clearTest = document.getElementById("test");
    clearTest.classList.remove("tes");
    clearTest.innerHTML = "";
  }
  let searchBtn = document.getElementById("searchBtn");
  let searchInput = document.getElementById("searchInput");
  document.getElementById("searchBtn").onclick = displayResult;
  searchInput.onfocus = clearResult;
};
