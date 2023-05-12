import { useParams } from 'react-router-dom';
import * as styled from './styled';
import { useEffect, useState } from 'react';
import apiOneProduct from '../../api/displayOneProduct';
import { Error, Button } from '../../globalCss';
import { Pagination } from '../../components/Pagination';
import { ProductType } from '../../types/product';

const displayOneProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType>();
  const [productImage, setProductImage] = useState([]);

  const [error, setError] = useState<string>('');

  const [itemsPerPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const displayProduct = async () => {
      try {
        const result = await apiOneProduct.displayOneProduct(id as string);

        if (result?.error) {
          setError(result.message);
        }

        if (!result?.error) {
          setProduct(result?.data.product);
          setProductImage(result?.data.images);
        }
      } catch (error) {
        return;
      }
    };
    displayProduct();
  }, []);

  const pages = productImage && Math.ceil(productImage.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = productImage && productImage.slice(startIndex, endIndex);

  const handlePagination = (value: number) => {
    setCurrentPage(value);
  };

  return (
    <styled.Container>
      {error && <Error>{error}</Error>}

      <styled.ImageContainer>
        {currentItems &&
          currentItems.map((item: { link: string; id: number }) => {
            return <styled.Image key={item.id} src={item.link} alt="imagem do produto" />;
          })}

        {!error && pages > 1 && (
          <Pagination currentPage={currentPage} handlePagination={handlePagination} pages={pages} />
        )}
      </styled.ImageContainer>

      {product && (
        <styled.ProductContainer>
          <styled.Product>
            <styled.ProductName bold="bold">{product.name}</styled.ProductName>
          </styled.Product>

          <styled.Product>
            <styled.ProductDescription>{product.description}</styled.ProductDescription>
          </styled.Product>

          <styled.Product>
            <styled.ProductDescription size="25px">{product.value}</styled.ProductDescription>
          </styled.Product>

          <styled.Product>
            <styled.ProductDescription>
              Disponível {product.quantity} unidade{product.quantity > 1 ? 's' : ''}
            </styled.ProductDescription>
          </styled.Product>

          <styled.Product>
            <styled.ProductDescription>{product.isInstallments ? 'Produto negociável' : ''}</styled.ProductDescription>
          </styled.Product>

          <styled.Product>
            <styled.ProductDescription>
              Publicado em {product.createdAt.substring(0, 10).split('-').reverse().join('/')}
            </styled.ProductDescription>
          </styled.Product>

          <styled.ButtonContainer>
            <Button>Comprar</Button>
          </styled.ButtonContainer>
        </styled.ProductContainer>
      )}
    </styled.Container>
  );
};

export default displayOneProduct;
