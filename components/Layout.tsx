import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  );
};
export default Layout;
