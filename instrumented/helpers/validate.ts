function cov_291g26ulwc() {
  var path = "/home/gekalo1025/Desktop/project/learn-react/src/helpers/validate.ts";
  var hash = "09fffad463707af4a467f2cb37777e6705de4bee";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gekalo1025/Desktop/project/learn-react/src/helpers/validate.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 83
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 35
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "2": {
        start: {
          line: 25,
          column: 32
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "3": {
        start: {
          line: 32,
          column: 21
        },
        end: {
          line: 32,
          column: 60
        }
      },
      "4": {
        start: {
          line: 33,
          column: 24
        },
        end: {
          line: 33,
          column: 48
        }
      },
      "5": {
        start: {
          line: 34,
          column: 20
        },
        end: {
          line: 34,
          column: 21
        }
      },
      "6": {
        start: {
          line: 35,
          column: 20
        },
        end: {
          line: 35,
          column: 53
        }
      },
      "7": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 45
        }
      },
      "8": {
        start: {
          line: 39,
          column: 34
        },
        end: {
          line: 39,
          column: 91
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 31,
            column: 12
          },
          end: {
            line: 31,
            column: 13
          }
        },
        loc: {
          start: {
            line: 31,
            column: 77
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 31
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 36,
            column: 11
          },
          end: {
            line: 36,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 36,
            column: 11
          },
          end: {
            line: 36,
            column: 18
          }
        }, {
          start: {
            line: 36,
            column: 22
          },
          end: {
            line: 36,
            column: 44
          }
        }],
        line: 36
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
      "8": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "09fffad463707af4a467f2cb37777e6705de4bee"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_291g26ulwc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_291g26ulwc();
