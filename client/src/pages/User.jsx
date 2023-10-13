import React, { useEffect, useState } from 'react'
import axios from 'axios'
const User = () => {
 const [user, setUser] = useState([])
 const [loaded, setLoaded] = useState(false)

// useEffect(() => {
//     axios
//         .get('http://localhost:8080/api/v1/users/all')
//         .then((res) => {
//             setUser(res.data)
//             setLoaded(true)
//             // console.log(res.data)
//             console.log(user)
//         })
//         .catch((err) => console.error(err))
// }, [loaded])
const users = [
    {
    id: "1",
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@gmail.com"
    },
    {
    id: "2",
    first_name: "Jane",
    last_name: "Smith",
    email: "janesmith@gmail.com"
    },
    {
    id: "3",
    first_name: "Michael",
    last_name: "Johnson",
    email: "michaeljohnson@gmail.com"
    },
    {
    id: "4",
    first_name: "Emily",
    last_name: "Williams",
    email: "emilywilliams@gmail.com"
    },
    {
    id: "5",
    first_name: "David",
    last_name: "Brown",
    email: "davidbrown@gmail.com"
    },
    {
    id: "6",
    first_name: "Sarah",
    last_name: "Davis",
    email: "sarahdavis@gmail.com"
    },
    {
    id: "7",
    first_name: "Matthew",
    last_name: "Miller",
    email: "matthewmiller@gmail.com"
    },
    {
    id: "8",
    first_name: "Olivia",
    last_name: "Wilson",
    email: "oliviawilson@gmail.com"
    },
    {
    id: "9",
    first_name: "Daniel",
    last_name: "Taylor",
    email: "danieltaylor@gmail.com"
    },
    {
    id: "10",
    first_name: "Sophia",
    last_name: "Anderson",
    email: "sophiaanderson@gmail.com"
    },
    {
    id: "11",
    first_name: "James",
    last_name: "Thomas",
    email: "jamesthomas@gmail.com"
    },
    {
    id: "12",
    first_name: "Ava",
    last_name: "Jackson",
    email: "avajackson@gmail.com"
    },
    {
    id: "13",
    first_name: "William",
    last_name: "White",
    email: "williamwhite@gmail.com"
    },
    {
    id: "14",
    first_name: "Isabella",
    last_name: "Harris",
    email: "isabellaharris@gmail.com"
    },
    {
    id: "15",
    first_name: "Joseph",
    last_name: "Martin",
    email: "josephmartin@gmail.com"
    },
    {
    id: "16",
    first_name: "Mia",
    last_name: "Thompson",
    email: "miathompson@gmail.com"
    },
    {
    id: "17",
    first_name: "Benjamin",
    last_name: "Garcia",
    email: "benjamingarcia@gmail.com"
    },
    {
    id: "18",
    first_name: "Charlotte",
    last_name: "Martinez",
    email: "charlottemartinez@gmail.com"
    },
    {
    id: "19",
    first_name: "Andrew",
    last_name: "Robinson",
    email: "andrewrobinson@gmail.com"
    },
    {
    id: "20",
    first_name: "Harper",
    last_name: "Clark",
    email: "harperclark@gmail.com"
    },
    {
    id: "20",
    first_name: "Harper",
    last_name: "Clark",
    email: "harperclark@gmail.com"
    },
    {
    id: "21",
    first_name: "Liam",
    last_name: "Wilson",
    email: "liamwilson@gmail.com"
    },
    {
    id: "22",
    first_name: "Emma",
    last_name: "Johnson",
    email: "emmajohnson@gmail.com"
    },
    {
    id: "23",
    first_name: "Noah",
    last_name: "Smith",
    email: "noahsmith@gmail.com"
    },
    {
    id: "24",
    first_name: "Olivia",
    last_name: "Davis",
    email: "oliviadavis@gmail.com"
    },
    {
    id: "25",
    first_name: "Sophia",
    last_name: "Brown",
    email: "sophiabrown@gmail.com"
    },
    {
    id: "26",
    first_name: "Liam",
    last_name: "Miller",
    email: "liammiller@gmail.com"
    },
    {
    id: "27",
    first_name: "Emma",
    last_name: "Wilson",
    email: "emmawilson@gmail.com"
    },
    {
    id: "28",
    first_name: "Noah",
    last_name: "Taylor",
    email: "noahtaylor@gmail.com"
    },
    {
    id: "29",
    first_name: "Olivia",
    last_name: "Anderson",
    email: "oliviaanderson@gmail.com"
    },
    {
    id: "30",
    first_name: "Sophia",
    last_name: "Thomas",
    email: "sophiathomas@gmail.com"
    },
    {
        id: "31",
        first_name: "James",
        last_name: "Wilson",
        email: "jameswilson@gmail.com"
        },
        {
        id: "32",
        first_name: "Emma",
        last_name: "Johnson",
        email: "emmajohnson@gmail.com"
        },
        {
        id: "33",
        first_name: "Noah",
        last_name: "Smith",
        email: "noahsmith@gmail.com"
        },
        {
        id: "34",
        first_name: "Olivia",
        last_name: "Davis",
        email: "oliviadavis@gmail.com"
        },
        {
        id: "35",
        first_name: "Sophia",
        last_name: "Brown",
        email: "sophiabrown@gmail.com"
        },
        {
        id: "36",
        first_name: "Liam",
        last_name: "Miller",
        email: "liammiller@gmail.com"
        },
        {
        id: "37",
        first_name: "Emma",
        last_name: "Wilson",
        email: "emmawilson@gmail.com"
        },
        {
        id: "38",
        first_name: "Noah",
        last_name: "Taylor",
        email: "noahtaylor@gmail.com"
        },
        {
        id: "39",
        first_name: "Olivia",
        last_name: "Anderson",
        email: "oliviaanderson@gmail.com"
        },
        {
        id: "40",
        first_name: "Sophia",
        last_name: "Thomas",
        email: "sophiathomas@gmail.com"
        }
    ];

    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">All Customers</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700 text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            {/* <th>o</th> */}
                          {/* <th>Shipping Address</th>
                          <th>Order Status</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    #{user.id}
                                </td>
                                <td>
                                    {user.first_name}
                                </td>
                                <td>
                                    {user.last_name}
                                </td>
                                <td>{user.email}</td>
                                {/* <td>${user.totalOrder}</td>
                              <td>{user.deliveryAddress}</td> */}
                                {/* <td>{getOrderStatus(user.current_order_status)}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User
