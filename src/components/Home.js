

import { useEffect, useState} from 'react';
import TrickList from './Tricks/TrickList'
import classes from '../home.module.css'

 

function Profile() {
    const [isLoading, setIsLoading] = useState(true);
    const[loadedPosts, setLoadedPosts] = useState([]);
    


    useEffect(() =>{
        setIsLoading(true);
        
        fetch('https://aerial-syllabus-default-rtdb.firebaseio.com/tricks.json'
        ).then(response => {
            return response.json()
        }).then(data => {
            const tricks = [];

            for(const key in data){
                const trick = {
                    id: key,
                    ...data[key]
                };
                tricks.push(trick)
            }

            setIsLoading(false);
            setLoadedPosts(tricks);
        })

    }, [])

    
  
    if(isLoading){
        return(<section>
            <h1>Loading...</h1>
            </section>)
    }

   

    return(
        <div>
            <div className={classes.pagedirection}>
            <h1 className={classes.pagetitle}>My Profile</h1>
            <button className={classes.btn}>List View</button>
            <button className={classes.btn}>Icon View</button>
            </div>
        <TrickList tricks={loadedPosts} />
                    
      
     
   

        
           </div>
    );
}

export default Profile;