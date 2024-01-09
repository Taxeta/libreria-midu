import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { setApiLoadedActionCreator } from "../../store/mapSlice/mapSlice";
import { useEffect } from "react";
import { RootState } from "../../store";
import PropTypes from "prop-types";
import "./MapComponent.css";

interface MapComponentProps {
  apiKey: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ apiKey }) => {
  const dispatch = useDispatch();
  const isApiLoaded = useSelector(
    (state: RootState) => state.mapState.isApiLoaded,
  );

  const containerStyle = {
    width: "80%",
    height: "40%",
  };

  const center = {
    lat: 41.413722,
    lng: 2.025306,
  };

  useEffect(() => {
    if (!isApiLoaded) {
      dispatch(setApiLoadedActionCreator());
    }
  }, [dispatch, isApiLoaded]);

  return (
    <>
      <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
        {isApiLoaded && (
          <GoogleMap
            mapContainerClassName="map-container"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
          >
            <Marker
              position={center}
              icon="https://maps.google.com/mapfiles/ms/icons/red-dot.png"
            />
          </GoogleMap>
        )}
      </LoadScript>
    </>
  );
};

MapComponent.propTypes = {
  apiKey: PropTypes.string.isRequired,
};

export default MapComponent;
