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


  afterAll(() => {
    global.Storage.prototype.setItem = storageSetItem;
    global.Storage.prototype.getItem = storageGetItem;
  });
  
    it('findListCities getting data from LocalStorage', async () => {
        expect(findListCities()).toStrictEqual([]);
        expect(global.Storage.prototype.getItem).toHaveBeenCalledWith('array');
    })
    it('makeListCities saves 10 values and removes duplicates ', async () => {
        const arr = [1,2,3,4,5,6,7,8,9,10,11];
        const newArr = '[1,2,3,4,5,6,7,8,9,10]';
        const expectStorage = {};
        expectStorage.array = newArr;
        makeListCities(arr, 1);
        expect(global.Storage.prototype.setItem).toHaveBeenCalledWith( "array", newArr);
        expect(storage).toStrictEqual(expectStorage);
    })
  })