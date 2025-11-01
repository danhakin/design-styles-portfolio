import { useStyle } from '../../context/StyleContext';

const StyleSwitcher = () => {
  const { currentStyle, changeStyle, availableStyles } = useStyle();

  return (
    <div className="style-switcher">
      <label htmlFor="style-select" className="style-switcher-label">
        Design Style:
      </label>
      <select
        id="style-select"
        value={currentStyle.id}
        onChange={(e) => changeStyle(e.target.value)}
        className="style-switcher-select"
      >
        {availableStyles.map((style) => (
          <option key={style.id} value={style.id}>
            {style.name}
          </option>
        ))}
      </select>
      <div className="current-style-info">
        <p className="style-description">{currentStyle.description}</p>
        <div className="style-characteristics">
          {currentStyle.characteristics.map((char, index) => (
            <span key={index} className="characteristic-tag">
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleSwitcher;
