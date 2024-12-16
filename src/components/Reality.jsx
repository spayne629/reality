import Ratio from 'react-bootstrap/Ratio';
import reality from '../assets/reality.mp4';

const Reality = () => {
  return (
    <>
      <Ratio className="ratio ratio-16x9" aspectRatio={16 / 9}>
        <video
          autoPlay
          playsInLine
          controls={true}
          className="ratio ratio-16x9 reality"
        >
          <source src={reality} type="video/mp4" />
        </video>
      </Ratio>
    </>
  );
};

export default Reality;