exports.getCurrentUser = () => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    console.log({currentUser});
    return currentUser;
}