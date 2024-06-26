import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import myImage1 from './image1.jpg';
import Joiningoptions from '../Joiningoptions';
import { BreadcrumbBlogs } from '../Breadcrumbs';
import { Helmet } from 'react-helmet';

const Blog1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>10th Board SSC Exam 2024  Journey Towards Success in 10th Board SSC Exam 2024 with all important set of question papers.</title>
        <meta name="description" content="Get ready for a fascinating insight into the 10th Board SSC Exam 2024. Discover the journey towards success with valuable tips and tricks that will leave you well-prepared and confident with our new set of question papers." />
      </Helmet>

      <div className="sticky top-0 flex z-10">
        <Navbar />
      </div>

      <BreadcrumbBlogs />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="p-4 md:p-8 lg:mb-10 flex items-center justify-center min-h-screen">
          <div className="rounded-lg p-4 md:p-8 lg:px-24">
            <img
              src={myImage1}
              alt="Description of the image"
              className="w-full h-auto max-w-full rounded-lg"
            />
            <div className="mt-4"> 
              <h2 className="text-3xl font-bold mb-4 text-white">10th Board SSC Exam 2024</h2>
              <p className="text-lg mb-4 text-white">
                Maharashtra board exam is scheduled on March 1, 2024, and will be over by March 25, 2024. When there are only three months left for the examination, students should be focusing more on practicing the syllabus now which includes a revision and practicing the previous year question papers as much as possible. Time management can reduce stress easily and help you achieve the goal as well.
              </p>
              
            </div>
          </div>
        </div>
        <Joiningoptions />
      </div>
      <Footer />
    </div>


  );
};

export default Blog1;
