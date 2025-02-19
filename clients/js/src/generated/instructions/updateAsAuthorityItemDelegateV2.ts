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
  Option,
  OptionOrNullable,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  none,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  bool,
  mapSerializer,
  option,
  publicKey as publicKeySerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { resolveAuthorizationRulesProgram } from '../../hooked';
import { findMetadataDelegateRecordPda, findMetadataPda } from '../accounts';
import { PickPartial, addAccountMeta, addObjectProperty } from '../shared';
import {
  AuthorizationData,
  AuthorizationDataArgs,
  MetadataDelegateRole,
  TokenStandard,
  TokenStandardArgs,
  getAuthorizationDataSerializer,
  getTokenStandardSerializer,
} from '../types';

// Accounts.
export type UpdateAsAuthorityItemDelegateV2InstructionAccounts = {
  /** Update authority or delegate */
  authority?: Signer;
  /** Delegate record PDA */
  delegateRecord?: PublicKey | Pda;
  /** Token account */
  token?: PublicKey | Pda;
  /** Mint account */
  mint: PublicKey | Pda;
  /** Metadata account */
  metadata?: PublicKey | Pda;
  /** Edition account */
  edition?: PublicKey | Pda;
  /** Payer */
  payer?: Signer;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey | Pda;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey | Pda;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey | Pda;
};

// Data.
export type UpdateAsAuthorityItemDelegateV2InstructionData = {
  discriminator: number;
  updateAsAuthorityItemDelegateV2Discriminator: number;
  newUpdateAuthority: Option<PublicKey>;
  primarySaleHappened: Option<boolean>;
  isMutable: Option<boolean>;
  tokenStandard: Option<TokenStandard>;
  authorizationData: Option<AuthorizationData>;
};

export type UpdateAsAuthorityItemDelegateV2InstructionDataArgs = {
  newUpdateAuthority?: OptionOrNullable<PublicKey>;
  primarySaleHappened?: OptionOrNullable<boolean>;
  isMutable?: OptionOrNullable<boolean>;
  tokenStandard?: OptionOrNullable<TokenStandardArgs>;
  authorizationData?: OptionOrNullable<AuthorizationDataArgs>;
};

/** @deprecated Use `getUpdateAsAuthorityItemDelegateV2InstructionDataSerializer()` without any argument instead. */
export function getUpdateAsAuthorityItemDelegateV2InstructionDataSerializer(
  _context: object
): Serializer<
  UpdateAsAuthorityItemDelegateV2InstructionDataArgs,
  UpdateAsAuthorityItemDelegateV2InstructionData
>;
export function getUpdateAsAuthorityItemDelegateV2InstructionDataSerializer(): Serializer<
  UpdateAsAuthorityItemDelegateV2InstructionDataArgs,
  UpdateAsAuthorityItemDelegateV2InstructionData
>;
export function getUpdateAsAuthorityItemDelegateV2InstructionDataSerializer(
  _context: object = {}
): Serializer<
  UpdateAsAuthorityItemDelegateV2InstructionDataArgs,
  UpdateAsAuthorityItemDelegateV2InstructionData
> {
  return mapSerializer<
    UpdateAsAuthorityItemDelegateV2InstructionDataArgs,
    any,
    UpdateAsAuthorityItemDelegateV2InstructionData
  >(
    struct<UpdateAsAuthorityItemDelegateV2InstructionData>(
      [
        ['discriminator', u8()],
        ['updateAsAuthorityItemDelegateV2Discriminator', u8()],
        ['newUpdateAuthority', option(publicKeySerializer())],
        ['primarySaleHappened', option(bool())],
        ['isMutable', option(bool())],
        ['tokenStandard', option(getTokenStandardSerializer())],
        ['authorizationData', option(getAuthorizationDataSerializer())],
      ],
      { description: 'UpdateAsAuthorityItemDelegateV2InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 50,
      updateAsAuthorityItemDelegateV2Discriminator: 2,
      newUpdateAuthority: value.newUpdateAuthority ?? none(),
      primarySaleHappened: value.primarySaleHappened ?? none(),
      isMutable: value.isMutable ?? none(),
      tokenStandard: value.tokenStandard ?? none(),
      authorizationData: value.authorizationData ?? none(),
    })
  ) as Serializer<
    UpdateAsAuthorityItemDelegateV2InstructionDataArgs,
    UpdateAsAuthorityItemDelegateV2InstructionData
  >;
}

