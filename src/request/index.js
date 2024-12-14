import { baseURL } from "../constants";

export async function getData(element = "/all") {
  const res = await fetch(baseURL + element);
  if (res.status === 200) {
    return res.json();
  } else {
    throw new Error("Something went wrong: )");
  }
}

export async function GetOneData(e){
  const res = await fetch(baseURL + '/name/' + e )
  if(res.status === 200){
    return res.json()
  } else{
    throw new Error("Something went wrong when tryin to get one country")
  }
}