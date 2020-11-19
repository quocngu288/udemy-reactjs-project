import axious from 'axios'
import * as config from './config'
const api=axious.create({
    baseURL:config.API_URL
})
export default api