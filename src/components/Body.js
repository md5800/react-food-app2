import ResCard from "./ResCard";
import resCardData from "./resCardData";
import { useState } from "react";

let newCardData1 =[
    {
        info: {
            "id": "7194372",
            "name": "McDonald's",
            "cloudinaryImageId": "ecd32b841549ce6bfd993260a2086c1f",
            "locality": "KASBA",
            "areaName": "Rajdanga road",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "American",
              "Fast Food"
            ],
            "avgRating": 4.4, 
            "sla": {
                "deliveryTime": 27,
                "slaString": "25-30 mins",
              }
        }
    },
    {
        info: {
            "id": "7194371",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "KASBA",
            "areaName": "Rajdanga road",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "American",
              "Fast Food"
            ],
            "avgRating": 3.8, 
            "sla": {
                "deliveryTime": 27,
                "slaString": "25-30 mins",
              }
        }
    },
    {
        info: {
            "id": "7194351",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
            "locality": "KASBA",
            "areaName": "Rajdanga road",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "American",
              "Fast Food"
            ],
            "avgRating": 3.5, 
            "sla": {
                "deliveryTime": 27,
                "slaString": "25-30 mins",
              }
        }
    }             
]

const Body =() =>{

  let [NewCardData, setNewCardData] = useState(resCardData);

  return (
      <div className="mainsec">
          <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="filtersec">
                        <button onClick={
                          ()=>{
                            const filteredCardData = NewCardData.filter(resobj => resobj.info.avgRating > 4.5);
                            setNewCardData(filteredCardData);
                            // console.log(filteredCardData);
                          } 
                        }>Top Rated</button>
                    </div>
                </div>
                <div className="col-md-5">
                    <form className="d-flex searchbox">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn" type="submit">Search</button>
                    </form>
                </div>
            </div>
          </div>
          <div className="cardsec">
              <div className="container">
                  <div className="row">
                      {
                        NewCardData.map(restaurantCard =>  <ResCard key={restaurantCard.info.id} resData={restaurantCard} />)
                      }

                      {/* <ResCard resData={resCardData[0]} />
                      <ResCard resData={resCardData[1]} />
                      <ResCard resData={resCardData[2]} />
                      <ResCard resData={resCardData[3]} />
                      <ResCard resData={resCardData[4]} />
                      <ResCard resData={resCardData[5]} />
                      <ResCard resData={resCardData[6]} />
                      <ResCard resData={resCardData[7]} />
                      <ResCard resData={resCardData[8]} /> */}
                  </div>
                  
              </div>
          </div>
      </div>
  );
}

export default Body;