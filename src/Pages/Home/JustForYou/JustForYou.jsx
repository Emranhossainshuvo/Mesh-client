import React, { useEffect, useState } from 'react';

const JustForYou = () => {

    const [menu, setMenu] = useState([]); 

    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data)); 
    }, [])

    return (
        <>
         <p>hi this is from just for you</p>   
        </>
    );
};

export default JustForYou;