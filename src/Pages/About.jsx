import React from "react"
import Title from "../Components/Title"
import { assets } from "../assets/assets"
import NewsLetterBox from "../Components/NewsLetterBox"

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam, commodi deserunt sapiente fuga, eveniet, 
            voluptas libero minima beatae facilis maiores cumque velit ipsa iure veritatis placeat sunt consequuntur nisi?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque modi maxime quasi officia sed facilis 
            iste sapiente tenetur saepe, doloribus, ducimus eum labore ea. Dolores eius nisi quasi tempore.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, quia eveniet eum fugiat quo aut! Nisi iusto 
            nesciunt, facere aspernatur eaque minima fugiat, doloribus distinctio debitis fuga delectus. Voluptas, 
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ea ut hic odio ab accusamus harum
             totam distinctio tenetur fugiat incidunt reiciendis maxime nesciunt ipsam deleniti culpa ratione dicta.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ea ut hic odio ab accusamus harum
             totam distinctio tenetur fugiat incidunt reiciendis maxime nesciunt ipsam deleniti culpa ratione dicta.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, ea ut hic odio ab accusamus harum
             totam distinctio tenetur fugiat incidunt reiciendis maxime nesciunt ipsam deleniti culpa ratione dicta.
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About