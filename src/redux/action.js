import axios from 'axios';

//для того чтобы подключить асинхронные запросы
export function getNewList() {
    return (dispatch) => {
        axios.post('http://localhost:5000/user')
            .then(result => {
                dispatch({
                    type: 'POST_NEW_USER',
                    payload: result.data
                })
            })
            .catch(function (error) {
                //handle error
                alert(error)
            })
            .finally(function () {
                //always executed
            });
    }
}