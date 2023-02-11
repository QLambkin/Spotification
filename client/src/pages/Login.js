import styled from "styled-components/macro";

const StyledLoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledLoginButton = styled.a`
  display: inline-block;
  background-color: var(--green);
  color: var(--white);
  border-radius: var(--border-radius-pill);
  font-weight: 700;
  font-size: var(--fz-lg);
  padding: var(--spacing-sm) var(--spacing-xl);

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
    </StyledLoginContainer>
    <div>
      Due to the restrictions of Spotify's development mode, you may not be able
      to access your account if you have not previously been granted access. If
      that's the case, try:
    </div>
    <div>
      Email Address: spotification12345@gmail.com
      Password: testaccount12345!
    </div>
  </>
);

export default Login;
