/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Serializer, scalarEnum } from '@metaplex-foundation/umi/serializers';

export enum TokenDelegateRole {
  Sale,
  Transfer,
  Utility,
  Staking,
  Standard,
  LockedTransfer,
  Migration,
}

export type TokenDelegateRoleArgs = TokenDelegateRole;

/** @deprecated Use `getTokenDelegateRoleSerializer()` without any argument instead. */
export function getTokenDelegateRoleSerializer(
  _context: object
): Serializer<TokenDelegateRoleArgs, TokenDelegateRole>;
export function getTokenDelegateRoleSerializer(): Serializer<
  TokenDelegateRoleArgs,
  TokenDelegateRole
>;
export function getTokenDelegateRoleSerializer(
  _context: object = {}
): Serializer<TokenDelegateRoleArgs, TokenDelegateRole> {
  return scalarEnum<TokenDelegateRole>(TokenDelegateRole, {
    description: 'TokenDelegateRole',
  }) as Serializer<TokenDelegateRoleArgs, TokenDelegateRole>;
}
