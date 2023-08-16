//? Permet de le retrouver plus facilement dans les actions
export const SET_STABLE_STATE = 'SET_STABLE_STATE'

export const setStableState = (bool) => {
    return (dispatch) => {
        //?Type d'action et la valeur à envoyer au store
        return dispatch({type: 'SET_STABLE_STATE', payload: bool})
    }
}