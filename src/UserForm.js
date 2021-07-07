import React, { useState } from "react"
import Welcome from "./steps/Welcome"
import Biography from "./steps/Biography"
import UserDetails from "./steps/UserDetails"
import Confirm from "./steps/Confirm"
import { Button } from "react-bootstrap"

const UserForm = () => {
  // Steps
  const [activeStep, setActiveStep] = useState(0)

  const getSteps = () => {
    return ["Welcome", "User Jld", "Biography", "Confirm"]
  }

  const steps = getSteps()

  // State variables
  const [multiFormValues, setMultiFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    job: "",
    city: "",
    country: "",
  })

  // Navigate to next page
  const handleNext = () => {
    setActiveStep(nextStep => nextStep + 1)
  }

  // Navigate to Previous page
  const handleBack = () => {
    setActiveStep(previousStep => previousStep - 1)
  }

  // Handle form value state on change
  const handleChange = input => e => {
    setMultiFormValues({ ...multiFormValues, [input]: e.target.value })
  }

  return (
    <div>
      {activeStep === 0 && <Welcome handleChange={handleChange} />}
      {activeStep === 1 && (
        <UserDetails values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 2 && (
        <Biography values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 3 && (
        <Confirm values={multiFormValues} handleChange={handleChange} />
      )}

      <Button
        disabled={activeStep === 0}
        style={activeStep === 3 ? { display: "none" } : {}}
        className="mr-5"
        onClick={handleBack}
      >
        Back
      </Button>
      <Button
        style={activeStep === 3 ? { display: "none" } : {}}
        className="ml-5"
        onClick={handleNext}
        variant="contained"
      >
        {activeStep === steps.length - 2 ? "Submit" : "Next"}
      </Button>
    </div>
  )
}

export default UserForm
