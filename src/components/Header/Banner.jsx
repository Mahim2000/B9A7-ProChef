const Banner = () => {

  return (
    <section className="flex justify-center">
      <div className="lg:w-[1420px] md:w-[90%] sm:w-[90%] lg:h-[620px] w-full rounded-[32px] bg-center bg-cover"
        style={{ backgroundImage: 'url(/Banner.png)' }}>
        <div className="flex items-center justify-center w-full h-full rounded-[32px] bg-gray-900 bg-opacity-35 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <span className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">A Wonderful Hub of Over 500+ Gourmet Recipes awaits here!</span>
                <p className="max-w-3xl mx-auto mt-6 mb-10 text-lg text-gray-300">
                Unleash Your Inner Chef with Our Delectable Creations. With <b>ProChef's</b> Calorie Efficient Recipes, find your Flavour while never losing elegance.
                </p>
                <div className="flex gap-5 justify-center">
                    <button className="btn lg:w-[170px] md:w-[150px] sm:w-[130px] lg:h-[65px] px-[30px] py-[16px] rounded-full border-transparent bg-[#0BE58A] hover:bg-[#3ed496] hover:border-transparent focus:border-transparent focus:bg-[#3ed496] text-black text-[15px]">Explore Now</button>
                    <button className="btn lg:w-[170px] md:w-[150px] sm:w-[130px] lg:h-[65px] px-[30px] py-[16px] rounded-full border-white bg-transparent hover:bg-white hover:text-black hover:border-transparent focus:border-transparent focus:bg-white focus:text-black text-white text-[15px]">Our Feedback</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
