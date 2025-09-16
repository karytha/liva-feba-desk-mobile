import './button.css'

const Button = ({ children, href, onClick, type = 'button', className = '', variant = 'primary', ...props }) => {
    const classes = `btn btn--${variant} ${className}`.trim();

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button 