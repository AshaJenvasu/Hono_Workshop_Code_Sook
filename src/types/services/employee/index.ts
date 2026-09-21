import type { EmployeeRepository } from "../../repositories/employees.js";
import type { EmployeeService } from "../employee.js";
import * as Creates from "./create.js";
import * as Finds from "./find.js";
import * as Removes from "./remove.js";
import * as Updates from "./update.js";

export function initEmployeeService(
  employeeRepository: EmployeeRepository,
): EmployeeService {
  return {
    create: Creates.create(employeeRepository),
    findMany: Finds.findMany(employeeRepository),
    findOneById: Finds.findOneById(employeeRepository),
    removeById: Removes.removeById(employeeRepository),
    update: Updates.update(employeeRepository),
  };
}
