const uncompress = require('./uncompress');

test("x3y4z2 should be xxxyyyyzz", ()=>{
    expect(uncompress('x3y4z2')).toBe('xxxyyyyzz');
});

test("a5b2c4z1 should be aaaaabbccccz", ()=>{
    expect(uncompress('a5b2c4z1')).toBe('aaaaabbccccz');
});

//console.log(uncompress('b1o2t1')); // 'boot'
test('b1o2t1 should be boot', ()=>{
    expect(uncompress('b1o2t1')).toBe('boot');
})
