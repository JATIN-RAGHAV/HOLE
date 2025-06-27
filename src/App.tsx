import { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./lib/utils";
import type { article } from "../database.types";
import Article_list from "./components/ui/Article_List";

export function App() {


        const [data,setData] = useState<article[] | null>(null);
        useEffect(() => {
                const get_data = async () => {
                        let dataa:article[] | null = (await supabase.from('articles').select()).data;
                        setData(dataa);
                }
                get_data();
        },[])

  return (
          <>
          <div className="font-[monospace]">
          <div className="font-[monospace] text-white w-full flex justify-center h-10 text-2xl">HEADER</div>
          <Article_list data={data}/>
          <div className="text-white w-full flex justify-center h-10 text-2xl">FOOTER</div>
</div>
        </>
  );
}

export default App;
