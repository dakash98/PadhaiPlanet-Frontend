import React from "react";

const QuestionAnswer = () => {
  return (
    <div className="bg-gray-200 border-md rounded-lg flex flex-col items-center justify-center mx-6">
      <div className=" py-12 md:px-6">
        <div className="text-center mb-2">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to PadhaiPlanet
          </h1>
          <p className="text-lg text-gray-700 mb-12 sm:mr-2">
            Your premier destination for 10th SSC question papers and exam
            preparation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div>
            <h2 className="text-2xl font-bold mb-4 mt-4 px-4">
              What is Padhaiplanet?
            </h2>
            <p className="text-gray-700 px-4 text-justify">
              PadhaiPlanet is your go-to online resource for 10th class students
              looking for SSC question papers and comprehensive solutions. Our
              platform is meticulously designed to cater to the specific needs
              of students preparing for their 10th class examinations. We
              understand the importance of having access to exam papers and
              solutions, and that's why PadhaiPlanet is committed to providing a
              dynamic tool that students can carry with them anytime, anywhere.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 mt-4 px-4">
              Where do I get all SSC question papers?
            </h2>
            <p className="text-gray-700 text-justify px-4">
              At PadhaiPlanet, we prioritize student-oriented content, ensuring
              that our resources are tailored to meet the educational
              requirements of 10th class students. Our team is dedicated to the
              continuous improvement of our platform, working rigorously to
              enhance the user experience and deliver high-quality educational
              content. We strive to create a seamless and effective learning
              environment for students by offering a wide range of SSC question
              papers and detailed solutions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold px-4 mb-4 mt-4">
              Single station for all important question banks-
            </h2>
            <p className="text-gray-700 px-4 text-justify">
              One of the key features of PadhaiPlanet is its user-friendly
              interface, making it easy for students to navigate and access the
              educational material they need. We believe in empowering students
              with the right tools to excel in their examinations, and our
              commitment to this goal reflects in the comprehensive nature of
              our question papers and solutions. Our platform is not just about
              providing question papers; it's about offering a holistic
              educational experience.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-justify mt-4 px-4">
              What content would one get in the future?
            </h2>
            <p className="text-gray-700 text-justify px-4">
              In addition to SSC question papers, PadhaiPlanet also offers
              supplementary educational content, including study guides, tips
              for effective exam preparation, and valuable insights into exam
              patterns. We understand that each student has unique learning
              needs, and our platform is designed to cater to diverse learning
              styles, making education more accessible and engaging. Whether you
              are revising concepts, practicing for exams, or seeking in-depth
              explanations for challenging topics, PadhaiPlanet is your
              educational companion.
            </p>
          </div>
        </div>
        <p className="mt-8 text-gray-700 text-center">
          Join PadhaiPlanet today and experience a transformative approach to
          10th class education that goes beyond traditional learning.
        </p>
      </div>
    </div>
  );
};

export default QuestionAnswer;
