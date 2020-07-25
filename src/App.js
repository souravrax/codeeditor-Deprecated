import React from 'react'
import MonacoEditor from '@monaco-editor/react'
import { MagicSpinner as Loader } from 'react-spinners-kit'

function App() {
    return (
        <div className="container" style={{ height: "100vh" }}>
            <Header />
            <Body />
        </div>
    )
}

const Header = () => (
    <header className="body bg-fuchsia w-full sticky border-b-4 border-blue-500" style={{ height: "60px" }}>
        <nav className="flex h-full w-full items-center justify-between px-4 mb-1">
            <a className="flex justify-center items-center" href="https://souravrax.github.io">
                <span className="text-xl text-gray-800">Code</span>
                <span className="text-blue-500 text-xl flex flex-col items-start justify-center">Editor</span>
            </a>

            <form className="flex justify-between items-center px-2" onSubmit={(e) => e.preventDefault}>

                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 shadow rounded">
                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                    <span className="mx-2">Share</span>
                </button>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 shadow rounded mx-2">
                    <i class="fa fa-cog mr-2" aria-hidden="true"></i> <span className="mx-2">Settings</span>
                </button>
                <button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 shadow rounded">
                    <i class="fa fa-play mr-2" aria-hidden="true"></i> <span className="mx-2">Run</span>
                </button>

                <select name="language" id="language" className="mx-2 rounded shadow py-2 px-3">
                    <option value="javascript">Javascript</option>
                    <option value="c++">C++</option>
                    <option value="c">C</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                </select>

                <input type="text" name="compiler-option" placeholder="Compiler Options" className="mx-2 py-2 px-3 rounded shadow" />
                <input type="text" name="compiler-option" placeholder="Command Line Arguments" className="mx-2 py-2 w-64 px-3 rounded shadow" />
            </form>

            <div className="avatar rounded-full h-3 w-3 shadow"></div>
        </nav>
    </header>
);

const Body = () => (
    <section className="bg-fuchsia flex justify-between" style={{ height: "calc(100% - 60px)" }}>
        <Editor />
        <InputOutputContainer />
    </section>
);


const Editor = () => {
    return (
        <div className="h-full w-1/2 mr-2">
            <h4 className="inline-block bg-gray-900 text-white px-8">Editor</h4>
            <div id="editor" className="bg-gray-900 h-full">
                <MonacoEditor
                    height="100%"
                    width="100%"
                    value={"// write your code here"}
                    language='javascript'
                    loading={<Loader />}
                    options={{
                        theme: "dark",
                        minimap: {
                            enabled: false
                        }
                    }} />
            </div>
        </div>
    )
}

const InputOutputContainer = () => {
    return (
        <div className="h-full w-1/2 flex flex-col items-center justify-between">
            <div className="w-full border-2" style={{ height: "50%" }}>
                <h4 className="text-white bg-gray-800 inline-block px-8">INPUT</h4>
                <div id="input-section">
                    <textarea name="" id="" cols="30" rows="10" style={{ width: "100%", height: "100%" }}></textarea>
                </div>
            </div>
            <div className="w-full border-2 border-dashed" style={{ height: "50%" }}>
                <h4 className="text-white bg-gray-800 inline-block px-8">OUTPUT</h4>
                <div id="output-section">
                    <textarea name="" id="" cols="30" rows="10" style={{ width: "100%", height: "100%" }}></textarea>
                </div>
            </div>
        </div>
    )
}

export default App;