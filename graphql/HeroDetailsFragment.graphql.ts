import * as Types from '../test2-pre-resolve-types-only-operation-types';

import gql from 'graphql-tag';

export type HeroDetails_Human_Fragment = { __typename?: 'Human', height?: Types.Maybe<number>, name: string };

export type HeroDetails_Droid_Fragment = { __typename?: 'Droid', primaryFunction?: Types.Maybe<string>, name: string };

export type HeroDetailsFragment = HeroDetails_Human_Fragment | HeroDetails_Droid_Fragment;

export const HeroDetailsFragmentDoc = gql`
    fragment HeroDetails on Character {
  name
  ... on Human {
    height
  }
  ... on Droid {
    primaryFunction
  }
}
    `;