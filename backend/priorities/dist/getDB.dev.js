"use strict";

var _core = require("@sequelize/core");

var _tasks = _interopRequireDefault(require("./tasks.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Assuming tasks.js defines and exports the Task model
function getPrioritiesFromDB() {
  var tasks;
  return regeneratorRuntime.async(function getPrioritiesFromDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_tasks["default"].findAll({
            attributes: ["id", "taskName", "priority", "dueDate"],
            order: [[_core.Sequelize.literal("\n                    CASE \n                        WHEN priority = '!!!' THEN 1\n                        WHEN priority = '!!' THEN 2\n                        WHEN priority = '!' THEN 3\n                        ELSE 4\n                    END\n                "), "ASC"], ["dueDate", "ASC"]]
          }));

        case 3:
          tasks = _context.sent;
          return _context.abrupt("return", tasks.map(function (task) {
            return task.toJSON();
          }));

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching tasks: ".concat(_context.t0.message));
          throw _context.t0;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function displayPriorities(tasks) {
  /**
   * Display the list of tasks with priorities.
   *
   * Args:
   *   tasks (Array): Array of task objects with id, taskName, priority, and dueDate.
   */
  console.log("\nTask Priorities:");
  tasks.forEach(function (_ref) {
    var id = _ref.id,
        taskName = _ref.taskName,
        priority = _ref.priority,
        dueDate = _ref.dueDate;
    console.log("[Priority: ".concat(priority, "] ").concat(taskName, " (Due: ").concat(dueDate, ")"));
  });
}

(function _callee() {
  var priorities;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(getPrioritiesFromDB());

        case 3:
          priorities = _context2.sent;
          displayPriorities(priorities);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
})();
//# sourceMappingURL=getDB.dev.js.map
