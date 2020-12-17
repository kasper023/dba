import axios from 'axios'


const showAnime = axios.create({
    baseURL: 'http://localhost:3000'
})

export default showAnime;
