import Lottie from 'react-lottie'

interface  IconProps {
  icon: {},
  height: number,
  width: number,
}

const IconAnimated: React.FC<IconProps> = ({ icon, height, width }) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: icon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      clearCanvas: true,
      progressiveLoad: true,
    }
  };

  return (
    <>
      <Lottie 
        options={defaultOptions}
        height={height}
        width={width}
      />
    </>
  )
}

export default IconAnimated