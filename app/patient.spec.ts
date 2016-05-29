import { Patient } from './patient';
describe('Patient', () => {
  it('has name', () => {
    let patient: Patient = {"id":1,"gender":"Male","first_name":"James","last_name":"Evans","city":"Pasadena","country":"United States","company":"Wikizz","job":"Sales Associate","race":"Korean","drug":{"first":"allopurinol","second":null},"procedure":{"code":"7321","desc":"Int/comb version no extr","date":"6/14/2015","cost":"4891.53"}};
    expect(patient.first_name).toEqual('James');
    expect(patient.last_name).toEqual('Evans');
  });
  it('allows one drug', () => {
    let patient: Patient = {"id":1,"gender":"Male","first_name":"James","last_name":"Evans","city":"Pasadena","country":"United States","company":"Wikizz","job":"Sales Associate","race":"Korean","drug":{"first":"allopurinol","second":null},"procedure":{"code":"7321","desc":"Int/comb version no extr","date":"6/14/2015","cost":"4891.53"}};
    expect(patient.drug.second).toEqual(null);
  });
  it('allows undefined procedure', () => {
    let patient: Patient = {"id":1,"gender":"Male","first_name":"James","last_name":"Evans","city":"Pasadena","country":"United States","company":"Wikizz","job":"Sales Associate","race":"Korean","drug":{"first":"allopurinol","second":null}};
    expect(patient.procedure).toEqual(undefined);
  });
});