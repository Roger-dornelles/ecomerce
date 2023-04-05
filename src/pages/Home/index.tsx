import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import * as Styled from './styled';
import apiProduct from '../../api/home';

import { ProductType } from '../../types/product';
import { Link } from 'react-router-dom';
import { Error } from '../../globalCss';
export const Home = () => {
  const [productAll, setProductAll] = useState<ProductType[]>([]);

  const [error, setError] = useState<string>('');

  useEffect(() => {
    const displayProducts = async () => {
      try {
        const result = await apiProduct.displayProductAll();

        if (result?.error) {
          setError(result.message);
          return;
        }

        !result?.error && setProductAll(result?.data);
      } catch (error) {
        setError('Ocorreu um erro, tente mais tarde.');
      }
    };
    displayProducts();
  }, []);

  return (
    <Styled.Container>
      <Header />
      <Styled.Section>
        {error && <Error>{error}</Error>}
        {productAll &&
          productAll.map((product) => {
            return (
              <Styled.ProductAll key={product.id}>
                <Link to={''}>
                  <img src={Object(product).photosID[0].link} alt={product.name} />
                  <p>{product.name}</p>
                  <p>{product.description}</p>
                  <p>
                    Valor: <strong>{product.value}</strong>
                  </p>
                  <p>Quantidade disponível: {product.quantity}</p>
                  <span>Aceita troca: {product.isInstallments ? 'sim' : 'não'}</span>

                  <p>Publicado em {product.createdAt.substring(0, 10).split('-').reverse().join('/')}</p>
                </Link>
              </Styled.ProductAll>
            );
          })}
      </Styled.Section>
    </Styled.Container>
  );
};
