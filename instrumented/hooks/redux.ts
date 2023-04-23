function cov_167jh1bl1k() {
  var path = "/home/gekalo1025/Desktop/project/learn-react/src/hooks/redux.ts";
  var hash = "44e5f0a71eba8412c7e44fe1c8ad876bb7dc03fc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gekalo1025/Desktop/project/learn-react/src/hooks/redux.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 30
        },
        end: {
          line: 5,
          column: 62
        }
      },
      "1": {
        start: {
          line: 5,
          column: 36
        },
        end: {
          line: 5,
          column: 62
        }
      },
      "2": {
        start: {
          line: 6,
          column: 63
        },
        end: {
          line: 6,
          column: 74
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 30
          },
          end: {
            line: 5,
            column: 31
          }
        },
        loc: {
          start: {
            line: 5,
            column: 36
          },
          end: {
            line: 5,
            column: 62
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "44e5f0a71eba8412c7e44fe1c8ad876bb7dc03fc"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_167jh1bl1k = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_167jh1bl1k();
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';
cov_167jh1bl1k().s[0]++;
export const useAppDispatch = () => {
  cov_167jh1bl1k().f[0]++;
  cov_167jh1bl1k().s[1]++;
  return useDispatch<AppDispatch>();
};
export const useAppSelector: TypedUseSelectorHook<RootState> = (cov_167jh1bl1k().s[2]++, useSelector);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTY3amgxYmwxayIsImFjdHVhbENvdmVyYWdlIiwidXNlU2VsZWN0b3IiLCJUeXBlZFVzZVNlbGVjdG9ySG9vayIsInVzZURpc3BhdGNoIiwiQXBwRGlzcGF0Y2giLCJSb290U3RhdGUiLCJzIiwidXNlQXBwRGlzcGF0Y2giLCJmIiwidXNlQXBwU2VsZWN0b3IiXSwic291cmNlcyI6WyJyZWR1eC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFR5cGVkVXNlU2VsZWN0b3JIb29rLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tICdzdG9yZS9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuZXhwb3J0IGNvbnN0IHVzZUFwcFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3I7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFTRSxXQUFXLFFBQVEsYUFBYTtBQUN6QyxTQUFTQyxvQkFBb0IsRUFBRUMsV0FBVyxRQUFRLGFBQWE7QUFDL0QsU0FBU0MsV0FBVyxFQUFFQyxTQUFTLFFBQVEsYUFBYTtBQUFDTixjQUFBLEdBQUFPLENBQUE7QUFFckQsT0FBTyxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBTTtFQUFBUixjQUFBLEdBQUFTLENBQUE7RUFBQVQsY0FBQSxHQUFBTyxDQUFBO0VBQUEsT0FBQUgsV0FBVyxDQUFDQyxXQUFXLENBQUMsRUFBRTtBQUFELENBQUM7QUFDOUQsT0FBTyxNQUFNSyxjQUFjLEVBQUVQLG9CQUFvQixDQUFDRyxTQUFTLENBQUMsSUFBQU4sY0FBQSxHQUFBTyxDQUFBLE9BQUdMLFdBQVcifQ==