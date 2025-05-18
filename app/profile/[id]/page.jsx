// const User = async({params}) => {
//     const {id} = await params;

//     const data = await fetch('https://api.github.com/users/${id}');

//     const responce = await data.json();
//     console.log(response);
//     return(
//         <>
     
//         </>
//     )
// }
// export default User


import React from 'react';

const User = async ({ params }) => {
    const { id } = params;

    const response = await fetch(`https://api.github.com/users/${id}`);
    const data = await response.json();

    console.log(data);

    return (
        <>
            <h1>{data.name}</h1>
            <p>{data.bio}</p>
        </>
    );
};

export default User;
