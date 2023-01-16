import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';


const Card: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log('submitted');
  };
  return (
    <Container>
      <div>
        <Heading>Learn to code by watching others</Heading>
        <Paragraph>
          See how experienced developers solve problems in real-time.
          Watching scripted tutorials is great, but understanding how
          developers think is invaluable.
        </Paragraph>
      </div>
      <div>
        <Label>
          <span style={{ fontWeight: 600 }}>Try it free 7 days </span>{' '}
          then $20/mo. thereafter
        </Label>
        <Content onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="First Name"
            {...register('firstname', { required: true })}
          ></Input>
          {errors.firstname && (
            <ErrorMessage>First Name cannot be empty</ErrorMessage>
          )}
          <Input
            placeholder="Last Name"
            {...register('lastname', { required: true })}
          ></Input>
          {errors.lastname && (
            <ErrorMessage>Last Name cannot be empty</ErrorMessage>
          )}

          <Input
            placeholder="Email Address"
            type="email"
            {...register('email', {
              required: 'Email cannot be empty',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Looks like this is not an email',
              },
            })}
          ></Input>
          {errors.email && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}
          <Input
            placeholder="Password"
            type="password"
            {...register('password', {
              required: 'Password cannot be empty',
              minLength: {
                value: 8,
                message:
                  'Password should contain at least 8 character',
              },
            })}
          ></Input>
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
          <Button>CLAIM YOUR FREE TRIAL</Button>
          <Paragraph
            style={{
              color: '#A6A1CF',
              fontSize: 11,
              margin: '12px 37px',
            }}
          >
            By clicking the button, you are agreeing to our{' '}
            <span style={{ color: '#FF7979' }}>
              Terms and Services
            </span>
          </Paragraph>
        </Content>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 84px 24px;
  @media (min-width: 678px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 85px;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 165px;
  }
`;
const Heading = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: white;
  @media (min-width: 678px) {
    font-size: 50px;
    line-height: 55px;
    margin-left: auto;
    text-align: left;
    width: 480px;
  }
  @media (min-width: 1024px) {
    font-size: 56px;
    line-height: 55px;
    width: 480px;
  }
`;
const Paragraph = styled.p`
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  color: white;
  margin-top: 24px;
  @media (min-width: 678px) {
    width: 525px;
    margin-right: auto;
  }
  @media (min-width: 1024px) {
    width: 495px;
    font-size: 17px;
  }
`;

const Label = styled.div`
  background: #5e54a4;
  color: white;
  width: 90vw;
  height: 88px;
  border-radius: 10px;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  font-weight: 400;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15;
  letter-spacing: 0.27px;
  margin-top: 24px;
  @media (min-width: 678px) {
    width: 540px;
    height: 60px;
  }
  @media (min-width: 1024px) {
    width:620px;
    height: 68px;
  }
`;

const Content = styled.form`
  width: 90vw;
  height: 548px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  margin-top: 32px;
  @media (min-width: 678px) {
    width: 540px;
  }
  @media (min-width: 1024px) {
    width: 620px;
    height: 580px;
  }
`;

const Input = styled.input`
  width: 78vw;
  height: 56px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #dedede;
  margin: 26px 24px 0 24px;
  font-size: 15px;
  padding: 16px;
  &::placeholder {
    font-weight: 600;
    letter-spacing: 0.25px;
    color: #3d3b48;
    opacity: 0.55;
  }
  @media (min-width: 678px) {
    width: 490px;
    height: 60px;
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    width: 570px;
    height: 60px;
  }
`;

const Button = styled.button`
  width: 78vw;
  height: 56px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #dedede;
  margin: 16px 24px;
  background: #38cc8b;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  font-size: 15px;
  color: white;
  font-weight: 600;
  letter-spacing: 0.7px;
  &:hover {
    background: #77e2b3;
    box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  }
  @media (min-width: 678px) {
    width: 490px;
    height: 60px;
  }
  @media (min-width: 1024px) {
    width: 570px;
    height: 60px;
    margin-top: 42px;
  }
`;

const ErrorMessage = styled.p`
  font-size: 11px;
  color: #ff7979;
  font-weight: 500;
  text-align: right;
  margin-right: 24px;
  @media (min-width: 678px) {
    font-size: 12px;
  }
`;
