import React from 'react'
import Editor from './Editor'

export default function EditorTab({ value, theme, name, option, language }) {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="px-4 py-1 bg-black text-white shadow" style={{
                padding: "5px",
                textAlign: "left",
                fontSize: "10px"
            }}>
                {name.toString().toUpperCase()}
            </div>
            <div className="px-0 py-0 bg-black" style={{ height: "97%" }}>
                <Editor
                    theme={theme}
                    editorOptions={option}
                    value={value}
                    language={language}
                />
            </div>
        </div>
    )
}
