import React, {createContext, useContext, useReducer} from "react";

const ACTIONS = {
}

function reducer(state, action) {
    switch (action.type) {
        default:
            console.log("error")
    }
}

const ActionContext = createContext()
const APIContext = createContext()
const APIDispatchContext = createContext()

export function useActionContext() {
    return useContext(ActionContext)
}

export function useAPIContext() {
    return useContext(APIContext)
}

export function useAPIDispatchContext() {
    return useContext(APIDispatchContext)
}

export function APIContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, {})

    return(
        <ActionContext.Provider value={ACTIONS}>
            <APIContext.Provider value={state}>
                <APIDispatchContext.Provider value={dispatch}>
                    {children}
                </APIDispatchContext.Provider>
            </APIContext.Provider>
        </ActionContext.Provider>
    )
}