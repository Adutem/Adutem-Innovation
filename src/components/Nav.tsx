import styled from "styled-components";
import navLinks from "../data/nav-links";
import NavLink from "./NavLink";

interface NavProps {
  hideNavBar: () => void;
}

const Nav = ({ hideNavBar }: NavProps) => {
  return (
    <NavContainer
      className="bg-black fixed top-0 left-0 right-0 bottom-0 w-dvw h-dvh"
      style={{ zIndex: 1000 }}
    >
      <NavItemContainer className="py-32 px-6 md:px-10 w-full h-full max-w-[1024px] md:mx-auto">
        <ul className="flex flex-col gap-5 sm:gap-7 md:flex-row md:flex-wrap md:gap-x-0 md:min-h-[400px] md:content-center">
          {navLinks.map((link, i) => (
            <NavLink index={i} {...link} hideNavBar={hideNavBar} />
          ))}
        </ul>
        <Socials className="social flex items-center gap-4 sm:gap-5 text-white mt-12 w-max md:w-full md:justify-end">
          <a target="_blank" href="https://www.instagram.com/adutem_tech">
            <i className="fi fi-brands-instagram flex text-lg"></i>
          </a>
          <i className="fi fi-brands-twitter flex text-lg"></i>
          <a target="_blank" href="https://www.facebook.com/Aduratemilorun">
            <i className="fi fi-brands-facebook flex text-lg"></i>
          </a>
          <i className="fi fi-brands-linkedin flex text-lg"></i>
          <LinkItem
            className="w-full flex justify-between items-center h-max cursor-pointer text-white hover:text-[var(--base-color)] gap-3 sm:text-xl md:w-auto"
            href={"/careers"}
          >
            {/* <span>Careers</span>{" "}
            <i className="fi fi-sr-arrow-alt-right flex -maa-rotate-[45deg] maa-transition-[0.3s]"></i> */}
          </LinkItem>
        </Socials>
      </NavItemContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  opacity: 0.6;
  transform: translateY(-300px);
  animation: fadeIn 0.5s ease 0s normal forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0.6;
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const LinkItem = styled.a`
  text-decoration: none;
  position: relative;
  transition: 0.4s ease;
  font-size: clamp(0.8rem, 5vw, 1.2rem);
  min-width: 100px;

  @media screen and (max-width: 300px) {
    justify-content: flex-start;
    margin-top: 1rem;
  }

  &:hover {
    i {
      transform: rotate(0deg);
    }
  }
`;

const Socials = styled.div`
  @media screen and (max-width: 300px) {
    flex-wrap: wrap;
  }
`;

const NavItemContainer = styled.div``;

export default Nav;
