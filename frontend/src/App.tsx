import  { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";

interface Project {
  _id:string;
  Title: string;
  Technologies: string;
  Frontend: string;
  Backend: string;
  Databases: string;
  Infrastructure: string;
  Availability: string;
}

function App(){
  const [myOptions, setMyOptions] = useState<Project[]>([]);

  const getDataFromAPI = (filterType: string, searchTerm: string) => {
    
    const data: any = {};
    if (filterType !== "All") {
      data[filterType] = searchTerm;
    }
    // Replace 'http://localhost:4000/' with your API endpoint
    fetch(import.meta.env.VITE_BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data: Project[]) => {
        setMyOptions(data); // Set all options
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setMyOptions([]);
      });
  };

  useEffect(() => {
    getDataFromAPI("All", "");
  }, []); // Fetch data on component mount

  const handleSearch = async (filterType: string, searchTerm: string) => {
    // Perform filtering based on filterType and searchTerm
    await getDataFromAPI(filterType, searchTerm);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <CardContainer cardsData={myOptions} />
    </>
  );
}

export default App;
