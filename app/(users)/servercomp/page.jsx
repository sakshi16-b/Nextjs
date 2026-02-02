const URL = "https://jsonplaceholder.typicode.com/posts"


const ServerComp = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);

    return (
        <>
            <h1 className="font-roboto">
                Welcome, to Server Component
            </h1>
            {/* <button
                className="bg-amber-400 text-black p-5"
                onClick={() => alert("hii")} >
                Click Me</button> */}
                <ul className="grid grid-cols-3 gap-4">
                    {
                        data.map((currElem,index)=>{
                            return<li key={index}>{currElem.body}</li>
                        })
                    }
                </ul>
                {

                }
        </>


    )
}


export default ServerComp;