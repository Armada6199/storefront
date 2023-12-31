import axios from "axios"

export let initialState = {
    activeCategory: 'electronics',
    categories: [],
    products: [],
    toRender: []
}


export function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET-ACTIVE-CATEGORY': {
            return { ...state, activeCategory: action.payload }
        }
        case 'SET-CURRENT-CATEGORY': {
            return { ...state, categories: action.payload }
        }
        case 'SET-CURRENT-PRODUCT': {
            return { ...state, products: action.payload }
        }
        case 'SET-RENDER-PRODUCTS': {
            return { ...state, toRender: action.payload }
        }
        default: return state
    }
}

export const getProducts = (activeCategory) => async dispatch => {

    try {

        let data = await axios.get(`https://api-js401.herokuapp.com/api/v1/products`)
        let currentProducts = data.data.results.filter(element => element.category === activeCategory)
        dispatch(setProducts(currentProducts))
    } catch (err) {
        console.log(err)

    }
}

export const setActiveCategory = (payload) => {
    return {
        type: 'SET-ACTIVE-CATEGORY',
        payload: payload
    }
}
export const setCategories = (payload) => {
    return {
        type: 'SET-CURRENT-CATEGORY',
        payload: payload
    }
}
export const setProducts = (payload) => {
    return {
        type: 'SET-CURRENT-PRODUCT',
        payload: payload
    }
}
export const setRenderList = (payload) => {
    return {
        type: 'SET-RENDER-PRODUCTS',
        payload: payload
    }
}