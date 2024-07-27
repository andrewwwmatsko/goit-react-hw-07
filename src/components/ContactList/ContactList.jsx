import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.item}>
            <Contact contactInfo={contact} />
          </li>
        );
      })}
    </ul>
  );
}
