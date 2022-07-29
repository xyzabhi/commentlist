const ApprovalBox = ({ children }) => {
  return (
    <div className="border-[1px] p-5 mb-5">
      <div className=" flex justify-evenly ">{children}</div>
      <div className="flex space-x-3 justify-evenly mb-5">
        <button className="px-6 py-1 border-[#46dc46] border-[1px]">
          Approve
        </button>
        <button className="px-6 py-1 border-[red] border-[1px]">Decline</button>
      </div>
    </div>
  );
};
export default ApprovalBox;
