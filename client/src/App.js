import { HomePage, PostForm, NotFoundPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { PostProvided } from "./context/postContext";

const App = () => {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 containe m-auto">
        <PostProvided>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PostProvided>
      </div>
    </div>
  );
};

export default App;
