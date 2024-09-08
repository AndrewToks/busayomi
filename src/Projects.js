//import "swiper/css";
//import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
//import { sliderSettings } from '../../utils/common';
//import data from '../../utils/slider.json'

const Projects = () =>{
    return(
        <>
        <h1 className="project-heading">Projects<span className="dot">.</span></h1>
        <div className="project">
        {/* <Swiper {...sliderSettings}>
  <SliderButtons />
  {
   data.map((card, i) => (
            
   <SwiperSlide key = {i}>
    <div className="project-item">
     <div className="project-img">
   <img src={card.image} alt="home" />
    </div> 
    <h2>{card.title}</h2>
    <p>{card.description}</p>
        <a  className="get-in-touch">{card.button}</a>
    </div>
  </SwiperSlide>

  ))
   }
  </Swiper> */}

  
        <div className="project-item">
        <div className="project-img">
        <img src="Capture.PNG" alt="" /></div>
        <h2>Real Estate Management System</h2>
        {/* <p>A website that where you can buy or purchase houses</p> */}
        <p>It has information about the seller, products and the value offered.</p>
        <a href="https://real-estate-1l6.pages.dev/" className="get-in-touch">Browse Project</a>
        </div>
        <div className="project-item">
        <div className="project-img">
        <img src="Capture.PNG" alt="" /></div>
        <h2>BMI Calculator</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit,inventore fugit ...</p>
        <a href="http://google.com" className="get-in-touch">Browse Project</a>
        </div>
        <div className="project-item">
        <div className="project-img">
        <img src="Capture.PNG" alt="" /></div>
        <h2>News Blog</h2>
        <p>voluptatem iusto sunt, similique sapiente 
       vitae in ratione inventore fugit ...</p>
        <a href="http://google.com" className="get-in-touch">Browse Project</a>
        </div>
        </div>
        </>
        
    )
}
export default Projects
// const SliderButtons = () => {
//     const swiper = useSwiper()
//     return (
//       <div className="flexCenter r-buttons">
//         <button onClick={()=> swiper.slidePrev()}>
//           &lt;
//         </button>
//         <button onClick={()=> swiper.slideNext()}>
//           &gt;
//           </button>
//       </div>
//     )
//   }
  