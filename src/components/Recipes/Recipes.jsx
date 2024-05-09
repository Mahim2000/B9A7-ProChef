import { useEffect, useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <>
      <div className="flex justify-center mt-28">
        <div className="lg:w-[607px] text-center">
          <h1 className="font-extrabold text-3xl lg:text-4xl pb-[24px] text-black">
            Our Calorie Efficient Recipes to Make Your Day and Night
          </h1>
          <h3 className="font-medium text-base pb-[32px] text-slate-500">
            Take a peek at our tastiest and easy to make recipes, all tailor
            made for your preferences!
          </h3>
        </div>
      </div>

      <hr />

      <section className="flex">
        <div className="flex">
          <div className="flex flex-wrap gap-10 w-full md:w-[53%] mt-20 mx-24">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="card w-full md:w-96 bg-base-100 border-2 shadow-xl"
              >
                <figure className="px-5 pt-10">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="rounded-xl"
                  />
                </figure>

                <div className="card-body flex-col items-left text-left break-normal">
                  <h2 className="card-title mb-10">{recipe.name}</h2>
                  <p className="mb-10">{recipe.description}</p>

                  <hr />

                  <h2 className="card-title mb-5">Ingredients</h2>
                  <ul className="mb-5 ml-8" style={{ listStyleType: "disc" }}>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>

                  <hr className="mb-10" />

                  <div className="flex gap-40 mb-15">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://www.svgrepo.com/show/521888/time.svg"
                        width="20"
                        alt=""
                      />
                      <h4>{recipe.time} Minutes</h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <img
                        src="https://www.svgrepo.com/show/472613/fire.svg"
                        width="20"
                        alt=""
                      />
                      <h4>{recipe.calories} Calories</h4>
                    </div>
                  </div>

                  <div>
                    <button className="btn lg:w-[170px] md:w-[150px] sm:w-[130px] lg:h-[50px] px-[30px] py-[16px] rounded-full border-transparent bg-[#0BE58A] hover:bg-[#3ed496] hover:border-transparent focus:border-transparent focus:bg-[#3ed496] text-black text-[15px]">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

                <div>
                <div className="overflow-x-auto mt-20 border-2 rounded-xl">
                    <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th>No</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th>Preparing</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
        </div>
      </section>
    </>
  );
};

export default Recipes;
