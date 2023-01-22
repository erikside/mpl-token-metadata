/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Program, publicKey } from '@lorisleiva/js-core';
import { getSplTokenErrorFromCode, getSplTokenErrorFromName } from '../errors';

export function getSplTokenProgram(): Program {
  return {
    name: 'splToken',
    publicKey: publicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
    getErrorFromCode(code: number, cause?: Error) {
      return getSplTokenErrorFromCode(code, this, cause);
    },
    getErrorFromName(name: string, cause?: Error) {
      return getSplTokenErrorFromName(name, this, cause);
    },
    isOnCluster() {
      return true;
    },
  };
}
