import "./App.css";
import CommentDetail from "./CommentDetail";
import { faker } from "@faker-js/faker";
function App() {
  return (
    <div className="w-1/2 m-auto mt-20">
      <CommentDetail
        author="abhinav"
        time="24 Jul 2022"
        imgUrl={faker.image.food()}
      />
      <CommentDetail
        author="kumar"
        time="12 Jun 2021"
        imgUrl={faker.image.food()}
      />
      <CommentDetail
        author="Sam"
        time="12 Aug 2021"
        imgUrl={faker.image.food()}
      />
      <CommentDetail
        author="Chris"
        time="08 Nov 2021"
        imgUrl={faker.image.food()}
      />
    </div>
  );
}

export default App;
