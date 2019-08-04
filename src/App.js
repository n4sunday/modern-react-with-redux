import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends Component {
    async onSearchSubmit(term) {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 04691650ad21cfb0bd3d77f19854daac2d609b07e1a65d5c3ef5234cf8a31918'
            }
        })

        console.log(res.data.results)
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App