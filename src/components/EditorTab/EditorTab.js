import React from 'react'
import Editor from '../Editor/Editor'
import PropTypes from 'prop-types'

export default function EditorTab({ theme, name, option, language, focus }) {
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
                    theme={"vs-dark"}
                    language={language}
                    editorOptions={option}
                    focus={focus}
                />
            </div>
        </div>
    )
}

EditorTab.propTypes = {
    theme: PropTypes.string,
    name: PropTypes.oneOf(["vs-dark", "vs-light"]),
    option: PropTypes.object,
    language: PropTypes.string,
    focus: PropTypes.bool
}