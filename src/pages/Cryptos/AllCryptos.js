import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { multiCurrencies } from "../../redux/actions/crypto/crypto.action";
import { LineChart } from "../Charts/LineChart";
import moment from "moment";

export const AllCryptos = () => {
  const dispatch = useDispatch();
  
  const cryptoLoading = useSelector(state => state.multiCryptos.loading);
  const multiCryptos = useSelector(state => state.multiCryptos?.arrayCryptos?.data);
  
  useEffect(() => {
    dispatch(multiCurrencies());
  }, [dispatch]);
  
  const date = multiCryptos?.map(el => {
    return { x: moment(el[6]).format("YYYY-MM-DD"), y: Math.ceil(el[4]) };
  });
  
  return (
    <>
      {cryptoLoading && <div>Loading...</div>}
      <LineChart data={date} />
    </>
  );
};