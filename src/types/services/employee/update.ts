import type { EmployeeRepository } from "../../repositories/employees.js";
import type { EmployeeService } from "../employee.js";

export function update(
  employeeRepository: EmployeeRepository,
): EmployeeService["update"] {
  return async (id, data) => {
    return employeeRepository.update(id, data);
  };
}
