import * as Types from '../test2-base';

import gql from 'graphql-tag';

export type HumanFieldsFragment = { __typename?: 'Human', name: string, mass?: Types.Maybe<number> };

export const HumanFieldsFragmentDoc = gql`
    fragment HumanFields on Human {
  name
  mass
}
    `;