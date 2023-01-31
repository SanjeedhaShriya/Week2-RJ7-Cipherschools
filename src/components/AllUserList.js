import React from "react";
import UserDetails from "./UserDetails";
const AllUserList =() => {
    let allUsers = [{
        name:"John",email : "John@email.com",phone : "8987898" },
    {name:"Shreyus", email: "shreyus@email.com",phone:"78797689"},
    {name:"sanjeedha", email: "sanjeedha@gmail.com", phone:"63051278"}

];

let array =[ <UserDetails user = {allUsers[0]} />,
<UserDetails user = {allUsers[1]} />,
<UserDetails user = {allUsers[2]} />,

]

return(
    <div>
        {/* <UserDetails user = {allUsers[0]} />
        <UserDetails user = {allUsers[1]} />
        <UserDetails user = {allUsers[2]} /> */}
        {array}
    </div>
)
};
export default AllUserList;