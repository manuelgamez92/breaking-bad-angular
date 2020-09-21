import { gql } from "apollo-angular";
//GraphQL query for get votes changes
export const changeVotes = gql`
subscription {
  changeVotes{
    id
    name
    votes
  }
}
`;