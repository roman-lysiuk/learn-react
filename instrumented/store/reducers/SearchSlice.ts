function cov_ee61u9wko() {
  var path = "/home/gekalo1025/Desktop/project/learn-react/src/store/reducers/SearchSlice.ts";
  var hash = "6a010ed8f64effc6f36faef4e9f5ff15643f3669";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gekalo1025/Desktop/project/learn-react/src/store/reducers/SearchSlice.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 34
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 27
        },
        end: {
          line: 17,
          column: 2
        }
      },
      "2": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        loc: {
          start: {
            line: 13,
            column: 31
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 13
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
    hash: "6a010ed8f64effc6f36faef4e9f5ff15643f3669"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ee61u9wko = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_ee61u9wko();
import { createSlice } from '@reduxjs/toolkit';
interface SearchState {
  valueSearch: string;
}
const initialState: SearchState = (cov_ee61u9wko().s[0]++, {
  valueSearch: ''
});
export const searchSlice = (cov_ee61u9wko().s[1]++, createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeValue(state, action) {
      cov_ee61u9wko().f[0]++;
      cov_ee61u9wko().s[2]++;
      state.valueSearch = action.payload;
    }
  }
}));
export default searchSlice.reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfZWU2MXU5d2tvIiwiYWN0dWFsQ292ZXJhZ2UiLCJjcmVhdGVTbGljZSIsIlNlYXJjaFN0YXRlIiwidmFsdWVTZWFyY2giLCJpbml0aWFsU3RhdGUiLCJzIiwic2VhcmNoU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJjaGFuZ2VWYWx1ZSIsInN0YXRlIiwiYWN0aW9uIiwiZiIsInBheWxvYWQiLCJyZWR1Y2VyIl0sInNvdXJjZXMiOlsiU2VhcmNoU2xpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuaW50ZXJmYWNlIFNlYXJjaFN0YXRlIHtcbiAgdmFsdWVTZWFyY2g6IHN0cmluZztcbn1cbmNvbnN0IGluaXRpYWxTdGF0ZTogU2VhcmNoU3RhdGUgPSB7XG4gIHZhbHVlU2VhcmNoOiAnJyxcbn07XG5leHBvcnQgY29uc3Qgc2VhcmNoU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdzZWFyY2gnLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgY2hhbmdlVmFsdWUoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUudmFsdWVTZWFyY2ggPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFNsaWNlLnJlZHVjZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGFBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGFBQUE7QUFmWixTQUFTRSxXQUFXLFFBQVEsa0JBQWtCO0FBRTlDLFVBQVVDLFdBQVcsQ0FBQztFQUNwQkMsV0FBVyxFQUFFLE1BQU07QUFDckI7QUFDQSxNQUFNQyxZQUFZLEVBQUVGLFdBQVcsSUFBQUgsYUFBQSxHQUFBTSxDQUFBLE9BQUc7RUFDaENGLFdBQVcsRUFBRTtBQUNmLENBQUM7QUFDRCxPQUFPLE1BQU1HLFdBQVcsSUFBQVAsYUFBQSxHQUFBTSxDQUFBLE9BQUdKLFdBQVcsQ0FBQztFQUNyQ00sSUFBSSxFQUFFLFFBQVE7RUFDZEgsWUFBWTtFQUNaSSxRQUFRLEVBQUU7SUFDUkMsV0FBV0EsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEVBQUU7TUFBQVosYUFBQSxHQUFBYSxDQUFBO01BQUFiLGFBQUEsR0FBQU0sQ0FBQTtNQUN6QkssS0FBSyxDQUFDUCxXQUFXLEdBQUdRLE1BQU0sQ0FBQ0UsT0FBTztJQUNwQztFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsZUFBZVAsV0FBVyxDQUFDUSxPQUFPIn0=