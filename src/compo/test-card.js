import './test-card.css';
import Button from './small-btn';
import IconOnlyButton from './icon-only';

const TestCard = ({ title, description, onPreview, onCopy, onEdit, onDelete }) => {
  return (
    <div className="test-card">
      <div className="test-card-content">
        <h3 className="test-card-title">{title}</h3>
        <p className="test-card-description">{description}</p>
      </div>
      
      <div className="test-card-actions">
        {/* Preview Button - Simple Text */}
        <Button 
          onClick={onPreview}
          data-tooltip="Preview"
          className="test-card-action-btn"
        >
          Preview
        </Button>

        {/* Copy Button */}
        <IconOnlyButton 
          iconType="copy"
          onClick={onCopy}
          tooltip="Copy Link"
        />

        {/* Edit Button */}
        <IconOnlyButton 
          iconType="edit"
          onClick={onEdit}
          tooltip="Edit"
        />

        {/* Delete Button */}
        <IconOnlyButton 
          iconType="delete"
          onClick={onDelete}
          tooltip="Delete"
        />
      </div>
    </div>
  );
};

export default TestCard;