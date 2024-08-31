import axios from "axios";
import {useState, useEffect} from "react";

const App = () => {
  const [myData, setMyData] = useState([]);
  const [myError, setMyError] = useState([]);

  const fetchData = async() =>{
    try{
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    }catch(error){
      setMyError(error.message);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="bg-gray-500">
      <h1 className="text-white text-center font-semibold p-4">This page will contain the data from fake API</h1>
      {myError !== "" && <h2 className="text-red text-3xl font-extralight">{myError}</h2>}

      <div className="flex overflow-x-scroll">
        {myData.slice(0,15).map((data)=>{
          const {id, body, title} = data;
          return(
            <div key={id} className="border border-black h-fit p-4 m-4">
              <h1 className="font-bold ">Title : {title.slice(0,25)}</h1>
              <h1 className="text-white">{body.slice(0,150)}</h1>
            </div>
          )
        })};
      </div>
    </div>
  )
}

export default App
