import { Container, FollowNum, Text } from "./Follow.style";

function Follow() {

//   const { follow, fetchFollow } = useStore();

//   useEffect(() => {
//     fetchFollow();
//   }, [fetchFollow]);

  return (
    <Container>
      <FollowNum>10
        
      </FollowNum>
      <Text>팔로워</Text>
    </Container>
  );
}

export default Follow;
