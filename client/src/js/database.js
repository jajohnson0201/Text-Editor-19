import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => { 
  const db = await openDB('contact', 1);
  const tx = db.transaction('contact', 'readwrite');
  const store = tx.objectStore('contact');
  const request = store.put(content);
  const result = await request;
  console.log('putDb implemented',result);
  return result;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await openDB('contact', 1);
  const tx = db.transaction('contact', 'readwrite');
  const store = tx.objectStore('contact');
  const request = store.getAll();
  const result = await request;
console.error('getDb implemented', result)
return result;
};

initdb();
