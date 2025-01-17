import {FileProvider} from './file-provider';

/**
 * Provides file data using DataView
 */
export class DataViewFileProvider implements FileProvider {
  /**
   * The DataView from which data is provided
   */
  private file: DataView;

  constructor(file: DataView) {
    this.file = file;
  }

  /**
   * Gets an unsigned 8-bit integer at the specified byte offset from the start of the file.
   * @param offset The offset, in bytes, from the start of the file where to read the data.
   */
  getUint8(offset: number): Promise<number> {
    return Promise.resolve(this.file.getUint8(offset));
  }

  /**
   * Gets an unsigned 16-bit integer at the specified byte offset from the start of the file.
   * @param offset The offset, in bytes, from the start of the file where to read the data.
   */
  getUint16(offset: number): Promise<number> {
    return Promise.resolve(this.file.getUint16(offset, true));
  }

  /**
   * Gets an unsigned 32-bit integer at the specified byte offset from the start of the file.
   * @param offset The offset, in bytes, from the start of the file where to read the data.
   */
  getUint32(offset: number): Promise<number> {
    return Promise.resolve(this.file.getUint32(offset, true));
  }

  /**
   * returns an ArrayBuffer whose contents are a copy of this file bytes from startOffset, inclusive, up to endOffset, exclusive.
   * @param startOffset The offset, in bytes, from the start of the file where to start reading the data.
   * @param endOffset The offset, in bytes, from the start of the file where to end reading the data.
   */
  slice(startOffset: number, endOffset: number): Promise<ArrayBuffer> {
    return Promise.resolve(this.file.buffer.slice(startOffset, endOffset));
  }

  /**
   * the length (in bytes) of the data.
   */
  get length() {
    return this.file.byteLength;
  }
}
