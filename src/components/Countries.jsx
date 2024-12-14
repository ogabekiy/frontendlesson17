import Country from "./Country";

export default function Countries({ countries = [] }) {
  return (
    <div className="container mx-auto px-5">
      <ul className="grid lg:grid-cols-4 gap-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {countries.map((cnt, index) => {
          return (
            <li key={index}>
              <Country info={cnt} />
            </li>
          );
        })}
      </ul>
      ;
    </div>
  );
}
