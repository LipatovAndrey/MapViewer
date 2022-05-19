import style from "./Login.module.css";

const ValidatedField = ({input, label, type, meta: {touched, error}}) => (
    <div>
        <label className={(touched && error) ? style.label_error : style.label}>{label}
            {touched && ((error && <span>{error}</span>))}</label>
        <div>
            <input {...input} placeholder={label} type={type} className={style.username}/>
        </div>
    </div>
)

export default ValidatedField
