import './button.css'


export default function GeneralButton({ to, text, className = '', style = {} }) {
    return (
        <div className={`section__btn ${className}`}>
            <a href={to} target="_blank" className="btn__component" style={style}>
                {text}
            </a>
        </div>
    );
};