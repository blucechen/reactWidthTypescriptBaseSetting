// const PREFIX = ''
// const UPLOAD_PREFIX = '/upload'
const INFO_PREFIX = '/info'
// const TRACEWIFI_PREFIX = '/tracewifi'
// const FACE_PREFIX = '/face'
// const TARGET_PREFIX = '/target'
// const TRACE_PREFIX = '/trace'
const BASE_PREFIX = '/base'
// const MESSAGE_PREFIX = '/message'
// const TREAD_PREFIX = '/tread'

export const environment = {
    //getPasserInfo
    getPasserInfo:`${INFO_PREFIX}/pedestrian/getMacsWithUid`,
    //登陆
    login: `${BASE_PREFIX}/login`,
    //登出
    logout: `${BASE_PREFIX}/goodbye`,
    //updateDevInfo
    updateDevInfo:`${INFO_PREFIX}/deviceManage/updateDevInfo`,
}