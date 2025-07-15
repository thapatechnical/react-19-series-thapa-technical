import seriesData from "../api/seriesData.json";

const NetflixCard = () => {
    const age = 20; // example age; make sure to define it or pass as prop

    return (
        <ul>
            {seriesData.map((currElem) => (
                <li key={currElem.id}>
                    <div>
                        <img width='40%' height='40%' src={currElem.img_url} alt="drama pic" />
                    </div>
                    <h2>Name: {currElem.name}</h2>
                    <h2>Rating: {currElem.rating}</h2>
                    <p>Summary: {currElem.description}</p>
                    <p>Genre: {currElem.genre}</p>
                    {age >= 16 ? (
                        <button>
                            <a
                                href={currElem.watch_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Watch Now
                            </a>
                        </button>
                    ) : (
                        <button disabled>Age Restricted</button>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NetflixCard;
