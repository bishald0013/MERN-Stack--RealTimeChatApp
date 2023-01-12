import React from 'react'
import { useState } from 'react'
import StepsOTP from '../Steps/StepsOTP/StepsOTP'
import StepsPhoneEmail from '../Steps/StepsPhoneEmail/StepsPhoneEmail'

const steps ={
    1:StepsPhoneEmail,
    2:StepsOTP
}

function Login() {

    const [step, setStep] = useState(1)
    const Step = steps[step]

    const onClick = () => {
        setStep(step+1)
    }

  return (
    <div>
        <Step onNext={onClick} />
    </div>
  )
}

export default Login