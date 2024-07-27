import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";

export default function App() {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
