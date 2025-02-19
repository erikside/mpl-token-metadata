/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
  dataEnum,
  struct,
  u64,
} from '@metaplex-foundation/umi/serializers';

export type PrintArgs = { __kind: 'V1'; edition: bigint };

export type PrintArgsArgs = { __kind: 'V1'; edition: number | bigint };

/** @deprecated Use `getPrintArgsSerializer()` without any argument instead. */
export function getPrintArgsSerializer(
  _context: object
): Serializer<PrintArgsArgs, PrintArgs>;
export function getPrintArgsSerializer(): Serializer<PrintArgsArgs, PrintArgs>;
export function getPrintArgsSerializer(
  _context: object = {}
): Serializer<PrintArgsArgs, PrintArgs> {
  return dataEnum<PrintArgs>(
    [
      [
        'V1',
        struct<GetDataEnumKindContent<PrintArgs, 'V1'>>([['edition', u64()]]),
      ],
    ],
    { description: 'PrintArgs' }
  ) as Serializer<PrintArgsArgs, PrintArgs>;
}

// Data Enum Helpers.
export function printArgs(
  kind: 'V1',
  data: GetDataEnumKindContent<PrintArgsArgs, 'V1'>
): GetDataEnumKind<PrintArgsArgs, 'V1'>;
export function printArgs<K extends PrintArgsArgs['__kind']>(
  kind: K,
  data?: any
): Extract<PrintArgsArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isPrintArgs<K extends PrintArgs['__kind']>(
  kind: K,
  value: PrintArgs
): value is PrintArgs & { __kind: K } {
  return value.__kind === kind;
}
