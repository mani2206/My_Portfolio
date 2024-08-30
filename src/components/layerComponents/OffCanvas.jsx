import OffCanvasComponent from "../baseComponents/OffCanva";

function OffcanvasPage() {
  const imagePaths = [
   '../../images/manikandan_image.jpeg',
  ]

  return (
    <>
      {imagePaths.map((imageSrc, idx) => (
        <OffCanvasComponent key={idx} imageSrc={imageSrc} name={`Image ${idx + 1}`} placement="start" />
      ))}
    </>
  );
}

export default OffcanvasPage;
