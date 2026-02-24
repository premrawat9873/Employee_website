export const transformEmployeeData = (data) =>
  data.map((item, index) => ({
    id: index + 1,
    name: item[0],
    role: item[1],
    city: item[2],
    officeId: item[3],
    joiningDate: item[4],
    salary: Number(item[5].replace(/[$,]/g, "")),
  }));