import React from "react";
import SplitPane from "react-split-pane";
import EditorTab from "../EditorTab/EditorTab";

const MainPage = () => {
    // const [theme, setTheme] = useState("light");
    const theme = "light";
    // const toggleTheme = () => {
    //     setTheme(theme === "light" ? "dark" : "light");
    // }

    const min = (window.innerWidth * 30) / 100;
    const max = window.innerWidth - min;

    return (
        <SplitPane
            style={{ width: "calc(100%-20px)", height: "calc(100% - 50px)" }}
            split="vertical"
            defaultSize={"50%"}
            minSize={min}
            maxSize={max}
        >
            <EditorTab
                theme={`vs-${theme}`}
                value={"// Start by typing here"}
                language={"javascript"}
                name={"editor"}
                focus={true}
                option={{
                    selectOnLineNumber: true,
                    minimap: {
                        enabled: false,
                    },
                }}
            />
            <SplitPane
                split="horizontal"
                minSize={((window.innerHeight - 60) * 30) / 100}
                maxSize={((window.innerHeight - 60) * 70) / 100}
                defaultSize={"50%"}
            >
                <EditorTab
                    theme={`vs-${theme}`}
                    value={""}
                    language={"text"}
                    name={"input"}
                    option={{
                        minimap: {
                            enabled: false,
                        },
                    }}
                />
                <EditorTab
                    theme={`vs-${theme}`}
                    value={""}
                    language={"text"}
                    name={"output"}
                    option={{
                        readOnly: true,
                        minimap: {
                            enabled: false,
                        },
                    }}
                />
            </SplitPane>
        </SplitPane>
    );
};

export default MainPage;
