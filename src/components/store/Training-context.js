import {createContext, useState} from 'react';


const TrainingContext = createContext({
    todo: [],
    totalToDo: 0,
    addToDo: (trickToDo) => {},
    removeToDo: (todoId) => {},
    itemIsToDo:(todoId) => {}


});

export function TrainingContextProvider(props){
    const[todos, setToDos] =  useState([]);


    function addTodoHandler(trickToDo){
        setToDos((prevTodos) => {
            return prevTodos.concat(trickToDo)
        })
    }

    function removeTodoHandler(todoId){
        setToDos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== todoId);
        })
    }
    function itemIsTodoHandler(todoId){
         return todos.some(todo => todo.id === todoId)
        
    }


    const context = {
        todo: todos,
        totalToDos: todos.length,
        addToDo: addTodoHandler,
        removeToDo: removeTodoHandler,
        itemIsToDo: itemIsTodoHandler,

        

    }

    return <TrainingContext.Provider value={context}>
          {props.children}

    </TrainingContext.Provider>
  



}

export default TrainingContext;