// Extra Args.
export type UpdateAsAuthorityItemDelegateV2InstructionExtraArgs = {
  updateAuthority: PublicKey;
};

// Args.
export type UpdateAsAuthorityItemDelegateV2InstructionArgs = PickPartial<
  UpdateAsAuthorityItemDelegateV2InstructionDataArgs &
    UpdateAsAuthorityItemDelegateV2InstructionExtraArgs,
  'updateAuthority'
>;

// Instruction.
export function updateAsAuthorityItemDelegateV2(
  context: Pick<Context, 'programs' | 'eddsa' | 'identity' | 'payer'>,
  input: UpdateAsAuthorityItemDelegateV2InstructionAccounts &
    UpdateAsAuthorityItemDelegateV2InstructionArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    mint: [input.mint, false] as const,
  };
  const resolvingArgs = {};
  addObjectProperty(
    resolvedAccounts,
    'authority',
    input.authority
      ? ([input.authority, false] as const)
      : ([context.identity, false] as const)
  );
  addObjectProperty(
    resolvingArgs,
    'updateAuthority',
    input.updateAuthority ?? context.identity.publicKey
  );
  addObjectProperty(
    resolvedAccounts,
    'delegateRecord',
    input.delegateRecord
      ? ([input.delegateRecord, false] as const)
      : ([
          findMetadataDelegateRecordPda(context, {
            mint: publicKey(input.mint, false),
            delegateRole: MetadataDelegateRole.AuthorityItem,
            updateAuthority: resolvingArgs.updateAuthority,
            delegate: publicKey(resolvedAccounts.authority[0], false),
          }),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'token',
    input.token
      ? ([input.token, false] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'metadata',
    input.metadata
      ? ([input.metadata, true] as const)
      : ([
          findMetadataPda(context, { mint: publicKey(input.mint, false) }),
          true,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'edition',
    input.edition
      ? ([input.edition, false] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'payer',
    input.payer
      ? ([input.payer, true] as const)
      : ([context.payer, true] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'systemProgram',
    input.systemProgram
      ? ([input.systemProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splSystem',
            '11111111111111111111111111111111'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'sysvarInstructions',
    input.sysvarInstructions
      ? ([input.sysvarInstructions, false] as const)
      : ([
          publicKey('Sysvar1nstructions1111111111111111111111111'),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'authorizationRules',
    input.authorizationRules
      ? ([input.authorizationRules, false] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'authorizationRulesProgram',
    input.authorizationRulesProgram
      ? ([input.authorizationRulesProgram, false] as const)
      : resolveAuthorizationRulesProgram(
          context,
          { ...input, ...resolvedAccounts },
          { ...input, ...resolvingArgs },
          programId,
          false
        )
  );
  const resolvedArgs = { ...input, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.authority, false);
  addAccountMeta(keys, signers, resolvedAccounts.delegateRecord, false);
  addAccountMeta(keys, signers, resolvedAccounts.token, false);
  addAccountMeta(keys, signers, resolvedAccounts.mint, false);
  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.edition, false);
  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.sysvarInstructions, false);
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.authorizationRulesProgram,
    false
  );
  addAccountMeta(keys, signers, resolvedAccounts.authorizationRules, false);

  // Data.
  const data =
    getUpdateAsAuthorityItemDelegateV2InstructionDataSerializer().serialize(
      resolvedArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
