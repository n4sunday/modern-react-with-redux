import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { lat: null, errorMessage: '' }
    }
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                // we called setstate
                this.setState({ lat: position.coords.latitude })


                // we did not
                this.state.lat = position.coords.latitude
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        )

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }
        return (
            <div>Loading...</div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))