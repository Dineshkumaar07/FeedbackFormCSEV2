import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Thanks from "./Thanks";
import SubmittingForm from "./SubmittingForm";
import { Link } from "react-router-dom";

import { urlAddress, routeAddresses } from "./API";
import axios from "axios";

const FacultyFeedback = () => {
  const [thanks, setThanks] = useState(0);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const buttonStyle =
    " mb-9 self-start px-4 py-1 rounded-md text-red-500 font-semibold border-2 border-red-500 hover:bg-red-500 hover:text-white duration-200 mb-4";
  const labelDivStyle = "flex flex-col gap-3  ";
  const homeButtonStyle =
    " self-start px-4 py-1 rounded-md text-white font-semibold border-2 border-white hover:bg-white hover:text-red-500 duration-200 ";

  return (
    <div>
      <div className="w-3/4 flex flex-col justify-center  mx-auto h-100v  ">
        <div className="h-65v ">
          <div className="bg-red-500 text-white mb-4 px-4 py-6 flex flex-col gap-3 rounded-lg  ">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-0  sm:w-full sm:justify-between sm:items-center ">
              <h1 className="text-3xl font-bold">Faculty Feedback</h1>
              <Link className={homeButtonStyle} to="/">
                Home
              </Link>
            </div>
          </div>
          <div className="px-3 shadow-2xl ">
            {!thanks && !loading && (
              <section>
                <form
                  onSubmit={handleSubmit(async (data) => {
                    console.log(data);
                    var index = 6;
                    console.log(urlAddress + routeAddresses[index]);
                    setLoading(true);
                    await axios
                      .post(urlAddress + routeAddresses[index], data)
                      .then((reponse) => {
                        console.log(reponse);
                        setLoading(false);
                      });
                    setThanks(!thanks);
                  })}
                >
                  <div className={labelDivStyle}>
                    <label htmlFor="">Course Code</label>
                    <input
                      {...register("courseCode", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.courseCode?.message}
                    </p>
                  </div>
                  <div className={labelDivStyle}>
                    <label htmlFor="">Course Name</label>
                    <input
                      {...register("courseName", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.courseName?.message}
                    </p>
                  </div>
                  <div className={labelDivStyle}>
                    <label htmlFor="">Course Facilitator</label>
                    <input
                      {...register("courseFacilitator", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.courseFacilitator?.message}
                    </p>
                  </div>
                  <div className={labelDivStyle}>
                    <label htmlFor="">Academic year </label>
                    <input
                      {...register("academicYear", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.academicYear?.message}
                    </p>
                  </div>
                  <div className={labelDivStyle}>
                    <label htmlFor="">Semester </label>
                    <input
                      {...register("semester", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.semester?.message}
                    </p>
                  </div>
                  <div>
                    <p>
                      Importance and relevance of the course to industry and
                      societal needs
                    </p>
                    <div className="my-3 sm:flex grid grid-cols-2">
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="excellent"
                          {...register("industryAndSocietalNeeds")}
                          className="mx-3"
                        />
                        <label htmlFor="">Excellent</label>
                      </div>{" "}
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="good"
                          {...register("industryAndSocietalNeeds", {
                            required: {
                              value: true,
                              message: "This is required",
                            },
                          })}
                          className="mx-3"
                        />
                        <label htmlFor="">Good</label>
                      </div>{" "}
                      <div className="p-2">
                        <input
                          type="radio"
                          value="fair"
                          {...register("industryAndSocietalNeeds")}
                          className="mx-3"
                        />
                        <label htmlFor="">Fair</label>
                      </div>
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="poor"
                          {...register("industryAndSocietalNeeds")}
                          className="mx-3"
                        />
                        <label htmlFor="">Poor</label>
                      </div>{" "}
                    </div>
                  </div>
                  <div>
                    <p>
                      Adequecy of time for effective coverage of syllabus / lab
                      experiments
                    </p>
                    <div className="my-3 sm:flex grid grid-cols-2">
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="excellent"
                          {...register("timeForEffectiveCoverage")}
                          className="mx-3"
                        />
                        <label htmlFor="">Excellent</label>
                      </div>{" "}
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="good"
                          {...register("timeForEffectiveCoverage", {
                            required: {
                              value: true,
                              message: "This is required",
                            },
                          })}
                          className="mx-3"
                        />
                        <label htmlFor="">Good</label>
                      </div>{" "}
                      <div className="p-2">
                        <input
                          type="radio"
                          value="fair"
                          {...register("timeForEffectiveCoverage")}
                          className="mx-3"
                        />
                        <label htmlFor="">Fair</label>
                      </div>
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="poor"
                          {...register("timeForEffectiveCoverage")}
                          className="mx-3"
                        />
                        <label htmlFor="">Poor</label>
                      </div>{" "}
                    </div>
                  </div>
                  <div>
                    <p>Proficiency level of student in prerequisites</p>
                    <div className="my-3 sm:flex grid grid-cols-2">
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="excellent"
                          {...register("studentProficiencyInPrerequisites")}
                          className="mx-3"
                        />
                        <label htmlFor="">Excellent</label>
                      </div>{" "}
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="good"
                          {...register("studentProficiencyInPrerequisites", {
                            required: {
                              value: true,
                              message: "This is required",
                            },
                          })}
                          className="mx-3"
                        />
                        <label htmlFor="">Good</label>
                      </div>{" "}
                      <div className="p-2">
                        <input
                          type="radio"
                          value="fair"
                          {...register("studentProficiencyInPrerequisites")}
                          className="mx-3"
                        />
                        <label htmlFor="">Fair</label>
                      </div>
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="poor"
                          {...register("studentProficiencyInPrerequisites")}
                          className="mx-3"
                        />
                        <label htmlFor="">Poor</label>
                      </div>{" "}
                    </div>
                  </div>
                  <div>
                    <p>
                      Appropriateness of course content for the course outcomes
                      / competencies at higher order Thinking Skills
                    </p>
                    <div className="my-3 sm:flex grid grid-cols-2">
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="excellent"
                          {...register("courseOutcomesAppropriateness")}
                          className="mx-3"
                        />
                        <label htmlFor="">Excellent</label>
                      </div>{" "}
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="good"
                          {...register("courseOutcomesAppropriateness", {
                            required: {
                              value: true,
                              message: "This is required",
                            },
                          })}
                          className="mx-3"
                        />
                        <label htmlFor="">Good</label>
                      </div>{" "}
                      <div className="p-2">
                        <input
                          type="radio"
                          value="fair"
                          {...register("courseOutcomesAppropriateness")}
                          className="mx-3"
                        />
                        <label htmlFor="">Fair</label>
                      </div>
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="poor"
                          {...register("courseOutcomesAppropriateness")}
                          className="mx-3"
                        />
                        <label htmlFor="">Poor</label>
                      </div>{" "}
                    </div>
                  </div>
                  <div>
                    <p>
                      Contribution of course content to design thinking and
                      critical analysis
                    </p>
                    <div className="my-3 sm:flex grid grid-cols-2">
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="excellent"
                          {...register("designThinkingContribution")}
                          className="mx-3"
                        />
                        <label htmlFor="">Excellent</label>
                      </div>{" "}
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="good"
                          {...register("designThinkingContribution", {
                            required: {
                              value: true,
                              message: "This is required",
                            },
                          })}
                          className="mx-3"
                        />
                        <label htmlFor="">Good</label>
                      </div>{" "}
                      <div className="p-2">
                        <input
                          type="radio"
                          value="fair"
                          {...register("designThinkingContribution")}
                          className="mx-3"
                        />
                        <label htmlFor="">Fair</label>
                      </div>
                      <div className="p-2 ">
                        <input
                          type="radio"
                          value="poor"
                          {...register("designThinkingContribution")}
                          className="mx-3"
                        />
                        <label htmlFor="">Poor</label>
                      </div>{" "}
                    </div>
                  </div>
                  <div className={labelDivStyle}>
                    <label htmlFor="">
                      Innovative teaching and learning methods used{" "}
                    </label>
                    <input
                      {...register("innovativeTeachingMethods", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.innovativeTeachingMethods?.message}
                    </p>
                  </div>

                  <div className={labelDivStyle}>
                    <label htmlFor="">
                      Assessment Methods followed to measure course outcomes at
                      higher levels (Apply, Analyze, Evaluate and create ){" "}
                    </label>
                    <input
                      {...register("assessmentMethods", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.assessmentMethods?.message}
                    </p>
                  </div>
                  <div className={labelDivStyle}>
                    <label htmlFor="">Challenging Topics </label>
                    <input
                      {...register("challengingTopics", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.challengingTopics?.message}
                    </p>
                  </div>
                  <div className={labelDivStyle}>
                    <label htmlFor="">
                      Course Contents to be added (Give reason){" "}
                    </label>
                    <input
                      {...register("addContents", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.addContents?.message}
                    </p>
                  </div>
                  <div className={labelDivStyle}>
                    <label htmlFor="">
                      Course Outcomes to be removed (Give reason){" "}
                    </label>
                    <input
                      {...register("removeContents", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.removeContents?.message}
                    </p>
                  </div>
                  <div className={labelDivStyle}>
                    <label htmlFor="">Any other suggestions </label>
                    <input
                      {...register("suggestions", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.suggestions?.message}
                    </p>
                  </div>
                  <div className="mt-3">
                    <div></div>
                    <button type="submit" className={buttonStyle}>
                      Submit
                    </button>
                  </div>
                </form>
              </section>
            )}
            {thanks === 1 && (
              <section>
                <Thanks />
              </section>
            )}

            {loading ? (
              <SubmittingForm />
            ) : (
              thanks === 1 && (
                <section>
                  <Thanks />
                </section>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyFeedback;
