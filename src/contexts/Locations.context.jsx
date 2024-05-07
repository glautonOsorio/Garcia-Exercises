import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { GetLocations } from "../services/Locations/Locations.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    GetLocations().then((res) => {
      setLocations(res);
    });
  }, []);

  return (
    <LocationContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationContext.Provider>
  );
};

LocationContextProvider.propTypes = {
  children: PropTypes.node,
};
