function cov_tzejgvt2u() {
  var path = "/home/gekalo1025/Desktop/project/learn-react/src/API/characterService.ts";
  var hash = "558d674dc51f7982be0c8d458156cafb9f932420";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gekalo1025/Desktop/project/learn-react/src/API/characterService.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 23
        },
        end: {
          line: 4,
          column: 48
        }
      },
      "1": {
        start: {
          line: 5,
          column: 25
        },
        end: {
          line: 5,
          column: 52
        }
      },
      "2": {
        start: {
          line: 8,
          column: 21
        },
        end: {
          line: 14,
          column: 6
        }
      },
      "3": {
        start: {
          line: 15,
          column: 44
        },
        end: {
          line: 15,
          column: 65
        }
      },
      "4": {
        start: {
          line: 16,
          column: 25
        },
        end: {
          line: 16,
          column: 34
        }
      },
      "5": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 24
        }
      },
      "6": {
        start: {
          line: 20,
          column: 21
        },
        end: {
          line: 26,
          column: 6
        }
      },
      "7": {
        start: {
          line: 27,
          column: 44
        },
        end: {
          line: 27,
          column: 65
        }
      },
      "8": {
        start: {
          line: 28,
          column: 25
        },
        end: {
          line: 28,
          column: 34
        }
      },
      "9": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 24
        }
      },
      "10": {
        start: {
          line: 33,
          column: 21
        },
        end: {
          line: 39,
          column: 6
        }
      },
      "11": {
        start: {
          line: 40,
          column: 44
        },
        end: {
          line: 40,
          column: 65
        }
      },
      "12": {
        start: {
          line: 41,
          column: 25
        },
        end: {
          line: 41,
          column: 37
        }
      },
      "13": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 67
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 75
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 19
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        loc: {
          start: {
            line: 32,
            column: 48
          },
          end: {
            line: 44,
            column: 3
          }
        },
        line: 32
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 31
          },
          end: {
            line: 7,
            column: 43
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 7,
            column: 39
          },
          end: {
            line: 7,
            column: 43
          }
        }],
        line: 7
      }
    },
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
      "11": 0,
      "12": 0,
      "13": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "558d674dc51f7982be0c8d458156cafb9f932420"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_tzejgvt2u = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_tzejgvt2u();
