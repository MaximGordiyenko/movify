import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { multiCurrencies } from "../../redux/actions/crypto.action";
import { LineChart } from "../Charts/LineChart";
import moment from "moment";

export const AllCryptos = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(multiCurrencies());
  }, [dispatch]);
  
  const { arrayCryptos, loading } = useSelector(state => state?.multiCryptos);
  const { error } = useSelector(state => state?.error);

  const formattedDate = arrayCryptos?.map(el => {
    return { x: moment(el[6]).format("YYYY-MM-DD"), y: Math.ceil(el[4]) };
  });
  
  return (
    <>
      {error ?
        <div dangerouslySetInnerHTML={{ __html: error }}/> :
        <>
          {loading && arrayCryptos.length === 0 && <div>Loading...</div>}
          <LineChart data={formattedDate}/>
        </>
      }
    </>
  );
};