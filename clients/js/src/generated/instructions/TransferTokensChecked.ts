/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  checkForIsWritableOverride as isWritable,
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type TransferTokensCheckedInstructionAccounts = {
  source: PublicKey;
  mint: PublicKey;
  destination: PublicKey;
  authority?: Signer;
};

// Arguments.
export type TransferTokensCheckedInstructionData = {
  discriminator: number;
  amount: bigint;
  decimals: number;
};

export type TransferTokensCheckedInstructionArgs = {
  amount: number | bigint;
  decimals: number;
};

export function getTransferTokensCheckedInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  TransferTokensCheckedInstructionArgs,
  TransferTokensCheckedInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    TransferTokensCheckedInstructionArgs,
    TransferTokensCheckedInstructionData,
    TransferTokensCheckedInstructionData
  >(
    s.struct<TransferTokensCheckedInstructionData>(
      [
        ['discriminator', s.u8],
        ['amount', s.u64],
        ['decimals', s.u8],
      ],
      'TransferTokensCheckedInstructionArgs'
    ),
    (value) =>
      ({ discriminator: 12, ...value } as TransferTokensCheckedInstructionData)
  ) as Serializer<
    TransferTokensCheckedInstructionArgs,
    TransferTokensCheckedInstructionData
  >;
}

// Instruction.
export function transferTokensChecked(
  context: Pick<Context, 'serializer' | 'programs' | 'identity'>,
  input: TransferTokensCheckedInstructionAccounts &
    TransferTokensCheckedInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('splToken').publicKey;

  // Resolved accounts.
  const sourceAccount = input.source;
  const mintAccount = input.mint;
  const destinationAccount = input.destination;
  const authorityAccount = input.authority ?? context.identity;

  // Source.
  keys.push({
    pubkey: sourceAccount,
    isSigner: false,
    isWritable: isWritable(sourceAccount, true),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // Destination.
  keys.push({
    pubkey: destinationAccount,
    isSigner: false,
    isWritable: isWritable(destinationAccount, true),
  });

  // Authority.
  signers.push(authorityAccount);
  keys.push({
    pubkey: authorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(authorityAccount, false),
  });

  // Data.
  const data =
    getTransferTokensCheckedInstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
