import * as styled from './styled';
import { useContext, useState } from 'react';
import { AddCartContext } from '../../context/addCartContext';
import { ProductProps } from '../../types/product';

import Master from '../../assets/images/masterCard.png';
import Visa from '../../assets/images/visa.png';
import American_express from '../../assets/images/american_express.png';
import Elo from '../../assets/images/elo.png';

const confirmPurchase = () => {
  const { addProductCart }: any = useContext(AddCartContext);
  const [products, setProducts] = useState<ProductProps[]>(addProductCart);

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
              <styled.InputRadio name="card" value="master" />
              <styled.Img src={Master} alt="Cartão master" width={60} />
            </styled.ContainerCardName>

            <styled.ContainerCardName>
              <styled.InputRadio name="card" value="american_express" />
              <styled.Img src={Visa} alt="Cartão Visa" width={60} />
            </styled.ContainerCardName>

            <styled.ContainerCardName>
              <styled.InputRadio name="card" value="elo" />
              <styled.Img src={Elo} alt="Cartão elo" width={60} />
            </styled.ContainerCardName>

            <styled.ContainerCardName>
              <styled.InputRadio name="card" value="american_express" />
              <styled.Img src={American_express} alt="Cartão American express" width={60} />
            </styled.ContainerCardName>
          </styled.ContainerCard>
        </styled.DivisionTwo>
      </styled.ContainerDivision>
    </styled.Container>
  );
};

export default confirmPurchase;
