describe("wordFindReplace", function() {
  it('returns "Hello Universe" for a string entered with "Universe" replaced with "World"', function() {
    expect(wordFindReplace("Hello Universe", "Universe", "World")).to.equal("Hello World");
  });


});
