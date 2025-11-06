export type jobList = {
  list: job[];
};

export type salaryRange = {
  minSalary: number;
  maxSalary: number;
};

export type job = {
  jobId: number;
  title: string;
  department: string;
  description: string;
  responsibilities: string;
  requirements: string;
  location: string;
  employmentType: string;
  salaryRange: salaryRange;
  benefits: string;
};
