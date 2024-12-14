import { useNavigate } from "react-router-dom";
export default function Country({ info }) {
  const navigate = useNavigate()
  const {
    name: { common },
    population,
    region,
    capital,
    flags: { svg, alt },
  } = info;

  const handleClick = () =>{
      navigate(`country/${common}`)
  } 

  return (
    <div key={common} onClick={()=>handleClick(common)} className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full !min-h-[200px] object-cover"
          style={{
            height: "200px",
          }}
          src={svg}
          alt={alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{common}</h2>
        <div>
          <p>
            <strong>Population:</strong> {population}
          </p>
          <p>
            <strong>Region:</strong> {region}
          </p>
          <p>
            <strong>Capital:</strong> {capital}
          </p>
        </div>
      </div>
    </div>


  );                                                             
}
