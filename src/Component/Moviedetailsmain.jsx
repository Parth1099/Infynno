import React from "react";
import { useParams } from "react-router-dom";
import Cast from "./Cast";
import Moviedetails from "./Moviedetails";
import Similar from "./Similar";

export default function Moviedetailsmain() {
  let { id } = useParams();
  console.log(id, "Movie Id in movie details ");
  return <>

<Moviedetails id={id}/>
<Cast id={id} />
<Similar id={id} />

  </>;
}
