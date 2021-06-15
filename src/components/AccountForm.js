import {useState, useContext} from 'react'
import {AccountContext} from '../providers/AccountProvider'
import { Form } from 'semantic-ui-react'

const AccountForm = ()=> {
    const account = useContext(AccountContext)
    const [username, setUsername] = useState(account.username)
    const [membershipLevel, setMembershipLevel] = useState(account.membershipLevel)
    const handleSubmitYo = (e) => {
        e.preventDefault()
        console.log(username)
        console.log(membershipLevel)
    }
    return (
        <Form onSubmit={handleSubmitYo}>
            <Form.Input 
              label='Username'
              type='text'
              value={username}
              onChange={(e, {value})=> setUsername(value)}
            />
            <Form.Select 
              label="Membership Level"
              value={membershipLevel}
              options={membershipOptions}
              onChange={(e, {value}) => setMembershipLevel(value)}
            />
            <Form.Button color='blue'>Save</Form.Button>
        </Form>
    )
}

const membershipOptions = [
    {key: 'b', value: 'Bronze', text: 'Bronze' },
    {key: 'g', value: 'Gold', text: 'Gold' },
    {key: 's', value: 'Silver', text: 'Silver' },
]

export default AccountForm