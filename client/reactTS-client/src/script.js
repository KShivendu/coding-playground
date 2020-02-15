
  
  // Execute the code in the box
  export function execute() {
    document.querySelector("#execute").classList.add("is-loading");
  
    let data = JSON.stringify({
      code: document.querySelector("#code").value,
      lang: document.querySelector("#lang").value
    });
    // console.log(data);
    fetch("/run", {
      // http://localhost:8000/hello
      // /run
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: data
    }).then(response => {
      if (response.ok) {
        response.text().then(result => {
          let parsed = JSON.parse(result);
          let status = "";
          let title = "";
          if (parsed.status === "success") {
            title = "Output";
            status = "is-success";
          } else if (parsed.status === "error") {
            title = "Error";
            status = "is-danger";
          }
          console.log(title, parsed.text, status);
          document.querySelector("#output").innerHTML = parsed.text;
        });
      } else {
        console.log("Error!", "SERVER ERROR", "is-warning");
      }
      document.querySelector("#execute").classList.remove("is-loading");
    });
  }
  
  
  
  
 export function changeTemplate() {
    // This function can change the content of the #code element according to language chosen
    const lang = document.querySelector("#lang").value;
    let sampleCode = "Write your code here !!";
    if (lang === "python3") {
      sampleCode = `
  import re
  def main():
      hello = "Hello World!"
      sub = re.sub("W\w*", "Sandbox", hello)
      print(sub)
  
  main()
  `;
    } else if (lang === "cpp" || lang === "cpp11") {
      sampleCode = `
#include <bits/stdc++.h>
using namespace std;\n
int main(){
\t cout << "Hello World" << endl;
}`;
    } else if (lang === "nodejs" || lang === "javascript") {
      sampleCode = `
console.log("Hello World");
`;
    }
  
    document.querySelector("#code").value = sampleCode;
  }
  
//   const languageExample_URLS = [
//     "https://repl.it/data/languages/python3/examples",
//     "https://repl.it/data/languages/nodejs/examples",
//     "https://repl.it/data/languages/c/examples",
//     "https://repl.it/data/languages/java10/examples",
//     "https://repl.it/data/languages/cpp/examples",
//     "https://repl.it/data/languages/ruby/examples",
//     "https://repl.it/data/languages/html/examples",
//     "https://repl.it/data/languages/scheme/examples",
//     "https://repl.it/data/languages/go/examples",
//     "https://repl.it/data/languages/rust/examples",
//     "https://repl.it/data/languages/clojure/examples",
//     "https://repl.it/data/languages/haskell/examples",
//     "https://repl.it/data/languages/kotlin/examples",
//     "https://repl.it/data/languages/scheme/examples",
//     "https://repl.it/data/languages/lua/examples",
//     "https://repl.it/data/languages/python/examples",
//     "https://repl.it/data/languages/ruby/examples",
//     "https://repl.it/data/languages/python3/examples",
//     "https://repl.it/data/languages/nodejs/examples",
//     "https://repl.it/data/languages/go/examples",
//     "https://repl.it/data/languages/cpp/examples",
//     "https://repl.it/data/languages/c/examples",
//     "https://repl.it/data/languages/csharp/examples",
//     "https://repl.it/data/languages/fsharp/examples",
//     "https://repl.it/data/languages/rust/examples",
//     "https://repl.it/data/languages/swift/examples",
//     "https://repl.it/data/languages/rlang/examples",
//     "https://repl.it/data/languages/bash/examples",
//     "https://repl.it/data/languages/crystal/examples",
//     "https://repl.it/data/languages/julia/examples",
//     "https://repl.it/data/languages/elixir/examples",
//     "https://repl.it/data/languages/nim/examples",
//     "https://repl.it/data/languages/dart/examples",
//     "https://repl.it/data/languages/reason_nodejs/examples",
//     "https://repl.it/data/languages/erlang/examples",
//     "https://repl.it/data/languages/typescript/examples",
//     "https://repl.it/data/languages/elisp/examples",
//     "https://repl.it/data/languages/sqlite/examples",
//     "https://repl.it/data/languages/java10/examples",
//     "https://repl.it/data/languages/php_cli/examples",
//     "https://repl.it/data/languages/javascript/examples",
//     "https://repl.it/data/languages/coffeescript/examples",
//     "https://repl.it/data/languages/roy/examples",
//     "https://repl.it/data/languages/html/examples",
//     "https://repl.it/data/languages/php7/examples",
//     "https://repl.it/data/languages/pygame/examples",
//     "https://repl.it/data/languages/love2d/examples",
//     "https://repl.it/data/languages/pyxel/examples",
//     "https://repl.it/data/languages/tkinter/examples",
//     "https://repl.it/data/languages/java_swing/examples",
//     "https://repl.it/data/languages/qbasic/examples",
//     "https://repl.it/data/languages/forth/examples",
//     "https://repl.it/data/languages/apl/examples",
//     "https://repl.it/data/languages/lolcode/examples",
//     "https://repl.it/data/languages/brainfuck/examples",
//     "https://repl.it/data/languages/emoticon/examples",
//     "https://repl.it/data/languages/bloop/examples",
//     "https://repl.it/data/languages/unlambda/examples"
//   ];
  

