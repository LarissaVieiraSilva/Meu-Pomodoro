
const userIsLoggedIn = async () => {
    return true;
}

const authLogin = async (emailText, passWordText) => {

}

const authRegister = async (emailText, passWordText) => {
    console.log("Registro");
}

const authLogout = async () => {
    console.log("Logout");
}

export { userIsLoggedIn, authLogin, authRegister, authLogout }