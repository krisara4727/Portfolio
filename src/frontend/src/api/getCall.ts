import axiosInstance from "./axios"

export const getApiCall = async (url: string) => {
    try{
        const data = await axiosInstance.get(url);
        return data;
    }catch(e){
        console.log("error in getting api data ",e);
        return null;
    }
}