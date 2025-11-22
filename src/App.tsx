import {Routes, Route} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Chat from "./pages/Chat";
import ProtectedRoute from "./routes/ProtectedRoute";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {

  return (
      <Routes>
        <Route path ='/signin' element = {<SignIn/>}/>
        <Route path ='/signup' element = {<SignUp/>}/>
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default App
