import axios from './axios';



export function sendRequest(link, data, headers = {}, method = "POST") {

    let contentType = "application/json";
    if (data instanceof FormData) {
        contentType = "multipart/form-data";
    }

    headers = {
        ...headers,
        // "Authorization": "Bearer " + getCookie("token"),
        "content-type": contentType,
    };

    let axiosInst = null;
    if (method === "POST") {
        axiosInst = axios.post(link, data, { headers: headers });
    } else {
        axiosInst = axios.get(link, { headers: headers });
    }

    return axiosInst.then((response) => {

    	let MsgResponse = "Error please try again later";

        if (typeof response.data !== "undefined") {
            if (typeof response.data.statusCode !== "undefined") {
                if (typeof response.data.statusCode.message !== "undefined")
                    MsgResponse = response.data.statusCode.message;

                if (typeof response.data.statusCode.code !== "undefined" && response.data.statusCode.code === 0) {
                    return {
                        error: false,
                        data: response.data,
                    };
                }
            }
        }

		return {
			error: true,
			message: MsgResponse
        }

    })
    .catch((error) =>{
        // handle error
        return {
          error: true,
          message: "Error please try again later"
        }
    });
}


export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};