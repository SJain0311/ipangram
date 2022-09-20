import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewDescription from "./NewDescription";

function Description() {
  const initialValues = {
    text_value: "",
    diagosed_problem: "",
    physical_trauma: "",
    mental_trauma: "",
    problem_times: "",
    Not_relevant: "",
    When_lying_down: "",
    When_sitting: "",
    When_understanding: "",
    In_waking: "",
    problem_scale: "",
  };
  const [flag, setFlag] = useState(false)
  const [formValues, setFormValues] = useState(initialValues);
  const [newFormValues, setNewFormValues] = useState({});
  const navigate = useNavigate();

  const handleFormData = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    navigate("/Summary", { state: { formValues } });
    e.preventDefault();
    setNewFormValues((prevValues) => {
      return [...prevValues, formValues];
    });

    setFormValues(initialValues);
  };
  
   const addNewForm =()=>{
    setFlag(true)
   }

  return (
    <div className="Form container mt-4 ">
      <h2 className="mt-4">Pain & Functional Description</h2>
      <p className="mainSubText">
        the description of current situation gives yout optimum <br /> trainer a
        picture of and clues to the underlying causes of your problems
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <div className=" container my-4">
          <div className="mb-3 text-center">
            <label
              for="Textarea1"
              className="form-label text-center"
            >
              If you have problems with pain/aches, stiffnes, weakness of
              fuctional problems, describe <br /> this/these below.(List the
              symptoms in descending order with the most troublesome first)
            </label>
            <textarea
              className="form-control"
              id="Textarea1"
              name="text_value"
              value={formValues.text_value}
              onChange={handleFormData}
              rows="3"
            ></textarea>
          </div>
          <div className="text-center d-flex my-2">
            <p>Have you been Diagosed with these problems ?</p>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="diagosed_problem"
                id="Radio1"
                value="Not relevant"
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="Radio1">
                Not relevant
              </label>
            </div>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="diagosed_problem"
                id="Radio2"
                value="yes"
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="Radio2">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="diagosed_problem"
                id="Radio3"
                value="no"
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="Radio3">
                No
              </label>
            </div>
          </div>
          <div className=" d-flex my-2">
            <p>Did the problem start after a physical trauma ? </p>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="physical_trauma"
                id="Radio4"
                value="Not relevant"
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="Radio4">
                Not relevant
              </label>
            </div>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="physical_trauma"
                id="Radio5"
                value="yes"
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="Radio5">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="physical_trauma"
                id="Radio6"
                value="no"
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="Radio6">
                No
              </label>
            </div>
          </div>
          <div className="thirdRadio  d-flex ">
            <p>Did the problem start after a mental trauma ?</p>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="mental_trauma"
                id="Radio7"
                value="Not relevant"
                onChange={handleFormData}
              />
              <label className="form-check-label" for="Radio7">
                Not relevant
              </label>
            </div>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="mental_trauma"
                id="Radio8"
                value="yes"
                onChange={handleFormData}
              />
              <label className="form-check-label" for="Radio8">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="mental_trauma"
                id="Radio9"
                value="no"
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="Radio9">
                No
              </label>
            </div>
          </div>
          <div className="fourthdRadio my-2 ">
            <p>How often do you experience the problem ?</p>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="problem_times"
                id="Radio10"
                value="Not relevant"
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="Radio10">
                Not relevant
              </label>
            </div>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="problem_times"
                id="Radio11"
                value="Daily"
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="Radio11">
                Daily
              </label>
            </div>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="problem_times"
                id="Radio12"
                value="Several times/week"
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="Radio12">
                Several times/week
              </label>
            </div>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="problem_times"
                id="Radio13"
                value="A few times/month"
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="Radio13">
                A few times/month
              </label>
            </div>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="problem_times"
                id="Radio14"
                value="A few times/year"
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="Radio14">
                A few times/year
              </label>
            </div>
          </div>

          {/* Check Box Start */}
          <div className="chechBox mt-4">
            <p>When do you experience the problem ?</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="Not_relevant"
                id="checkbox1"
                onChange={handleFormData}
                checked={formValues.Not_relevant}
              />
              <label className="form-check-label" htmlFor="checkBox1">
                Not relevant
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="When_lying_down"
                id="checkBox2"
                onChange={handleFormData}
                checked={formValues.When_lying_down}
              />
              <label className="form-check-label" htmlFor="checkBox2">
                When lying down
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="When_sitting"
                id="checkBox3"
                onChange={handleFormData}
                checked={formValues.When_sitting}
              />
              <label className="form-check-label" htmlFor="checkBox3">
                When sitting
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="When_understanding"
                id="checkBox4"
                onChange={handleFormData}
                checked={formValues.When_understanding}
              />
              <label className="form-check-label" htmlFor="checkBox4">
                When understanding
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="In_waking"
                id="checkBox5"
                onChange={handleFormData}
                checked={formValues.In_waking}
              />
              <label className="form-check-label" htmlFor="checkBox5">
                In waking
              </label>
            </div>
          </div>

          {/* rate avg problem out of 10 */}

          <div className="avgProblem mt-3">
            <p>
              How intense is the experience of the problem on a 0-10 scale ?
            </p>
            <div className="d-flex">
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  id="flexRadio1"
                  name="problem_scale"
                  value="1"
                  onChange={handleFormData}
                />
                <label className="form-check-label" htmlFor="flexRadio1">
                  1
                </label>
              </div>
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadio2"
                  value="2"
                  onChange={handleFormData}
                />
                <label className="form-check-label" htmlFor="flexRadio2">
                  2
                </label>
              </div>
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadio3"
                  value="3"
                  onChange={handleFormData}
                />
                <label className="form-check-label" htmlFor="flexRadio3">
                  3
                </label>
              </div>
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadio4"
                  value="4"
                  onChange={handleFormData}
                />
                <label className="form-check-label" htmlFor="flexRadio4">
                  4
                </label>
              </div>
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadio5"
                  value="5"
                  onChange={handleFormData}
                />
                <label className="form-check-label" htmlFor="flexRadio5">
                  5
                </label>
              </div>
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadio6"
                  value="6"
                  onChange={handleFormData}
                />
                <label className="form-check-label" htmlFor="flexRadio6">
                  6
                </label>
              </div>
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadio7"
                  value="7"
                  onChange={handleFormData}
                />
                <label className="form-check-label" htmlFor="flexRadio7">
                  7
                </label>
              </div>
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadio8"
                  value="8"
                  onChange={handleFormData}
                />
                <label className="form-check-label" htmlFor="flexRadio8">
                  8
                </label>
              </div>
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadio9"
                  value="9"
                  onChange={handleFormData}
                />
                <label className="form-check-label" htmlFor="flexRadio9">
                  9
                </label>
              </div>
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="problem_scale"
                  id="flexRadio10"
                  value="10"
                  onChange={handleFormData}
                />
                <label className="form-check-label" htmlFor="flexRadio10">
                  10
                </label>
              </div>
            </div>
          </div>
          <div className="buttons  d-flex justify-content-center mt-4">
            <button type="button" className="btn btn-primary mx-3">
              Back
            </button>
            <button type="submit" className="btn btn-primary mx-3">
              Next
            </button>
          </div>
        </div>
      </form>
     { (!flag)?<></>:<NewDescription/>}
          <div className="FormButton d-flex justify-content-center mt-4">
            <button className="" onClick={addNewForm}>+</button>
          </div>
         
    </div>
  );
}

export default Description;
