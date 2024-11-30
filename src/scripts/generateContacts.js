import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contactList = await readContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    const newContactsList = [...contactList, ...newContacts];
    await writeContacts(newContactsList);
  } catch (error) {
    console.log(error.message);
  }
};

generateContacts(5);
