import type { article } from "../../../database.types";
import ArticleIcon from "./ArticleIcon";

export default function Article_list ({data}:{data:article[] | null}){
          return<div className="w-full gap-7 flex flex-col items-center justify-center p-5 ">
                          {data? data.map(dt => <ArticleIcon article={dt}/>):"LOADING"}
          </div>

}
