import { FooterDiv, IconDiv } from './style';
import icon1 from '../../assets/f1.png';
import icon2 from '../../assets/f2.png';
import icon3 from '../../assets/f3.png';
import icon4 from '../../assets/f4.png';

const footerImagesPaths = [
  icon1,
  icon2,
  icon3,
  icon4,
];

const Footer = () => {
  return (
    <FooterDiv>
      {footerImagesPaths.map((imagePath, index) => (
        <IconDiv key={index} src={imagePath} />
      ))}
    </FooterDiv>
  );
};

export default Footer;

