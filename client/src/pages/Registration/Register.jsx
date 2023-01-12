import React from 'react'
import StepPhoneEmail from "../Steps/StepsPhoneEmail/StepsPhoneEmail"
import StepOTP from "../Steps/StepsOTP/StepsOTP"
import StepName from "../Steps/StepsName/StepsName"
import StepAvatar from "../Steps/StepsAvatar/StepsAvatar"
import StepUsername from "../Steps/StepsUsername/StepsUserName"
import { useState } from 'react'

const steps = {
  1: StepPhoneEmail,
  2: StepOTP,
  3: StepName,
  4: StepAvatar,
  5: StepUsername
}

function Register() {

  const [step, setStep] = useState(1);
  const Step = steps[step]

  const onClick = () =>{
    setStep(step+1)
  }

  return (
    <div>
      <Step onNext={onClick} />
    </div>
  )
}

export default Register