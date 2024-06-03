import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Loginpage from './Components/Loginpage';
import Homepage from './Components/Homepage';
import Historypapers from './Papers/Board/Maharashtra/10th/Historypapers';
import AboutUs from './Components/AboutUs';
import Contentscreen from './Components/Contentscreen';
import Fetchdata from './Components/Fetchdata';
import Blogs from './Components/Blogs';
import Englishpapers from '../src/Papers/Board/Maharashtra/10th/Englishpapers'
import HindiHalfpapers from '../src/Papers/Board/Maharashtra/10th/HindiHalfpapers';
import HindiFullpapers from '../src/Papers/Board/Maharashtra/10th/HindiFullpapers';
import SanskritFullpapers from '../src/Papers/Board/Maharashtra/10th/SanskritFullpapers';
import SanskritHalfpapers from '../src/Papers/Board/Maharashtra/10th/SanskritHalfpapers';
import Marathipapers from '../src/Papers/Board/Maharashtra/10th/Marathipapers';
import Geographypapers from '../src/Papers/Board/Maharashtra/10th/Geographypapers';
import Math1papers from '../src/Papers/Board/Maharashtra/10th/Math1papers';
import Math2papers from '../src/Papers/Board/Maharashtra/10th/Math2papers';
import Science1 from '../src/Papers/Board/Maharashtra/10th/Science1';
import Science2 from '../src/Papers/Board/Maharashtra/10th/Science2';
import Blog1 from './Components/Blogs/Blog1';
import Blog2 from './Components/Blogs/Blog2';
import Blog3 from './Components/Blogs/Blog3';
import Blog4 from './Components/Blogs/Blog4';
import Blog5 from './Components/Blogs/Blog5';
import Blog6 from './Components/Blogs/Blog6';
import Blog7 from './Components/Blogs/Blog7';
import Blog8 from './Components/Blogs/Blog8';
import Blog9 from './Components/Blogs/Blog9';
import Blog10 from './Components/Blogs/Blog10';
import ContactUs from './Components/ContactUs';
import Loader from './Components/Loader';
import Profilepage from './Components/Profilepage';
import TermsNConditions from './Components/Terms&Conditions';
import PrivacyNPolicy from './Components/Privacy&Policy';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/loader' element={<Loader />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/maharashtra-board-history-and-political-science-question-papers-10th-ssc' element={<Historypapers />} />
          <Route path='/maharashtra-board-english-question-papers-10th-ssc' element={<Englishpapers />} />
          <Route path='/maharashtra-board-hindi-full-question-papers-10th-ssc' element={<HindiFullpapers />} />
          <Route path='/maharashtra-board-hindi-half-question-papers-10th-ssc' element={<HindiHalfpapers />} />
          <Route path='/maharashtra-board-sanskrit-full-question-papers-10th-ssc' element={<SanskritFullpapers />} />
          <Route path='/maharashtra-board-sanskrit-half-question-papers-10th-ssc' element={<SanskritHalfpapers />} />
          <Route path='/maharashtra-board-marathi-question-papers-10th-ssc' element={<Marathipapers />} />
          <Route path='/maharashtra-board-geography-question-papers-10th-ssc' element={<Geographypapers />} />
          <Route path='/maharashtra-board-math-1-question-papers-10th-ssc' element={<Math1papers />} />
          <Route path='/maharashtra-board-math-2-question-papers-10th-ssc' element={<Math2papers />} />
          <Route path='/maharashtra-board-science-1-question-papers-10th-ssc' element={<Science1 />} />
          <Route path='/maharashtra-board-science-2-question-papers-10th-ssc' element={<Science2 />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/content' element={<Contentscreen />} />
          <Route path='/test' element={<Fetchdata />} />
          <Route path='/10th-board-ssc-exam-2024' element={<Blog1 />} />
          <Route path='/ssc-exam-timetable-2024' element={<Blog2 />} />
          <Route path='/10th-examination' element={<Blog3 />} />
          <Route path='/importance-of-10th' element={<Blog4 />} />
          <Route path='/importance-of-planning' element={<Blog5 />} />
          <Route path='/how-easy-is-it-to-crack-class-10-examination?' element={<Blog6 />} />
          <Route path='/cbse-2023-results-and-2024-syllabus' element={<Blog7 />} />
          <Route path='/a-reflection-and-plan-for-the-2024-syllabus-based-on-bihar-board-results-2023' element={<Blog8 />} />
          <Route path='/a-comprehensive-analysis-of-the-10th-up-board-results-in-2023-introduction' element={<Blog9 />} />
          <Route path='/maharashtra-board-sscand-hsc-results-2024-how-to-check-the-result' element={<Blog10 />} />
          <Route path='/login' element={<Profilepage />} />
          <Route path='/terms-&-conditions' element={<TermsNConditions/>}/>
          <Route path='/privacy-&-policy' element={<PrivacyNPolicy/>}/>
        </Routes>
      </BrowserRouter>
      
     
    </>
  );
}

export default App;
