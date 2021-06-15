import React, {useState} from 'react'

// setup the initial context
// {Consumer:, Provider}
export const AccountContext = React.createContext()

// create an exportable consumer that can be used
// in other components
export const AccountConsumer = AccountContext.Consumer

const AccountProvider = (props) => {
    const [username, setUsername] = useState('YOYOY')
    const [email, setEmail] = useState('test@gmail.com')
    const [membershipLevel, setMembershipLevel] = useState('Silver')
    const [dateJoined, setDateJoined] = useState('12/23/12')

    return (
        <AccountContext.Provider value={{
            username,
            membershipLevel,
            dateJoined,
            email,
            setUsername,
            setMembershipLevel,
            setEmail,
            setDateJoined
        }}>
           {props.children}
        </AccountContext.Provider>
    )
}

export default AccountProvider