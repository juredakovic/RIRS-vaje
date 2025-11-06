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
    },
  ],
};
