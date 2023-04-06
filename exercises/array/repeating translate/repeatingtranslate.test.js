const repeatingTranslate = require('./repeatingtranslate');

test("\"we like to go running fast\" should be \"we likelike to go runninging fastast\"", () => {
  expect(repeatingTranslate("we like to go running fast")).toBe("we likelike to go runninging fastast");
});

test("\"he cannot find the trash\" should be \"he cannotot findind thethe trashash\"", () => {
    expect(repeatingTranslate("he cannot find the trash")).toBe("he cannotot findind thethe trashash");
});

test("\"pasta is my favorite dish\" should be \"pastapasta is my favoritefavorite dishish\"", () => {
    expect(repeatingTranslate("pasta is my favorite dish")).toBe("pastapasta is my favoritefavorite dishish");
});

test("\"her family flew to France\" should be \"herer familyily flewew to FranceFrance\"", () => {
    expect(repeatingTranslate("her family flew to France")).toBe("herer familyily flewew to FranceFrance");
});
