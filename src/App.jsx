import { useState } from "react";

import PostList from "./components/PostList";

import MainHeader from "./components/MainHeader";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function hideModalHandler() {
    setIsModalVisible(false);
  }

  function showModalHandler() {
    setIsModalVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={isModalVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
