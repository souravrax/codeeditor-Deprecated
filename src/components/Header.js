import React from 'react';
import './Header.scss'



function Header() {
    return (
        <header className="header flex max-w-full justify-between items-center px-8 bg-fuchsia border-b-4 border-blue-500">
            <div className="logo flex flex-row justify-start items-center">
                <h1 className="inline-block">Code</h1>
                <h1 className="text-blue-500 inline-block">Editor</h1>
            </div>

            <div className="controls flex items-center justify-between">
                <select name="language" className="option" id="lang">
                    <option value="javascript">Javascript</option>
                </select>
                <button className="share option flex justify-center items-baseline">
                    <i className="fa fa-share mr-2"></i>
                    <span>Share</span>
                </button>
                <button className="share option flex justify-center items-baseline">
                    <i className="fa fa-cog mr-2"></i>
                    <span>Settings</span>
                </button>
                <button className="run option bg-blue-500 flex items-baseline justify-center">
                    <i className="fa fa-play mr-2"></i>
                    <span>Run</span>
                </button>
                <input type="text" className="compiler-options" placeholder="Compiler Options" />
                <input type="text" className="cl-args pr-10" placeholder="Command line arguments" />
                <button className="rounded-full h-10 w-10 shadow ml-4 outline-none"><i class="fa fa-user-circle-o" aria-hidden="true"></i>
                </button>
            </div>
        </header>
    )
}













// const Header = () => (
//     <header className="body max-w-full sticky border-b-4 border-blue-500" style={{ height: "60px", backgroundColor: "#202020" }}>
//         <nav className="flex h-full w-full items-center justify-between px-4 mb-1">
//             <a className="flex justify-center items-center" href="https://souravrax.github.io">
//                 <span className="text-xl text-white">Code</span>
//                 <span className="text-blue-500 text-xl flex flex-col items-start justify-center">Editor</span>
//             </a>

//             <form className="flex justify-between items-center px-2" onSubmit={(e) => e.preventDefault}>

//                 <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 shadow rounded">
//                     <i className="fa fa-share-alt" aria-hidden="true"></i>
//                     <span className="mx-2">Share</span>
//                 </button>

//                 <Settings />

//                 <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 shadow rounded">
//                     <i className="fa fa-play mr-2" aria-hidden="true"></i> <span className="mx-2">Run</span>
//                 </button>

//                 <select name="language" id="language" className="mx-2 rounded shadow py-2 px-3">
//                     <option value="javascript">Javascript</option>
//                     <option value="c++">C++</option>
//                     <option value="c">C</option>
//                     <option value="python">Python</option>
//                     <option value="java">Java</option>
//                 </select>

//                 <input type="text" name="compiler-option" placeholder="Compiler Options" className="mx-2 py-2 px-3 rounded shadow" />
//                 <input type="text" name="compiler-option" placeholder="Command Line Arguments" className="mx-2 py-2 w-64 px-3 rounded shadow" />
//             </form>

//             <div className="avatar rounded-full h-3 w-3 shadow"></div>
//         </nav>
//     </header>
// );

export default Header;