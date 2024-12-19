import { assets } from "../assets/assets"
import NewsLetterBox from "../Components/NewsLetterBox"
import Title from "../Components/Title"


const Contact = () => {
  return (
    <div>
        <div className="text-center text-2xl pt-10 border-t">
          <Title text1={'CONTACT'} text2={'US'}/>
        </div>

        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
          <img className="w-full md:max-w-[400px]" src={assets.contact_img} alt="" />
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-xl text-gray-600">Oure Store</p>
            <p className="text-gray-500">534434 Will Smith,<br />street 5000 min way </p>
            <p className="text-gray-500">Tel: +251 8343 434 34 <br /> Email: Ashreafihakim@psg.fr</p>
            <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
            <p className="text-gray-500">Learn More About teams and job openings</p>
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
          </div>
        </div>

        <NewsLetterBox/>
    </div>
  )
}

export default Contact