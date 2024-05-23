import { USER_API } from "../../constants/api";
import { IMAGE_CREATE_FAIL, IMAGE_CREATE_REQUEST, IMAGE_CREATE_SUCCESS, IMAGE_EDIT_FAIL, IMAGE_EDIT_REQUEST, IMAGE_EDIT_SUCCESS, IMAGE_GET_FAIL, IMAGE_GET_REQUEST, IMAGE_GET_SUCCESS, IMAGE_UPDATE_FAIL, IMAGE_UPDATE_REQUEST, IMAGE_UPDATE_SUCCESS } from "./img.constants"
import { toast } from 'react-toastify'
import axios from "axios";

export const imageGet = () => async(dispatch)=>{
    try {
        dispatch({type:IMAGE_GET_REQUEST});
        const { data } = await axios.get(`${USER_API}/image`);
        if(data.status){
            toast.success(data.message)
        }
        dispatch({type:IMAGE_GET_SUCCESS,payload:data})
    } catch (error) {
            toast.success(error.response.data.message)
        dispatch({type:IMAGE_GET_FAIL,payload:error.message&&error.response.data.message?error.response.data.message:error.message});
    }
}

export const imageCreate=()=>async(dispatch)=>{
    try {
        dispatch({type:IMAGE_CREATE_REQUEST});
        const { data } = await axios.post(`${USER_API}/image`);
        if(data.status){
            toast.success(data.message)
        }
        if(data.status=true)
        dispatch({type:IMAGE_CREATE_SUCCESS,payload:data})
    } catch (error) {
        toast.success(error.response.data.message)
        dispatch({type:IMAGE_CREATE_FAIL,payload:error.message&&error.response.data.message?error.response.data.message:error.message});
    }
}

export const imageFetch=(id)=>async(dispatch)=>{
    try {
        dispatch({type:IMAGE_EDIT_REQUEST});
        const { data } = await axios.get(`${USER_API}/image/${id}`)
        dispatch({type:IMAGE_EDIT_SUCCESS,payload:data})
    } catch (error) {
        toast.success(error.response.data.message)
        dispatch({type:IMAGE_EDIT_FAIL,payload:error.message&&error.response.data.message?error.response.data.message:error.message});
    }
}

export const imageUpdate=(formData)=>async(dispatch)=>{
    try {
        dispatch({type:IMAGE_UPDATE_REQUEST});
        const { data } = await axios.put(`${USER_API}/image`,formData)
        if(data.status){
            toast.success(data.message)
            window.location.href="/"
        }
        dispatch({type:IMAGE_UPDATE_SUCCESS,payload:data})
    } catch (error) {
        toast.success(error.response.data.message)
        dispatch({type:IMAGE_UPDATE_FAIL,payload:error.message&&error.response.data.message?error.response.data.message:error.message});
    }
}
