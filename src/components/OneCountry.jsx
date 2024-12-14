import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetOneData } from "../request"; 
import Loader from "./Loader";

export default function OneCountry() {
  const { name } = useParams(); 
  const [country, setCountry] = useState(null); 

  useEffect(() => {
    const fetchCountry = async () => {
     
      try {
        const data = await GetOneData(name); 
        console.log("Fetched country data:", data);
        setCountry(data[0]);
      } catch (err) {
        throw new Error("Xatolik yuz berdi")
      }
    };
    fetchCountry();
  }, [name]); 

  if(!country){
    <Loader/>
  }

  if (country) {
    const {
      name: { common, official },
      population,
      region,
      subregion,
      capital,
      flags: { svg, alt },
      languages,
      currencies,tld
    } = country;

    return (
      <div className="container mx-auto flex gap-[150px] mt-[200px] ">
        <div>
        <img
                  src={svg}
          alt={alt || "Country flag"} 
          className="w-[560px] h-[401px] top=[280px] left-[80px] object-cover rounded-xl" 
        />
        </div>
        <div className="w-[598px] h-[323px] top-[319px] left-[760px] pt-[40px]">
        <h1 className="text-3xl font-bold">{common}</h1>

        <div className="flex gap-5 mt-10">
        <div className="flex flex-col gap-3">
        <p>
          <strong>Native Name:</strong> {official}
        </p>
        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Subregion:</strong> {subregion}
        </p>
        <p>
          <strong>Capital:</strong> {capital ? capital.join(", ") : "No capital"}
        </p>
        </div>

        <div className="flex flex-col gap-3">
        <p>
          <strong>Top Level Domain: </strong>{tld}
        </p>
        <p>
          <strong>Currencies:</strong>{" "}
          {currencies
            ? Object.values(currencies)
                .map((currency) => currency.name)
                .join(", ")
            : "No currencies"}
        </p>
        <p>
          <strong>Languages:</strong>{" "}
          {languages ? Object.values(languages).join(", ") : "No languages"}
        </p>
        </div>
        </div>
      
        </div>
      </div>
    );
  }

  return <div>No data found</div>;
}
