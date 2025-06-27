import type { article } from "../../../database.types";
import { NavLink } from "react-router";

export default function ArticleIcon ({article}:{article:article}){

        let default_title_class = "flex justify-center text-2xl";

        return <div className="text-white w-full md:max-w-5/6 sm:max-w-3/4 lg:max-w-2/3 rounded-2xl md:border border-red-200 flex flex-col items-center px-3 py-2 ">
        <NavLink to={"/"+article.title} className={({isActive}) => {
                return isActive ? default_title_class+"cursor-pointer": default_title_class
        }}>{article.title}</NavLink>
        <NavLink to={'/'+article.title} className="max-w-[300px] flex justify-center">
                <img src={article.icon} className="w-full"/>
        </NavLink>
        </div>
};
