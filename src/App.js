import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddNewReport from "./components/AddNewReport/AddNewReport";
import AllReport from "./components/AllReport/AllReport";
import CompleteReport from "./components/CompleteReport/CompleteReport";
import Faq from "./components/Faq/Faq";
import Help from "./components/Help/Help";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import NoPage from "./components/NoPage/NoPage";
import SendReport from "./components/SendReport/SendReport";
import Signup from "./components/Signup/Signup";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="signin" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/add-new-report" element={<AddNewReport />} />
            <Route path="/send-report" element={<SendReport />} />
            <Route path="/complete-report" element={<CompleteReport />} />
            <Route path="/all-report" element={<AllReport />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
