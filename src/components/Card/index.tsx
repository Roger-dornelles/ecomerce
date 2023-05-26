import * as styled from './styled';

interface PropsCard {
  cardName: string;
  code: string;
  behindTheCard: boolean;
  frontOfCard: boolean;
}

const Card = ({ cardName, code, behindTheCard, frontOfCard }: PropsCard) => {
  return (
    <styled.Container>
      <h2>{cardName.toUpperCase()}</h2>
      <styled.BehindCard behindTheCard={behindTheCard}>
        <styled.BehindTheCard>
          <styled.MagneticStripe />
          <styled.CodeCard>
            <styled.Input placeholder="security code" value={code} disabled />
          </styled.CodeCard>
        </styled.BehindTheCard>
      </styled.BehindCard>

      <styled.FrontOfCard front={frontOfCard}>
        <styled.FrontCard>
          <styled.Input placeholder="name" value={code} disabled />
        </styled.FrontCard>
      </styled.FrontOfCard>
    </styled.Container>
  );
};

export default Card;
