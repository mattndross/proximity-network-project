import axios from "axios";

export default axios.create({
    baseURL: "https://proximity-network-api.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    }
});