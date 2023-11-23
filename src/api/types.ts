export interface StaffInfoInterface {
  title: string
  firstname: string
  email: string
  lastname: string
  othernames: string
  dateofbirth: string
  gender: string
  nationality: string
  stateoforigin: string
  lga: string
  maritalstatus: string
  phonenumber: string
  address: string

  // Next of Kin Details
  nexttitle: string
  nextfirstname: string
  nextlastname: string
  nextgender: string
  nextrelationship: string
  nextphonenumber: string
  nextofkinaddress: string

  // Education Details
  qualification: string
  year: string
  institution: string

  // Pension Details
  pensionprovider: string
  pensionumber: string

  // Tax Details
  taxstateofresidence: string
  tin: string
}
export interface StaffEmploymentInterface {
  // ... (previous fields)
  // Employment Details
  employmentnumber: string
  dateofappointment: string
  gradelevel: string
  departmentofappointment: string
  zoneofemployment: string
  unitofemployment: string
  designation: string
  salarygrade: string

  // Salary Bank Details
  bank: string
  accountnumber: string
  nubanname: string
}

export interface StaffPortalInterface {
  // ... (previous fields)

  // Access Control
  accessControl: string// Update this type based on the actual values

  // Email and Password
  email: string
  password: string
}
