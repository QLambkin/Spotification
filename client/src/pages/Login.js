import styled from "styled-components/macro";

const StyledLoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const GreenText = styled.div`
  color: var(--green);
`;

const StyledDescription = styled.div`
  display: inline-block;
  text-align: center;
  color: var(--white);
  font-weight: 200;
  font-size: var(--fz-lg);
  padding: var(--spacing-xl) var(--spacing-xl);
  margin: 25px 400px;
`;

const StyledLoginButton = styled.a`
  display: inline-block;
  background-color: var(--green);
  color: var(--white);
  border-radius: var(--border-radius-pill);
  font-weight: 700;
  font-size: var(--fz-lg);
  padding: var(--spacing-sm) var(--spacing-xl);
  margin: 100px;

  &:hover,
  &:focus {
    text-decoration: none;
    filter: brightness(1.1);
  }
`;

const LOGIN_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8888/login"
    : "https://spotification.herokuapp.com/login";

const Login = () => (
  <>
    <StyledLoginContainer>
      <StyledLoginButton href={LOGIN_URI}>Log in to Spotify</StyledLoginButton>
      <StyledDescription>
        Due to the restrictions of Spotify's development mode, you may not be
        able to access your account if you have not previously been granted
        access. If that's the case, try: <br />
        <br />
        Email Address: <GreenText>spotification12345@gmail.com</GreenText>{" "}
        <br />
        Password: <GreenText>testaccount12345!</GreenText>
        <br />
        To request access to your account, please send your spotify email to
        q.lambkin@gmail.com
      </StyledDescription>
    </StyledLoginContainer>
  </>
);

export default Login;
