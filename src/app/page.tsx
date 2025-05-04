import Footer from "@/components/footer/Footer"
import Herosection from "@/components/body/Herosection"
import Feature from "@/components/body/Feature"
import Banner from "@/components/body/Banner"

export default function Home() {
  return (
    <div className="flex flex-col">
    <Herosection/>
      <Feature/>
      <Banner/>
      <Footer/>
    </div>
  )
}
