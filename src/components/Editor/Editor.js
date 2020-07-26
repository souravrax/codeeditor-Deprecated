import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";
import ReactResizeDetector from 'react-resize-detector'
import Starter from '../../skeletons/BoilerPlate'

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            height: 0,
            width: 0
        };
    }
    editorDidMount = (editor, monaco) => {
        // console.log("editorDidMount", editor);
        this.setState({
            code: Starter[this.props.language]
        })
        editor.focus();
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 's') {
                this.setState({
                    code: this.state.code + "ctrl + s pressed, Saving...\n"
                })
                this.saveCode();
                e.preventDefault();
            }
        })
    };
    onChange = (newValue, e) => {
        this.setState({
            code: newValue
        })
    };

    saveCode = () => {
        console.log(this.state.code);
    }

    handleResize = (width, height) => {
        this.setState({
            height: height,
            width: width
        })
    }

    render() {
        const { code, width, height } = this.state;
        const options = {
            selectOnLineNumbers: true,
            minimap: {
                enabled: false
            }
        };

        return (
            <div style={{
                height: "100%",
                width: "100%"
            }}>
                <ReactResizeDetector
                    handleWidth
                    handleHeight
                    onResize={this.handleResize}
                    refreshMode="debounce"
                    refreshRate={100} />
                <MonacoEditor
                    height={height}
                    width={width}
                    language={this.props.language}
                    theme={this.props.theme}
                    value={code}
                    options={options}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                />
            </div>
        );
    }
}

export default Editor;