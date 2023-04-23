function cov_28rq1lv3sd() {
  var path = "/home/gekalo1025/Desktop/project/learn-react/src/store/reducers/ActionCreators.ts";
  var hash = "b50ee3e6abbf91c0f4363e7035a55075c70f83f8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gekalo1025/Desktop/project/learn-react/src/store/reducers/ActionCreators.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 31
        },
        end: {
          line: 9,
          column: 2
        }
      },
      "1": {
        start: {
          line: 7,
          column: 24
        },
        end: {
          line: 7,
          column: 64
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 23
        }
      },
      "3": {
        start: {
          line: 10,
          column: 44
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "4": {
        start: {
          line: 13,
          column: 26
        },
        end: {
          line: 13,
          column: 86
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 25
        }
      },
      "6": {
        start: {
          line: 17,
          column: 41
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "7": {
        start: {
          line: 20,
          column: 22
        },
        end: {
          line: 20,
          column: 69
        }
      },
      "8": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 21
        }
      },
      "9": {
        start: {
          line: 25,
          column: 33
        },
        end: {
          line: 29,
          column: 1
        }
      },
      "10": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 28,
          column: 4
        }
      },
      "11": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 59
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 70
          },
          end: {
            line: 6,
            column: 71
          }
        },
        loc: {
          start: {
            line: 6,
            column: 82
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 35
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        loc: {
          start: {
            line: 19,
            column: 24
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 25,
            column: 33
          },
          end: {
            line: 25,
            column: 34
          }
        },
        loc: {
          start: {
            line: 25,
            column: 58
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 25
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 26,
            column: 9
          },
          end: {
            line: 26,
            column: 10
          }
        },
        loc: {
          start: {
            line: 26,
            column: 36
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 26
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b50ee3e6abbf91c0f4363e7035a55075c70f83f8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_28rq1lv3sd = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_28rq1lv3sd();
import { createAsyncThunk } from '@reduxjs/toolkit';
import characterService from '../../API/characterService';
import { AppDispatch } from '../../store/store';
import { searchSlice } from './SearchSlice';
export const fetchCharacters = (cov_28rq1lv3sd().s[0]++, createAsyncThunk('character/fetchAll', async () => {
  cov_28rq1lv3sd().f[0]++;
  const allCharacters = (cov_28rq1lv3sd().s[1]++, await characterService.getAllCharacter());
  cov_28rq1lv3sd().s[2]++;
  return allCharacters;
}));
export const fetchFilterForNameCharacters = (cov_28rq1lv3sd().s[3]++, createAsyncThunk('character/fetchFilterForName', async (nameCharacter: string) => {
  cov_28rq1lv3sd().f[1]++;
  const allCharacters = (cov_28rq1lv3sd().s[4]++, await characterService.searchCharacterForName(nameCharacter));
  cov_28rq1lv3sd().s[5]++;
  return allCharacters;
}));
export const fetchSearchCharacterForID = (cov_28rq1lv3sd().s[6]++, createAsyncThunk('character/fetchSearchId', async (id: string) => {
  cov_28rq1lv3sd().f[2]++;
  const character = (cov_28rq1lv3sd().s[7]++, await characterService.searchCharacterForID(id));
  cov_28rq1lv3sd().s[8]++;
  return character;
}));
cov_28rq1lv3sd().s[9]++;
export const changeValueSearch = (searchValue: string) => {
  cov_28rq1lv3sd().f[3]++;
  cov_28rq1lv3sd().s[10]++;
  return (dispatch: AppDispatch) => {
    cov_28rq1lv3sd().f[4]++;
    cov_28rq1lv3sd().s[11]++;
    dispatch(searchSlice.actions.changeValue(searchValue));
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjhycTFsdjNzZCIsImFjdHVhbENvdmVyYWdlIiwiY3JlYXRlQXN5bmNUaHVuayIsImNoYXJhY3RlclNlcnZpY2UiLCJBcHBEaXNwYXRjaCIsInNlYXJjaFNsaWNlIiwiZmV0Y2hDaGFyYWN0ZXJzIiwicyIsImYiLCJhbGxDaGFyYWN0ZXJzIiwiZ2V0QWxsQ2hhcmFjdGVyIiwiZmV0Y2hGaWx0ZXJGb3JOYW1lQ2hhcmFjdGVycyIsIm5hbWVDaGFyYWN0ZXIiLCJzZWFyY2hDaGFyYWN0ZXJGb3JOYW1lIiwiZmV0Y2hTZWFyY2hDaGFyYWN0ZXJGb3JJRCIsImlkIiwiY2hhcmFjdGVyIiwic2VhcmNoQ2hhcmFjdGVyRm9ySUQiLCJjaGFuZ2VWYWx1ZVNlYXJjaCIsInNlYXJjaFZhbHVlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwiY2hhbmdlVmFsdWUiXSwic291cmNlcyI6WyJBY3Rpb25DcmVhdG9ycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgY2hhcmFjdGVyU2VydmljZSBmcm9tICcuLi8uLi9BUEkvY2hhcmFjdGVyU2VydmljZSc7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IHNlYXJjaFNsaWNlIH0gZnJvbSAnLi9TZWFyY2hTbGljZSc7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENoYXJhY3RlcnMgPSBjcmVhdGVBc3luY1RodW5rKCdjaGFyYWN0ZXIvZmV0Y2hBbGwnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbENoYXJhY3RlcnMgPSBhd2FpdCBjaGFyYWN0ZXJTZXJ2aWNlLmdldEFsbENoYXJhY3RlcigpO1xuICByZXR1cm4gYWxsQ2hhcmFjdGVycztcbn0pO1xuZXhwb3J0IGNvbnN0IGZldGNoRmlsdGVyRm9yTmFtZUNoYXJhY3RlcnMgPSBjcmVhdGVBc3luY1RodW5rKFxuICAnY2hhcmFjdGVyL2ZldGNoRmlsdGVyRm9yTmFtZScsXG4gIGFzeW5jIChuYW1lQ2hhcmFjdGVyOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBhbGxDaGFyYWN0ZXJzID0gYXdhaXQgY2hhcmFjdGVyU2VydmljZS5zZWFyY2hDaGFyYWN0ZXJGb3JOYW1lKG5hbWVDaGFyYWN0ZXIpO1xuICAgIHJldHVybiBhbGxDaGFyYWN0ZXJzO1xuICB9XG4pO1xuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoQ2hhcmFjdGVyRm9ySUQgPSBjcmVhdGVBc3luY1RodW5rKFxuICAnY2hhcmFjdGVyL2ZldGNoU2VhcmNoSWQnLFxuICBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IGF3YWl0IGNoYXJhY3RlclNlcnZpY2Uuc2VhcmNoQ2hhcmFjdGVyRm9ySUQoaWQpO1xuICAgIHJldHVybiBjaGFyYWN0ZXI7XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VWYWx1ZVNlYXJjaCA9IChzZWFyY2hWYWx1ZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2VhcmNoU2xpY2UuYWN0aW9ucy5jaGFuZ2VWYWx1ZShzZWFyY2hWYWx1ZSkpO1xuICB9O1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFTRSxnQkFBZ0IsUUFBUSxrQkFBa0I7QUFDbkQsT0FBT0MsZ0JBQWdCLE1BQU0sNEJBQTRCO0FBQ3pELFNBQVNDLFdBQVcsUUFBUSxtQkFBbUI7QUFDL0MsU0FBU0MsV0FBVyxRQUFRLGVBQWU7QUFFM0MsT0FBTyxNQUFNQyxlQUFlLElBQUFOLGNBQUEsR0FBQU8sQ0FBQSxPQUFHTCxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxZQUFZO0VBQUFGLGNBQUEsR0FBQVEsQ0FBQTtFQUNoRixNQUFNQyxhQUFhLElBQUFULGNBQUEsR0FBQU8sQ0FBQSxPQUFHLE1BQU1KLGdCQUFnQixDQUFDTyxlQUFlLEVBQUU7RUFBQ1YsY0FBQSxHQUFBTyxDQUFBO0VBQy9ELE9BQU9FLGFBQWE7QUFDdEIsQ0FBQyxDQUFDO0FBQ0YsT0FBTyxNQUFNRSw0QkFBNEIsSUFBQVgsY0FBQSxHQUFBTyxDQUFBLE9BQUdMLGdCQUFnQixDQUMxRCw4QkFBOEIsRUFDOUIsT0FBT1UsYUFBYSxFQUFFLE1BQU0sS0FBSztFQUFBWixjQUFBLEdBQUFRLENBQUE7RUFDL0IsTUFBTUMsYUFBYSxJQUFBVCxjQUFBLEdBQUFPLENBQUEsT0FBRyxNQUFNSixnQkFBZ0IsQ0FBQ1Usc0JBQXNCLENBQUNELGFBQWEsQ0FBQztFQUFDWixjQUFBLEdBQUFPLENBQUE7RUFDbkYsT0FBT0UsYUFBYTtBQUN0QixDQUFDLENBQ0Y7QUFDRCxPQUFPLE1BQU1LLHlCQUF5QixJQUFBZCxjQUFBLEdBQUFPLENBQUEsT0FBR0wsZ0JBQWdCLENBQ3ZELHlCQUF5QixFQUN6QixPQUFPYSxFQUFFLEVBQUUsTUFBTSxLQUFLO0VBQUFmLGNBQUEsR0FBQVEsQ0FBQTtFQUNwQixNQUFNUSxTQUFTLElBQUFoQixjQUFBLEdBQUFPLENBQUEsT0FBRyxNQUFNSixnQkFBZ0IsQ0FBQ2Msb0JBQW9CLENBQUNGLEVBQUUsQ0FBQztFQUFDZixjQUFBLEdBQUFPLENBQUE7RUFDbEUsT0FBT1MsU0FBUztBQUNsQixDQUFDLENBQ0Y7QUFBQ2hCLGNBQUEsR0FBQU8sQ0FBQTtBQUVGLE9BQU8sTUFBTVcsaUJBQWlCLEdBQUdBLENBQUNDLFdBQVcsRUFBRSxNQUFNLEtBQUs7RUFBQW5CLGNBQUEsR0FBQVEsQ0FBQTtFQUFBUixjQUFBLEdBQUFPLENBQUE7RUFDeEQsT0FBTyxDQUFDYSxRQUFRLEVBQUVoQixXQUFXLEtBQUs7SUFBQUosY0FBQSxHQUFBUSxDQUFBO0lBQUFSLGNBQUEsR0FBQU8sQ0FBQTtJQUNoQ2EsUUFBUSxDQUFDZixXQUFXLENBQUNnQixPQUFPLENBQUNDLFdBQVcsQ0FBQ0gsV0FBVyxDQUFDLENBQUM7RUFDeEQsQ0FBQztBQUNILENBQUMifQ==