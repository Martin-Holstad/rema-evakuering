import styles from "./ActionButton.module.css";

export default function ActionButton({ height, width, className, borderRadius, onClick, boxShadow, ariaLabel, children }) {
  const buttonStyle = {
    height: height || "50px",
    width: width || "50px",
    borderRadius: borderRadius || "10px",
    boxShadow: boxShadow || "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <button className={`${styles.ActionButton} ${className}`} style={buttonStyle} onClick={() => onClick()} type="button" aria-label={ariaLabel}>
      {children}
    </button>
  );
}
