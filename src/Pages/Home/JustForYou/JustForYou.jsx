import { useEffect, useState } from 'react';
import ForYouItems from '../../../Shared/ForYouItems/ForYouItems';
import SectionTitle from '../../../SectionTitle/SectionTitle';

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
        <SectionTitle title="Just for you"></SectionTitle>
        <div>
            {
                menu.map(item => <ForYouItems key={ item._id}
                item={item}></ForYouItems>)
            }
        </div>
        </>
    );
};

export default JustForYou;