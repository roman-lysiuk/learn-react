function cov_vuq3c3xvd() {
  var path = "/home/gekalo1025/Desktop/project/learn-react/src/mocks/handers.ts";
  var hash = "658ea4b7afa0ba4ff4d78002a7414cd49aab2887";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gekalo1025/Desktop/project/learn-react/src/mocks/handers.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 24
        },
        end: {
          line: 112,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 55,
          column: 6
        }
      },
      "2": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 83,
          column: 6
        }
      },
      "3": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 110,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 49
          },
          end: {
            line: 4,
            column: 50
          }
        },
        loc: {
          start: {
            line: 4,
            column: 68
          },
          end: {
            line: 56,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 58,
            column: 73
          },
          end: {
            line: 58,
            column: 74
          }
        },
        loc: {
          start: {
            line: 58,
            column: 92
          },
          end: {
            line: 84,
            column: 3
          }
        },
        line: 58
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 85,
            column: 73
          },
          end: {
            line: 85,
            column: 74
          }
        },
        loc: {
          start: {
            line: 85,
            column: 92
          },
          end: {
            line: 111,
            column: 3
          }
        },
        line: 85
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
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "658ea4b7afa0ba4ff4d78002a7414cd49aab2887"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_vuq3c3xvd = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_vuq3c3xvd();
import characterService from '../API/characterService';
import { rest } from 'msw';
export const handlers = (cov_vuq3c3xvd().s[0]++, [rest.get(`${characterService.url}/character/`, (req, res, ctx) => {
  cov_vuq3c3xvd().f[0]++;
  cov_vuq3c3xvd().s[1]++;
  return res(ctx.status(200), ctx.json({
    docs: [{
      _id: '5cd99d4bde30eff6ebccfbbe',
      height: '',
      race: 'Human',
      gender: 'Female',
      birth: '',
      spouse: 'Belemir',
      death: '',
      realm: '',
      hair: '',
      name: 'Adanel',
      wikiUrl: 'http://lotr.wikia.com//wiki/Adanel'
    }, {
      _id: '5cd99d4bde30eff6ebccfbbf',
      height: '',
      race: 'Human',
      gender: 'Male',
      birth: 'Before ,TA 1944',
      spouse: '',
      death: 'Late ,Third Age',
      realm: '',
      hair: '',
      name: 'Adrahil I',
      wikiUrl: 'http://lotr.wikia.com//wiki/Adrahil_I'
    }, {
      _id: '5cd99d4bde30eff6ebccfbc1',
      height: '2.55',
      race: 'Elf',
      gender: 'Male',
      birth: 'YT during the ,Noontide of Valinor',
      spouse: 'Loved ,Andreth but remained unmarried',
      death: 'FA 455',
      realm: 'Rohan',
      hair: 'Golden',
      name: 'Aegnor',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aegnor'
    }],
    total: 3,
    limit: 1000,
    offset: 0,
    page: 1,
    pages: 1
  }));
}), rest.get(`${characterService.url}/character/5cd99d4bde30eff6ebccfbc1`, (req, res, ctx) => {
  cov_vuq3c3xvd().f[1]++;
  cov_vuq3c3xvd().s[2]++;
  return res(ctx.status(200), ctx.json({
    docs: [{
      _id: '5cd99d4bde30eff6ebccfbc1',
      height: '2.55',
      race: 'Elf',
      gender: 'Male',
      birth: 'YT during the ,Noontide of Valinor',
      spouse: 'Loved ,Andreth but remained unmarried',
      death: 'FA 455',
      realm: 'Rohan',
      hair: 'Golden',
      name: 'Aegnor',
      wikiUrl: 'http://lotr.wikia.com//wiki/Aegnor'
    }],
    total: 1,
    limit: 1000,
    offset: 0,
    page: 1,
    pages: 1
  }));
}), rest.get(`${characterService.url}/character/5cd99d4bde30eff6ebccfbbe`, (req, res, ctx) => {
  cov_vuq3c3xvd().f[2]++;
  cov_vuq3c3xvd().s[3]++;
  return res(ctx.status(200), ctx.json({
    docs: [{
      _id: '5cd99d4bde30eff6ebccfbbe',
      height: '',
      race: 'Human',
      gender: 'Female',
      birth: '',
      spouse: 'Belemir',
      death: '',
      realm: '',
      hair: '',
      name: 'Adanel',
      wikiUrl: 'http://lotr.wikia.com//wiki/Adanel'
    }],
    total: 1,
    limit: 1000,
    offset: 0,
    page: 1,
    pages: 1
  }));
})]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfdnVxM2MzeHZkIiwiYWN0dWFsQ292ZXJhZ2UiLCJjaGFyYWN0ZXJTZXJ2aWNlIiwicmVzdCIsImhhbmRsZXJzIiwicyIsImdldCIsInVybCIsInJlcSIsInJlcyIsImN0eCIsImYiLCJzdGF0dXMiLCJqc29uIiwiZG9jcyIsIl9pZCIsImhlaWdodCIsInJhY2UiLCJnZW5kZXIiLCJiaXJ0aCIsInNwb3VzZSIsImRlYXRoIiwicmVhbG0iLCJoYWlyIiwibmFtZSIsIndpa2lVcmwiLCJ0b3RhbCIsImxpbWl0Iiwib2Zmc2V0IiwicGFnZSIsInBhZ2VzIl0sInNvdXJjZXMiOlsiaGFuZGVycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhcmFjdGVyU2VydmljZSBmcm9tICcuLi9BUEkvY2hhcmFjdGVyU2VydmljZSc7XG5pbXBvcnQgeyByZXN0IH0gZnJvbSAnbXN3JztcbmV4cG9ydCBjb25zdCBoYW5kbGVycyA9IFtcbiAgcmVzdC5nZXQoYCR7Y2hhcmFjdGVyU2VydmljZS51cmx9L2NoYXJhY3Rlci9gLCAocmVxLCByZXMsIGN0eCkgPT4ge1xuICAgIHJldHVybiByZXMoXG4gICAgICBjdHguc3RhdHVzKDIwMCksXG4gICAgICBjdHguanNvbih7XG4gICAgICAgIGRvY3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfaWQ6ICc1Y2Q5OWQ0YmRlMzBlZmY2ZWJjY2ZiYmUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgICAgIHJhY2U6ICdIdW1hbicsXG4gICAgICAgICAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgICAgICAgICAgYmlydGg6ICcnLFxuICAgICAgICAgICAgc3BvdXNlOiAnQmVsZW1pcicsXG4gICAgICAgICAgICBkZWF0aDogJycsXG4gICAgICAgICAgICByZWFsbTogJycsXG4gICAgICAgICAgICBoYWlyOiAnJyxcbiAgICAgICAgICAgIG5hbWU6ICdBZGFuZWwnLFxuICAgICAgICAgICAgd2lraVVybDogJ2h0dHA6Ly9sb3RyLndpa2lhLmNvbS8vd2lraS9BZGFuZWwnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgX2lkOiAnNWNkOTlkNGJkZTMwZWZmNmViY2NmYmJmJyxcbiAgICAgICAgICAgIGhlaWdodDogJycsXG4gICAgICAgICAgICByYWNlOiAnSHVtYW4nLFxuICAgICAgICAgICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgICAgICAgICBiaXJ0aDogJ0JlZm9yZSAsVEEgMTk0NCcsXG4gICAgICAgICAgICBzcG91c2U6ICcnLFxuICAgICAgICAgICAgZGVhdGg6ICdMYXRlICxUaGlyZCBBZ2UnLFxuICAgICAgICAgICAgcmVhbG06ICcnLFxuICAgICAgICAgICAgaGFpcjogJycsXG4gICAgICAgICAgICBuYW1lOiAnQWRyYWhpbCBJJyxcbiAgICAgICAgICAgIHdpa2lVcmw6ICdodHRwOi8vbG90ci53aWtpYS5jb20vL3dpa2kvQWRyYWhpbF9JJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9pZDogJzVjZDk5ZDRiZGUzMGVmZjZlYmNjZmJjMScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcyLjU1JyxcbiAgICAgICAgICAgIHJhY2U6ICdFbGYnLFxuICAgICAgICAgICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgICAgICAgICBiaXJ0aDogJ1lUIGR1cmluZyB0aGUgLE5vb250aWRlIG9mIFZhbGlub3InLFxuICAgICAgICAgICAgc3BvdXNlOiAnTG92ZWQgLEFuZHJldGggYnV0IHJlbWFpbmVkIHVubWFycmllZCcsXG4gICAgICAgICAgICBkZWF0aDogJ0ZBIDQ1NScsXG4gICAgICAgICAgICByZWFsbTogJ1JvaGFuJyxcbiAgICAgICAgICAgIGhhaXI6ICdHb2xkZW4nLFxuICAgICAgICAgICAgbmFtZTogJ0FlZ25vcicsXG4gICAgICAgICAgICB3aWtpVXJsOiAnaHR0cDovL2xvdHIud2lraWEuY29tLy93aWtpL0FlZ25vcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdG90YWw6IDMsXG4gICAgICAgIGxpbWl0OiAxMDAwLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHBhZ2VzOiAxLFxuICAgICAgfSlcbiAgICApO1xuICB9KSxcblxuICByZXN0LmdldChgJHtjaGFyYWN0ZXJTZXJ2aWNlLnVybH0vY2hhcmFjdGVyLzVjZDk5ZDRiZGUzMGVmZjZlYmNjZmJjMWAsIChyZXEsIHJlcywgY3R4KSA9PiB7XG4gICAgcmV0dXJuIHJlcyhcbiAgICAgIGN0eC5zdGF0dXMoMjAwKSxcbiAgICAgIGN0eC5qc29uKHtcbiAgICAgICAgZG9jczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9pZDogJzVjZDk5ZDRiZGUzMGVmZjZlYmNjZmJjMScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcyLjU1JyxcbiAgICAgICAgICAgIHJhY2U6ICdFbGYnLFxuICAgICAgICAgICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgICAgICAgICBiaXJ0aDogJ1lUIGR1cmluZyB0aGUgLE5vb250aWRlIG9mIFZhbGlub3InLFxuICAgICAgICAgICAgc3BvdXNlOiAnTG92ZWQgLEFuZHJldGggYnV0IHJlbWFpbmVkIHVubWFycmllZCcsXG4gICAgICAgICAgICBkZWF0aDogJ0ZBIDQ1NScsXG4gICAgICAgICAgICByZWFsbTogJ1JvaGFuJyxcbiAgICAgICAgICAgIGhhaXI6ICdHb2xkZW4nLFxuICAgICAgICAgICAgbmFtZTogJ0FlZ25vcicsXG4gICAgICAgICAgICB3aWtpVXJsOiAnaHR0cDovL2xvdHIud2lraWEuY29tLy93aWtpL0FlZ25vcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdG90YWw6IDEsXG4gICAgICAgIGxpbWl0OiAxMDAwLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHBhZ2VzOiAxLFxuICAgICAgfSlcbiAgICApO1xuICB9KSxcbiAgcmVzdC5nZXQoYCR7Y2hhcmFjdGVyU2VydmljZS51cmx9L2NoYXJhY3Rlci81Y2Q5OWQ0YmRlMzBlZmY2ZWJjY2ZiYmVgLCAocmVxLCByZXMsIGN0eCkgPT4ge1xuICAgIHJldHVybiByZXMoXG4gICAgICBjdHguc3RhdHVzKDIwMCksXG4gICAgICBjdHguanNvbih7XG4gICAgICAgIGRvY3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfaWQ6ICc1Y2Q5OWQ0YmRlMzBlZmY2ZWJjY2ZiYmUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgICAgIHJhY2U6ICdIdW1hbicsXG4gICAgICAgICAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgICAgICAgICAgYmlydGg6ICcnLFxuICAgICAgICAgICAgc3BvdXNlOiAnQmVsZW1pcicsXG4gICAgICAgICAgICBkZWF0aDogJycsXG4gICAgICAgICAgICByZWFsbTogJycsXG4gICAgICAgICAgICBoYWlyOiAnJyxcbiAgICAgICAgICAgIG5hbWU6ICdBZGFuZWwnLFxuICAgICAgICAgICAgd2lraVVybDogJ2h0dHA6Ly9sb3RyLndpa2lhLmNvbS8vd2lraS9BZGFuZWwnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRvdGFsOiAxLFxuICAgICAgICBsaW1pdDogMTAwMCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBwYWdlczogMSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSksXG5dO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsYUFBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFB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