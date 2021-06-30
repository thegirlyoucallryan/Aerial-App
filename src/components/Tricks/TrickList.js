import classes from './TrickList.module.css'
import TrickItem from './TrickItem'


function TrickList(props){

    return(
        <ul className={classes.list}>
            {props.tricks.map((trick) => (
                <TrickItem
                key={trick.id}
                id={trick.id}
                image={trick.file}
                name={trick.name}
                notes={trick.notes}
                type={trick.type}
                level={trick.level}
                />
            ))}
        </ul>
    )







}

export default TrickList;