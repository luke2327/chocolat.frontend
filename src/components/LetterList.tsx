import LetterIcons from './templates/LetterIcons';

type LetterListProps = {
  className?: string;
};

const LetterList = ({ className }: LetterListProps) => (
  <div className={className}>
    {Array(4)
      .fill(undefined)
      .map((_v: undefined, idx) => (
        <div key={idx} className="mb-2 flex justify-around space-x-2">
          {Array(3)
            .fill(undefined)
            .map((_k, kIdx) => (
              <LetterIcons letterId={123} key={kIdx} />
            ))}
        </div>
      ))}
  </div>
);
export default LetterList;
