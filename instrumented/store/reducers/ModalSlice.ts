function cov_2dwach7zc0() {
  var path = "/home/gekalo1025/Desktop/project/learn-react/src/store/reducers/ModalSlice.ts";
  var hash = "57e781cd1e98941d0932b418123327a05f845798";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gekalo1025/Desktop/project/learn-react/src/store/reducers/ModalSlice.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 33
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 26
        },
        end: {
          line: 20,
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
          column: 31
        }
      },
      "3": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 32
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
            column: 21
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        loc: {
          start: {
            line: 16,
            column: 22
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "57e781cd1e98941d0932b418123327a05f845798"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2dwach7zc0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2dwach7zc0();
import { createSlice } from '@reduxjs/toolkit';
interface modalState {
  isOpenModal: boolean;
}
const initialState: modalState = (cov_2dwach7zc0().s[0]++, {
  isOpenModal: false
});
export const modalSlice = (cov_2dwach7zc0().s[1]++, createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      cov_2dwach7zc0().f[0]++;
      cov_2dwach7zc0().s[2]++;
      state.isOpenModal = true;
    },
    closeModal(state) {
      cov_2dwach7zc0().f[1]++;
      cov_2dwach7zc0().s[3]++;
      state.isOpenModal = false;
    }
  }
}));
export default modalSlice.reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmR3YWNoN3pjMCIsImFjdHVhbENvdmVyYWdlIiwiY3JlYXRlU2xpY2UiLCJtb2RhbFN0YXRlIiwiaXNPcGVuTW9kYWwiLCJpbml0aWFsU3RhdGUiLCJzIiwibW9kYWxTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsIm9wZW5Nb2RhbCIsInN0YXRlIiwiZiIsImNsb3NlTW9kYWwiLCJyZWR1Y2VyIl0sInNvdXJjZXMiOlsiTW9kYWxTbGljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5pbnRlcmZhY2UgbW9kYWxTdGF0ZSB7XG4gIGlzT3Blbk1vZGFsOiBib29sZWFuO1xufVxuY29uc3QgaW5pdGlhbFN0YXRlOiBtb2RhbFN0YXRlID0ge1xuICBpc09wZW5Nb2RhbDogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IG1vZGFsU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdtb2RhbCcsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBvcGVuTW9kYWwoc3RhdGUpIHtcbiAgICAgIHN0YXRlLmlzT3Blbk1vZGFsID0gdHJ1ZTtcbiAgICB9LFxuICAgIGNsb3NlTW9kYWwoc3RhdGUpIHtcbiAgICAgIHN0YXRlLmlzT3Blbk1vZGFsID0gZmFsc2U7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbFNsaWNlLnJlZHVjZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFTRSxXQUFXLFFBQVEsa0JBQWtCO0FBRTlDLFVBQVVDLFVBQVUsQ0FBQztFQUNuQkMsV0FBVyxFQUFFLE9BQU87QUFDdEI7QUFDQSxNQUFNQyxZQUFZLEVBQUVGLFVBQVUsSUFBQUgsY0FBQSxHQUFBTSxDQUFBLE9BQUc7RUFDL0JGLFdBQVcsRUFBRTtBQUNmLENBQUM7QUFDRCxPQUFPLE1BQU1HLFVBQVUsSUFBQVAsY0FBQSxHQUFBTSxDQUFBLE9BQUdKLFdBQVcsQ0FBQztFQUNwQ00sSUFBSSxFQUFFLE9BQU87RUFDYkgsWUFBWTtFQUNaSSxRQUFRLEVBQUU7SUFDUkMsU0FBU0EsQ0FBQ0MsS0FBSyxFQUFFO01BQUFYLGNBQUEsR0FBQVksQ0FBQTtNQUFBWixjQUFBLEdBQUFNLENBQUE7TUFDZkssS0FBSyxDQUFDUCxXQUFXLEdBQUcsSUFBSTtJQUMxQixDQUFDO0lBQ0RTLFVBQVVBLENBQUNGLEtBQUssRUFBRTtNQUFBWCxjQUFBLEdBQUFZLENBQUE7TUFBQVosY0FBQSxHQUFBTSxDQUFBO01BQ2hCSyxLQUFLLENBQUNQLFdBQVcsR0FBRyxLQUFLO0lBQzNCO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRixlQUFlRyxVQUFVLENBQUNPLE9BQU8ifQ==