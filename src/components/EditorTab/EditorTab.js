import React from 'react'
import Editor from '../Editor/Editor'

export default function EditorTab({ value, theme, name, option, language, focus }) {
    return (
        <div style={{
            width: "100%",
            height: "100%",
        }}>
            <div style={{
                padding: "5px 10px",
                textAlign: "left",
                fontSize: "10px",
                color: "#fff",
                backgroundColor: "#000",
                width: "100%",
                fontFamily: "var(--font)",
            }}>
                {name.toString().toUpperCase()}
            </div>
            <div style={{
                height: "calc(100% - 20px)"
            }}>
                <Editor
                    theme={theme}
                    language={language}
                    editorOptions={option}
                    focus={focus}
                />
            </div>
        </div>
    )
}