import { Character, ResponseServer } from 'interfaces';
export default class characterService {
  static url: string = (cov_tzejgvt2u().s[0]++, (process.env.URL as string));
  static token: string = (cov_tzejgvt2u().s[1]++, (process.env.TOKEN as string));
  static async getAllCharacter(limit = (cov_tzejgvt2u().b[0][0]++, 1000)): Promise<Character[]> {
    cov_tzejgvt2u().f[0]++;
    const response = (cov_tzejgvt2u().s[2]++, await fetch(`${characterService.url}/character/?limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${characterService.token}`
      }
    }));
    const data: ResponseServer<Character> = (cov_tzejgvt2u().s[3]++, await response.json());
    const allCharacter = (cov_tzejgvt2u().s[4]++, data.docs);
    cov_tzejgvt2u().s[5]++;
    return allCharacter;
  }
  static async searchCharacterForName(query: string): Promise<Character[]> {
    cov_tzejgvt2u().f[1]++;
    const response = (cov_tzejgvt2u().s[6]++, await fetch(`${characterService.url}/character/?name=/${query}/i`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${characterService.token}`
      }
    }));
    const data: ResponseServer<Character> = (cov_tzejgvt2u().s[7]++, await response.json());
    const allCharacter = (cov_tzejgvt2u().s[8]++, data.docs);
    cov_tzejgvt2u().s[9]++;
    return allCharacter;
  }
  static async searchCharacterForID(id: string) {
    cov_tzejgvt2u().f[2]++;
    const response = (cov_tzejgvt2u().s[10]++, await fetch(`${characterService.url}/character/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${characterService.token}`
      }
    }));
    const data: ResponseServer<Character> = (cov_tzejgvt2u().s[11]++, await response.json());
    const allCharacter = (cov_tzejgvt2u().s[12]++, data.docs[0]);
    cov_tzejgvt2u().s[13]++;
    return allCharacter;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfdHplamd2dDJ1IiwiYWN0dWFsQ292ZXJhZ2UiLCJDaGFyYWN0ZXIiLCJSZXNwb25zZVNlcnZlciIsImNoYXJhY3RlclNlcnZpY2UiLCJ1cmwiLCJzIiwicHJvY2VzcyIsImVudiIsIlVSTCIsInRva2VuIiwiVE9LRU4iLCJnZXRBbGxDaGFyYWN0ZXIiLCJsaW1pdCIsImIiLCJQcm9taXNlIiwiZiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJqc29uIiwiYWxsQ2hhcmFjdGVyIiwiZG9jcyIsInNlYXJjaENoYXJhY3RlckZvck5hbWUiLCJxdWVyeSIsInNlYXJjaENoYXJhY3RlckZvcklEIiwiaWQiXSwic291cmNlcyI6WyJjaGFyYWN0ZXJTZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJhY3RlciwgUmVzcG9uc2VTZXJ2ZXIgfSBmcm9tICdpbnRlcmZhY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hhcmFjdGVyU2VydmljZSB7XG4gIHN0YXRpYyB1cmw6IHN0cmluZyA9IHByb2Nlc3MuZW52LlVSTCBhcyBzdHJpbmc7XG4gIHN0YXRpYyB0b2tlbjogc3RyaW5nID0gcHJvY2Vzcy5lbnYuVE9LRU4gYXMgc3RyaW5nO1xuXG4gIHN0YXRpYyBhc3luYyBnZXRBbGxDaGFyYWN0ZXIobGltaXQgPSAxMDAwKTogUHJvbWlzZTxDaGFyYWN0ZXJbXT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y2hhcmFjdGVyU2VydmljZS51cmx9L2NoYXJhY3Rlci8/bGltaXQ9JHtsaW1pdH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y2hhcmFjdGVyU2VydmljZS50b2tlbn1gLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhOiBSZXNwb25zZVNlcnZlcjxDaGFyYWN0ZXI+ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGFsbENoYXJhY3RlciA9IGRhdGEuZG9jcztcbiAgICByZXR1cm4gYWxsQ2hhcmFjdGVyO1xuICB9XG4gIHN0YXRpYyBhc3luYyBzZWFyY2hDaGFyYWN0ZXJGb3JOYW1lKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPENoYXJhY3RlcltdPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjaGFyYWN0ZXJTZXJ2aWNlLnVybH0vY2hhcmFjdGVyLz9uYW1lPS8ke3F1ZXJ5fS9pYCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2NoYXJhY3RlclNlcnZpY2UudG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YTogUmVzcG9uc2VTZXJ2ZXI8Q2hhcmFjdGVyPiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBhbGxDaGFyYWN0ZXIgPSBkYXRhLmRvY3M7XG5cbiAgICByZXR1cm4gYWxsQ2hhcmFjdGVyO1xuICB9XG4gIHN0YXRpYyBhc3luYyBzZWFyY2hDaGFyYWN0ZXJGb3JJRChpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjaGFyYWN0ZXJTZXJ2aWNlLnVybH0vY2hhcmFjdGVyLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2NoYXJhY3RlclNlcnZpY2UudG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YTogUmVzcG9uc2VTZXJ2ZXI8Q2hhcmFjdGVyPiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBhbGxDaGFyYWN0ZXIgPSBkYXRhLmRvY3NbMF07XG5cbiAgICByZXR1cm4gYWxsQ2hhcmFjdGVyO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGFBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGFBQUE7QUFmWixTQUFTRSxTQUFTLEVBQUVDLGNBQWMsUUFBUSxZQUFZO0FBRXRELGVBQWUsTUFBTUMsZ0JBQWdCLENBQUM7RUFDcEMsT0FBT0MsR0FBRyxFQUFFLE1BQU0sSUFBQUwsYUFBQSxHQUFBTSxDQUFBLFFBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxHQUFHLElBQUksTUFBTTtFQUM5QyxPQUFPQyxLQUFLLEVBQUUsTUFBTSxJQUFBVixhQUFBLEdBQUFNLENBQUEsUUFBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNHLEtBQUssSUFBSSxNQUFNO0VBRWxELGFBQWFDLGVBQWVBLENBQUNDLEtBQUssSUFBQWIsYUFBQSxHQUFBYyxDQUFBLFVBQUcsSUFBSSxFQUFDLEVBQUVDLE9BQU8sQ0FBQ2IsU0FBUyxFQUFF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