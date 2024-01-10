import styled from "styled-components";
import { Lead } from "../../data/member-data";

const MemberCard = ({ imageUrl, name, role }: Lead) => {
  return (
    <Container className="rounded-xl overflow-hidden">
      <div className="masked h-auto overflow-hidden relative">
        <img src={imageUrl} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 md:p-8 bg-[#121212]">
        <p className="text-center text-white text-xl mb-2">{name}</p>
        <p className="text-center text-white faded">{role}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .masked::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(18, 18, 18, 0) 60.67%, #000 100%);
  }

  p.faded {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default MemberCard;
