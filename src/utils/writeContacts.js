import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log('File updated');
  } catch (error) {
    console.log(`Cannot update the file with error: ${error}`);
  }
};
