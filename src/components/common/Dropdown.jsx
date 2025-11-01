const Dropdown = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  required = false,
  id,
  ...props
}) => {
  const dropdownId = id || `dropdown-${label?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="dropdown-wrapper">
      {label && (
        <label htmlFor={dropdownId} className="dropdown-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <select
        id={dropdownId}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
