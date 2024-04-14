import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chatterbox",
  description = "this is the chat application called chatterbox",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
