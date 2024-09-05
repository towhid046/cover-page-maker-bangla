import DateFormater from '../../DateFormater'

const SubmitDate = ({submissionDate, customClass}) => {
  return (
    <p className={`font-semibold italic text-center pt-8 ${customClass}`}>
        <span className="color1">Date of submission:</span>{" "}
        <DateFormater submissionDate={submissionDate} />
      </p>
  )
}

export default SubmitDate