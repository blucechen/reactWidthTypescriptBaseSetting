import { environment } from './environment'
import $ from './http'
export class Service {
    public getPasserInfoUrl = environment.getPasserInfo;
    public loginUrl = environment.login;
    public logoutUrl = environment.logout;
    public updateDevInfoUrl = environment.updateDevInfo;

    /**
     * getPasserInfo
     */
    public getPasserInfo(page:number,size:number) {
        return $.post(`${this.getPasserInfoUrl}/${page}/${size}`)
    }

    public login(username: string, password: string) {
        return $.post(`${this.loginUrl}?username=${username}&password=${password}`)
    }

    public logout() {
        return $.get(this.logoutUrl)
    }

    /**
     * updateDevInfo
     */
    public updateDevInfo(
        params = {
            deviceAdrr: '',
            deviceIp: '',
            deviceMac: '',
            deviceName: '',
            deviceNo: '',
            deviceTypeId: '',
            id: '',
        }) {
        return $.post(`${this.updateDevInfoUrl}?deviceIp=${params.deviceIp}&deviceName=${params.deviceName}&deviceTypeId=${params.deviceTypeId}
        &deviceAdrr=${params.deviceAdrr}&deviceNo=${params.deviceNo}&id=${params.id}&deviceMac=${params.deviceMac}`)
    }
}