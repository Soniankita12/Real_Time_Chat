import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chatterbox",
  description = "this is the chat application called chatterbox",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Title;
