let path;

// env 파일 경로 지정
switch (process.env.NODE_ENV) {
    // 개발 환경
  case "dev":
    path = `${__dirname}/.env.dev`;
    break;
    // 로컬 환경
  default:
    path = `${__dirname}/.env.local`;
}

// config 파일 설정 ( = properties)
require("dotenv").config({ path });