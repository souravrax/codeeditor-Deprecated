import React, { useState } from 'react';
import './Header.scss'

function Header() {

    const [showModel, setShowModel] = useState(false);

    const [mode, setMode] = useState("Light");

    const toggleMode = () => {
        setMode(mode === "Light" ? "Dark" : "Light");
    }

    return (
        <header className="header">
            <a href="http://localhost:3000" className="logo">
                <i className="fa fa-terminal"></i>
                <h1 className="part-1">Code</h1>
                <h1 className="part-2">Editor</h1>
            </a>

            <div className="controls">
                <select name="language" className="">
                    <option value="javascript">Javascript</option>
                    <option value="c">C</option>
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                </select>

                <button className="" onClick={() => setShowModel(!showModel)}>
                    <i className="fa fa-cog"></i>
                    <span>Editor Settings</span>
                </button>
                <button className="run">
                    <i className="fa fa-play"></i>
                    <span>Run</span>
                </button>
                <input type="text" className="" placeholder="Compiler Options" />
                <input type="text" className="" placeholder="Command Line Arguments" />
                <button className="" onClick={toggleMode}>
                    <i className="fa fa-adjust"></i>
                    <span>{mode} Mode</span>
                </button>
                <button className="">
                    <i className="fa fa-share"></i>
                    <span>Share</span>
                </button>
            </div>
        </header>
    )
}













// const Header = () => (
//     <header className="" }}>
//         <nav className="">
//             <a className="">
//                 <span className="">Code</span>
//                 <span className="">Editor</span>
//             </a>

//             <form className="" onSubmit={(e) => e.preventDefault}>

//                 <button className="">
//                     <i className=""></i>
//                     <span className="">Share</span>
//                 </button>

//                 <Settings />

//                 <button className="">
//                     <i className="">Run</span>
//                 </button>

//                 <select name="language" id="language" className="">
//                     <option value="javascript">Javascript</option>
//                     <option value="c++">C++</option>
//                     <option value="c">C</option>
//                     <option value="python">Python</option>
//                     <option value="java">Java</option>
//                 </select>

//                 <input type="text" name="compiler-option" placeholder="Compiler Options" className="" />
//                 <input type="text" name="compiler-option" placeholder="Command Line Arguments" className="" />
//             </form>

//             <div className=""></div>
//         </nav>
//     </header>
// );

export default Header;