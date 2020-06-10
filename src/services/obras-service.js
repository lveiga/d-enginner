
import axios from 'axios';


function create (obras) {
    axios.post('/obras', obras)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
}

export {
    create
}