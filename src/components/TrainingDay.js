import {useContext} from 'react';
import TrainingContext from './store/Training-context';
import TrickList from './Tricks/TrickList';
import classes from './trainingday.module.css'


function TrainingDay(){
    const trainingctx = useContext(TrainingContext);

    let content;

    if(trainingctx.totalToDo === 0){
        content = <p style={{color: 'red', fontSize: '409px'}}>What do you want to work on today?</p>
     }else {
        content = <TrickList tricks={trainingctx.todo}/>
    }

    return (
    <section className={classes.trainingday}>
        <h1 className={classes.h1}>To Do...</h1>
        {content}
        
      
    </section>
    )
}

export default TrainingDay;