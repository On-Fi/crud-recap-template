import styled from "styled-components";

export default function BigCard({ children }) {
  return <DetailsCard>{children}</DetailsCard>;
}

const DetailsCard = styled.article`
  display: flex;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.3);
  width: 80%;
  margin: 3.5rem auto;
  border-radius: 15px;
  gap: 1rem;
  flex-direction: column;
  outline: 2px solid #00cc99;
`;
