export interface Insurance {
  band1_salary_id?: string;
  account?: string;
  cc?: string;
  chola_period?: string;
  createdAt?: string;
  createdBy?: string;
  data?: string;
  emp_id?: string;
  geography?: string;
  jobposition?: string;
  lob?: string;
  modified_by?: string;
  modified_date?: string;
  period?: string;
  scale?: string;
  scenario?: string;
  source?: string;
  updatedAt?: string;
  uploaded_by?: string;
  uploaded_date?: string;
  year?: string;
  // category?: categoryPayload[];
}

export interface categoryPayload {
  id?: string;
  sub_category?: string;
  item?: string;
}
