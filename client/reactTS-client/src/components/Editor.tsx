import React, { useState, useRef } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { render } from '@testing-library/react';

type propType = {
	code: string;
	theme: 'dark' | 'light';
	language: string;
	ref: any;
};

const [isEditorReady, setIsEditorReady] = useState(false);
const valueGetter: any = useRef();

export default class Editor {
	props!: propType;

	handleEditorDidMount(_valueGetter: any) {
		setIsEditorReady(true);
		valueGetter.current = _valueGetter;
	}

	render() {
		return (
			<MonacoEditor
				height="80vh"
				width="70vw"
				value={this.props.code}
				editorDidMount={this.handleEditorDidMount}
				theme={this.props.theme}
				language={this.props.language}
			></MonacoEditor>
		);
	}
}
