import seriesData from '../api/seriesData.json'
// import './NetflixCard.css';
import NetflixCardContent from './NetflixCardContent';

const NetfilxCards2 = () => {
    return (
        <>
            <ul>
                {
                    seriesData.map((currElem) => {
                        return (<NetflixCardContent key={currElem.id} currElem={currElem} />)
                    })
                }

            </ul>
        </>
    )
}
export default NetfilxCards2;


