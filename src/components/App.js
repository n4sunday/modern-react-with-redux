import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PageOne = () => {
    return (
        <div>
            PageOne
            <Link to="/pagetwo">Next Page Two</Link>
        </div>
    )
}

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <Link to="/">Next Page One</Link>

        </div>
    )
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" exact component={PageTwo} />
            </BrowserRouter>

        </div>
    )
}

export default App