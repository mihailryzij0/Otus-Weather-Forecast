import {findListCities, makeListCities} from './processingLocalStorage'

describe('save data to local storage', () => {
  let storage;
  const storageSetItem = global.Storage.prototype.setItem;
  const storageGetItem = global.Storage.prototype.getItem;


  beforeAll(() => {
    storage = {};
    global.Storage.prototype.setItem = jest.fn((key, value) => {
        storage[key] = value;
    });
    global.Storage.prototype.getItem = jest.fn(
      (key) => storage[key] ?? "[]"
    );
  });

  beforeEach(() => {
    storage = {};
  });

  afterAll(() => {
    global.Storage.prototype.setItem = storageSetItem;
    global.Storage.prototype.getItem = storageGetItem;
  });
  
    it('sending and filtering data', async () => {
        expect(findListCities()).toStrictEqual([]);
        expect(global.Storage.prototype.getItem).toHaveBeenCalledWith('array');
    })
    it('', async () => {
        const arr = [1,2,3,3,4,5,6,7,8,2];
        const newarr = '[2,1,3,4,5,6,7,8]';
        const expectStorage = {};
        expectStorage.array = newarr;

        makeListCities(arr, 2)
        expect(storage).toStrictEqual(expectStorage);
    })
  })