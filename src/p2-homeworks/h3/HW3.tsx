import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v4 as uuidv4} from "uuid";

// types
export type UserType = {
    _id: string// need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<any>([]) // need to fix any

    const addUserCallback = (userName: string) => { // need to fix any
        const newUsersArray = [...users]
        newUsersArray.push({name: userName, _id: uuidv4()})
        setUsers(newUsersArray) // need to fix
    }
    debugger
    return (

        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
