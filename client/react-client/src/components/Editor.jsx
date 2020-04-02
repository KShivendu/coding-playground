import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import MonacoEditor from '@monaco-editor/react';

export default function Editor(props, ref) {
	const [isEditorReady, setIsEditorReady] = useState(false);
	const valueGetter = useRef();

	useImperativeHandle(ref, () => ({
		getContent: () => {
			return valueGetter.current();
		},
	}));

	function handleEditorDidMount(_valueGetter) {
		setIsEditorReady(true);
		valueGetter.current = _valueGetter;
	}

	return (
		<MonacoEditor
			height="80vh"
			width="100vw"
			value={props.code}
			editorDidMount={handleEditorDidMount}
			theme={props.theme}
			language={props.language}
		/>
	);
}

Editor = forwardRef(Editor);
