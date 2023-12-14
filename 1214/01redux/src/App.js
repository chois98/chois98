import "./App.css";
import Box from "./Box";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const Increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 1 } });
  };
  const Decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 1 } });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "David", password: "1234" } });
  };
  return (
    <div clasname="App">
      <h1>
        {id}
        {password}
      </h1>
      <h1>{count}</h1>
      <button onClick={Increase}>증가</button>
      <button onClick={login}>LOGIN</button>
      <button onClick={Decrease}>감소</button>
      <Box />
    </div>
  );
}

export default App;
