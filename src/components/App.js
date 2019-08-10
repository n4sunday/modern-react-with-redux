import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

class App extends React.Component {
    onTermSubmit = term => {
        youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyAc-U_m0j_SNz5axkAqaw6fkswJ6-_fUkE'
            }
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        )
    }
}

export default App