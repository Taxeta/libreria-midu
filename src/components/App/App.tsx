import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import LibraryPage from "../../Pages/LibraryPage/LibraryPage";
import MobileNavigationBar from "../MobileNavigationBar/MobileNavigationBar";
import paths from "../../paths/paths";
import ReadingList from "../../Pages/ReadingList/ReadingList";
import ContactPage from "../../Pages/ContactPage/ContactPage";
import BooksCounter from "../BooksCounter/BooksCounter";
import Footer from "../Footer/Footer";

const App = (): React.ReactElement => {
  const isLargeScreen = window.innerWidth >= 760;

  return (
    <main>
      <HomePage />
      <BooksCounter />
      <Routes>
        <Route path="/*" element={<Navigate to={paths.home} />} />
        <Route path={paths.root} element={<LibraryPage />} />
        <Route path={paths.home} element={<LibraryPage />} />
        <Route path={paths.readingList} element={<ReadingList />} />
        <Route path={paths.contact} element={<ContactPage />} />
      </Routes>
      {isLargeScreen ? <Footer /> : <MobileNavigationBar />}
    </main>
  );
};

export default App;
