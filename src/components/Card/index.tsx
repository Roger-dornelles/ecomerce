import * as styled from './styled';

interface PropsCard {
  cardName: string;
  code: string;
  behindTheCard: boolean;
}

const Card = ({ cardName, code, behindTheCard }: PropsCard) => {
  return (
    <styled.Container>
      <h2>{cardName.toUpperCase()}</h2>
      <styled.Card>
        <styled.BehindTheCard behindTheCard={behindTheCard}>
          <styled.MagneticStripe />
          <styled.CodeCard>
            <input placeholder="security code" value={code} />
          </styled.CodeCard>
        </styled.BehindTheCard>
      </styled.Card>
    </styled.Container>
  );
};

export default Card;
