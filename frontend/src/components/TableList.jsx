import React from 'react'

const TableList = ({handleOpen}) => {

    const clients = [
        { 
            id: 1,
            name: 'joe', 
            email: 'joedarmakus@gmail.com', 
            job: 'developer', 
            rate: 100, 
            isactive: true 
        },
        { 
            id: 2,
            name: 'joe biden', 
            email: 'joedarmarollerkus@gmail.com', 
            job: 'president', 
            rate: 100, 
            isactive: true 
        },
        { 
            id: 3,
            name: 'joe taslim', 
            email: 'joetaslim@gmail.com', 
            job: 'actor', 
            rate: 100, 
            isactive: false 
        },
    ]
    return (
    <div>
        <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Job</th>
                    <th>Rate</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody className="hover:bg-base-300">
                {/* row 1 */}
                {clients.map((client) => (
                    <tr>
                    <th>{client.id}</th>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.job}</td>
                    <td>{client.rate}</td>
                    <td>
                        <button className={`btn btn-xs ${client.isactive ? 'btn-primary' : 'btn-outline-primary'}`}>
                            {client.isactive ? 'Active' : 'Inactive'}
                        </button>
                    </td>
                    <td>
                        <button onClick={() => handleOpen('edit')} className="btn btn-sm btn-secondary">Update</button>
                        <button className="btn btn-sm btn-error ml-2">Delete</button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
)
}

export default TableList