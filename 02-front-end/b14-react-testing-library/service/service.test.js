let service = require('./service');

afterEach(() => jest.clearAllMocks());

describe('testing randomNumber', () => {
  it('testing randomNumber with return value 10', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })
  
  it('testing randomNumber as division', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    service.randomNumber.mockReset(); // clears service.randomNumber implementation
    expect(service.randomNumber(10, 2)).not.toBe(5);
  })
  
  it('testing randomNumber with 3 parameters', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
    expect(service.randomNumber(1, 2, 3)).toBe(6);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  
    service.randomNumber.mockReset();
    service.randomNumber = jest.fn().mockImplementationOnce((a) => a * 2);
    expect(service.randomNumber(4)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })
})

describe('testing function1, function2, function3', () => {
  it('testing function1', () => {
    jest.spyOn(service, 'function1').mockImplementationOnce((str) => str.toLowerCase());
    expect(service.function1('GUILherme')).toBe('guilherme');
    expect(service.function1).toHaveBeenCalled();
    expect(service.function1).toHaveBeenCalledTimes(1);

    service.function1.mockRestore();
    expect(service.function1('guilherme')).toBe('GUILHERME');
  })

  it('testing function2', () => {
    service.function2 = jest.fn().mockImplementationOnce((str) => str[str.length - 1]);
    expect(service.function2('guilherme')).toBe('e');
    expect(service.function2).toHaveBeenCalled();
    expect(service.function2).toHaveBeenCalledTimes(1);
  })

  it('testing function3', () => {
    service.function3 = jest.fn().mockImplementationOnce((str1, str2, str3) => str1 + str2 + str3);
    expect(service.function3('a', 'b', 'c')).toBe('abc');
    expect(service.function3).toHaveBeenCalled();
    expect(service.function3).toHaveBeenCalledTimes(1);
  })
})
