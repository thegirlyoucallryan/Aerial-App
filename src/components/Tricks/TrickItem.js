
import classes from './TrickItem.module.css';
import Card from '../ui/Card';
import {useContext} from 'react';
import TrainingContext from '../store/Training-context';



function TrickItem(props){

    const trainingdayctx = useContext(TrainingContext);

    const itemIsToDo = trainingdayctx.itemIsToDo(props.id);

    function toggleTodoHandler(){
        if(itemIsToDo){
            trainingdayctx.removeToDo(props.id);
        } else {
            trainingdayctx.addToDo({
                id: props.id,
                image: props.image,
                name: props.name,
                level: props.level,
                notes: props.notes,
                type: props.type,


            })
        }
    }


    return( <li className={classes.item}>
        <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.name}/>
                    </div>
                <div className={classes.content}>
                    <h3>{props.name}</h3>
                    <h5>Level: {props.level} |  {props.type}</h5>
                    <p>{props.notes}</p>
                    
                </div>
                <div className={classes.actions}>
                    <button>Edit Post</button>
                    <button onClick={toggleTodoHandler}>{itemIsToDo ? 'Remove from Training Day' : 'Add to Training Day'}</button>

                </div>
                </Card>

                </li>
        
        
        )


};

export default TrickItem;