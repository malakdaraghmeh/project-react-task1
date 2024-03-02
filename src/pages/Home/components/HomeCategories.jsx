
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function HomeCategories() {
        const [categories,setCategories]=useState([]);
        const getCategories=async()=>{
        const {data} =await axios.get(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=20`);
        setCategories(data.categories);
        }
        useEffect(()=>{
            getCategories();  
        },[])
    
  return (
    <>
  <section  className="Category">
    <div className="container">
      <h2 className="title d-flex flex-wrap flex-wrap align-items-center justify-content-center ">categories</h2>
    <Swiper  
      spaceBetween={50}
      slidesPerView={5}
      onSwiper={ () =>  console.log("swiper")}
      onSlideChange={() => 
        console.log("Slide change")
      }
      navigation={true}
    >
    {
      (categories.length>0)? categories.map(catagory => 
          <div className="col-lg-6 col-md-4 col-sm-6"  key={catagory.id}>
             <SwiperSlide className="swiperSlide" key={catagory._id}>
             <div  className="swiperSlide  d-flex flex-wrap flex-wrap align-items-center flex-sm-column gap-2 justify-content-center   ">
             <img className="circular-image" src={catagory.image.secure_url}alt="slide image" />
             <span className="cat-title">{catagory.name}</span></div>
             </SwiperSlide>
              </div>
        ):<h2>empty data</h2> }

    </Swiper>
     </div>
    </section>
    </>
  )
}
