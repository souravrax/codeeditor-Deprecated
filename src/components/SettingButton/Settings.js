import React, { useRef, useState } from 'react'

function Settings() {

    const menu = useRef();
    const [scale, setScale] = useState(0);

    const showMenu = () => {
        setScale(scale === 1 ? 0 : 1);
    }

    return (
        <div className="relative inline-block text-left m-2">
            <div>
                <span className="rounded shadow">
                    <button
                        onClick={showMenu}
                        type="button"
                        className="inline-flex justify-center w-full rounded-md shadow px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Settings
                        <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </span>
            </div>
            <div className="origin-top-left absolute right-0 mt-2 w-56 rounded transition-all shadow-lg" style={{
                transform: `scale(${scale})`,
                zIndex: 999
            }}>
                <div className="h-40 w">
                    Menu
                </div>
            </div>
        </div >
    )
}

export default Settings
