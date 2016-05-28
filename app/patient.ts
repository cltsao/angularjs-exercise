export class Drug {
	first: string;
	second: string;
}

export class Procedure {
  code: string;
  desc: string;
  date: string;
  cost: string;
}

export class Patient {
  id: number;
  gender: string;
  first_name: string;
  last_name: string;
  city: string;
  country: string;
  company: string;
  job: string;
  race: string;
  drug: Drug;
  procedure: Procedure;
}