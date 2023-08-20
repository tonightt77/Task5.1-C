import React, { useState } from "react";
import CustomInput from "./Input";
import Title from "./Title";
import P from "./P";
import ButtonSubmit from "./SubmitBtn";
import "./skills.css"

function MyForm() {
  const [formData, setFormData] = useState({
    radioButton: "",
    input1: "",
    input2: "",
    skills: "",
    paymentMin: "",
    paymentMax: "",
    projectLength: "",
    paymentMin: "",
    paymentMax: "",
    workingHours: "",
    experience: "",
    period: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <P text="Select job type" />
        <label>
          <input
            type="radio"
            name="radioButton"
            value="Freelance"
            onChange={handleChange}
          />
          Freelance
        </label>
        <label>
          <input
            type="radio"
            name="radioButton"
            value="Employment"
            onChange={handleChange}
          />
          Employment
        </label>
      </div>

      <Title text="Describe your job" />
      <div style={{ display: "flex", alignItems: "center" }}>
        <P text="Title/Position" />
        <CustomInput
          type="text"
          name="input1"
          value={formData.input1}
          onChange={handleChange}
        />
      </div>
      
      <div style={{ display: "flex", alignItems: "center" }}>
        <P text="Job Description" />
        <CustomInput
          type="text"
          name="input2"
          value={formData.input2}
          onChange={handleChange}
          width={600}
          height={80}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center" }} >
        <P text="Skills" />
        <CustomInput
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Please add skills that your job is required e.g., java"
          width={680}
        />
      </div>
      <P text="Developers will find your job based on the skills you added here." />

      <Title text="Project conditions" />

      <div style={{ display: "flex", alignItems: "center" }}>
        <P text="Project Length" />
        <CustomInput
          type="text"
          name="projectLength"
          value={formData.projectLength}
          onChange={handleChange}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <P text="Payment" />
        <P text="Min:" />
        <CustomInput
          type="number"
          name="paymentMin"
          value={formData.paymentMin}
          onChange={handleChange}
        />
        <P text="Max:" />
        <CustomInput
          type="number"
          name="paymentMax"
          value={formData.paymentMax}
          onChange={handleChange}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <P text="Working hours" />
        <CustomInput
          type="number"
          name="workingHours"
          value={formData.workingHours}
          onChange={handleChange}
        />
      </div>

      {formData.radioButton === "Employment" && (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Title text="Experience" />
        <P text="Please select the required experience level for this job." />

        <div style={{ display: "flex", alignItems: "center" }}>
            <P text="Experienced in" />
            <CustomInput
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
            />

            <P text="For at least" />
            <CustomInput
                type="text"
                name="period"
                value={formData.period}
                onChange={handleChange}
            />
        </div>
    </div>
)}



<div style={{ display: "flex", justifyContent: "flex-end" }}>
    <ButtonSubmit type="submit" text="POST" width={150}/>
</div>
    </form>
  );
}

export default MyForm;