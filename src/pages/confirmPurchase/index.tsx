import * as styled from './styled';
import { useEffect } from 'react';
import { SetStateAction, useContext, useState } from 'react';
import { AddCartContext } from '../../context/addCartContext';
import { ProductProps } from '../../types/product';

import apiInstallment from '../../api/installmentsList';

import Master from '../../assets/images/masterCard.png';
import Visa from '../../assets/images/visa.png';
import American_express from '../../assets/images/american_express.png';
import Elo from '../../assets/images/elo.png';
import Card from '../../components/Card';

import Input from '../../components/Input';
import { Button } from '../../globalCss';
import Select from '../../components/Select';

const confirmPurchase = () => {
  const { addProductCart }: any = useContext(AddCartContext);
  const [products] = useState<ProductProps[]>(addProductCart);
  const [cardName, setCardName] = useState<string>('');
  const [behindTheCard, setBehindTheCard] = useState<boolean>(false);

  const [errorName, setErrorName] = useState<string>('');
  const [disabledButtonPayment, setDisabledButtonPayment] = useState<boolean>(true);

  const [numberCard, setNumberCard] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [numberAddress, setNumberAddress] = useState<string>('');
  const [complement, setComplement] = useState<string>('');
  const [codeSecurity, setCodeSecurity] = useState<string>('');
  const [numberOfInstallments, setNumberOfInstallments] = useState([]);
  const [numberOfParcelsAndValue, setNumberOfParcelsAndValue] = useState<{ parcel: string; value: string }>({
    value: '',
    parcel: '',
  });

  useEffect(() => {
    const installmentsList = async () => {
      const result = await apiInstallment.installmentList(currencyFormatted as string);
      if (result.data) {
        setNumberOfInstallments(result.data);
      }
    };
    installmentsList();
  }, [cardName]);

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

  const phoneMask = (value: string) => {
    if (!value) return '';
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    return value;
  };

  const cardMask = (value: string) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ');
    value = value.replace(/\.$/, '');
    value = value.substring(0, 19);

    return value;
  };

  const ValidateName = (name: string) => {
    let regex = /^[A-zÀ-ú '´]+$/;

    let isValid = name.match(regex);
    if (isValid == null) {
      setErrorName('Nome deve conter somente letras');

      return false;
    } else {
      setErrorName('');
      return true;
    }
  };

  const formattedDate = (date: string) => {
    date = date.replace(/\D/g, '');
    date = date.replace(/(\d{2})(\d)/, '$1/$2');
    date = date.replace(/(\d)(\d{2})/, '$1/$2');
    return date;
  };

  const validatedSecurityCode = (code: string) => {
    code = code.replace(/\D/g, '');
    return code;
  };

  useEffect(() => {
    if (name && address && numberAddress && numberCard && complement && dueDate && phone && numberOfParcelsAndValue) {
      if (codeSecurity.length >= 3) {
        setDisabledButtonPayment(false);
      } else {
        setDisabledButtonPayment(true);
      }
    } else {
      setDisabledButtonPayment(true);
    }
  }, [codeSecurity, name, address, numberAddress, numberCard, complement, dueDate, phone, numberOfParcelsAndValue]);

  const getInstallmentValue = (value: string) => {
    numberOfInstallments.filter((itemArray: { parcel: string; value: string }) => {
      if (itemArray.parcel == value) {
        setNumberOfParcelsAndValue({ value: itemArray.value, parcel: itemArray.parcel });
        return;
      }
    });
  };

  const handleConfirmPayment = () => {
    console.log('NumberOfParcelsAndValue ', numberOfParcelsAndValue);
  };

  return (
    <styled.Container>
      <styled.ContainerDivision>
        <styled.DivisionOne>
          <styled.H2>Pedido</styled.H2>
          {!products.length && <styled.H2>Opss, Não há compras</styled.H2>}
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
            isVisible={cardName ? true : false}
            imageCard={imageCard}
            cardName={cardName}
            numberCard={numberCard}
            dueDate={dueDate}
            name={name}
            codeSecurity={codeSecurity}
            behindTheCard={behindTheCard}
            frontOfCard={!behindTheCard}
          />

          <styled.ContainerInfoCard isVisible={cardName}>
            <Select
              label="Numero de parcelas"
              numberOfInstallments={numberOfInstallments}
              getInstallmentValue={getInstallmentValue}
            />
            <Input
              type="text"
              label="Numero do cartão"
              placeholder="000 1111 2222 3333"
              pattern="[0-9]"
              value={numberCard}
              onChange={(e) => setNumberCard(cardMask(e.target.value as string))}
              onClick={handleFrontOfCard}
            />
            <Input
              type="text"
              label="Data vencimento"
              placeholder="10/29"
              value={dueDate}
              maxlength="5"
              onChange={(e) => setDueDate(formattedDate(e.target.value as string))}
              width={'120px'}
              onClick={handleFrontOfCard}
            />
            <Input
              type="text"
              error={errorName ? true : false}
              label="Nome completo"
              placeholder="John deere"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                ValidateName(e.target.value as string);
              }}
              onClick={handleFrontOfCard}
            />
            {errorName && <styled.Error>{errorName}</styled.Error>}
            <Input
              type="tel"
              label="Celular"
              placeholder="(00) 9 9999-9999"
              maxlength="15"
              value={phone}
              onChange={(e) => setPhone(phoneMask(e.target.value as string))}
              width={'300px'}
              onClick={handleFrontOfCard}
            />
            <styled.ContainerLogradouro>
              <Input
                type="text"
                label="Endereço"
                placeholder="Rua abc"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                width={'500px'}
                onClick={handleFrontOfCard}
              />
              <Input
                type="text"
                label="Numero"
                placeholder="100"
                value={numberAddress}
                onChange={(e) => setNumberAddress(e.target.value)}
                width="110px"
                onClick={handleFrontOfCard}
              />
            </styled.ContainerLogradouro>
            <Input
              type="text"
              label="Complemento"
              placeholder="apartamento 1101"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
              onClick={handleFrontOfCard}
            />

            <Input
              type="text"
              label={'código de segurança'}
              placeholder={'001'}
              pattern="[0-9]"
              maxlength="3"
              value={codeSecurity}
              onChange={(e) => setCodeSecurity(validatedSecurityCode(e.target.value as string))}
              width="30%"
              onClick={handleBehindTheCard}
            />

            <div>
              <Button disabled={disabledButtonPayment} width={'80%'} onClick={handleConfirmPayment}>
                Confirmar pagamento
              </Button>
            </div>
          </styled.ContainerInfoCard>
        </styled.DivisionTwo>
      </styled.ContainerDivision>
    </styled.Container>
  );
};

export default confirmPurchase;
