import React from 'react'
import { Form } from 'semantic-ui-react'

class AccountFormClass extends React.Component {
    state = {
        username:'',
        membershipLevel:''
    }
    handleSubmitYo = (e) => {
        const {username, membershipLevel} = this.state
        e.preventDefault()
        console.log(username)
        console.log(membershipLevel)
    }
    handleChange = (e, {value, name}) => {
        this.setState({[name]: value})
        // if(name === 'username'){
        //     this.setState({username:value})
        // } else {
        //     this.setState({membershipLevel:value})
        // }
    }
    render(){
    const {username, membershipLevel} = this.state
    return (
        <Form onSubmit={this.handleSubmitYo}>
            <Form.Input 
              label='Username'
              type='text'
              name='username'
              value={username}
              onChange={this.handleChange}
            />
            <Form.Select 
              label="Membership Level"
              name='membershipLevel'
              value={membershipLevel}
              options={membershipOptions}
              onChange={this.handleChange}
            />
            <Form.Button color='blue'>Save</Form.Button>
        </Form>
    )
    }
}

const membershipOptions = [
    {key: 'b', value: 'Bronze', text: 'Bronze' },
    {key: 'g', value: 'Gold', text: 'Gold' },
    {key: 's', value: 'Silver', text: 'Silver' },
]

export default AccountFormClass