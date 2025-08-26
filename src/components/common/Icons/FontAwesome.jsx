import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare, faArrowRightFromBracket, faSortDown, faCaretUp, faTrash, faArrowsRotate, faGear } from "@fortawesome/free-solid-svg-icons";

export default function FontAwesome({ icon, color, fontSize, className }) {
  const iconMap = {
    faPlus: faPlus,
    faPenToSquare: faPenToSquare,
    faArrowRightFromBracket: faArrowRightFromBracket,
    faSortDown: faSortDown,
    faCaretUp: faCaretUp,
    faTrash: faTrash,
    faArrowsRotate: faArrowsRotate,
    faGear: faGear,
  };

  const iconStyle = {
    color: color,
    fontSize: `${fontSize}px`,
  };

  return <FontAwesomeIcon className={className} style={iconStyle} icon={iconMap[icon]} />;
}
