import React, {useState} from 'react'

export const UsersContext = React.createContext();

export const UsersConsumer = UsersContext.Consumer

const UsersProvider = (props) => {
    const [users, setUsers] = useState(['jon', 'jill'])

    const addUser = (user) => {
        // do axios call here
        let newUsers = [...users, user]
        setUsers(newUsers)
    }
    const editUser = (user) => {
        //map
    }
    return (
        <UsersContext.Provider value={{
            users,
            setUsers,
            addUser,
         
        }
        }
        >
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersProvider