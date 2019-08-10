import axios from 'axios'

const KEY = 'AIzaSyAc-U_m0j_SNz5axkAqaw6fkswJ6-_fUkE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

