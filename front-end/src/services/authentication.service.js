exports.getCurrentUser = () => {
    const currentUserService = JSON.parse(localStorage.getItem("user"));
    console.log({currentUserService});
    
    return currentUserService;
};

exports.logout = () => {
    return localStorage.removeItem("user");
}