import { useEffect, useState } from 'react';
import ForYouItems from '../../../Shared/ForYouItems/ForYouItems';

const JustForYou = () => {

    const [menu, setMenu] = useState([]); 

    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const justForYou = data.filter(item => item.category === 'Paints')
            setMenu(justForYou)
        }); 
    }, [])

    return (
        <>
        <div>
            {
                menu.map(item => <ForYouItems key={ item._id}
                item={item}></ForYouItems>)
            }
        </div>
         <p>hi this is from just for you {menu.length} </p>   
        </>
    );
};

export default JustForYou;