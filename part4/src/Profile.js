import React from 'react';


    const Profile=(props)=>{

    return (
        <div>
            <h2>Fullname : {props.Person.FullName}</h2>
            <h2>Bio : {props.Person.Bio}</h2>
            <h2>Profession : {props.Person.Profession}</h2>
            <h2></h2>

        </div>
    )


}

export default Profile;