import http from "../http-common";

const upload = (file, onUploadProgress) => {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/images/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
    });
};

const getFiles = () => {
    return http.get("/images");
};

const FileUploadService = {
    upload,
    getFiles,
};

export default FileUploadService; 