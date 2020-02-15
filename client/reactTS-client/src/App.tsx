import React, { useRef, useState, createRef } from 'react';
import { execute, getTemplateCode } from './script.js';
import Editor from './components/Editor';
import { findDOMNode } from 'react-dom';
// import './App.css';

type theme = 'dark' | 'light';

const code = `import re 
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
	let theme: theme = window.matchMedia('(prefers-color-scheme:light)').matches ? 'light' : 'dark';
	let language = 'python';
	let editorRef = createRef<Editor>();
	let editor = editorRef.current;

	setTimeout(() => {
		console.log(editor);
	}, 2000);

	function runHandler() {
		// const code: string = valueGetter.current();
		execute(code, language);
	}

	return (
		<div>
			<section className="hero is-light">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">Coding Playground</h1>
						<h2 className="subtitle">A little sandbox, just for fun</h2>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<div className="columns is-mobile">
						<div className="column">
							<section className="section">
								<div className="container">
									<div className="field">
										<div className="control">
											<Editor
												ref={editorRef}
												code={code}
												language={language}
												theme={theme}
											/>
											<div className="select">
												<select
													id="lang"
													defaultValue="python3"
													onChange={getTemplateCode}
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
									</div>
									<div className="field">
										<div className="control">
											<button
												id="execute"
												className="button is-primary is-fullwidth"
												onClick={runHandler}
											>
												Run
											</button>
										</div>
									</div>
								</div>
							</section>
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
			</section>
		</div>
	);
};

export default App;
