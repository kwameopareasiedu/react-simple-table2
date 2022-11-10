import { resolveCellValue } from "./utils";

describe("Utils tests", () => {
  it("should resolve a string property", () => {
    const item = { name: "React Simple Table 2" };
    const nameProp = resolveCellValue(item, "name", 0);
    expect(nameProp).toEqual("React Simple Table 2");
  });

  it("should resolve a dot-notated string property", () => {
    const item = {
      name: "React Simple Table 2",
      author: {
        firstName: "Kwame",
        lastName: "Asiedu",
        otherNames: "Opare"
      }
    };

    const fNameProp = resolveCellValue(item, "author.firstName", 0);
    const lNameProp = resolveCellValue(item, "author.lastName", 0);
    const oNameProp = resolveCellValue(item, "author.otherNames", 0);

    expect(fNameProp).toEqual("Kwame");
    expect(lNameProp).toEqual("Asiedu");
    expect(oNameProp).toEqual("Opare");
  });

  it("should resolve with a function resolver", () => {
    const item = {
      name: "React Simple Table 2",
      author: {
        firstName: "Kwame",
        lastName: "Asiedu",
        otherNames: "Opare"
      }
    };

    const authNameProp = resolveCellValue(
      item,
      item => {
        const a = item.author;
        return `${a.firstName} ${a.otherNames} ${a.lastName} built ${item.name}`;
      },
      0
    );

    expect(authNameProp).toEqual(
      "Kwame Opare Asiedu built React Simple Table 2"
    );
  });
});
