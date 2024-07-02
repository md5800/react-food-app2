import {CARD_IMG_PREFIX} from "../utils/constant.js";

const ResCard = (props) =>{
  const { resData } = props; 
//   console.log(props);
  const {cloudinaryImageId , name , cuisines , avgRating , sla , costForTwo  } = resData?.info;
  return(
      <div className="col-md-3">
          <div className="cardbox mt-5">
              <div className="cardimg">
                  <img src={CARD_IMG_PREFIX + cloudinaryImageId} alt="cardimg" />
              </div>
              <div className="cardcontent">
              <h3 className="mt-3 mb-3">{name} <span style={{color:"#000"}}>({cuisines.join(",")})</span></h3>
              <h5><i className="bi bi-star"></i> {avgRating} <span className="dot-divider"></span> {sla.slaString} mins <span className="dot-divider"></span> {costForTwo}</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
              </div>
          </div>
      </div>
  )
}

export default ResCard;