import * as styled from './styled';
import { useContext, useState } from 'react';
import { AddCartContext } from '../../context/addCartContext';
import { ProductProps } from '../../types/product';

import Master from '../../assets/images/masterCard.png';
import Visa from '../../assets/images/visa.png';
import American_express from '../../assets/images/american_express.png';
import Elo from '../../assets/images/elo.png';
import Card from '../../components/Card';

import Input from '../../components/Input';
import { Button } from '../../globalCss';

const confirmPurchase = () => {
  const { addProductCart }: any = useContext(AddCartContext);
  const [products] = useState<ProductProps[]>(addProductCart);
  const [cardName, setCardName] = useState<string>('');
  const [code, setCode] = useState('');
  const [behindTheCard, setBehindTheCard] = useState<boolean>(false);

  const imageCard = [];
  imageCard.push({ name: 'master card', url: Master });
  imageCard.push({ name: 'elo', url: Elo });
  imageCard.push({ name: 'visa', url: Visa });
  imageCard.push({ name: 'american express', url: American_express });

  let currencyFormatted = '';
  let total = 0;
  for (let i = 0; i < addProductCart.length; i++) {
    total += Number(
      addProductCart[i].value
        .substring(2, addProductCart[i].value.length - 2)
        .replace(',', '')
        .replace('.', '') * addProductCart[i].quantity
    );

    currencyFormatted = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  const handleCardDataDisplay = (card: string) => {
    if (card === 'american_express') {
      card = 'american express';
    }

    if (card === 'master_card') {
      card = 'master card';
    }
    setCardName(card);
  };

  const handleBehindTheCard = () => {
    setBehindTheCard(true);
  };

  const handleFrontOfCard = () => {
    setBehindTheCard(false);
  };

  return (
    <styled.Container>
      <styled.ContainerDivision>
        <styled.DivisionOne>
          <styled.H2>Pedido</styled.H2>
          {!products.length && <styled.H2>Opss, Não há registro de compras</styled.H2>}
          <styled.UL>
            {products &&
              products.map((product: ProductProps) => {
                return (
                  <styled.LI key={product.id}>
                    <styled.Img src={product.image} alt={product.name} />
                    <styled.Span>{product.name}</styled.Span>
                    <styled.Span>Quantidade: {product.quantity}</styled.Span>

                    <styled.Span>{product.value}</styled.Span>
                  </styled.LI>
                );
              })}
          </styled.UL>

          <styled.TotalContainer>
            <styled.Span>Total: {currencyFormatted ? currencyFormatted : 'R$ 0,00'}</styled.Span>
          </styled.TotalContainer>
        </styled.DivisionOne>

        <styled.DivisionTwo>
          <styled.H2>Forma de Pagamento</styled.H2>

          <styled.Paragraph>Escolha a bandeira do cartão.</styled.Paragraph>
          <styled.ContainerCard>
            <styled.ContainerCardName>
              <styled.InputRadio
                name="card"
                value="master_card"
                onChange={(value) => handleCardDataDisplay(value.target.defaultValue)}
              />
              <styled.Img src={Master} alt="Cartão master" width={'60px'} />
            </styled.ContainerCardName>

            <styled.ContainerCardName>
              <styled.InputRadio
                name="card"
                value="visa"
                onChange={(value) => handleCardDataDisplay(value.target.defaultValue)}
              />
              <styled.Img src={Visa} alt="Cartão Visa" width={'60px'} />
            </styled.ContainerCardName>

            <styled.ContainerCardName>
              <styled.InputRadio
                name="card"
                value="elo"
                onChange={(value) => handleCardDataDisplay(value.target.defaultValue)}
              />
              <styled.Img src={Elo} alt="Cartão elo" width={'60px'} />
            </styled.ContainerCardName>

            <styled.ContainerCardName>
              <styled.InputRadio
                name="card"
                value="american_express"
                onChange={(value) => handleCardDataDisplay(value.target.defaultValue)}
              />
              <styled.Img src={American_express} alt="Cartão American express" width={'60px'} />
            </styled.ContainerCardName>
          </styled.ContainerCard>

          <Card
            isVisible={cardName}
            imageCard={imageCard}
            cardName={cardName}
            code={code}
            behindTheCard={behindTheCard}
            frontOfCard={!behindTheCard}
          />

          <styled.ContainerInfoCard isVisible={cardName}>
            <Input label="Numero do cartão" placeholder="000 1111 2222 2222" />
            <Input label="Data vencimento" placeholder="10/29" width={'120px'} />
            <Input label="Nome completo" placeholder="John deere" />
            <Input label="Celular" placeholder="(00) 9 9999-9999" width={'300px'} />
            <styled.ContainerLogradouro>
              <Input label="Endereço" placeholder="Rua abc" width={'500px'} />
              <Input label="Numero" placeholder="100" width="110px" />
            </styled.ContainerLogradouro>
            <Input label="Complemento" placeholder="apartamento 1101" />

            <Input label={'código de segurança'} placeholder={'001'} width="200px" />

            <Button disabled={false} width={'80%'}>
              Confirmar
            </Button>
          </styled.ContainerInfoCard>
        </styled.DivisionTwo>
      </styled.ContainerDivision>
    </styled.Container>
  );
};

export default confirmPurchase;
