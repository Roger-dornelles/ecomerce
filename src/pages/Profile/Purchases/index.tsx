import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as styled from './styled';
import { UserContext } from '../../../context/userContext';
import apiPurchase from '../../../api/purchases';
import { Error, Warning, Success } from '../../../globalCss';
import { useQuery } from 'react-query';
import DetailsOnePurchase from '../DetailsOnePurchase';
import { Purchase, UserProductDataOfPurchase } from '@/types/purchase';

const Purchases = () => {
  const { user } = useContext(UserContext);

  const [dataPurchase, setDataPurchase] = useState<Purchase[]>();

  const [openDetails, setOpenDetails] = useState<boolean>(false);

  const { data: result, isLoading, isError } = useQuery('purchases', () => apiPurchase.purchases(user.id));

  let arrayPurchase: Purchase[] = [];
  for (let i = 0; i < result?.data.length; i++) {
    arrayPurchase.push(result?.data[i]);
  }
  let userProductDataOfPurchase = [];
  userProductDataOfPurchase.push(arrayPurchase.map((i) => i.userProductDataOfPurchase));

  const handleclickOnePurchase = (item: any) => {
    setOpenDetails(true);

    const array: Purchase[] = [];
    arrayPurchase.map((i) => {
      if (i.userProductDataOfPurchase === item) {
        array.push(i);
      }
    });

    setDataPurchase(array);
  };

  const handleOpenContainerPurchase = (value: boolean) => {
    setOpenDetails(value);
  };

  return (
    <styled.container>
      {isLoading && <Warning>Carregando</Warning>}
      {isError && <Error>{result?.message}</Error>}

      <styled.ContainerPurchase openDetails={openDetails}>
        <styled.H2>Histórico de Compras</styled.H2>
        <styled.UL>
          {userProductDataOfPurchase[0] &&
            userProductDataOfPurchase[0].map((item: any, index: number) => {
              return (
                <styled.LI key={index}>
                  <styled.Button onClick={() => handleclickOnePurchase(item)}>
                    <styled.GroupImages visible={item.length >= 2 ? true : false}>
                      {item.length >= 2 &&
                        item.map((newItem: { image: string; name: string; value: string }) => {
                          return (
                            <>
                              <styled.Group>
                                <styled.Image src={newItem.image} alt={newItem.name} />
                                <styled.Paragraph>{newItem.name}</styled.Paragraph>
                                <styled.Paragraph>{newItem.value}</styled.Paragraph>
                              </styled.Group>
                            </>
                          );
                        })}
                    </styled.GroupImages>

                    {item.length <= 1 && (
                      <>
                        <styled.Image src={item[0].image} alt={item[0].name} />
                        <styled.Paragraph>{item[0].name}</styled.Paragraph>
                        <styled.Paragraph>{item[0].value}</styled.Paragraph>
                      </>
                    )}
                  </styled.Button>
                </styled.LI>
              );
            })}
        </styled.UL>
      </styled.ContainerPurchase>
      <DetailsOnePurchase
        openDetails={openDetails}
        handleOpenContainerPurchase={handleOpenContainerPurchase}
        dataPurchase={dataPurchase}
      />
    </styled.container>
  );
};

export default Purchases;
