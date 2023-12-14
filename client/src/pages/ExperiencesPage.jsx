import CompaniesTags from "../Components/CompaniesTags";
import FiltersSideBar from "../Components/filtersSideBar";
import ExperienceAccordian from "./../Components/ExperienceAccordian";
// import Button from "./Button";
// import CreatePost from '../Components/CreatePost'

function ExperiencesPage() {
  return (
    <div className="md:mx-20 md:flex md:justify-between gap-x-10">
      <FiltersSideBar />

      <div className="md:w-[65%]">
        <div className=" md:flex md:justify-evenly md:items-center md:my-5">
          <CompaniesTags />
          <button className="md:text-xl border-2 border-lavender bg-lavender/40 md:py-2 md:px-5 md:cursor-pointer md:rounded-xl">
            CREATE POST
          </button>
        </div>
        <div className=" md:p-5 md:h-[500px] overflow-y-scroll no-scrollbar bg-red-400">
          <ExperienceAccordian />
        </div>
      </div>
    </div>
  );
}

export default ExperiencesPage;
