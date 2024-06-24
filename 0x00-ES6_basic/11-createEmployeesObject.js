export default function createEmployeesObject(departmentName, employees) {
  const newEmployees = employees.map((employee) => employee.trim());

  return {
    [departmentName]: newEmployees,
  };
}
