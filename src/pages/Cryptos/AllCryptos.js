import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { multiCurrencies } from "../../redux/actions/crypto/crypto.action";

export const AllCryptos = () => {
  const dispatch = useDispatch();
  
  const cryptoLoading = useSelector(state => state.multiCryptos.loading);
  const multiCryptos = useSelector(state => state.multiCryptos.arrayCryptos);
  
  useEffect(() => {
    dispatch(multiCurrencies());
  }, [dispatch]);
  
  return (
    <>
      {cryptoLoading && <div>Loading...</div>}
      {multiCryptos.symbols.map((el, idx) => <div key={idx}>{el.baseAsset}</div>)}
    </>
  );
};