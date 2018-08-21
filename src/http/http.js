import axios from 'axios'
import { showFullScreenLoading, tryHideFullScreenLoading } from './axiosHelper'
const $ = axios.create({
    baseURL: `${process.env.NODE_ENV === 'production' ? '' : 'http://15.112.148.231:18088'}`,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
})

$.interceptors.request.use(
    (config) => {
        if (config.showLoading) {
            showFullScreenLoading()
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

$.interceptors.response.use(
    (response) => {
        tryHideFullScreenLoading()
        return response.data || response.data.data;
    },
    (error) => {
        tryHideFullScreenLoading()
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    history.push('/')
                    break
                case 403:
                    error.response.data.message = '您没有访问权限，请联系管理员！'
                    break
                default:
                    break
            }
        }
        return Promise.reject(error);
    }
)

const defaultConfig = { showLoading: true }
export default {
    delete: (url, data = {}, config = {}) => $.delete(url, { ...defaultConfig, ...config }),
    get: (url, config = {}) => $.get(url, { ...defaultConfig, ...config }),
    patch: (url, data = {}, config = {}) => $.patch(url, data, { ...defaultConfig, ...config }),
    post: (url, data = {}, config = {}) => $.post(url, data, { ...defaultConfig, ...config }),
    put: (url, data = {}, config = {}) => $.put(url, data, { ...defaultConfig, ...config }),
}

import createHistory from 'history/createBrowserHistory';
const history = createHistory();
export { history };









