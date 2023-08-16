import styles from "./App.module.css";
import { Card } from "./components/Card/Card";
import { Loading } from "./components/Loading/Loading";
import { useAdvice } from "./hooks/useAdvice";

function App() {
  const { AdviceData, loadAbvice } = useAdvice();

  if (AdviceData.loading) return <Loading />;

  console.log(AdviceData);

  return (
    <div className={styles.app_container}>
      <Card loadAbvice={loadAbvice} data={AdviceData.data!} />
    </div>
  );
}

export default App;
