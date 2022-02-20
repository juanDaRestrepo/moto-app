
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { db } from "../../firebase/firebaseConfig";


import { SpecificResource } from "./SpecificResource";
import { formatHours } from "../../helpers/formatHours";
import { Navbar } from "../ui/Navbar";

export const MotoScreen = () => {
  const [hours, setHours] = useState([]);
  const { uid } = useSelector((state) => state.auth);


  useEffect(() => {
    db.collection(`${uid}/resources/hours`).onSnapshot((snap) => {
      const hours = [];
      snap.forEach((snapHijo) => hours.push(snapHijo.data().hour));
      console.log(hours);
      setHours(hours); 
    });
  }, [uid]);

  const numberOfResources = useMemo(() => formatHours(), [])

  

  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-5"></div>
        <div className="col-4">
          {numberOfResources.map((hour) => (
            <SpecificResource key={hour} hour={hour} uid={uid} hours={hours}/>
          ))}
        </div>
      </div>
    </div>
  );
};
