import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Thanks from "./Thanks";
import SubmittingForm from "./SubmittingForm";
import { Link } from "react-router-dom";

import { urlAddress, routeAddresses } from "./API";
import axios from "axios";

const PeerFeedback = () => {
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
              <h1 className="text-3xl font-bold">Peer Feedback</h1>
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
                    var index = 7;
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
                    <label htmlFor="">Expert</label>
                    <input
                      {...register("expert", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.expert?.message}
                    </p>
                  </div>
                  <div className={labelDivStyle}>
                    <label htmlFor="">Name</label>
                    <input
                      {...register("name", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.name?.message}
                    </p>
                  </div>
                  <div className={labelDivStyle}>
                    <label htmlFor="">Designation </label>
                    <input
                      {...register("designation", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.designation?.message}
                    </p>
                  </div>
                  <div className={labelDivStyle}>
                    <label htmlFor="">Organization name </label>
                    <input
                      {...register("organizationName", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.organizationName?.message}
                    </p>
                  </div>
                  <div className={labelDivStyle}>
                    <label htmlFor="">
                      Suggestions for improvement of curriculum{" "}
                    </label>
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
                  <div className={labelDivStyle}>
                    <label htmlFor="">General feedback </label>
                    <input
                      {...register("generalFeedback", {
                        required: {
                          value: true,
                          message: "All fields are required",
                        },
                      })}
                      type="text"
                      className="rounded-sm px-1 py-1  focus:outline-red-500 border-2 "
                    />
                    <p className="mb-1 text-red-600 sm:mb-3">
                      {errors.generalFeedback?.message}
                    </p>
                  </div>
                  <div className="mt-3">
                    <div>
                      <button type="submit" className={buttonStyle}>
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </section>
            )}
            {thanks == 1 && (
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

export default PeerFeedback;
