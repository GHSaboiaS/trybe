const math = require('./math');
// mocking all functions inside math
jest.mock("./math");

test("#somar", () => {
  // could use mockImplementationOnce to mock function implementation only once, and then resume with normal behavior
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});