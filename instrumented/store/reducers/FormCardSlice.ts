function cov_10yq1w1v7j() {
  var path = "/home/gekalo1025/Desktop/project/learn-react/src/store/reducers/FormCardSlice.ts";
  var hash = "fd533e372a342ad7eff52f9e18a4ed40a381a9a6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gekalo1025/Desktop/project/learn-react/src/store/reducers/FormCardSlice.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 36
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 29
        },
        end: {
          line: 18,
          column: 2
        }
      },
      "2": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 39
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        loc: {
          start: {
            line: 14,
            column: 31
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 14
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
    hash: "fd533e372a342ad7eff52f9e18a4ed40a381a9a6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10yq1w1v7j = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_10yq1w1v7j();
import { createSlice } from '@reduxjs/toolkit';
import { IUserCard } from '../../components/UserCard/UserCard';
interface formCardState {
  cards: IUserCard[];
}
const initialState: formCardState = (cov_10yq1w1v7j().s[0]++, {
  cards: []
});
export const formCardSlice = (cov_10yq1w1v7j().s[1]++, createSlice({
  name: 'formCardSlice',
  initialState,
  reducers: {
    addUserCard(state, action) {
      cov_10yq1w1v7j().f[0]++;
      cov_10yq1w1v7j().s[2]++;
      state.cards.push(action.payload);
    }
  }
}));
export default formCardSlice.reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTB5cTF3MXY3aiIsImFjdHVhbENvdmVyYWdlIiwiY3JlYXRlU2xpY2UiLCJJVXNlckNhcmQiLCJmb3JtQ2FyZFN0YXRlIiwiY2FyZHMiLCJpbml0aWFsU3RhdGUiLCJzIiwiZm9ybUNhcmRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZFVzZXJDYXJkIiwic3RhdGUiLCJhY3Rpb24iLCJmIiwicHVzaCIsInBheWxvYWQiLCJyZWR1Y2VyIl0sInNvdXJjZXMiOlsiRm9ybUNhcmRTbGljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgSVVzZXJDYXJkIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyQ2FyZC9Vc2VyQ2FyZCc7XG5cbmludGVyZmFjZSBmb3JtQ2FyZFN0YXRlIHtcbiAgY2FyZHM6IElVc2VyQ2FyZFtdO1xufVxuY29uc3QgaW5pdGlhbFN0YXRlOiBmb3JtQ2FyZFN0YXRlID0ge1xuICBjYXJkczogW10sXG59O1xuZXhwb3J0IGNvbnN0IGZvcm1DYXJkU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdmb3JtQ2FyZFNsaWNlJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGFkZFVzZXJDYXJkKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHN0YXRlLmNhcmRzLnB1c2goYWN0aW9uLnBheWxvYWQpO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybUNhcmRTbGljZS5yZWR1Y2VyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosU0FBU0UsV0FBVyxRQUFRLGtCQUFrQjtBQUM5QyxTQUFTQyxTQUFTLFFBQVEsb0NBQW9DO0FBRTlELFVBQVVDLGFBQWEsQ0FBQztFQUN0QkMsS0FBSyxFQUFFRixTQUFTLEVBQUU7QUFDcEI7QUFDQSxNQUFNRyxZQUFZLEVBQUVGLGFBQWEsSUFBQUosY0FBQSxHQUFBTyxDQUFBLE9BQUc7RUFDbENGLEtBQUssRUFBRTtBQUNULENBQUM7QUFDRCxPQUFPLE1BQU1HLGFBQWEsSUFBQVIsY0FBQSxHQUFBTyxDQUFBLE9BQUdMLFdBQVcsQ0FBQztFQUN2Q08sSUFBSSxFQUFFLGVBQWU7RUFDckJILFlBQVk7RUFDWkksUUFBUSxFQUFFO0lBQ1JDLFdBQVdBLENBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFO01BQUFiLGNBQUEsR0FBQWMsQ0FBQTtNQUFBZCxjQUFBLEdBQUFPLENBQUE7TUFDekJLLEtBQUssQ0FBQ1AsS0FBSyxDQUFDVSxJQUFJLENBQUNGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDO0lBQ2xDO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRixlQUFlUixhQUFhLENBQUNTLE9BQU8ifQ==