import Hero from "./componets/Hero"
import Button from "./componets/Button"
import Footer from "./componets/Footer";


const App = () => {
  return (
    <>
    <div className='flex justify-center '>
    <h1 className='text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl
     w-[500px] lg:w-[600px] font-bold mt-6 mb-16'>We help and solve your business problem.</h1>
    </div>
    <Hero />
    <Button />
    <Footer />
      
    </>
  )
}

export default App
