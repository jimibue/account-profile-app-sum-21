import React from 'react'
import { Form  } from 'semantic-ui-react'
import { AccountConsumer } from '../providers/AccountProvider'

class AccountFormClass extends React.Component {
    state = {
        username: this.props.username,
        membershipLevel: this.props.membershipLevel
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
        <>
        <h1>title: {this.props.title}</h1>
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
        </>
    )
    }
}

const ConnectedAccountForm = (props) => {
    return (
        <AccountConsumer>
            {value => (<AccountFormClass 
                        {...props}
                        username={value.username}
                        membershipLevel={value.membershipLevel}
                        />)}
        </AccountConsumer>
    )
}

const membershipOptions = [
    {key: 'b', value: 'Bronze', text: 'Bronze' },
    {key: 'g', value: 'Gold', text: 'Gold' },
    {key: 's', value: 'Silver', text: 'Silver' },
]

export default ConnectedAccountForm
// export default AccountFormClass