export const {
  emptyErrorMessage,
  minLengthErrorMessage,
  maxLengthErrorMessage
} = (cov_291g26ulwc().s[0]++, {
  emptyErrorMessage: 'This field is required',
  minLengthErrorMessage: `Minimum length characters `,
  maxLengthErrorMessage: `Maximum length characters `
});
export const validationFirstName = (cov_291g26ulwc().s[1]++, {
  required: {
    value: true,
    message: emptyErrorMessage
  },
  minLength: {
    value: 3,
    message: `${minLengthErrorMessage + 3}`
  },
  maxLength: {
    value: 15,
    message: `${maxLengthErrorMessage + 15}`
  },
  pattern: {
    value: /^[A-Z][a-z]{2,}/gm,
    message: 'Lower case name'
  }
});
export const validateBirthday = (cov_291g26ulwc().s[2]++, {
  valueAsDate: true,
  required: {
    value: true,
    message: emptyErrorMessage
  },
  validate: (value: string | boolean | FileList | Date): boolean | string => {
    cov_291g26ulwc().f[0]++;
    const dateYear = (cov_291g26ulwc().s[3]++, new Date((value as string)).getFullYear());
    const currentDate = (cov_291g26ulwc().s[4]++, new Date().getFullYear());
    const yearAge = (cov_291g26ulwc().s[5]++, 5);
    const isValid = (cov_291g26ulwc().s[6]++, dateYear <= currentDate - yearAge);
    cov_291g26ulwc().s[7]++;
    return (cov_291g26ulwc().b[0][0]++, isValid) || (cov_291g26ulwc().b[0][1]++, 'At least 5 years ago');
  }
});
export const validationCheckbox = (cov_291g26ulwc().s[8]++, {
  required: {
    value: true,
    message: emptyErrorMessage
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjkxZzI2dWx3YyIsImFjdHVhbENvdmVyYWdlIiwiZW1wdHlFcnJvck1lc3NhZ2UiLCJtaW5MZW5ndGhFcnJvck1lc3NhZ2UiLCJtYXhMZW5ndGhFcnJvck1lc3NhZ2UiLCJzIiwidmFsaWRhdGlvbkZpcnN0TmFtZSIsInJlcXVpcmVkIiwidmFsdWUiLCJtZXNzYWdlIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwicGF0dGVybiIsInZhbGlkYXRlQmlydGhkYXkiLCJ2YWx1ZUFzRGF0ZSIsInZhbGlkYXRlIiwiRmlsZUxpc3QiLCJEYXRlIiwiZiIsImRhdGVZZWFyIiwiZ2V0RnVsbFllYXIiLCJjdXJyZW50RGF0ZSIsInllYXJBZ2UiLCJpc1ZhbGlkIiwiYiIsInZhbGlkYXRpb25DaGVja2JveCJdLCJzb3VyY2VzIjpbInZhbGlkYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB7IGVtcHR5RXJyb3JNZXNzYWdlLCBtaW5MZW5ndGhFcnJvck1lc3NhZ2UsIG1heExlbmd0aEVycm9yTWVzc2FnZSB9ID0ge1xuICBlbXB0eUVycm9yTWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxuICBtaW5MZW5ndGhFcnJvck1lc3NhZ2U6IGBNaW5pbXVtIGxlbmd0aCBjaGFyYWN0ZXJzIGAsXG4gIG1heExlbmd0aEVycm9yTWVzc2FnZTogYE1heGltdW0gbGVuZ3RoIGNoYXJhY3RlcnMgYCxcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uRmlyc3ROYW1lID0ge1xuICByZXF1aXJlZDoge1xuICAgIHZhbHVlOiB0cnVlLFxuICAgIG1lc3NhZ2U6IGVtcHR5RXJyb3JNZXNzYWdlLFxuICB9LFxuICBtaW5MZW5ndGg6IHtcbiAgICB2YWx1ZTogMyxcbiAgICBtZXNzYWdlOiBgJHttaW5MZW5ndGhFcnJvck1lc3NhZ2UgKyAzfWAsXG4gIH0sXG4gIG1heExlbmd0aDoge1xuICAgIHZhbHVlOiAxNSxcbiAgICBtZXNzYWdlOiBgJHttYXhMZW5ndGhFcnJvck1lc3NhZ2UgKyAxNX1gLFxuICB9LFxuICBwYXR0ZXJuOiB7XG4gICAgdmFsdWU6IC9eW0EtWl1bYS16XXsyLH0vZ20sXG4gICAgbWVzc2FnZTogJ0xvd2VyIGNhc2UgbmFtZScsXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlQmlydGhkYXkgPSB7XG4gIHZhbHVlQXNEYXRlOiB0cnVlLFxuICByZXF1aXJlZDoge1xuICAgIHZhbHVlOiB0cnVlLFxuICAgIG1lc3NhZ2U6IGVtcHR5RXJyb3JNZXNzYWdlLFxuICB9LFxuICB2YWxpZGF0ZTogKHZhbHVlOiBzdHJpbmcgfCBib29sZWFuIHwgRmlsZUxpc3QgfCBEYXRlKTogYm9vbGVhbiB8IHN0cmluZyA9PiB7XG4gICAgY29uc3QgZGF0ZVllYXIgPSBuZXcgRGF0ZSh2YWx1ZSBhcyBzdHJpbmcpLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgeWVhckFnZSA9IDU7XG4gICAgY29uc3QgaXNWYWxpZCA9IGRhdGVZZWFyIDw9IGN1cnJlbnREYXRlIC0geWVhckFnZTtcbiAgICByZXR1cm4gaXNWYWxpZCB8fCAnQXQgbGVhc3QgNSB5ZWFycyBhZ28nO1xuICB9LFxufTtcbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uQ2hlY2tib3ggPSB7IHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiBlbXB0eUVycm9yTWVzc2FnZSB9IH07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixPQUFPLE1BQU07RUFBRUUsaUJBQWlCO0VBQUVDLHFCQUFxQjtFQUFFQztBQUFzQixDQUFDLElBQUFKLGNBQUEsR0FBQUssQ0FBQSxPQUFHO0VBQ2pGSCxpQkFBaUIsRUFBRSx3QkFBd0I7RUFDM0NDLHFCQUFxQixFQUFHLDRCQUEyQjtFQUNuREMscUJBQXFCLEVBQUc7QUFDMUIsQ0FBQztBQUVELE9BQU8sTUFBTUUsbUJBQW1CLElBQUFOLGNBQUEsR0FBQUssQ0FBQSxPQUFHO0VBQ2pDRSxRQUFRLEVBQUU7SUFDUkMsS0FBSyxFQUFFLElBQUk7SUFDWEMsT0FBTyxFQUFFUDtFQUNYLENBQUM7RUFDRFEsU0FBUyxFQUFFO0lBQ1RGLEtBQUssRUFBRSxDQUFDO0lBQ1JDLE9BQU8sRUFBRyxHQUFFTixxQkFBcUIsR0FBRyxDQUFFO0VBQ3hDLENBQUM7RUFDRFEsU0FBUyxFQUFFO0lBQ1RILEtBQUssRUFBRSxFQUFFO0lBQ1RDLE9BQU8sRUFBRyxHQUFFTCxxQkFBcUIsR0FBRyxFQUFHO0VBQ3pDLENBQUM7RUFDRFEsT0FBTyxFQUFFO0lBQ1BKLEtBQUssRUFBRSxtQkFBbUI7SUFDMUJDLE9BQU8sRUFBRTtFQUNYO0FBQ0YsQ0FBQztBQUNELE9BQU8sTUFBTUksZ0JBQWdCLElBQUFiLGNBQUEsR0FBQUssQ0FBQSxPQUFHO0VBQzlCUyxXQUFXLEVBQUUsSUFBSTtFQUNqQlAsUUFBUSxFQUFFO0lBQ1JDLEtBQUssRUFBRSxJQUFJO0lBQ1hDLE9BQU8sRUFBRVA7RUFDWCxDQUFDO0VBQ0RhLFFBQVEsRUFBRUEsQ0FBQ1AsS0FBSyxFQUFFLE1BQU0sR0FBRyxPQUFPLEdBQUdRLFFBQVEsR0FBR0MsSUFBSSxDQUFDLEVBQUUsT0FBTyxHQUFHLE1BQU0sSUFBSTtJQUFBakIsY0FBQSxHQUFBa0IsQ0FBQTtJQUN6RSxNQUFNQyxRQUFRLElBQUFuQixjQUFBLEdBQUFLLENBQUEsT0FBRyxJQUFJWSxJQUFJLEVBQUNULEtBQUssSUFBSSxNQUFNLEVBQUMsQ0FBQ1ksV0FBVyxFQUFFO0lBQ3hELE1BQU1DLFdBQVcsSUFBQXJCLGNBQUEsR0FBQUssQ0FBQSxPQUFHLElBQUlZLElBQUksRUFBRSxDQUFDRyxXQUFXLEVBQUU7SUFDNUMsTUFBTUUsT0FBTyxJQUFBdEIsY0FBQSxHQUFBSyxDQUFBLE9BQUcsQ0FBQztJQUNqQixNQUFNa0IsT0FBTyxJQUFBdkIsY0FBQSxHQUFBSyxDQUFBLE9BQUdjLFFBQVEsSUFBSUUsV0FBVyxHQUFHQyxPQUFPO0lBQUN0QixjQUFBLEdBQUFLLENBQUE7SUFDbEQsT0FBTyxDQUFBTCxjQUFBLEdBQUF3QixDQUFBLFVBQUFELE9BQU8sTUFBQXZCLGNBQUEsR0FBQXdCLENBQUEsVUFBSSxzQkFBc0I7RUFDMUM7QUFDRixDQUFDO0FBQ0QsT0FBTyxNQUFNQyxrQkFBa0IsSUFBQXpCLGNBQUEsR0FBQUssQ0FBQSxPQUFHO0VBQUVFLFFBQVEsRUFBRTtJQUFFQyxLQUFLLEVBQUUsSUFBSTtJQUFFQyxPQUFPLEVBQUVQO0VBQWtCO0FBQUUsQ0FBQyJ9