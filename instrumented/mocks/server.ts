function cov_2ovr1lcn0() {
  var path = "/home/gekalo1025/Desktop/project/learn-react/src/mocks/server.ts";
  var hash = "b4f6f18b352bcedbb2ddeac929ee987176ba88a3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gekalo1025/Desktop/project/learn-react/src/mocks/server.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 22
        },
        end: {
          line: 3,
          column: 46
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b4f6f18b352bcedbb2ddeac929ee987176ba88a3"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ovr1lcn0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2ovr1lcn0();
import { setupServer } from 'msw/node';
import { handlers } from './handers';
export const server = (cov_2ovr1lcn0().s[0]++, setupServer(...handlers));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMm92cjFsY24wIiwiYWN0dWFsQ292ZXJhZ2UiLCJzZXR1cFNlcnZlciIsImhhbmRsZXJzIiwic2VydmVyIiwicyJdLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXR1cFNlcnZlciB9IGZyb20gJ21zdy9ub2RlJztcbmltcG9ydCB7IGhhbmRsZXJzIH0gZnJvbSAnLi9oYW5kZXJzJztcbmV4cG9ydCBjb25zdCBzZXJ2ZXIgPSBzZXR1cFNlcnZlciguLi5oYW5kbGVycyk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsYUFBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsYUFBQTtBQWZaLFNBQVNFLFdBQVcsUUFBUSxVQUFVO0FBQ3RDLFNBQVNDLFFBQVEsUUFBUSxXQUFXO0FBQ3BDLE9BQU8sTUFBTUMsTUFBTSxJQUFBSixhQUFBLEdBQUFLLENBQUEsT0FBR0gsV0FBVyxDQUFDLEdBQUdDLFFBQVEsQ0FBQyJ9