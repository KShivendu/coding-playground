import React, { Component } from "react";
import "../../node_modules/xterm/css/xterm.css";
import { Terminal } from "../../node_modules/xterm/lib/xterm";
import { AttachAddon } from "xterm-addon-attach";

export default class XtermComp extends Component {
  componentDidMount() {
    // alert("Mounted");
    var term = new Terminal();

    term.open(document.getElementById("terminal"));
    const socket = new WebSocket(
      "wss://127.0.0.1:2375/containers/a7e7e9da84a4/attach/ws?logs=0&stream=1&stdin=1&stdout=1&stderr=1"
    );
    const attachAddon = new AttachAddon(socket);

    // Attach the socket to term
    term.loadAddon(attachAddon);

    // term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
  }

  render() {
    return (
      <div>
        <div id="terminal">Terminal</div>
      </div>
    );
  }
}
