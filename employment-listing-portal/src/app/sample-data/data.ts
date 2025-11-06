import { jobList, salaryRange } from '../job-list/models/jobList';

const salaryRange1: salaryRange = {
  minSalary: 5,
  maxSalary: 15,
};
export const data = {
  list: [
    {
      jobId: 12345,
      title: 'Software Engineer',
      department: 'Development',
      description: 'Software engineer with plenty of experience.',
      responsibilites: 'Development of new projects, writing technical docs',
      requirements: '5 years of experience',
      location: 'New York',
      employmentType: 'Full-time',
      salaryRange: salaryRange1,
      benefits: 'Free meal',
      employmentCoordinates: '40.730610, -111.935242',
    },

    {
      jobId: 23456,
      title: 'Software Administrator',
      department: 'Development',
      description: 'Software administrator in a small company.',
      responsibilites: 'Monitoring of daily IT operations, repairing outages',
      requirements: '3 years of experience',
      location: 'Boston',
      employmentType: 'Full-time',
      salaryRange: salaryRange1,
      benefits: 'Free meal',
      employmentCoordinates: '42.361145, -71.057083',
    },

    {
      jobId: 34567,
      title: 'Recruiter',
      department: 'HR',
      description: 'Recruiter with plenty of experience',
      responsibilites: 'Hiring new candidates',
      requirements: '3 years of experience',
      location: 'Salt Lake City',
      employmentType: 'Full-time',
      salaryRange: salaryRange1,
      benefits: 'Free meal',
      employmentCoordinates: '40.758701, -111.876183',
    },
  ],
};
