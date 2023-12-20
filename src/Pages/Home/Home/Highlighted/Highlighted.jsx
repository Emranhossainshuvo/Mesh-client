import SectionTitle from '../../../../SectionTitle/SectionTitle';
import image from '../../../../assets/kelly-sikkema-10AH6fV6Iz8-unsplash.jpg'
import moment from 'moment';

const Highlighted = () => {
    return (
        <div>
            <SectionTitle title='Check it out'></SectionTitle>
            <div>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <p>{moment().format("MMM Do YY")}</p>
                </div>
            </div>
        </div>
    );
};

export default Highlighted;