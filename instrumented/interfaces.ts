function cov_3tg889h1r() {
  var path = "/home/gekalo1025/Desktop/project/learn-react/src/interfaces.ts";
  var hash = "630e4106e703fa86c2c8cec7317d3e5a62370db2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gekalo1025/Desktop/project/learn-react/src/interfaces.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "630e4106e703fa86c2c8cec7317d3e5a62370db2"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_3tg889h1r = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_3tg889h1r();
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface Character {
  _id: string;
  height: '';
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
}
export interface ResponseServer<T> {
  docs: T[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfM3RnODg5aDFyIiwiYWN0dWFsQ292ZXJhZ2UiLCJQcm9kdWN0IiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJkaXNjb3VudFBlcmNlbnRhZ2UiLCJyYXRpbmciLCJzdG9jayIsImJyYW5kIiwiY2F0ZWdvcnkiLCJ0aHVtYm5haWwiLCJpbWFnZXMiLCJDaGFyYWN0ZXIiLCJfaWQiLCJoZWlnaHQiLCJyYWNlIiwiZ2VuZGVyIiwiYmlydGgiLCJzcG91c2UiLCJkZWF0aCIsInJlYWxtIiwiaGFpciIsIm5hbWUiLCJ3aWtpVXJsIiwiUmVzcG9uc2VTZXJ2ZXIiLCJkb2NzIiwiVCIsInRvdGFsIiwibGltaXQiLCJvZmZzZXQiLCJwYWdlIiwicGFnZXMiXSwic291cmNlcyI6WyJpbnRlcmZhY2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdCB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG4gIGRpc2NvdW50UGVyY2VudGFnZTogbnVtYmVyO1xuICByYXRpbmc6IG51bWJlcjtcbiAgc3RvY2s6IG51bWJlcjtcbiAgYnJhbmQ6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdGh1bWJuYWlsOiBzdHJpbmc7XG4gIGltYWdlczogc3RyaW5nW107XG59XG5leHBvcnQgaW50ZXJmYWNlIENoYXJhY3RlciB7XG4gIF9pZDogc3RyaW5nO1xuICBoZWlnaHQ6ICcnO1xuICByYWNlOiBzdHJpbmc7XG4gIGdlbmRlcjogc3RyaW5nO1xuICBiaXJ0aDogc3RyaW5nO1xuICBzcG91c2U6IHN0cmluZztcbiAgZGVhdGg6IHN0cmluZztcbiAgcmVhbG06IHN0cmluZztcbiAgaGFpcjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHdpa2lVcmw6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VTZXJ2ZXI8VD4ge1xuICBkb2NzOiBUW107XG4gIHRvdGFsOiBudW1iZXI7XG4gIGxpbWl0OiBudW1iZXI7XG4gIG9mZnNldDogbnVtYmVyO1xuICBwYWdlOiBudW1iZXI7XG4gIHBhZ2VzOiBudW1iZXI7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBZlosT0FBTyxVQUFVRSxPQUFPLENBQUM7RUFDdkJDLEVBQUUsRUFBRSxNQUFNO0VBQ1ZDLEtBQUssRUFBRSxNQUFNO0VBQ2JDLFdBQVcsRUFBRSxNQUFNO0VBQ25CQyxLQUFLLEVBQUUsTUFBTTtFQUNiQyxrQkFBa0IsRUFBRSxNQUFNO0VBQzFCQyxNQUFNLEVBQUUsTUFBTTtFQUNkQyxLQUFLLEVBQUUsTUFBTTtFQUNiQyxLQUFLLEVBQUUsTUFBTTtFQUNiQyxRQUFRLEVBQUUsTUFBTTtFQUNoQkMsU0FBUyxFQUFFLE1BQU07RUFDakJDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDbEI7QUFDQSxPQUFPLFVBQVVDLFNBQVMsQ0FBQztFQUN6QkMsR0FBRyxFQUFFLE1BQU07RUFDWEMsTUFBTSxFQUFFLEVBQUU7RUFDVkMsSUFBSSxFQUFFLE1BQU07RUFDWkMsTUFBTSxFQUFFLE1BQU07RUFDZEMsS0FBSyxFQUFFLE1BQU07RUFDYkMsTUFBTSxFQUFFLE1BQU07RUFDZEMsS0FBSyxFQUFFLE1BQU07RUFDYkMsS0FBSyxFQUFFLE1BQU07RUFDYkMsSUFBSSxFQUFFLE1BQU07RUFDWkMsSUFBSSxFQUFFLE1BQU07RUFDWkMsT0FBTyxFQUFFLE1BQU07QUFDakI7QUFDQSxPQUFPLFVBQVVDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNqQ0MsSUFBSSxFQUFFQyxDQUFDLEVBQUU7RUFDVEMsS0FBSyxFQUFFLE1BQU07RUFDYkMsS0FBSyxFQUFFLE1BQU07RUFDYkMsTUFBTSxFQUFFLE1BQU07RUFDZEMsSUFBSSxFQUFFLE1BQU07RUFDWkMsS0FBSyxFQUFFLE1BQU07QUFDZiJ9