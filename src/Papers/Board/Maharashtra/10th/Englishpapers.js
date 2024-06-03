import React from "react";
import Navbar from "../../../../Components/Navbar.js";
import Footer from "../../../../Components/Footer.js";
import {
  BreadcrumbPages,
} from "../../../../Components/Breadcrumbs.js";
import Joiningoptions from "../../../../Components/Joiningoptions.js";
import Exploremore from "../../../../Components/Exploremore.js";
import { useState, useEffect } from "react";
import Contentscreen from "../../../../Components/Contentscreen.js";
import Loader from "../../../../Components/Loader.js";
import { sleep, topFunction } from "../../../../Global.js";
import StaticTag from "../../../../Components/StaticTag.js";
import LoginComponent from "../../../../Components/LoginComponent.js";
import { Helmet } from 'react-helmet';

function EnglishPapers() {

  const sel_med = localStorage.getItem('medium') ? localStorage.getItem('medium') : "marathi";

  const pre_API = "https://padhaiplanet.com/api/v1/get-question?subject=english&medium=" + sel_med + "&standard=10";
  // console.log(pre_API)

  //For fetching data
  const API_hisory_paper =
    pre_API;

  //API data hooks
  const [que_data, setQue_data] = useState([]);

  const [data, setData] = useState([]);

  //Assigning
  const fetchdata = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      await sleep(3000);
      setData(data.data);
      //⚠️⚠️⚠️ Do not remove below line!!⚠️⚠️⚠️
      // localStorage.setItem("data_english_" + localStorage.getItem('medium'), JSON.stringify(data));
      document.getElementById("loader").classList.add("hidden");
      document.getElementById("parent").classList.remove("hidden");
      document.getElementById("explore").classList.remove("hidden");
      document.getElementById("footer").classList.remove("hidden");
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    topFunction();
    fetchdata(API_hisory_paper);


    //⚠️⚠️⚠️ Below commented code can be fixed. Do not remove!!⚠️⚠️⚠️


    // const timestamp = localStorage.getItem('timestamp_english_' + localStorage.getItem('medium'));
    // const data_english = localStorage.getItem("data_english_" + localStorage.getItem('medium'));
    // // console.log(timestamp)
    // // console.log(data_english)

    // if (timestamp && data_english) {

    //   const check = (new Date()).getDate() > JSON.parse(timestamp).expDate;

    //   if (check) {

    //     localStorage.removeItem('timestamp_english_' + localStorage.getItem('medium'));
    //     localStorage.removeItem("data_english_" + localStorage.getItem('medium'));

    //     //Adding timestamp
    //     const date = new Date().setDate(new Date().getDate() + 6);

    //     // console.log(date);
    //     // console.log(new Date(date));

    //     localStorage.setItem('timestamp_english_' + localStorage.getItem('medium'), JSON.stringify({
    //       value: "string",
    //       expDate: date,
    //     }))

    //     fetchdata(API_hisory_paper);
    //   } else if (localStorage.getItem("data_english_" + localStorage.getItem('medium'))) {
    //     const object = JSON.parse(localStorage.getItem("data_english_" + localStorage.getItem('medium')))
    //     setData(object.data)
    //     document.getElementById("loader").classList.add("hidden");
    //     document.getElementById("parent").classList.remove("hidden");
    //     document.getElementById("explore").classList.remove("hidden");
    //     document.getElementById("footer").classList.remove("hidden");
    //   }

    // } else {

    //   //Adding timestamp
    //   const date = new Date().setDate(new Date().getDate() + 6);

    //   // console.log(date);
    //   // console.log(new Date(date));

    //   localStorage.setItem('timestamp_english_' + localStorage.getItem('medium'), JSON.stringify({
    //     value: "string",
    //     expDate: date,
    //   }))

    //   fetchdata(API_hisory_paper);
    // }

  }, []);



  function HandleClick(paper_no, year) {
    topFunction();
    if (!localStorage.getItem("user_id")) {
      document.getElementById("forms_window").classList.remove("hidden");
      document.getElementById("forms_window").classList.add("opacity-90");
    } else {
      document.getElementById("que_paper_screen").classList.remove("hidden");
      setQue_data(data_imp[year].papers[paper_no].question_url);
      console.log("year: " + year + "paper_number" + paper_no);
    }
  }

  function handleSolution(paper_no, year) {
    if (!localStorage.getItem("user_id")) {
      document.getElementById("forms_window").classList.remove("hidden");
      document.getElementById("forms_window").classList.add("opacity-90");
    } else {
      window.open(data_imp[year].papers[paper_no].solution_url);
      console.log("year: " + year + "paper_number" + paper_no);
    }
  }

  const data_imp = [];
  for (var j = 0; j < data["length"]; j++) {
    data_imp.push(data[j]);
  }
  // console.log(data_imp)

  return (
    <div className="relative z-0">
      <Helmet>
        <title>Discover English Medium, Marathi Medium, and Sem-English Medium Maharashtra 10th SSC Board History Question Paper for 2018,2019,2020,2022,2023.</title>
        <link rel="canonical" href="https://padhaiplanet.com/maharashtra-board-english-question-papers-10th-ssc" />
        <meta name="description" content="Prepare for your exam with our English question paper for the Maharashtra 10th SSC board. Prepare with the best resources and boost your chances of success in Maharashtra 10th SSC boards by practicing the previous year's question papers for 2018,2019,2020,2022,2023." />
        <meta name="keywords" content="10th SSC Maharashtra board question papers, Last 5 years question papers, Class 10 th Maharashtra board English question paper and Solutions., Question paper pdf., 10th Standard Board exam., Maharashtra Board questions paper all classes., Maharashtra Board Question and Solutions." />
      </Helmet>

      <div>
        <div className="sticky flex top-0 z-10">
          <Navbar />
        </div>
        <div className="mr-4 md:mr-[4%] lg:mr-[4%]">
          <StaticTag />
        </div>
        <div className="lg:px-8 md:px-6 sm:mx-4">
          <BreadcrumbPages sub={"English"} />
        </div>

        <div id="parent" className="relative">
          <div id="go" className=" top-0 w-full mt-[50px]">
            {/* <div className="w-[50%] xl:ml-[24%] lg:ml-[15%] md:ml-[25%] ml-[28%] pb-[5%] pr-[10%]"> */}
            <div className="pb-[5%]">
              {/* <h1 className="xl:ml-[25%] lg:ml-[80%] md:ml-[25%] ml-[30%] xl:mb-[0%] lg:mb-[0%] md:mb-[0%] mb-[50%] text-center text-3xl font-bold text-white"> */}
              <h1 className="text-center xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-white">
                English
              </h1>
              {/* <div className="w-[100%] xl:ml-[0%] lg:ml-[0%] md:ml-[25%] ml-[0%]"> */}
              <div className="w-full items-center">
                {data_imp.map((item, index) => (
                  <div className="w-[50%] inset-0 m-auto text-center mt-[10%]">
                    <div className="w-[100px] h-[50px] rounded-lg text-center pt-[12.5px] text-xl font-semibold bg-amber-400">
                      {item.year}
                    </div>
                    {/* <div className="lg:flex md:block lg:pl-[28%]"> */}
                    <div className="lg:block lg:block w-full md:block block">
                      {item.papers.map((item1, index1) => (
                        <div className="block xl:mr-[0%] lg:mr-[3%] md:mr-[0%] mr-[0%]">
                          <div className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] block">
                            <button
                              onClick={(event) =>
                                HandleClick(index1, index)
                              }
                              type="submit"
                              className="rounded-2xl 2xl:w-[300px] xl:w-[300px] lg:w-[280px] md:w-[250px] w-[200px] text-white h-[200px] text-lg text-center font-semibold mt-[50px] bg-gradient-to-r from-[#054569] to-[#5591A9]"
                              key={index}
                            >
                              Q Paper
                              {/* {item.papers[index1]["name"]}   */}
                            </button>
                            {item.papers[index1]["solution_url"] ? (<button
                              onClick={(event) =>
                                handleSolution(index1, index)
                              }
                              className="rounded-xl 2xl:w-[300px] xl:w-[300px] lg:w-[280px] md:w-[250px] w-[200px] inset-0 m-auto text-white h-[50px] text-center font-medium mt-[25px] bg-[#5591A9] block"
                              key={index}
                            >
                              Solution
                              {/* {item.papers[index1]["name"]} */}
                            </button>) : (<button
                              className="rounded-xl 2xl:w-[300px] xl:w-[300px] lg:w-[280px] md:w-[250px] w-[200px] inset-0 m-auto text-white h-[50px] text-center font-medium mt-[25px] bg-[#5591A9] block"
                              key={index}
                            >
                              Solution Coming Soon
                              {/* {item.papers[index1]["name"]}  */}
                            </button>)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            id="forms_window"
            className="absolute top-0 w-full hidden pb-[20px]"
          >
            <LoginComponent />
          </div>

          <div
            id="que_paper_screen"
            className="absolute top-0 md:w-[100%] sm:w-[100%] w-[100%] hidden pb-[20px]"
          >
            <Contentscreen q_data={que_data} />
          </div>
        </div>
        <div className="mt-[150px] xl:ml-[0%] lg:ml-[8%]">
          <Joiningoptions />
        </div>
        <div id="explore" className="hidden">
          <Exploremore sub_name={"english"} />
        </div>
        <div id="footer" className="hidden">
          <Footer />
        </div>
      </div>

      <div id="loader" className="absolute top-0 w-full h-[100%] z-10">
        <Loader />
      </div>
    </div>
  );
}

export default EnglishPapers;
