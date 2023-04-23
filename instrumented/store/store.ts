function cov_hbtv3wg97() {
  var path = "/home/gekalo1025/Desktop/project/learn-react/src/store/store.ts";
  var hash = "c142d3b55b971e44b72e7a4c6e7ed4f238e480d6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gekalo1025/Desktop/project/learn-react/src/store/store.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 20
        },
        end: {
          line: 13,
          column: 2
        }
      },
      "1": {
        start: {
          line: 15,
          column: 26
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "3": {
        start: {
          line: 18,
          column: 42
        },
        end: {
          line: 18,
          column: 64
        }
      },
      "4": {
        start: {
          line: 21,
          column: 24
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "5": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 25,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 26
          },
          end: {
            line: 15,
            column: 27
          }
        },
        loc: {
          start: {
            line: 15,
            column: 32
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 18,
            column: 17
          }
        },
        loc: {
          start: {
            line: 18,
            column: 42
          },
          end: {
            line: 18,
            column: 64
          }
        },
        line: 18
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 21,
            column: 24
          },
          end: {
            line: 21,
            column: 25
          }
        },
        loc: {
          start: {
            line: 21,
            column: 30
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 21
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c142d3b55b971e44b72e7a4c6e7ed4f238e480d6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_hbtv3wg97 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_hbtv3wg97();
import { combineReducers } from 'redux';
import characterReducer from './reducers/CharacterSlice';
import modalReducer from './reducers/ModalSlice';
import searchReducer from './reducers/SearchSlice';
import formCardSlice from './reducers/FormCardSlice';
import { configureStore } from '@reduxjs/toolkit';
const rootReducer = (cov_hbtv3wg97().s[0]++, combineReducers({
  characterReducer,
  modalReducer,
  searchReducer,
  formCardSlice
}));
cov_hbtv3wg97().s[1]++;
export const setupStore = () => {
  cov_hbtv3wg97().f[0]++;
  cov_hbtv3wg97().s[2]++;
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      cov_hbtv3wg97().f[1]++;
      cov_hbtv3wg97().s[3]++;
      return getDefaultMiddleware();
    }
  });
};
cov_hbtv3wg97().s[4]++;
export const ssrStore = () => {
  cov_hbtv3wg97().f[2]++;
  cov_hbtv3wg97().s[5]++;
  return configureStore({
    reducer: rootReducer,
    middleware: []
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfaGJ0djN3Zzk3IiwiYWN0dWFsQ292ZXJhZ2UiLCJjb21iaW5lUmVkdWNlcnMiLCJjaGFyYWN0ZXJSZWR1Y2VyIiwibW9kYWxSZWR1Y2VyIiwic2VhcmNoUmVkdWNlciIsImZvcm1DYXJkU2xpY2UiLCJjb25maWd1cmVTdG9yZSIsInJvb3RSZWR1Y2VyIiwicyIsInNldHVwU3RvcmUiLCJmIiwicmVkdWNlciIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNzclN0b3JlIiwiUm9vdFN0YXRlIiwiUmV0dXJuVHlwZSIsIkFwcFN0YXRlIiwiQXBwRGlzcGF0Y2giXSwic291cmNlcyI6WyJzdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgY2hhcmFjdGVyUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL0NoYXJhY3RlclNsaWNlJztcbmltcG9ydCBtb2RhbFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9Nb2RhbFNsaWNlJztcbmltcG9ydCBzZWFyY2hSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvU2VhcmNoU2xpY2UnO1xuaW1wb3J0IGZvcm1DYXJkU2xpY2UgZnJvbSAnLi9yZWR1Y2Vycy9Gb3JtQ2FyZFNsaWNlJztcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgY2hhcmFjdGVyUmVkdWNlcixcbiAgbW9kYWxSZWR1Y2VyLFxuICBzZWFyY2hSZWR1Y2VyLFxuICBmb3JtQ2FyZFNsaWNlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXR1cFN0b3JlID0gKCkgPT4ge1xuICByZXR1cm4gY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxuICAgIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT4gZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKSxcbiAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IHNzclN0b3JlID0gKCkgPT4ge1xuICByZXR1cm4gY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxuICAgIG1pZGRsZXdhcmU6IFtdLFxuICB9KTtcbn07XG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XG5leHBvcnQgdHlwZSBBcHBTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHNldHVwU3RvcmU+O1xuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSBBcHBTdGF0ZVsnZGlzcGF0Y2gnXTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBZlosU0FBU0UsZUFBZSxRQUFRLE9BQU87QUFDdkMsT0FBT0MsZ0JBQWdCLE1BQU0sMkJBQTJCO0FBQ3hELE9BQU9DLFlBQVksTUFBTSx1QkFBdUI7QUFDaEQsT0FBT0MsYUFBYSxNQUFNLHdCQUF3QjtBQUNsRCxPQUFPQyxhQUFhLE1BQU0sMEJBQTBCO0FBQ3BELFNBQVNDLGNBQWMsUUFBUSxrQkFBa0I7QUFFakQsTUFBTUMsV0FBVyxJQUFBUixhQUFBLEdBQUFTLENBQUEsT0FBR1AsZUFBZSxDQUFDO0VBQ2xDQyxnQkFBZ0I7RUFDaEJDLFlBQVk7RUFDWkMsYUFBYTtFQUNiQztBQUNGLENBQUMsQ0FBQztBQUFDTixhQUFBLEdBQUFTLENBQUE7QUFFSCxPQUFPLE1BQU1DLFVBQVUsR0FBR0EsQ0FBQSxLQUFNO0VBQUFWLGFBQUEsR0FBQVcsQ0FBQTtFQUFBWCxhQUFBLEdBQUFTLENBQUE7RUFDOUIsT0FBT0YsY0FBYyxDQUFDO0lBQ3BCSyxPQUFPLEVBQUVKLFdBQVc7SUFDcEJLLFVBQVUsRUFBR0Msb0JBQW9CLElBQUs7TUFBQWQsYUFBQSxHQUFBVyxDQUFBO01BQUFYLGFBQUEsR0FBQVMsQ0FBQTtNQUFBLE9BQUFLLG9CQUFvQixFQUFFO0lBQUQ7RUFDN0QsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUFDZCxhQUFBLEdBQUFTLENBQUE7QUFDRixPQUFPLE1BQU1NLFFBQVEsR0FBR0EsQ0FBQSxLQUFNO0VBQUFmLGFBQUEsR0FBQVcsQ0FBQTtFQUFBWCxhQUFBLEdBQUFTLENBQUE7RUFDNUIsT0FBT0YsY0FBYyxDQUFDO0lBQ3BCSyxPQUFPLEVBQUVKLFdBQVc7SUFDcEJLLFVBQVUsRUFBRTtFQUNkLENBQUMsQ0FBQztBQUNKLENBQUM7QUFDRCxPQUFPLEtBQUtHLFNBQVMsR0FBR0MsVUFBVSxDQUFDLE9BQU9ULFdBQVcsQ0FBQztBQUN0RCxPQUFPLEtBQUtVLFFBQVEsR0FBR0QsVUFBVSxDQUFDLE9BQU9QLFVBQVUsQ0FBQztBQUNwRCxPQUFPLEtBQUtTLFdBQVcsR0FBR0QsUUFBUSxDQUFDLFVBQVUsQ0FBQyJ9