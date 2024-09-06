
const VarsityName = ({ varsityName, customClass }) => {
  return (
    <div>
      <h1 className={`text-center text-[28px] font-semibold w-[650px] ${customClass}`}>
        {varsityName}
      </h1>
    </div>
  );
};

export default VarsityName;
