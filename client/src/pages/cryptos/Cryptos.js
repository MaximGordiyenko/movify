import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCandleBTC } from "../../redux/actions/crypto.action";
import { LineChart } from "../../components/charts/LineChart";
import moment from "moment";
import Ads from "../../Ads/Ads";

export const Cryptos = () => {
  const dispatch = useDispatch();
  const [sec, setSec] = useState(null);
  
  useEffect(() => {
    dispatch(getCandleBTC());
  }, [dispatch]);
  
  useEffect(() => {
    fetch('http://localhost:4000/api/sec')
      .then(res => res.json())
      .then(resp => {
        setSec(resp);
      })
      .catch(err => console.log(err));
  }, []);
  
  const { arrayBtcUsd, loading } = useSelector(state => state?.setCandleBTC);
  const { error } = useSelector(state => state?.error);
  
  const formattedDate = arrayBtcUsd?.map(el => {
    return { x: moment(el[6]).format("YYYY-MM-DD"), y: Math.ceil(el[4]) };
  });
  
  return (
    <>
      <Ads/>
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