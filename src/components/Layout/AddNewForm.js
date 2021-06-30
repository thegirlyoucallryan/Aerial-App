
import classes from '../AddNew.module.css';
import {useRef} from 'react';
 

function AddNewForm(props){
    const nameInputRef = useRef();
    const notesInputRef = useRef();
    const levelInputRef = useRef();
    const typeInputRef = useRef();
    const fileInputRef = useRef();


     function formSubmitHandler(e){
        e.preventDefault();
        
        const enteredName = nameInputRef.current.value;
        const enteredNotes = notesInputRef.current.value;
        const enteredLevel = levelInputRef.current.value;
        const enteredType = typeInputRef.current.value;
        const enteredFile = fileInputRef.current.value;


        const addedTrick = {
            name: enteredName,
            notes: enteredNotes,
            level: enteredLevel,
            type: enteredType,
            file: enteredFile,

        }

        console.log(addedTrick);
        props.onAddTrick(addedTrick)

    }






    return (
    
    <form onSubmit={formSubmitHandler} className={classes.form}>
        <h1 className={classes.h1}>Add New Tricks</h1>
            <input className={classes.input} type='text' placeholder='Name' required ref={nameInputRef} /> <br />
           
           
           
            <input className={classes.input} type='text-box' placeholder='Things to Remeber' ref={notesInputRef}/>
            <br/>
            <select className={classes.select} name='Level' ref={levelInputRef}>
                <option value='1'>Beginner</option>
                <option value='2'>Intermediate</option>
                <option value='3'>Advanced</option>
            </select>
            <br/>

            <select className={classes.select} name='Type' ref={typeInputRef}>
                <option value='Drop'>Drop</option>
                <option value='Split'>Split</option>
                <option value='Conditioning'>Conditioning</option>
                <option value='Belay'>Belay</option>
                <option value='Climb'>Climb</option>
                <option value='Other'>Other</option>
            </select>
            <br/>
            <input className={classes.input} type='url' name='select an Image' placeholder='Image URL' ref={fileInputRef}/>
            <br/>

            <button className={classes.button}>Add to Syllabus</button>
      
    </form>)
}

export default AddNewForm;