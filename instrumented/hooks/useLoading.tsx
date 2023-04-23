function cov_1vuyacmd37() {
  var path = "/home/gekalo1025/Desktop/project/learn-react/src/hooks/useLoading.tsx";
  var hash = "bda46bf7c9b8fd7669923d4f36219c2c15e39274";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gekalo1025/Desktop/project/learn-react/src/hooks/useLoading.tsx",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 36
        },
        end: {
          line: 5,
          column: 51
        }
      },
      "1": {
        start: {
          line: 6,
          column: 28
        },
        end: {
          line: 6,
          column: 40
        }
      },
      "2": {
        start: {
          line: 8,
          column: 18
        },
        end: {
          line: 21,
          column: 8
        }
      },
      "3": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "4": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 19
        }
      },
      "5": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 31
        }
      },
      "6": {
        start: {
          line: 11,
          column: 25
        },
        end: {
          line: 11,
          column: 29
        }
      },
      "7": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 23
        }
      },
      "8": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 16,
          column: 7
        }
      },
      "9": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 32
        }
      },
      "10": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 32
        }
      },
      "11": {
        start: {
          line: 18,
          column: 25
        },
        end: {
          line: 18,
          column: 30
        }
      },
      "12": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 39
        }
      }
    },
    fnMap: {
      "0": {
        name: "useLoading",
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 34
          }
        },
        loc: {
          start: {
            line: 4,
            column: 57
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 30
          },
          end: {
            line: 8,
            column: 31
          }
        },
        loc: {
          start: {
            line: 8,
            column: 42
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 11,
            column: 19
          },
          end: {
            line: 11,
            column: 20
          }
        },
        loc: {
          start: {
            line: 11,
            column: 25
          },
          end: {
            line: 11,
            column: 29
          }
        },
        line: 11
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 18,
            column: 19
          },
          end: {
            line: 18,
            column: 20
          }
        },
        loc: {
          start: {
            line: 18,
            column: 25
          },
          end: {
            line: 18,
            column: 30
          }
        },
        line: 18
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 6
          },
          end: {
            line: 16,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 6
          },
          end: {
            line: 16,
            column: 7
          }
        }, {
          start: {
            line: 14,
            column: 6
          },
          end: {
            line: 16,
            column: 7
          }
        }],
        line: 14
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
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bda46bf7c9b8fd7669923d4f36219c2c15e39274"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1vuyacmd37 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1vuyacmd37();
import { useCallback, useState } from 'react';
type useLoading = () => Promise<void>;
export default function useLoading(callback: useLoading) {
  cov_1vuyacmd37().f[0]++;
  const [isLoading, setIsLoading] = (cov_1vuyacmd37().s[0]++, useState(false));
  const [error, setError] = (cov_1vuyacmd37().s[1]++, useState(''));
  const loading = (cov_1vuyacmd37().s[2]++, useCallback(async () => {
    cov_1vuyacmd37().f[1]++;
    cov_1vuyacmd37().s[3]++;
    try {
      cov_1vuyacmd37().s[4]++;
      setError('');
      cov_1vuyacmd37().s[5]++;
      setIsLoading(() => {
        cov_1vuyacmd37().f[2]++;
        cov_1vuyacmd37().s[6]++;
        return true;
      });
      cov_1vuyacmd37().s[7]++;
      await callback();
    } catch (error) {
      cov_1vuyacmd37().s[8]++;
      if (error instanceof Error) {
        cov_1vuyacmd37().b[0][0]++;
        cov_1vuyacmd37().s[9]++;
        setError(error.message);
      } else {
        cov_1vuyacmd37().b[0][1]++;
      }
    } finally {
      cov_1vuyacmd37().s[10]++;
      setIsLoading(() => {
        cov_1vuyacmd37().f[3]++;
        cov_1vuyacmd37().s[11]++;
        return false;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []));
  cov_1vuyacmd37().s[12]++;
  return {
    isLoading,
    loading,
    error
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXZ1eWFjbWQzNyIsImFjdHVhbENvdmVyYWdlIiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZUxvYWRpbmciLCJQcm9taXNlIiwiY2FsbGJhY2siLCJmIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicyIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwiRXJyb3IiLCJiIiwibWVzc2FnZSJdLCJzb3VyY2VzIjpbInVzZUxvYWRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbnR5cGUgdXNlTG9hZGluZyA9ICgpID0+IFByb21pc2U8dm9pZD47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUxvYWRpbmcoY2FsbGJhY2s6IHVzZUxvYWRpbmcpIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgbG9hZGluZyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0RXJyb3IoJycpO1xuICAgICAgc2V0SXNMb2FkaW5nKCgpID0+IHRydWUpO1xuICAgICAgYXdhaXQgY2FsbGJhY2soKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZygoKSA9PiBmYWxzZSk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuICByZXR1cm4geyBpc0xvYWRpbmcsIGxvYWRpbmcsIGVy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