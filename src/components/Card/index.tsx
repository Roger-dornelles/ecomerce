import * as styled from './styled';
import Chip from '../../assets/images/chip.jpg';
interface PropsCard {
  cardName: string;
  code: string;
  behindTheCard: boolean;
  frontOfCard: boolean;
  imageCard: [{ name: string; url: string }];
  isVisible?: boolean;
}

const Card = ({ cardName, code, behindTheCard, frontOfCard, imageCard, isVisible }: PropsCard) => {
  let image = '';
  imageCard.filter((imageArray) => {
    if (imageArray.name === cardName) {
      image = imageArray.url;
    }
  });

  return (
    <styled.Container isVisible={isVisible}>
      <styled.H2>{cardName.toUpperCase()}</styled.H2>

      <styled.CardContainer>
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
            <styled.InfoCard>
              <styled.Img src={Chip} alt="Chip" width={'35px'} marginLeft={'0.5rem'} />
              <styled.Input placeholder="0000 1111 2222 3333" value={code} disabled width={'100%'} />
              <styled.Input placeholder="John deere" value={code} disabled width={'100%'} />
              <styled.Input placeholder="10/29" value={code} disabled />
            </styled.InfoCard>

            <styled.Img src={image} alt={cardName} />
          </styled.FrontCard>
        </styled.FrontOfCard>
      </styled.CardContainer>
    </styled.Container>
  );
};

export default Card;
