export interface Streamable<O> {
  /**
   * Executes the query and streams the rows.
   *
   * The optional argument `chunkSize` defines how many rows to fetch from the database
   * at a time. It only affects some dialects like PostgreSQL that support it.
   *
   * ### Examples
   *
   * ```ts
   * const stream = db
   *   .selectFrom('person')
   *   .select(['first_name', 'last_name'])
   *   .where('gender', '=', 'other')
   *   .stream()
   *
   * for await (const person of stream) {
   *   console.log(person.first_name)
   *
   *   if (person.last_name === 'Something') {
   *     // Breaking or returning before the stream has ended will release
   *     // the database connection and invalidate the stream.
   *     break
   *   }
   * }
   * ```
   *
   * With query cancellation:
   *
   * ```ts
   * const controller = new AbortController()
   *
   * const stream = db
   *   .selectFrom('person')
   *   .select(['first_name', 'last_name'])
   *   .stream(100, { signal: controller.signal })
   *
   * // Cancel the stream after 5 seconds
   * setTimeout(() => controller.abort(), 5000)
   *
   * try {
   *   for await (const person of stream) {
   *     console.log(person.first_name)
   *   }
   * } catch (error) {
   *   if (error.name === 'QueryCancelledError') {
   *     console.log('Query was cancelled')
   *   }
   * }
   * ```
   */
  stream(
    chunkSize?: number,
    options?: { signal?: AbortSignal },
  ): AsyncIterableIterator<O>
}
