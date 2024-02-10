// const urlAddress = "https://tce-survey-backend.onrender.com/";
const urlAddress = "https://cse-survey-backend.onrender.com/";

// const routeAddresses = [
//   "recruiterFeedback/addRecruiterFeedback",
//   "parentsFeedback/addParentsFeedback",
//   "courseExitSurvey/addCourseExitSurvey",
//   "employerFeedback/addEmployerFeedback",
//   "alumniFeedback/addAlumniFeedback",
//   "graduateExitSurvey/addGraduateExitSurvey",
//   "facultyFeedback/addFacultyFeedback",
//   "peerFeedback/addPeerFeedback",
// ];

const routeAddresses = [
  "recruitersFeedback/postData",
  "parentsFeedback/postData",
  "courseExitSurvey/postData",
  "employerFeedback/postData",
  "alumniFeedback/postData",
  "graduateExitSurvey/postData",
  "facultyFeedback/postData",
  "peerFeedback/postData",
];

module.exports.urlAddress = urlAddress;
module.exports.routeAddresses = routeAddresses;
