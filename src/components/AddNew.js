import React from 'react';
import {useHistory} from 'react-router-dom'

import AddNewForm from './Layout/AddNewForm';



function AddNew(){
    const history = useHistory();

    function addTrickHandler(addedTrick){
        fetch('https://aerial-syllabus-default-rtdb.firebaseio.com/tricks.json', 
        {
            method: 'POST',
            body: JSON.stringify(addedTrick),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(()=> {
            history.replace('/')
        })
    }

    return (<div>
        <AddNewForm onAddTrick={addTrickHandler} />
      
    </div>)
}

export default AddNew;