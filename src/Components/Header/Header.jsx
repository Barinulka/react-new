import { Container } from "@material-ui/core";
import "./style.scss";

export const Header = () => {
  return (
    <div id="header">
      <Container maxWidth="lg">
        <div className="header">
          <h1 className="header-title">React App</h1>
        </div>
      </Container>
    </div>
  );
};
