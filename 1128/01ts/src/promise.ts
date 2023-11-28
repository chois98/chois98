// fs : node 모듈 중 하나, fs = filesystem 약어
import { error } from "console";
import { promises } from "dns";
import { readFileSync, readFile } from "fs";
console.log("read packge.json using synchronous api...");
const buffer = readFileSync("./package.json");
console.log(buffer.toString());

// 동기처리 방식으로 package.json 파일을 가져온 것

const readFilePromise = (filename: string): Promise<string> => {
  new Promise<string>((resolve, reject) => {
    readFile(filename, (error:Error, buffer:Buffer) => {
      if (error) {
        reject(error);
      } else {
        resolve(buffer.toString());
      }
    });
  });
};

async function () {
  await
}
