import styled from "styled-components";

interface NavLinkProps {
  index: number;
  title: string;
  to: string;
}

const NavLink = ({ index, title, to }: NavLinkProps) => {
  return (
    <AnchorEl href={to} className="flex text-white items-baseline">
      <NumberSpan
        className="opacity-40 sm:min-w-[55px] md:min-w-0 mr-4 sm:mr-5 md:mr-6"
        style={{ fontSize: `clamp(1.1rem, 6vw, 30px)` }}
      >
        0{index + 1}
      </NumberSpan>
      <span style={{ fontSize: `clamp(1.2rem, 6vw, 32px)` }}>{title}</span>
    </AnchorEl>
  );
};

const AnchorEl = styled.a`
  &:hover span:first-child {
    opacity: 0;
  }
`;

const NumberSpan = styled.span`
  min-width: 30px;
  transition: 1s ease;

  @media screen and (min-width: 400px) {
    min-width: 50px;
  }

  &:hover {
    opacity: 0;
  }
`;

export default NavLink;
