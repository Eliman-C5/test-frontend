import OtpInputWithValidation from "../components/OTPInputWithValidation"

const Verification = () => {
  return (
    <div>
      <OtpInputWithValidation numberOfDigits={6} />
    </div>
  )
}

export default Verification