import React, { Component } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import MonacoEditor from 'react-monaco-editor'

class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            height: 0
        }
    }

    handleResize = (width, height) => {
        this.setState({ width: width, height: height })
    }

    editorDidMount = (editor, monaco) => {
        window.MonacoEnvironment.getWorkerUrl = (
            _moduleId,
            label
        ) => {
            if (label === "json")
                return "_next/static/json.worker.js";
            if (label === "css")
                return "_next/static/css.worker.js";
            if (label === "html")
                return "_next/static/html.worker.js";
            if (
                label === "typescript" ||
                label === "javascript"
            )
                return "_next/static/ts.worker.js";
            return "_next/static/editor.worker.js";
        };
    }

    editorWillMount = (monaco) => {
        // monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        //     validate: true,
        //     schemas: [{
        //         uri: "http://myserver/foo-schema.json",
        //         fileMatch: ['*'],
        //         schema: {
        //             type: "object",
        //             properties: {
        //                 p1: {
        //                     enum: ["v1", "v2"]
        //                 },
        //                 p2: {
        //                     $ref: "http://myserver/bar-schema.json"
        //                 }
        //             }
        //         }
        //     }]
    };

    render() {
        const { width, height } = this.state;
        const { language, theme, editorOptions, value } = this.props;
        return (
            <div
                className="editor-container"
                style={{ height: '100%' }}>
                <ReactResizeDetector
                    handleWidth
                    handleHeight
                    onResize={this.handleResize}
                    refreshMode="debounce"
                    refreshRate={100} />
                <MonacoEditor
                    width={width}
                    height={height}
                    language={language}
                    theme={theme}
                    value={value}
                    options={editorOptions}
                    editorDidMount={this.editorDidMount}
                    editorWillMount={this.editorWillMount}
                />
            </div>
        )
    }
}

export default Editor;