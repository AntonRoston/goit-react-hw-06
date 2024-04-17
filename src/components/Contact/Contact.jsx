import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { AiOutlineUserDelete } from "react-icons/ai";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteContact(id));
  
  return (
    <div className={css.contactWrapper}>
      <div className={css.contactInfo}>
        <p className={css.contactText}>
          <span className={css.contactIcon}>
            <IoPerson />
          </span>
          {name}
        </p>
        <p className={css.contactText}>
          <span className={css.contactIcon}>
            <FaPhone />
          </span>
          {number}
        </p>
      </div>

      <button type="button" className={css.deleteBtn} onClick={() => handleDelete(id)}>
        Detele
        <AiOutlineUserDelete size={20} />
      </button>
    </div>
  );
};

export default Contact;
