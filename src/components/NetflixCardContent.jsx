const NetflixCardContent = (props) => {
    const age = 33;
    return (<>
        <li key={props.currElem.id}>
            <div>
                <img src={props.currElem.img_url} alt="card image" width='40%' height='40%' />
            </div>
            <h2>Name: {props.currElem.name}</h2>
            <h2>Rating: {props.currElem.rating} </h2>
            <p>Summary: {props.currElem.description} </p>
            <p>Genre: {props.currElem.genre} </p>
            {age >= 16 ? <button><a href={props.currElem.watch_url} target="_blank" rel="noopener noreferrer">Watch Now</a></button> : <button disabled>Age Restricton</button>}
        </li>

    </>)
}
export default NetflixCardContent;