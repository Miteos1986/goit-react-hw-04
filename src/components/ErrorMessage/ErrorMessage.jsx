import css from "./ErrorMessage.module.css"

const ErrorMessage = () => {
  return (
    <div>
        
        <p className={css.errorMessage}>
          <b>Oooops...some error</b>
        </p>
      
    </div>
  )
}

export default ErrorMessage