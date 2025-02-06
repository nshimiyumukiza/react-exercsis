

const Hero = () => {
  return (
    <div>
       <div className="m-6 md:mx-auto w-[400px] sm:w-[800px] md:w-[1000px] lg:w-[1500px]
     grid grid-cols-1 md:grid-cols-2">
        <div className ="h-[600px] text-white bg-[#8247C9]">
          <div className ="flex justify-center mt-2">
          <img className ="h-64 w-64 md:h-90 md:w-90 rounded-full object-cover text-center" src="src/assets/image/man.png" alt="good man" />
          </div>
          
            <p className="text-lg sm:text-2xl md:text-3xl sm:w-[500px] text-center mt-10 ml-16">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
        </div>
      <div className ="h-[600px] text-white bg-[#C8ADE9]">
        <p className="text-lg sm:text-2xl md:text-3xl sm:w-[500px] text-center mt-10 ml-16">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
       
       
       <div className ="flex justify-center mt-12">
       <img className ="h-64 w-64 md:h-90 md:w-90 rounded-full object-cover"  src="src/assets/image/woman.png" alt=" woman image" />
       </div>
      </div>
     
    </div>
    </div>
  )
}

export default Hero


 