import { ToastContainer } from "react-toastify";

import { MainRoutes } from "@routes/.";

function App(): JSX.Element {
  return (
    <>
      <MainRoutes />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
