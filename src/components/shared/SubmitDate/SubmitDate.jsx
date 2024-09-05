import DateFormater from '../../DateFormater'

const SubmitDate = ({submissionDate, customClass, color='color1'}) => {
  return (
    <p className={`font-semibold italic text-center pt-8 ${customClass}`}>
        <span className={` text-[${color}]`}>Date of submission:</span>{" "}
        <DateFormater submissionDate={submissionDate} />
      </p>
  )
}

export default SubmitDate