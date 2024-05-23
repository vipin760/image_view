import {
    IMAGE_CREATE_FAIL,
    IMAGE_CREATE_REQUEST,
    IMAGE_CREATE_SUCCESS,
    IMAGE_DELETE_FAIL,
    IMAGE_DELETE_REQUEST,
    IMAGE_DELETE_SUCCESS,
    IMAGE_EDIT_FAIL,
    IMAGE_EDIT_REQUEST,
    IMAGE_EDIT_SUCCESS,
    IMAGE_GET_FAIL,
    IMAGE_GET_REQUEST,
    IMAGE_GET_SUCCESS,
    IMAGE_UPDATE_FAIL,
    IMAGE_UPDATE_REQUEST,
    IMAGE_UPDATE_SUCCESS,
} from "./img.constants";

export const initialState = {
    loading: false,
    imageData: [],
    imageObj: {},
    errormessage: "",
};

export const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGE_GET_REQUEST:
            return { ...state, loading: true };
        case IMAGE_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                imageData: action.payload,
                errormessage: "",
            };
        case IMAGE_GET_FAIL:
            return {
                ...state,
                loading: false,
                imageData: [],
                errormessage: action.payload,
            };
        case IMAGE_CREATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case IMAGE_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                imageData: action.payload,
                errormessage: "",
            };
        case IMAGE_CREATE_FAIL:
            return {
                ...state,
                loading: false,
                imageData: [],
                errormessage: action.payload,
            };
        case IMAGE_EDIT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case IMAGE_EDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                imageData: action.payload,
                errormessage: "",
            };
        case IMAGE_EDIT_FAIL:
            return {
                ...state,
                loading: false,
                imageData: [],
                errormessage: action.payload,
            };
        case IMAGE_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case IMAGE_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                imageData: action.payload,
                errormessage: "",
            };
        case IMAGE_UPDATE_FAIL:
            return {
                ...state,
                loading: false,
                imageData: [],
                errormessage: action.payload,
            };
        case IMAGE_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case IMAGE_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                imageData: action.payload,
                errormessage: "",
            };
        case IMAGE_DELETE_FAIL:
            return {
                ...state,
                loading: false,
                imageData: [],
                errormessage: action.payload,
            };

        default:
            return state;
    }
};
