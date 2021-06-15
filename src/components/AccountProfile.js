import Account from "./Account"
import AccountForm from "./AccountForm"
import AccountFormClass from "./AccountFormClass"

const AccountProfile = ()=> {
    return (
        <div>
            <h1>AccountProfile</h1>
            <Account />
            <AccountForm />
            <AccountFormClass title='yo'/>
        </div>
    )
}

export default AccountProfile