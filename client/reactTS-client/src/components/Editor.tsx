import React from 'react';
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';

export default class Editor extends React.Component {
    state: any;
  constructor(props:any) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }
  editorDidMount(editor:any, monaco:any) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue:any, e:any) {
    console.log('onChange', newValue, e);
  }
  render() {
    const codeTemplate = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={codeTemplate}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

