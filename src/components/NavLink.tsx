import styled from "styled-components";

interface NavLinkProps {
  index: number;
  title: string;
  to: string;
}

const NavLink = ({ index, title, to }: NavLinkProps) => {
  return (
    <AnchorEl
      href={to}
      className="flex text-white items-baseline lg:items-center"
    >
      <NumberSpan className="opacity-40 sm:min-w-[55px] md:min-w-0 mr-4 sm:mr-5 md:mr-6 lg:mr-3 lg:text-sm">
        0{index + 1}
      </NumberSpan>
      <span style={{ fontSize: `clamp(1.2rem, 6vw, 55px)` }}>{title}</span>
    </AnchorEl>
  );
};

const AnchorEl = styled.a`
  &:hover span:first-child {
    opacity: 0;
  }

  @media screen and (min-width: 768px) {
    flex-basis: 50%;
  }
`;

const NumberSpan = styled.span`
  min-width: 30px;
  transition: 1s ease;
  font-size: clamp(1.1rem, 6vw, 30px);

  @media screen and (min-width: 400px) {
    min-width: 50px;
  }

  @media screen and (min-width: 1020px) {
    font-size: 1.3rem;
    min-width: 45px;
  }

  &:hover {
    opacity: 0;
  }
`;

export default NavLink;
