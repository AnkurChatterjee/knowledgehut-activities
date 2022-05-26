function UserTable(props){
    let users = props.arg;
    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index) => 
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address?.city}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;