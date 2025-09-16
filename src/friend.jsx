export default function Friend({friend}){
    console.log(friend)
    const {name, email, phone,username,zipcode} = friend;
    return( 
        <div className="card">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Username:{username}</p>
            <p>Zipcode: {zipcode}</p>
        </div>
    )
}