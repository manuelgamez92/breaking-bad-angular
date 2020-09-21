import { gql } from "apollo-angular";
//GraphQL command for retrieve characters list data
export const getCharacters = gql`
query {
  characters{
    id
    name
    actor
    description
    votes
    total_episodes
    photo
    url
  }
}
`;