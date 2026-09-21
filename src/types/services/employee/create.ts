import type { EmployeeRepository } from "../../repositories/employees.js";
import type { EmployeeService } from "../employee.js";

export function create(
  employeeRepository: EmployeeRepository,
): EmployeeService["create"] {
  return async (data) => {
    const employee = await employeeRepository.create(data);
    return employee;
  };
}
