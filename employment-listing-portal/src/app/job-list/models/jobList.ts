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

export type candidate = {
  candidateId: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  linkedInProfileUrl: string;
  portfolioUrl: string;
};

export type jobApplication = {
  job: job;
  candidate: candidate;
  applicationStatus: string;
};
