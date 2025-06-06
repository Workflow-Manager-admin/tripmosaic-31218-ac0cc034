import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const useViewTrip = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);

  const getData = useCallback(async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setTrip(docSnap.data());
    } else {
      console.log("No such document!");
      toast("No Such Document");
    }
  }, [tripId]);

  useEffect(() => {
    tripId && getData();
  }, [tripId, getData]);

  return { trip };
};

export default useViewTrip;
