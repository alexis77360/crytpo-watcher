export const SET_LIST_DISPLAY = 'SET_LIST_DISPLAY'

export const setListDisplay = (bool) => {
    return (dispatch) => {
        //?Type d'action et la valeur à envoyer au store
        return dispatch({type: 'SET_LIST_DISPLAY', payload: bool})
    }
}