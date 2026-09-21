import type { EmployeeRepository } from "../../repositories/employees.js";
import type { EmployeeService } from "../employee.js";

export function removeById(
  employeeRepository: EmployeeRepository,
): EmployeeService["removeById"] {
  return (id) => {
    return employeeRepository.remove(id);
  };
}
