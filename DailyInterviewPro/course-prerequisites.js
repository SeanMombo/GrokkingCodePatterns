

function courses_to_take(course_to_prereqs) {
  const visited = {};
  
  const keys = Object.keys(course_to_prereqs).forEach(key => {

  })
}



const courses = {
  'CSC300': ['CSC100', 'CSC200'], 
  'CSC200': ['CSC100'], 
  'CSC100': []
}

console.log(courses_to_take(courses));
// # ['CSC100', 'CSC200', 'CSC300']