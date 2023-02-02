import { useState } from "react"
import "./stylemain.css"
const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    return (
        <>
            <div className="head">
                <h1 className="todo">
                    Todo-List
                </h1>
                <h1 className="username">User Name</h1>
            </div>
            
            <div>
            <div className="head"></div>

                <div className="button">

                    <button className="activity">Add new Activity</button>
                </div>
                <div>
                    <table className="table">
                        <tr className="header">
                            <td>Activity</td>
                            <td>Status</td>
                            <td>Time-Taken</td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>Running</td>
                            <td>Pending</td>
                            <td>       </td>
                            <td>Start</td>
                        </tr>
                        <tr>
                            <td>Drinking</td>
                            <td>Pending</td>
                            <td>       </td>
                            <td>Start</td>
                        </tr>
                        <tr>
                            <td>Sleeping</td>
                            <td>Pending</td>
                            <td>       </td>
                            <td>Start</td>
                        </tr>
                        <tr>
                            <td>Cooking</td>
                            <td>Pending</td>
                            <td>       </td>
                            <td>Start</td>
                        </tr>
                        <tr>
                            <td>Eating</td>
                            <td>Completed</td>
                            <td>     0.05</td>
                            <td>       </td>
                        </tr>
                        <tr>
                            <td>Washing</td>
                            <td>Completed</td>
                            <td>     1.00</td>
                            <td>       </td>
                        </tr>
                    </table>
                </div>
                <button onClick={handleLogout} className="logout">
                    Logout
                </button>
            </div>
        </>
    )
}

export default Main