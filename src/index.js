import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import reducers from './reducers'

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
=======
import App from './components/App'

ReactDOM.render(
    <App />,
>>>>>>> master
    document.querySelector('#root')
)