import { useState, useEffect } from "react"
import axios from "axios"
import IUser from "../../interfaces/user.interfaces"

function Home (){
    const [users, setUsers] = useState<IUser[]>([]);

    const getUsers = async () => {
        try {
            const { data } = await axios.get("https://66fd3bb8c3a184a84d1990b9.mockapi.io/api/v1/users");

            setUsers(data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Name</th>
                            <th>Phone Number</th>
                            <th>Password</th>
                            <th>Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((item) => (
                            <tr key={item.id}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.password}</td>
                                <td>{item.id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home