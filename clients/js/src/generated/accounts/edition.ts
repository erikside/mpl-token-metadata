/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Pda,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  publicKey as toPublicKey,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  publicKey as publicKeySerializer,
  struct,
  u64,
} from '@metaplex-foundation/umi/serializers';
import { Key, KeyArgs, getKeySerializer } from '../types';

export type Edition = Account<EditionAccountData>;

export type EditionAccountData = {
  key: Key;
  parent: PublicKey;
  edition: bigint;
};

export type EditionAccountDataArgs = {
  parent: PublicKey;
  edition: number | bigint;
};

/** @deprecated Use `getEditionAccountDataSerializer()` without any argument instead. */
export function getEditionAccountDataSerializer(
  _context: object
): Serializer<EditionAccountDataArgs, EditionAccountData>;
export function getEditionAccountDataSerializer(): Serializer<
  EditionAccountDataArgs,
  EditionAccountData
>;
export function getEditionAccountDataSerializer(
  _context: object = {}
): Serializer<EditionAccountDataArgs, EditionAccountData> {
  return mapSerializer<EditionAccountDataArgs, any, EditionAccountData>(
    struct<EditionAccountData>(
      [
        ['key', getKeySerializer()],
        ['parent', publicKeySerializer()],
        ['edition', u64()],
      ],
      { description: 'EditionAccountData' }
    ),
    (value) => ({ ...value, key: Key.EditionV1 })
  ) as Serializer<EditionAccountDataArgs, EditionAccountData>;
}

/** @deprecated Use `deserializeEdition(rawAccount)` without any context instead. */
export function deserializeEdition(
  context: object,
  rawAccount: RpcAccount
): Edition;
export function deserializeEdition(rawAccount: RpcAccount): Edition;
export function deserializeEdition(
  context: RpcAccount | object,
  rawAccount?: RpcAccount
): Edition {
  return deserializeAccount(
    rawAccount ?? (context as RpcAccount),
    getEditionAccountDataSerializer()
  );
}

export async function fetchEdition(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<Edition> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  assertAccountExists(maybeAccount, 'Edition');
  return deserializeEdition(maybeAccount);
}

export async function safeFetchEdition(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<Edition | null> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  return maybeAccount.exists ? deserializeEdition(maybeAccount) : null;
}

export async function fetchAllEdition(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<Edition[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'Edition');
    return deserializeEdition(maybeAccount);
  });
}

export async function safeFetchAllEdition(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<Edition[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) => deserializeEdition(maybeAccount as RpcAccount));
}

export function getEditionGpaBuilder(
  context: Pick<Context, 'rpc' | 'programs'>
) {
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );
  return gpaBuilder(context, programId)
    .registerFields<{
      key: KeyArgs;
      parent: PublicKey;
      edition: number | bigint;
    }>({
      key: [0, getKeySerializer()],
      parent: [1, publicKeySerializer()],
      edition: [33, u64()],
    })
    .deserializeUsing<Edition>((account) => deserializeEdition(account))
    .whereField('key', Key.EditionV1);
}

export function getEditionSize(): number {
  return 41;
}
