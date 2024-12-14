import { useEffect, useState } from "react";
import Actions from "../components/Actions";
import Countries from "../components/Countries";
import { getData } from "../request";
import Loader from "../components/Loader";

export default function Home() {
  const [element, setElement] = useState("/all");
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    getData(element)
      .then((res) => {
        setData(res);
      })
      .catch(({ message }) => {
        console.log(message);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [element]);

  return (
    <>
      
      <Actions setElement={setElement} />
      {loader ? <Loader /> : <Countries countries={data} />}
    </>
  );
}
