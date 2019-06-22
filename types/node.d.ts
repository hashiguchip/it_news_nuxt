// processは'NodeJS.Process'で定義されてる
declare namespace NodeJS {
  interface Process {
    server: boolean;
    browser: boolean;
  }
}
