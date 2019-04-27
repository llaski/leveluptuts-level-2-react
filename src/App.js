import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Modal } from './Elements'
import { Toggle, Portal } from './Utilities'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <main>
                    <Toggle>
                        {({ on, toggle }) => (
                            <>
                                <button onClick={toggle}>Show/Hide 2</button>
                                {on && (
                                    <>
                                        <Portal>
                                            <h1>Hello from the portal</h1>
                                        </Portal>
                                        <h1>Toggle Me</h1>
                                    </>
                                )}
                            </>
                        )}
                    </Toggle>
                    <Toggle>
                        {({ on, toggle }) => (
                            <>
                                <button onClick={toggle}>Toggle Modal</button>
                                <Modal on={on} toggle={toggle}>
                                    <p>Stuff in the modal goes here</p>
                                </Modal>
                            </>
                        )}
                    </Toggle>
                </main>
            </div>
        )
    }
}

export default App
