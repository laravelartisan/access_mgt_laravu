export default {
    setToken(token) {
        window.localStorage.setItem('jwt_token', token);
    },
    getToken() {
        return window.localStorage.getItem('jwt_token');
    },
    removeToken() {
        window.localStorage.removeItem('jwt_token');
    },
   /* setLoginTime(loginTime) {
        window.localStorage.setItem('login_time', loginTime);
    },
    getloginTime() {
        return window.localStorage.getItem('login_time');
    },

    removeLoginTime() {
        window.localStorage.removeItem('login_time');
    },*/
}