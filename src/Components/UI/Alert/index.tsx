import './style.scss';
import type { ReactNode } from 'react';
import { X } from 'lucide-react';
import type { AlertType } from '../../../Types';

interface IProps {
  type: AlertType;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ type, icon, title, description, children }: IProps) => {
  const handleClose = () => {
    const alertElement = document.querySelector(`.alert-${type}`);
    if (alertElement) {
      (alertElement as HTMLElement).style.display = 'none';
    }
  };

  return (
    <div className={`alert-${type}`}>
      <div className="header">
        <div className="icon-title">
          {icon}
          <h4 className="title">{title}</h4>
        </div>
        <span className="close-icon" onClick={handleClose}>
          <X size={25} />
        </span>
      </div>
      {children ? children : <p className="description">{description}</p>}
    </div>
  );
};

export default Alert;
