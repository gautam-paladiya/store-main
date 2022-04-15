let api_url = "https://s4e6ltgt31.execute-api.ap-southeast-1.amazonaws.com/dev/";
// https://s4e6ltgt31.execute-api.ap-southeast-1.amazonaws.com/dev/v1/mwb/agent/7905483808
let error_msg = "Something went wrong please try again later";
let required_msg = "Please fill all data";

function uploadImage(image) {
    return new Promise(async function (resolve, reject) {
        try {
            const formData = new FormData();
            formData.append("file", image, image.name)
            const response = await fetch(api_url + 'v1/mwb/utils/upload/image', {
                method: 'POST',
                body: formData
            });

            if (response.ok == true) {
                const data = await response.json();
                if (data.status == "success"){
                    return resolve(data.response.url)
                }else{
                    return reject(error_msg)
                }
            }else{
                return reject(error_msg)
            }
        } catch (error) {
            return reject(error_msg)
        }
    })
}

export { api_url, error_msg, required_msg,uploadImage }