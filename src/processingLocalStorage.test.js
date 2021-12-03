import {setDataLocalStorage, getDataLocalStorage} from './processingLocalStorage'

describe('save to local storage', () => {
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
  
    it('should save to local storage', async () => {
        expect(getDataLocalStorage()).toStrictEqual([]);
        expect(global.Storage.prototype.getItem).toHaveBeenCalledWith('array');
    })
    it('', async () => {
        const arr = [1,2,3,3,4,5,6,7,8,2];
        const newarr = '[1,2,3,4,5,6,7,8]';
        const expFridge = {};
        expFridge['array'] = newarr;

        setDataLocalStorage(arr, 2)
        expect(storage).toStrictEqual(expFridge);
    })
  })