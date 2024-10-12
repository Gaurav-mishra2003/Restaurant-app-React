const Crousel = () => {
    const imagecontainer=[
        {
            "id": 13,
            "image": "https://cdn.dummyjson.com/recipe-images/13.webp",
           },
        
          {
            "id": 15,
        
           
            "image": "https://cdn.dummyjson.com/recipe-images/15.webp",
           
          },
          {
            "id": 16,
           
            "image": "https://cdn.dummyjson.com/recipe-images/16.webp",
           
          },
          {
            "id": 17,
           
            "image": "https://cdn.dummyjson.com/recipe-images/17.webp",
           },
          {
            "id": 18,
           
            "image": "https://cdn.dummyjson.com/recipe-images/17.webp",
           },
           {
            "id": 19,
            "image": "https://cdn.dummyjson.com/recipe-images/22.webp",
           },   
]
    return (
        <div className="row  crousel">
      {  imagecontainer.map((item)=>{
            return <div className="col-lg-2" key={item.id}>
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={`${item.image}`} alt="loading" />
        </div>
        })}
         </div>
    );
}

export default Crousel;

