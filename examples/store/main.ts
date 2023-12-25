import { defineStore } from 'pinia'
import $request from '../../src/methods/request'

export const useStore = defineStore('main', () => {
	const isLogin = ref<boolean>(false)

	const nickname = ref<string>('')
 
	const lang = ref<string>('zh-cn')
 
	const token = ref<string>('')
 
  function login( userInfo:Record<string, any> ) {
    const {username, password, validateCode, uuid} = userInfo
    return new Promise<void>((resolve, reject) => {
      const loginData = {
        username: username,
        password: password,
        uuid: uuid,
        validateCode: validateCode
      }
      $request.post('/login',loginData).then((response: any) => {
        isLogin.value = true
        token.value = response?.token
        nickname.value = response?.userInfo.username
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
  
	function logout() {
    return new Promise<void>((resolve, reject) => {
      $request.get('/logout').then(() => {
        isLogin.value = false
        token.value = ''
        nickname.value = ''
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
	}
  
  function setLang(v: string) {
    lang.value = v
  }

	return {
		isLogin,
    nickname,
    lang,
    token,
    login,
		logout,
    setLang
	}
},{
  persist: {
    enabled: true,
  }
})
