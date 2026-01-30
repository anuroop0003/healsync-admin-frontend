export interface DoctorRegistrationPayload {
  first_name: string;
  last_name: string;
  phone: string;
  aadhaar_number: string;
  specialization: string;
  qualification: string;
  license_number: string;
  department_id: string[];
  institution_id: string;
  experience: number;
}

export interface DoctorRegistrationResponse {
  message: string;
  success: boolean;
  data?: any;
}

export interface InstitutionRegistrationPayload {
  name: string;
  type: string;
  address: string;
  city: string;
  state: string;
  country: string;
  license_number: string;
  phone: string;
  aadhaar_number: string;
}

export interface InstitutionRegistrationResponse {
  message: string;
  success: boolean;
  data?: any;
}
