import "./App.css";
import CommentDetail from "./CommentDetail";
import { faker } from "@faker-js/faker";
import ApprovalBox from "./ApprovalBox";
function App() {
  return (
    <div className="w-1/2 m-auto mt-20">
      <ApprovalBox>
        <CommentDetail
          author="abhinav"
          time="24 Jul 2022"
          imgUrl={faker.image.food()}
        />
      </ApprovalBox>
      <ApprovalBox>
        <CommentDetail
          author="kumar"
          time="12 Jun 2021"
          imgUrl={faker.image.food()}
        />
      </ApprovalBox>
      <ApprovalBox>
        <CommentDetail
          author="Sam"
          time="12 Aug 2021"
          imgUrl={faker.image.food()}
        />
      </ApprovalBox>
      <ApprovalBox>
        <CommentDetail
          author="Chris"
          time="08 Nov 2021"
          imgUrl={faker.image.food()}
        />
      </ApprovalBox>
      <ApprovalBox>
        <h1>Are You Sure?</h1>
      </ApprovalBox>
    </div>
  );
}

export default App;
