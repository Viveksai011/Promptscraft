
import  Herosection  from "@/components/body/aboutbody/Herosection"
import Story from "@/components/body/aboutbody/Story"
import Suggestion from "@/components/body/aboutbody/Suggestion"
import Tipsprompt from "@/components/body/aboutbody/Tipsprompt"
import Footer from "@/components/footer/Footer"
import Banner from "@/components/body/Banner"


export default function About() {
  return (
    <div className="flex flex-col min-h-screen">   
      <Herosection />
     <Story/>
   <Suggestion/>
      <Tipsprompt/>
      <Banner/>
     <Footer/>
    </div>
  )
}
