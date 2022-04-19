import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCandleBTC } from "../../redux/actions/crypto.action";
import { LineChart } from "../charts/LineChart";
import moment from "moment";

export const Cryptos = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCandleBTC());
  }, [dispatch]);
  
  const { arrayBtcUsd, loading } = useSelector(state => state?.setCandleBTC);
  const { error } = useSelector(state => state?.error);

  const formattedDate = arrayBtcUsd?.map(el => {
    return { x: moment(el[6]).format("YYYY-MM-DD"), y: Math.ceil(el[4]) };
  });
  
  return (
    <>
      {error ?
        <div dangerouslySetInnerHTML={{ __html: error }}/> :
        <>
          {loading && arrayBtcUsd.length === 0 && <div>Loading...</div>}
          <LineChart data={formattedDate}/>
        </>
      }
    </>
  );
};