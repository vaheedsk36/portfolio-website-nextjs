import React, { useRef, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
} from "@chakra-ui/react";
import mapboxgl from "mapbox-gl";

const MapBox = ({ isOpen, onClose }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    // Map box was trying to find container and on initial load it was not getting it from the DOM, so it was not rendering.
    setTimeout(() => {
      if (isOpen) {
        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [78.474, 17.385],
          zoom: 10,
        });

      }
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={["xs", "md", "lg"]}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton color="red" />
        <ModalBody padding="0">
          <Box ref={mapContainer} className="map-container" height="400px" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MapBox;
