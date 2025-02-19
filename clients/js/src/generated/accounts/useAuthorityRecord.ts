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
  string,
  struct,
  u64,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { Key, KeyArgs, getKeySerializer } from '../types';

export type UseAuthorityRecord = Account<UseAuthorityRecordAccountData>;

export type UseAuthorityRecordAccountData = {
  key: Key;
  allowedUses: bigint;
  bump: number;
};

export type UseAuthorityRecordAccountDataArgs = {
  allowedUses: number | bigint;
  bump: number;
};

/** @deprecated Use `getUseAuthorityRecordAccountDataSerializer()` without any argument instead. */
export function getUseAuthorityRecordAccountDataSerializer(
  _context: object
): Serializer<UseAuthorityRecordAccountDataArgs, UseAuthorityRecordAccountData>;
export function getUseAuthorityRecordAccountDataSerializer(): Serializer<
  UseAuthorityRecordAccountDataArgs,
  UseAuthorityRecordAccountData
>;
export function getUseAuthorityRecordAccountDataSerializer(
  _context: object = {}
): Serializer<
  UseAuthorityRecordAccountDataArgs,
  UseAuthorityRecordAccountData
> {
  return mapSerializer<
    UseAuthorityRecordAccountDataArgs,
    any,
    UseAuthorityRecordAccountData
  >(
    struct<UseAuthorityRecordAccountData>(
      [
        ['key', getKeySerializer()],
        ['allowedUses', u64()],
        ['bump', u8()],
      ],
      { description: 'UseAuthorityRecordAccountData' }
    ),
    (value) => ({ ...value, key: Key.UseAuthorityRecord })
  ) as Serializer<
    UseAuthorityRecordAccountDataArgs,
    UseAuthorityRecordAccountData
  >;
}

/** @deprecated Use `deserializeUseAuthorityRecord(rawAccount)` without any context instead. */
export function deserializeUseAuthorityRecord(
  context: object,
  rawAccount: RpcAccount
): UseAuthorityRecord;
export function deserializeUseAuthorityRecord(
  rawAccount: RpcAccount
): UseAuthorityRecord;
export function deserializeUseAuthorityRecord(
  context: RpcAccount | object,
  rawAccount?: RpcAccount
): UseAuthorityRecord {
  return deserializeAccount(
    rawAccount ?? (context as RpcAccount),
    getUseAuthorityRecordAccountDataSerializer()
  );
}

export async function fetchUseAuthorityRecord(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<UseAuthorityRecord> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  assertAccountExists(maybeAccount, 'UseAuthorityRecord');
  return deserializeUseAuthorityRecord(maybeAccount);
}

export async function safeFetchUseAuthorityRecord(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<UseAuthorityRecord | null> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  return maybeAccount.exists
    ? deserializeUseAuthorityRecord(maybeAccount)
    : null;
}

export async function fetchAllUseAuthorityRecord(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<UseAuthorityRecord[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'UseAuthorityRecord');
    return deserializeUseAuthorityRecord(maybeAccount);
  });
}

export async function safeFetchAllUseAuthorityRecord(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<UseAuthorityRecord[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeUseAuthorityRecord(maybeAccount as RpcAccount)
    );
}

export function getUseAuthorityRecordGpaBuilder(
  context: Pick<Context, 'rpc' | 'programs'>
) {
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );
  return gpaBuilder(context, programId)
    .registerFields<{
      key: KeyArgs;
      allowedUses: number | bigint;
      bump: number;
    }>({
      key: [0, getKeySerializer()],
      allowedUses: [1, u64()],
      bump: [9, u8()],
    })
    .deserializeUsing<UseAuthorityRecord>((account) =>
      deserializeUseAuthorityRecord(account)
    )
    .whereField('key', Key.UseAuthorityRecord);
}

export function getUseAuthorityRecordSize(): number {
  return 10;
}

export function findUseAuthorityRecordPda(
  context: Pick<Context, 'eddsa' | 'programs'>,
  seeds: {
    /** The address of the mint account */
    mint: PublicKey;
    /** The address of the use authority */
    useAuthority: PublicKey;
  }
): Pda {
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );
  return context.eddsa.findPda(programId, [
    string({ size: 'variable' }).serialize('metadata'),
    publicKeySerializer().serialize(programId),
    publicKeySerializer().serialize(seeds.mint),
    string({ size: 'variable' }).serialize('user'),
    publicKeySerializer().serialize(seeds.useAuthority),
  ]);
}

export async function fetchUseAuthorityRecordFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  seeds: Parameters<typeof findUseAuthorityRecordPda>[1],
  options?: RpcGetAccountOptions
): Promise<UseAuthorityRecord> {
  return fetchUseAuthorityRecord(
    context,
    findUseAuthorityRecordPda(context, seeds),
    options
  );
}

export async function safeFetchUseAuthorityRecordFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  seeds: Parameters<typeof findUseAuthorityRecordPda>[1],
  options?: RpcGetAccountOptions
): Promise<UseAuthorityRecord | null> {
  return safeFetchUseAuthorityRecord(
    context,
    findUseAuthorityRecordPda(context, seeds),
    options
  );
}
