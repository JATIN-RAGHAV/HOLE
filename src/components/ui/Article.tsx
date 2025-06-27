import type { article } from "../../../database.types";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm"
import { useParams } from "react-router";
import { supabase } from "../../lib/utils";

export default function Article (){
        const [mkdata,setMkdata] = useState<string | undefined >();
        const [ar,setAr] = useState<article[] | null>();
        let params = useParams();
        let article_name = params.article_name;
        useEffect(() => {
                const get_data = async() => {
                        let article: article[] | null= (await supabase.from('articles').select().eq('title',article_name)).data;
                        setAr(article);
                        if(article?.length && article[0].url){
                                fetch(article[0].url ? article[0].url : "https://www.rfc-editor.org/rfc/rfc8446.txt")
                        .then(res => {
                                if(!res.ok) throw Error("Couldn't get the article markdown.")
                                return res.text();
                        })
                        .then(setMkdata)
                        }
                }
                get_data();
        },[])
        return <div className="flex flex-col items-center py-20 text-white">
        {
                ar?.length ? <><div className="max-w-prose overflow-x-auto break-words flex flex-col items-center px-5">
        <div className="flex flex-col items-center">{ar[0].title}</div>
        <div className="flex flex-col items-center">{ar[0].date}</div>
        <img className="flex flex-col items-center" src={ar[0].icon ? ar[0].icon : "https://www.primevideo.com/detail/Mr-Robot/0L52QDYY6OG738LB7ILP0VB7R4"}/>
        <Markdown remarkPlugins={[remarkGfm]}>{mkdata}</Markdown>
        </div></>:
                <>
        <div>Loading....</div>
        </>
        }
        </div>
}
