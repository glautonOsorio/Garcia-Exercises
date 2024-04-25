import { useEffect } from "react";
import { useState } from "react";
import { axiosInstance } from "../helper/axiosInstance";

export function useAxios(props) {
  const { method, resource, payload } = props;

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const useEffectRunOnce = useRef(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosInstance[method](resource, {
          ...payload,
          signal: controller.signal,
        });

        setTimeout(() => {
          setData(res.data);
          setLoading(false);
        }, Math.floor(Math.random() * 4000));
      } catch (err) {
        console.log(err.message);
        setError(err);
        setLoading(false);
      }
    };

    useEffectRunOnce && fetchData();
    return () => {
      controller.abort(), (useEffectRunOnce.current = true);
    };
  }, []);

  return [data, isLoading, error];
}
