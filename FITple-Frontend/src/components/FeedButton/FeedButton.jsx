import { Container } from "./FeedButton.style";

function FeedButton({ icon, alt }) {
  return (
    <Container>
      <img src={icon} alt={alt} height={40} width={40} />
      {alt}
    </Container>
  );
}

export default FeedButton;
