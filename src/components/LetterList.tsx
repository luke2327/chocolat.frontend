import LetterIcons from './templates/LetterIcons';

const LetterList = () => {
  return (
    <div>
      <div className="mb-2 flex justify-around space-x-2">
        <LetterIcons />
        <LetterIcons />
        <LetterIcons />
      </div>
      <div className="mb-2 flex justify-around space-x-2">
        <LetterIcons />
        <LetterIcons />
        <LetterIcons />
      </div>
      <div className="mb-2 flex justify-around space-x-2">
        <LetterIcons />
        <LetterIcons />
        <LetterIcons />
      </div>
      <div className="mb-2 flex justify-around space-x-2">
        <LetterIcons />
        <LetterIcons />
        <LetterIcons />
      </div>
    </div>
  );
};

export default LetterList;
