import LetterIcons from './templates/LetterIcons';

type LetterListProps = {
  className?: string;
};

const LetterList = ({ className }: LetterListProps) => {
  return (
    <div className={className}>
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
