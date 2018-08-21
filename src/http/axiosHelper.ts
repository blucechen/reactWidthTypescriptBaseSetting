import { message } from 'antd';
import * as _ from 'lodash'

let needLoadingRequestCount: number = 0;

function startLoading() {
    message.loading('加载中……',0)
}

function endLoading() {
    message.destroy();
}

const tryCloseLoading = () => {
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}


export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) {
        return
    }
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        tryCloseLoading()
        _.debounce(tryCloseLoading, 300)()
    }
}