"use client";

import { useEffect ,useState} from "react";
import { Counter } from "./Counter";

const URL = "https://jsonplaceholder.typicode.com/posts"

const ClientComp = () => {
    const [postsData, setPostsData] = useState([])



    const fetchData = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data)
        setPostsData(data);


    }
    useEffect(() => {
        fetchData();
    }, [])



    return (
        <>
            <h1 className="font-roboto">
                Welcome, to Client Component
            </h1>
            <button
                className="bg-amber-400 text-black p-5"
                onClick={() => alert("hii")}
            >
                Click Me
            </button><Counter/>
            
            <ul className="grid grid-cols-3 gap-4">
                {
                    postsData.map((currElem,index)=>{
                        return<li key={index}>{currElem.body}{currElem.title}</li>

                    })
                }
            </ul>

        </>

    )
}
export default ClientComp;