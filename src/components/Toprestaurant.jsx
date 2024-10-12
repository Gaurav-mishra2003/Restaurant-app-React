const topitems = [
    {
        "id": 18,
        "name": "Korean Bibimbap",

        "image": "https://cdn.dummyjson.com/recipe-images/18.webp",
        "rating": 4.9,
        "reviewCount": 56,
    },
    {
        "id": 19,
        "name": "Greek Moussaka",

        "image": "https://cdn.dummyjson.com/recipe-images/19.webp",
        "rating": 4.3,
        "reviewCount": 26,

    },
    {
        "id": 20,
        "name": "Butter Chicken (Murgh Makhani)",

        "image": "https://cdn.dummyjson.com/recipe-images/20.webp",
        "rating": 4.5,
        "reviewCount": 44,
    },
    {
        "id": 21,
        "name": "Mango Lassi",
        "image": "https://cdn.dummyjson.com/recipe-images/21.webp",
        "rating": 4.2,
        "reviewCount": 18,
    },
   
]



const Toprestaurant = () => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3  toprestaurant-container">
            {topitems.map((item) => {
                return     <div className="col" key={item.id}>
                <div className="card shadow-sm">
                <img src={`${item.image}`} alt="loading"  className="bd-placeholder-img card-img-top" width="100%" height="200"/>
                    {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                    <div className="card-body">
                        <p className="card-text">{item.name}</p>
                        <span>{item.rating}⭐</span> <span> &nbsp;&nbsp;&nbsp;&nbsp;{item.reviewCount} views</span>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Order Now</button>
                            </div>
                            <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            })}
        </div>
    );
}
export default Toprestaurant;


