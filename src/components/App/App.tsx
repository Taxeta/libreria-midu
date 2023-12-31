import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import LibraryPage from "../../Pages/LibraryPage/LibraryPage";
import MobileNavigationBar from "../MobileNavigationBar/MobileNavigationBar";
import paths from "../../paths/paths";

const App = (): React.ReactElement => {
  return (
    <main>
      <HomePage />
      <Routes>
        <Route path={paths.root} element={<Navigate to={paths.home} />} />
        <Route path={paths.home} element={<LibraryPage />} />
      </Routes>
      <MobileNavigationBar />
    </main>
  );
};

export default App;
