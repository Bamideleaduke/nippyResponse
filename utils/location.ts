import Constants from "expo-constants";
import { GOOGLE_API_KEY } from "@env";

// const GOOGLE_API_KEY = Constants.expoConfig?.extra?.GOOGLE_API_KEY;

export const getMapPreview = (lat: any, lng: any) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

  return imagePreviewUrl;
};

export const getAddress = async (lat: number, lng: number) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK") {
      const formattedAddress = data.results[0]?.formatted_address;
      return formattedAddress;
    } else {
      throw new Error("Unable to get address");
    }
  } catch (error) {
    console.error(error);
    return "Unable to fetch address";
  }
};
