
const VarsityName = ({ varsityName, customClass }) => {
  return (
    <div>
      <h1 className={`text-center text-[28px] font-semibold ${customClass}`}>
        {varsityName}
      </h1>
    </div>
  );
};

export default VarsityName;
