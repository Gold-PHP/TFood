import axios from "axios";

export const apiGetPublicProvinces = () => new Promise( (resolve,reject) => {
    try {
        const response = axios.get("https://provinces.open-api.vn/api/p/");
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPublicDistricts = (provinceId) => new Promise( (resolve,reject) => {
    try {
        const response = axios.get(`https://provinces.open-api.vn/api/p/${provinceId}?depth=2`);
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPublicWards = (districtId) => new Promise( (resolve,reject) => {
    try {
        const response = axios.get(`https://provinces.open-api.vn/api/d/${districtId}?depth=2`);
        resolve(response)
    } catch (error) {
        reject(error)
    }
})