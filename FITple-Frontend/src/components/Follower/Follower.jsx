import { Container, FollowerNum, Text } from "./Follower.style";

function Follower() {

//   const { followers, fetchFollowers } = useStore();

//   useEffect(() => {
//     fetchFollowers();
//   }, [fetchFollowers]);

  return (
    <Container>
      <FollowerNum>10
        
      </FollowerNum>
      <Text>팔로워</Text>
    </Container>
  );
}

export default Follower;
