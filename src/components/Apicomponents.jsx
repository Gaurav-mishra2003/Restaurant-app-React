import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Simmour from './Simmour'



// swiggy api



const Apicomponets = () => {
    const [items, setitems] = useState([]);
    const [items1, setitems1] = useState([]);
    const [current,setval]=useState("");
    // const [searcheditems,setsearcheditems]=useState("");

    const searchedval=(event)=>{
      setval(event.target.value);
    }
    // after feching the data setitems fetched data
    useEffect(
       ()=>{
        fetched();
       }
    , [])

    async function fetched(){
        const data=await fetch("https://dummyjson.com/recipes");
        const json=await data.json();
        setitems1(json.recipes);
        setitems(json.recipes);
    }
   
    //  if no data faund then this empty boxes will looks
  const searchedPresed=()=>{
     const filteredvalue=items.filter((item)=>
    {
       return item.name.toLowerCase().includes(current.toLowerCase())
    })
    setitems1(filteredvalue);  
  }

  //order handler
  const orderhandler=(e,item)=>{
  console.log(item);
  console.log(e);
  }

    // seach functionality

    return items1.length === 0 ?
        <>
        <Navbar searchedval={searchedval}></Navbar>
        <Simmour></Simmour>
        </> :
        <>
         <Navbar searchedval={searchedval} searchedPresed={searchedPresed}></Navbar>
         <h3 className='topsearch'> Top Search Items</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 toprestaurant-container">

            {items1.map((item) => {
                return <div className="col " key={item.id}>
                    <div className="card shadow-sm">
                        <img src={`${item.image}`} alt="loading" className="bd-placeholder-img card-img-top" width="100%" height="200" />
                        {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                        <div className="card-body">
                            <p className="card-text">{item.name}</p>
                            <span>{item.rating}⭐</span> <span> &nbsp;&nbsp;&nbsp;&nbsp;{item.reviewCount} views</span>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary"onClick={(e,item)=>
                                        {
                                            orderhandler(e,item)
                                            console.log({item})
                                            }}>Order Now</button>

                                </div>
                                <small className="text-body-secondary">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
        </>
}


export default Apicomponets;








// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/BoGrCoke


// 6f6f6cdda05e7a857f18bd8459f231ce
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING