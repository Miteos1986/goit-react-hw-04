import css from "./Contact.module.css"

const Contact = ({id, name, number, onDelete}) => {
  return (
    <li className={css.li}>
        <div>
        <h3 className={css.h3}>{name} </h3>
        <p className={css.p}> {number} </p>
        </div>

        <button className={css.button} type="button" onClick={()=> onDelete(id)} >Delete</button>
        </li>
  )
}

export default Contact