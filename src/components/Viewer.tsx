import { saveAs } from 'file-saver'


interface Props {
  id: string
  function: () => void
}


const Viewer = (props: Props) => {

  /// function for downloading images in Viewer
  
  const handleDownload = () => {
    var source = `images/${props.id}.jpg`;
    saveAs(source, `${props.id}.jpg`);
  };

  return (

      <div className="viewer">
        <div className="viewer__image">
          <img
            className="viewer__image-img"
            src={`images/${props.id}.jpg`}
            alt={props.id}
          />
        </div>
        <div className="viewer__actions">
          <button
            onClick={() => {
              handleDownload();
            }}
            className="viewer__actions-save"
          >
            Save to your Library
          </button>
          <button
            onClick={props.function}
            className="viewer__actions-back"
          >
            Back to Works
          </button>
        </div>
      </div>

  );
}

export default Viewer