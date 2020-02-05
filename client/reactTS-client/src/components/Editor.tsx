import React from 'react';
// import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';

export default class Editor extends React.Component {
  codeTemplate = `
  <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
  `;
    state: any;
  constructor(props:any) {
    super(props);
    this.state = {
      code: this.codeTemplate,
    }
  }

  
  editorDidMount(editor:any, monaco:any) {
    // console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue:any, e:any) {
    console.log('onChange', newValue, e);
  }
  render() {
    const codeTemplate = this.state.code;
    const darkMode = true;
    const options = {
      selectOnLineNumbers: true,
    };
    return (
      <MonacoEditor
        width="800"
        height="600"
        language="html"
        theme={darkMode ?"vs-dark" : "vs-light"}
        value={codeTemplate}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

