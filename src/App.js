
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import LineChart from './Charts/LineChart';
import PieChart from './Charts/PieChart';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div >


        <Routes>
            <Route path={"/"} element={<Login/>} />
            <Route path={"dashboard"} element={<Dashboard/>} />
        </Routes>


    </div>
  );
}

export default App;
