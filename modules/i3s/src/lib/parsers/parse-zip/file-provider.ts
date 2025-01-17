/**
 * Interface for providing file data
 */
export interface FileProvider {
  /**
   * Gets an unsigned 8-bit integer at the specified byte offset from the start of the file.
   * @param offset The offset, in bytes, from the start of the file where to read the data.
   */
  getUint8(offset: number): Promise<number>;

  /**
   * Gets an unsigned 16-bit integer at the specified byte offset from the start of the file.
   * @param offset The offset, in bytes, from the start of the file where to read the data.
   */
  getUint16(offset: number): Promise<number>;

  /**
   * Gets an unsigned 32-bit integer at the specified byte offset from the start of the file.
   * @param offset The offset, in bytes, from the file of the view where to read the data.
   */
  getUint32(offset: number): Promise<number>;

  /**
   * returns an ArrayBuffer whose contents are a copy of this file bytes from startOffset, inclusive, up to endOffset, exclusive.
   * @param startOffset The offset, in bytes, from the start of the file where to start reading the data.
   * @param endOffset The offset, in bytes, from the start of the file where to end reading the data.
   */
  slice(startOffset: number, endOffset: number): Promise<ArrayBuffer>;

  /**
   * the length (in bytes) of the data.
   */
  length: number;
}
