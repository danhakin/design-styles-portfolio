import { useParams } from 'react-router-dom';

const StylePage = () => {
  const { styleName } = useParams();

  return (
    <div>
      <h1>{styleName} Style Implementation</h1>
      <p>This page will showcase the DesignSync interface implemented in the {styleName} style.</p>
      <p><em>Implementation coming soon...</em></p>
    </div>
  );
};

export default StylePage;
