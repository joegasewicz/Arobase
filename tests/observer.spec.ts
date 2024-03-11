import {ModelSubject} from "../src";

describe("observer", () => {

    describe("#ModelSubject()", () => {
      it("should create an instance of modelSubject", () => {
          const model = {name: "Joe"};
          const modelSubject = new ModelSubject(model);
          expect(modelSubject).toBeInstanceOf(ModelSubject);
      });
    });
});