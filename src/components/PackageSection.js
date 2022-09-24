import "./PackageSection.css";
import { Link } from "react-router-dom";
import { PackageCard } from "./PackageCard";
import himachal from '../media/himachalbg.jpg'
import dubai from '../media/dubai.jpg'
import europe from '../media/europebg.jpg'
import kerala from '../media/keralabg.jpg'
import maldives from '../media/himachalbg.jpg'
import rajasthan from '../media/rajasthan.jpg'
import thailand from '../media/thailandbg.jpg'
import goa from '../media/goa.jpg'

export const PackageSection = () => {
  const packageInfoRow1 = [
    {
      place: "Himachal",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: himachal,
      price: "4000-5000 INR",
    },
    {
        place: "Goa",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
        img: goa,
        price: "4000-5000 INR",
      },
      {
        place: "Kerala",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
        img: kerala,
        price: "4000-5000 INR",
      },
      {
        place: "Rajasthan",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
        img: rajasthan,
        price: "4000-5000 INR",
      },
  ];
  const packageInfoRow2 = [
    {
      place: "Dubai",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: dubai,
      price: "4000-5000 INR",
    },
    {
        place: "Europe",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
        img: europe,
        price: "4000-5000 INR",
      },
      {
        place: "Thailand",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
        img: thailand,
        price: "4000-5000 INR",
      },
      {
        place: "Maldives",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
        img: maldives,
        price: "4000-5000 INR",
      },
  ];
  return (
    <>
      <div className="container3">
        <section className="packages" id="packages">
          <h1>Best Selling Destinations!</h1>
          <div className="outerbox">
            <h2>
              Domestic
              <hr />
            </h2>
            <div className="row1">
                {packageInfoRow1.map((element)=>{
                    return <PackageCard placeName={element.place} img={element.img} info={element.info} price={element.price} />
                })}
            </div>
            <h2>
              International
              <hr />
            </h2>
            <div className="row2">
                {packageInfoRow2.map((element)=>{
                        return <PackageCard placeName={element.place} img={element.img} info={element.info} price={element.price} />
                    })}
            </div>
            <div className="morebtn">
              <Link to="/">
                <button className="more-btn">Explore all</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};