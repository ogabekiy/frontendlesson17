export default function Actions({ setElement }) {
  const regions = ["All", "Africa", "America", "Asia", "Europe", "Ocenia"];

  function handleChange(e) {
    setElement(`/region/${e.target.value}`);
  }

  return (
    <div className="container mx-auto px-5 flex justify-between flex-wrap gap-5 items-center pt-10 pb-5">
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <select
        onChange={handleChange}
        className="select select-bordered w-full max-w-xs"
        defaultValue={"Filter by Region"}
      >
        <option disabled value={"Filter by Region"}>
          Filter by Region
        </option>
        {regions.map((reg) => {
          return (
            <option value={reg} key={reg}>
              {reg}
            </option>
          );
        })}
      </select>
    </div>
  );
}
