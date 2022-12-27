import styled from 'styled-components';

const LetterIcons: React.FC = () => {
  return (
    <Frame className="cursor-pointer border-solid border-slate-300">
      <Img
        src="https://static.vecteezy.com/system/resources/previews/003/758/254/original/black-and-white-thanksgiving-card-im-thankful-for-line-vertical-letter-template-with-cute-turkey-basket-with-apples-fruit-harvest-autumn-outline-holiday-frame-design-for-kids-vector.jpg"
        alt="frame"
      />
    </Frame>
  );
};

export default LetterIcons;

const Frame = styled.div`
  border-width: 4px;
  opacity: 0.5;
  transition: all 0.2s;
  &:hover {
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 6rem;
`;
