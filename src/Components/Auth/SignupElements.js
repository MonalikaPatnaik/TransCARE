import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: var(--bg-clr);
`;

export const FormContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 0 20px #403126;
  position: relative;
  overflow: hidden;
  width: 900px;
  max-width: 100%;
  min-height: 550px;
  margin-top: 9rem;
  display: flex;
`;

export const SignUpContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

export const LeftContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #000000 30%, rgb(54 124 162) 90%);
  min-height: 100%;
`;

export const LeftHeading = styled.h1`
  /* font-family: "Poppins"; */
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  color: #ffffff;
`;

export const LeftPara = styled.p`
  /* font-family: "Poppins"; */
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  color: #ffffff;
  margin-top: 0.4rem;
  width: 70%;
  text-align: center;
`;

export const SignUpForm = styled.form`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUph1 = styled.h1`
  /* font-family: "Poppins"; */
  font-style: normal;
  font-weight: 700;
  font-size: 2.3rem;
  line-height: 4rem;
  margin-bottom: 1rem;
  color:#403126;
`;

export const FormInput = styled.input`
  width: 70%;
  padding: 0.5rem;
  border-radius: 0;
  border: None;
  background: rgb(104 171 255 / 57%);
  /* font-family: "Poppins"; */
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 0.8rem;
  color: Black;
  margin-bottom: 1rem;
  outline: none;
  box-sizing: border-box;
  border: 1px solid transparent;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    border: 1px solid #ed730e;
  }

  &:focus {
    border-radius: 0;
    border: 2px solid #ed730e;
  }
`;

export const PhoneContainer = styled.div`
  display: flex;
  width: 70%;

  input {
    &:nth-of-type(1) {
      width: 20%;
      float: left;
      margin-right: 0.6rem;
    }

    &:nth-of-type(2) {
      width: 80%;
      float: right;
    }
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SignUpButton = styled.button`
  width: 9rem;
  /* font-family: "Poppins"; */
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  border-radius: 50px;
  background-color: rgb(16 122 175);
  white-space: nowrap;
  color: #fff;
  margin-top: 0.8rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #f7bd00;
    color: #000;
  }

  &:active {
    transform: scale(0.95);
  }
`;


export const Image = styled.img`
  height: auto;
  width: 90%;
`;

export const Error = styled.b`
  font-weight: bold;
  font-size: 1rem;
  color: #ff3300;
`;
export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const RadioInput = styled.input`
  margin-right: 5px;
`;

export const RadioLabel = styled.label`
  margin-right: 20px;
  margin-bottom:0px;
  cursor: pointer;
  font-size: 1rem;
`;