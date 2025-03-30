export interface IWorkData {
  id: number,
  period: String,
  title: String,
  company: String,
  description: String,
  techStack: Array<String>,
};

const workdata: Array<IWorkData> = [
  {
    id: 0,
    period: "2022 to Present",
    title: "Senior Application Developer",
    company: "Canadian Imperial Bank of Commerce",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed ex ac felis malesuada pulvinar. Aliquam consectetur neque dolor, quis semper turpis congue eget. Proin interdum enim in sapien commodo sodales. Nullam laoreet ultricies risus, vitae faucibus enim tristique et. Sed at scelerisque est, vitae facilisis urna. Phasellus vehicula leo odio, vel viverra elit hendrerit id. Suspendisse facilisis, dui ut dignissim hendrerit, orci lectus rhoncus odio, ac suscipit urna nunc id leo. Duis rutrum sapien pulvinar, finibus tortor vel, tempus elit. Duis in felis maximus, tincidunt eros non, sollicitudin lectus. Donec neque augue, auctor ac orci ac, condimentum eleifend ante. Praesent quis velit vitae massa mattis porttitor. Aliquam at nisi pulvinar risus dapibus molestie.",
    techStack: [
      "Java",
      "Spring",
      "Azure"
    ]
  },  
  {
    id: 1,
    period: "2019 to 2021",
    title: "Backend Developer",
    company: "WIMTACH - Centennial College",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed ex ac felis malesuada pulvinar. Aliquam consectetur neque dolor, quis semper turpis congue eget. Proin interdum enim in sapien commodo sodales. Nullam laoreet ultricies risus, vitae faucibus enim tristique et. Sed at scelerisque est, vitae facilisis urna. Phasellus vehicula leo odio, vel viverra elit hendrerit id. Suspendisse facilisis, dui ut dignissim hendrerit, orci lectus rhoncus odio, ac suscipit urna nunc id leo. Duis rutrum sapien pulvinar, finibus tortor vel, tempus elit. Duis in felis maximus, tincidunt eros non, sollicitudin lectus. Donec neque augue, auctor ac orci ac, condimentum eleifend ante. Praesent quis velit vitae massa mattis porttitor. Aliquam at nisi pulvinar risus dapibus molestie.",
    techStack: [
      "Java",
      "Spring",
      "Azure"
    ]
  },
  {
    id: 2,
    period: "2019 to 2021",
    title: "Software Engineer",
    company: "Samsung R&D Institute Philippines",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed ex ac felis malesuada pulvinar. Aliquam consectetur neque dolor, quis semper turpis congue eget. Proin interdum enim in sapien commodo sodales. Nullam laoreet ultricies risus, vitae faucibus enim tristique et. Sed at scelerisque est, vitae facilisis urna. Phasellus vehicula leo odio, vel viverra elit hendrerit id. Suspendisse facilisis, dui ut dignissim hendrerit, orci lectus rhoncus odio, ac suscipit urna nunc id leo. Duis rutrum sapien pulvinar, finibus tortor vel, tempus elit. Duis in felis maximus, tincidunt eros non, sollicitudin lectus. Donec neque augue, auctor ac orci ac, condimentum eleifend ante. Praesent quis velit vitae massa mattis porttitor. Aliquam at nisi pulvinar risus dapibus molestie.",
    techStack: [
      "Java",
      "Spring",
      "Azure"
    ]
  }
]

export default workdata;