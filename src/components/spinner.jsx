import { ClipLoader } from 'react-spinners';

const Spinner = ({ loading }) => {
  return (
    <div className="flex justify-center items-center py-20 bg-zinc-950">
      <ClipLoader
        color='#dc2626' 
        loading={loading}
        size={80}
        speedMultiplier={0.8}
      />
    </div>
  );
};
export default Spinner;