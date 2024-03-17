/* eslint-disable react/prop-types */
export const BoxInfo = ({submitType, name, profession, department }) => {
  return (
    <>
      <div className="box">
        <div className="box_title">Submitted {submitType}:</div>
        <div className="box_content">
          <p>{name}</p>
          <p>{profession}</p>
          <p>Department of {department}, BSMRSTU</p>
        </div>
      </div>
    </>
  );
};
