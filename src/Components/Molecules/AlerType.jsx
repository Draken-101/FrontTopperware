
export function AlertType({ alert }) {
    return (
        <div className={alert.type || ''}>
          {alert.title || ''}
        </div>
    );
}