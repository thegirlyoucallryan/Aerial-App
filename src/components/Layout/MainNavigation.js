import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'
import {useContext} from 'react';

import TrainingContext from "../store/Training-context";


function MainNavigation() {

    const trainctx = useContext(TrainingContext);
    return <header className={classes.header}>
        <div className={classes.logo}>Aerial Syllabus</div>
       
        <nav>
            <ul>
                <li>
                    <Link to='/'>Profile</Link>
                </li>
                <li>
                    <Link to='/add-new'>Add New Tricks </Link>
                </li>
                <li>
                    <Link to='/TrainingDay'>Training Day
                    <span className={classes.badge}>{trainctx.totalToDos}</span></Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;