
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";



import { SpecificResource } from "./SpecificResource";
import { formatHours } from "../../helpers/formatHours";
import { Navbar } from "../ui/Navbar";
import { loadHoursFromUser} from "../../redux/actions/resource";


export const MotoScreen = () => {

  const dispatch = useDispatch();

  
  const { uid } = useSelector((state) => state.auth);

  useEffect(() => {
    
    dispatch(loadHoursFromUser())
    
  }, [dispatch])
  
 
  

  const numberOfResources = useMemo(() => formatHours(), [])

  

  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-5"></div>
        <div className="col-4">
          {numberOfResources.map((hour) => (
            <SpecificResource key={hour} hour={hour} uid={uid} />
          ))}
        </div>
      </div>
    </div>
  );
};
