import { useState, useEffect, useCallback } from "react";
import { GetPlaceDetail } from "../services/GlobalAPI";
import {PHOTO_REF_URL} from '../utils/constants'

export const usePlacePhoto = (trip, data) => {
  const [photoURL, setPhotoURL] = useState();

  const GetPlacePhoto = useCallback(async () => {
    await GetPlaceDetail(data).then((res) => {
      const photoUrl = PHOTO_REF_URL.replace("{NAME}", res?.data?.places[0]?.photos[1]?.name);
      setPhotoURL(photoUrl);
    });
  }, [data]);

  useEffect(() => {
    if (trip) {
      GetPlacePhoto();
    }
  }, [trip, GetPlacePhoto]);

  return photoURL;
};
