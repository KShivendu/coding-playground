import React, { useRef, useState } from "react";
import { execute, getTemplateCode } from "./script.js";
import Editor from "./components/Editor";
import XtermComp from "./components/XtermComp";

// import './App.css';

const defaultCode = `import re 
import socket    
hostname = socket.gethostname()    
IPAddr = socket.gethostbyname(hostname)    
print("Your Computer Name is:" + hostname)    
print("Your Computer IP Address is:" + IPAddr)    

def main():
    hello = "Hello World!"
    sub = re.sub("W\\w*", "Sandbox", hello)
    print(sub)

main()`;

const App = () => {
  let theme = window.matchMedia("(prefers-color-scheme:light)").matches
    ? "light"
    : "dark";
  let [language, setLanguage] = useState("python");
  let [code, setCode] = useState(defaultCode);

  let editorElement = useRef();

  function runHandler() {
    const code = editorElement.current.getContent();

    execute(code, language);
  }

  function langChangeHandler(event) {
    setLanguage(event.target.value);
    setCode(getTemplateCode(event.target.value));
  }

  return (
    <div>
      <section className="hero is-dark">
        <div className="hero-body" style={{ padding: "0.5rem" }}>
          <div className="container">
            <div className="columns">
              <div className="column">
                <h1 className="title ">Coding Playground</h1>
                <h2 className="subtitle ">A little sandbox, just for fun</h2>
                <div className="field">
                  <div className="control">
                    <div className="columns">
                      <div className="column">
                        <div className="select">
                          <select
                            id="lang"
                            defaultValue="python3"
                            onChange={langChangeHandler}
                          >
                            <option>ballerina</option>
                            <option>bash</option>
                            <option>c</option>
                            <option>lisp</option>
                            <option>clojure</option>
                            <option>cpp</option>
                            <option>cpp11</option>
                            <option>crystal</option>
                            <option>csharp</option>
                            <option>dart</option>
                            <option>elisp</option>
                            <option>elixir</option>
                            <option>enzyme</option>
                            <option>erlang</option>
                            <option>express</option>
                            <option>forth</option>
                            <option>fsharp</option>
                            <option>go</option>
                            <option>haskell</option>
                            <option>java</option>
                            <option>julia</option>
                            <option>kotlin</option>
                            <option>love2d</option>
                            <option>lua</option>
                            <option>nim</option>
                            <option>nodejs</option>
                            <option>ocaml</option>
                            <option>pascal</option>
                            <option>perl6</option>
                            <option>php</option>
                            <option>pygame</option>
                            <option>python</option>
                            <option>python3</option>
                            <option>pyxel</option>
                            <option>rlang</option>
                            <option>ruby</option>
                            <option>rust</option>
                            <option>scala</option>
                            <option>sqlite</option>
                            <option>swift</option>
                            <option>tcl</option>
                            <option>WebAssembly</option>
                          </select>
                        </div>
                      </div>
                      <div className="column">
                        <button
                          id="execute"
                          className="button is-success"
                          onClick={runHandler}
                        >
                          Run
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="control"></div>
                </div>
                <div className="field"></div>
              </div>

              <div className="column">
                <section className="section">
                  <div id="notifications" className="container"></div>
                </section>
              </div>

              <div className="column">
                <section className="section">
                  <div id="output" className="output"></div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section"> */}
      {/* <div className="rows is-mobile"> */}
      {/* <div className="row"> */}
      {/* <section className="section"> */}
      <div>
        <Editor
          ref={editorElement}
          code={code}
          language={language}
          theme={theme}
        />
      </div>

      {/* </section> */}
      {/* </div> */}
      {/* </div> */}
      {/* </section> */}

      {/* <section
        style={{
          height: "15vw",
          width: "100vw",
          position: "fixed",
          bottom: "0"
        }}
      >
        <XtermComp />
      </section> */}
    </div>
  );
};

export default App;
