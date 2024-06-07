import css from "./SearchBox.module.css"


const SearchBox = ({value, onFilter}) => {
  return (
    <div className={css.form}>
        <label className={css.label} htmlFor="userQuery">
          Find contacts by name
        </label>
        < input className={css.field} type="text" name="userQuery" id="userId" placeholder="Enter a Name..." value={value} onChange={(e)=>onFilter(e.target.value)} />
    </div>
  )
}

export default SearchBox