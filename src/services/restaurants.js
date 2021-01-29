import axios from 'axios'
const baseUrl = 'http://localhost:3001/sections'

const getAll = () => axios.get(baseUrl)

const Service = { getAll }

export default Service