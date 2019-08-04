import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 04691650ad21cfb0bd3d77f19854daac2d609b07e1a65d5c3ef5234cf8a31918'
    }
})