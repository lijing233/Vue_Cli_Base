class CommonTool {
    /**
     * 获取cookie
     * @param key
     * @returns {*}
     */
    getCookie = (name) => {
      let aCookie = document.cookie.split('; ')
      let i = 0
      for (i = 0; i < aCookie.length; i++) {
        let aCookie2 = aCookie[i].split('=')
        if (aCookie2[0] === name) {
          return aCookie2[1]
        }
      }
      return null
    }

    /**
     * 设置cookie
     * @param key
     * @returns {*}
     */
    setCookie = (name, value, expiredays) => {
      let exdate = new Date()
      exdate.setDate(exdate.getDate() + expiredays)
      document.cookie = `${name}=${value}${(expiredays === null)
        ? '' : `;expires=${exdate.toGMTString()}`};path=/;`
    }

    /**
     * 获取浏览器信息
     * @returns {{type: string, version: string}}
     */
    getExplorerInfo = () => {
      const explorer = window.navigator.userAgent.toLowerCase()
      let ver = ''
      let type = ''
      // ie
      if (explorer.indexOf('msie') >= 0) {
        ver = explorer.match(/msie ([\d.]+)/)[1]
        type = 'IE'
      } else if (explorer.indexOf('firefox') >= 0) {
        ver = explorer.match(/firefox\/([\d.]+)/)[1]
        type = 'Firefox'
      } else if (explorer.indexOf('chrome') >= 0) {
        ver = explorer.match(/chrome\/([\d.]+)/)[1]
        type = 'Chrome'
      } else if (explorer.indexOf('opera') >= 0) {
        ver = explorer.match(/opera.([\d.]+)/)[1]
        type = 'Opera'
      } else if (explorer.indexOf('safari') >= 0) {
        if (explorer.match(/version\/([\d.]+)/)) {
          ver = explorer.match(/version\/([\d.]+)/)[1]
        } else if (explorer.match(/crios\/([\d.]+)/)) {
          ver = explorer.match(/crios\/([\d.]+)/)[1]
        }
        type = 'Safari'
      } else if (navigator.userAgent.indexOf('MicroMessenger') > -1) {
        ver = navigator.userAgent.match(/MicroMessenger\/([\d.]+)/i)[1]
        type = 'Wechat'
      }
      return { type: type, version: ver }
    }
}

export const instance = new CommonTool()
export default instance
