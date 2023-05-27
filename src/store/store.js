import { createStore } from "redux";


// Create initial state=======================
const initialState = {
    email: 'anil@gmail.com',
    name: '',
    password: '',
    toggle: false
}

// Create Store Reducer=======================
const storeReducer = (state = initialState, action) => {
    if (action.type === "EMAIL") {
        return { ...state, email: action.payload }
    }
    if (action.type === "NAME") {
        return { ...state, name: action.payload }
    }
    if (action.type === "PASSWORD") {
        return { ...state, password: action.payload }
    }
    if (action.type === "TOGGLE") {
        return { ...state, toggle: !state.toggle }
    }
    return state
}

// functions to update localStore Not mandatory=======================
const loadState = () => {
    try {
        const loadedState = localStorage.getItem('admin')
        if (!loadedState) return undefined
        else return JSON.parse(loadedState)
    }
    catch (err) {
        console.log(err)
    }
}

const saveState = (state) => {
    try {
        const savedState = JSON.stringify(state)
        localStorage.setItem('admin', savedState)
    }
    catch (err) {
        console.log('err', err)
    }
}

// Create store=======================
const store = createStore(storeReducer, loadState())

// Create and call subscribe
store.subscribe(() => {
    saveState(store.getState())
})

export default store