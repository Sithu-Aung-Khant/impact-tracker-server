
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Township
 * 
 */
export type Township = $Result.DefaultSelection<Prisma.$TownshipPayload>
/**
 * Model AidType
 * 
 */
export type AidType = $Result.DefaultSelection<Prisma.$AidTypePayload>
/**
 * Model FieldWorker
 * 
 */
export type FieldWorker = $Result.DefaultSelection<Prisma.$FieldWorkerPayload>
/**
 * Model Distribution
 * 
 */
export type Distribution = $Result.DefaultSelection<Prisma.$DistributionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Townships
 * const townships = await prisma.township.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Townships
   * const townships = await prisma.township.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.township`: Exposes CRUD operations for the **Township** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Townships
    * const townships = await prisma.township.findMany()
    * ```
    */
  get township(): Prisma.TownshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aidType`: Exposes CRUD operations for the **AidType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AidTypes
    * const aidTypes = await prisma.aidType.findMany()
    * ```
    */
  get aidType(): Prisma.AidTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fieldWorker`: Exposes CRUD operations for the **FieldWorker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FieldWorkers
    * const fieldWorkers = await prisma.fieldWorker.findMany()
    * ```
    */
  get fieldWorker(): Prisma.FieldWorkerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.distribution`: Exposes CRUD operations for the **Distribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Distributions
    * const distributions = await prisma.distribution.findMany()
    * ```
    */
  get distribution(): Prisma.DistributionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Township: 'Township',
    AidType: 'AidType',
    FieldWorker: 'FieldWorker',
    Distribution: 'Distribution'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "township" | "aidType" | "fieldWorker" | "distribution"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Township: {
        payload: Prisma.$TownshipPayload<ExtArgs>
        fields: Prisma.TownshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TownshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TownshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownshipPayload>
          }
          findFirst: {
            args: Prisma.TownshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TownshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownshipPayload>
          }
          findMany: {
            args: Prisma.TownshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownshipPayload>[]
          }
          create: {
            args: Prisma.TownshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownshipPayload>
          }
          createMany: {
            args: Prisma.TownshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TownshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownshipPayload>[]
          }
          delete: {
            args: Prisma.TownshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownshipPayload>
          }
          update: {
            args: Prisma.TownshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownshipPayload>
          }
          deleteMany: {
            args: Prisma.TownshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TownshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TownshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownshipPayload>[]
          }
          upsert: {
            args: Prisma.TownshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownshipPayload>
          }
          aggregate: {
            args: Prisma.TownshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTownship>
          }
          groupBy: {
            args: Prisma.TownshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<TownshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.TownshipCountArgs<ExtArgs>
            result: $Utils.Optional<TownshipCountAggregateOutputType> | number
          }
        }
      }
      AidType: {
        payload: Prisma.$AidTypePayload<ExtArgs>
        fields: Prisma.AidTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AidTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AidTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AidTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AidTypePayload>
          }
          findFirst: {
            args: Prisma.AidTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AidTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AidTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AidTypePayload>
          }
          findMany: {
            args: Prisma.AidTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AidTypePayload>[]
          }
          create: {
            args: Prisma.AidTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AidTypePayload>
          }
          createMany: {
            args: Prisma.AidTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AidTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AidTypePayload>[]
          }
          delete: {
            args: Prisma.AidTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AidTypePayload>
          }
          update: {
            args: Prisma.AidTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AidTypePayload>
          }
          deleteMany: {
            args: Prisma.AidTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AidTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AidTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AidTypePayload>[]
          }
          upsert: {
            args: Prisma.AidTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AidTypePayload>
          }
          aggregate: {
            args: Prisma.AidTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAidType>
          }
          groupBy: {
            args: Prisma.AidTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AidTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AidTypeCountArgs<ExtArgs>
            result: $Utils.Optional<AidTypeCountAggregateOutputType> | number
          }
        }
      }
      FieldWorker: {
        payload: Prisma.$FieldWorkerPayload<ExtArgs>
        fields: Prisma.FieldWorkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FieldWorkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldWorkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FieldWorkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldWorkerPayload>
          }
          findFirst: {
            args: Prisma.FieldWorkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldWorkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FieldWorkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldWorkerPayload>
          }
          findMany: {
            args: Prisma.FieldWorkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldWorkerPayload>[]
          }
          create: {
            args: Prisma.FieldWorkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldWorkerPayload>
          }
          createMany: {
            args: Prisma.FieldWorkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FieldWorkerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldWorkerPayload>[]
          }
          delete: {
            args: Prisma.FieldWorkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldWorkerPayload>
          }
          update: {
            args: Prisma.FieldWorkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldWorkerPayload>
          }
          deleteMany: {
            args: Prisma.FieldWorkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FieldWorkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FieldWorkerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldWorkerPayload>[]
          }
          upsert: {
            args: Prisma.FieldWorkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldWorkerPayload>
          }
          aggregate: {
            args: Prisma.FieldWorkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFieldWorker>
          }
          groupBy: {
            args: Prisma.FieldWorkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<FieldWorkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.FieldWorkerCountArgs<ExtArgs>
            result: $Utils.Optional<FieldWorkerCountAggregateOutputType> | number
          }
        }
      }
      Distribution: {
        payload: Prisma.$DistributionPayload<ExtArgs>
        fields: Prisma.DistributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>
          }
          findFirst: {
            args: Prisma.DistributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>
          }
          findMany: {
            args: Prisma.DistributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>[]
          }
          create: {
            args: Prisma.DistributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>
          }
          createMany: {
            args: Prisma.DistributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>[]
          }
          delete: {
            args: Prisma.DistributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>
          }
          update: {
            args: Prisma.DistributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>
          }
          deleteMany: {
            args: Prisma.DistributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>[]
          }
          upsert: {
            args: Prisma.DistributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributionPayload>
          }
          aggregate: {
            args: Prisma.DistributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistribution>
          }
          groupBy: {
            args: Prisma.DistributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistributionCountArgs<ExtArgs>
            result: $Utils.Optional<DistributionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    township?: TownshipOmit
    aidType?: AidTypeOmit
    fieldWorker?: FieldWorkerOmit
    distribution?: DistributionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TownshipCountOutputType
   */

  export type TownshipCountOutputType = {
    distributions: number
  }

  export type TownshipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distributions?: boolean | TownshipCountOutputTypeCountDistributionsArgs
  }

  // Custom InputTypes
  /**
   * TownshipCountOutputType without action
   */
  export type TownshipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownshipCountOutputType
     */
    select?: TownshipCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TownshipCountOutputType without action
   */
  export type TownshipCountOutputTypeCountDistributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributionWhereInput
  }


  /**
   * Count Type AidTypeCountOutputType
   */

  export type AidTypeCountOutputType = {
    distributions: number
  }

  export type AidTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distributions?: boolean | AidTypeCountOutputTypeCountDistributionsArgs
  }

  // Custom InputTypes
  /**
   * AidTypeCountOutputType without action
   */
  export type AidTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AidTypeCountOutputType
     */
    select?: AidTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AidTypeCountOutputType without action
   */
  export type AidTypeCountOutputTypeCountDistributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributionWhereInput
  }


  /**
   * Count Type FieldWorkerCountOutputType
   */

  export type FieldWorkerCountOutputType = {
    distributions: number
  }

  export type FieldWorkerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distributions?: boolean | FieldWorkerCountOutputTypeCountDistributionsArgs
  }

  // Custom InputTypes
  /**
   * FieldWorkerCountOutputType without action
   */
  export type FieldWorkerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldWorkerCountOutputType
     */
    select?: FieldWorkerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FieldWorkerCountOutputType without action
   */
  export type FieldWorkerCountOutputTypeCountDistributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Township
   */

  export type AggregateTownship = {
    _count: TownshipCountAggregateOutputType | null
    _avg: TownshipAvgAggregateOutputType | null
    _sum: TownshipSumAggregateOutputType | null
    _min: TownshipMinAggregateOutputType | null
    _max: TownshipMaxAggregateOutputType | null
  }

  export type TownshipAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type TownshipSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type TownshipMinAggregateOutputType = {
    id: number | null
    name: string | null
    region: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TownshipMaxAggregateOutputType = {
    id: number | null
    name: string | null
    region: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TownshipCountAggregateOutputType = {
    id: number
    name: number
    region: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TownshipAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type TownshipSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type TownshipMinAggregateInputType = {
    id?: true
    name?: true
    region?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TownshipMaxAggregateInputType = {
    id?: true
    name?: true
    region?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TownshipCountAggregateInputType = {
    id?: true
    name?: true
    region?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TownshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Township to aggregate.
     */
    where?: TownshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Townships to fetch.
     */
    orderBy?: TownshipOrderByWithRelationInput | TownshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TownshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Townships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Townships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Townships
    **/
    _count?: true | TownshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TownshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TownshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TownshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TownshipMaxAggregateInputType
  }

  export type GetTownshipAggregateType<T extends TownshipAggregateArgs> = {
        [P in keyof T & keyof AggregateTownship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTownship[P]>
      : GetScalarType<T[P], AggregateTownship[P]>
  }




  export type TownshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TownshipWhereInput
    orderBy?: TownshipOrderByWithAggregationInput | TownshipOrderByWithAggregationInput[]
    by: TownshipScalarFieldEnum[] | TownshipScalarFieldEnum
    having?: TownshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TownshipCountAggregateInputType | true
    _avg?: TownshipAvgAggregateInputType
    _sum?: TownshipSumAggregateInputType
    _min?: TownshipMinAggregateInputType
    _max?: TownshipMaxAggregateInputType
  }

  export type TownshipGroupByOutputType = {
    id: number
    name: string
    region: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date
    updatedAt: Date
    _count: TownshipCountAggregateOutputType | null
    _avg: TownshipAvgAggregateOutputType | null
    _sum: TownshipSumAggregateOutputType | null
    _min: TownshipMinAggregateOutputType | null
    _max: TownshipMaxAggregateOutputType | null
  }

  type GetTownshipGroupByPayload<T extends TownshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TownshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TownshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TownshipGroupByOutputType[P]>
            : GetScalarType<T[P], TownshipGroupByOutputType[P]>
        }
      >
    >


  export type TownshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    distributions?: boolean | Township$distributionsArgs<ExtArgs>
    _count?: boolean | TownshipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["township"]>

  export type TownshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["township"]>

  export type TownshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["township"]>

  export type TownshipSelectScalar = {
    id?: boolean
    name?: boolean
    region?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TownshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "region" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["township"]>
  export type TownshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distributions?: boolean | Township$distributionsArgs<ExtArgs>
    _count?: boolean | TownshipCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TownshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TownshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TownshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Township"
    objects: {
      distributions: Prisma.$DistributionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      region: string | null
      latitude: number | null
      longitude: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["township"]>
    composites: {}
  }

  type TownshipGetPayload<S extends boolean | null | undefined | TownshipDefaultArgs> = $Result.GetResult<Prisma.$TownshipPayload, S>

  type TownshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TownshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TownshipCountAggregateInputType | true
    }

  export interface TownshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Township'], meta: { name: 'Township' } }
    /**
     * Find zero or one Township that matches the filter.
     * @param {TownshipFindUniqueArgs} args - Arguments to find a Township
     * @example
     * // Get one Township
     * const township = await prisma.township.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TownshipFindUniqueArgs>(args: SelectSubset<T, TownshipFindUniqueArgs<ExtArgs>>): Prisma__TownshipClient<$Result.GetResult<Prisma.$TownshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Township that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TownshipFindUniqueOrThrowArgs} args - Arguments to find a Township
     * @example
     * // Get one Township
     * const township = await prisma.township.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TownshipFindUniqueOrThrowArgs>(args: SelectSubset<T, TownshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TownshipClient<$Result.GetResult<Prisma.$TownshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Township that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownshipFindFirstArgs} args - Arguments to find a Township
     * @example
     * // Get one Township
     * const township = await prisma.township.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TownshipFindFirstArgs>(args?: SelectSubset<T, TownshipFindFirstArgs<ExtArgs>>): Prisma__TownshipClient<$Result.GetResult<Prisma.$TownshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Township that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownshipFindFirstOrThrowArgs} args - Arguments to find a Township
     * @example
     * // Get one Township
     * const township = await prisma.township.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TownshipFindFirstOrThrowArgs>(args?: SelectSubset<T, TownshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__TownshipClient<$Result.GetResult<Prisma.$TownshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Townships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Townships
     * const townships = await prisma.township.findMany()
     * 
     * // Get first 10 Townships
     * const townships = await prisma.township.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const townshipWithIdOnly = await prisma.township.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TownshipFindManyArgs>(args?: SelectSubset<T, TownshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TownshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Township.
     * @param {TownshipCreateArgs} args - Arguments to create a Township.
     * @example
     * // Create one Township
     * const Township = await prisma.township.create({
     *   data: {
     *     // ... data to create a Township
     *   }
     * })
     * 
     */
    create<T extends TownshipCreateArgs>(args: SelectSubset<T, TownshipCreateArgs<ExtArgs>>): Prisma__TownshipClient<$Result.GetResult<Prisma.$TownshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Townships.
     * @param {TownshipCreateManyArgs} args - Arguments to create many Townships.
     * @example
     * // Create many Townships
     * const township = await prisma.township.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TownshipCreateManyArgs>(args?: SelectSubset<T, TownshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Townships and returns the data saved in the database.
     * @param {TownshipCreateManyAndReturnArgs} args - Arguments to create many Townships.
     * @example
     * // Create many Townships
     * const township = await prisma.township.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Townships and only return the `id`
     * const townshipWithIdOnly = await prisma.township.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TownshipCreateManyAndReturnArgs>(args?: SelectSubset<T, TownshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TownshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Township.
     * @param {TownshipDeleteArgs} args - Arguments to delete one Township.
     * @example
     * // Delete one Township
     * const Township = await prisma.township.delete({
     *   where: {
     *     // ... filter to delete one Township
     *   }
     * })
     * 
     */
    delete<T extends TownshipDeleteArgs>(args: SelectSubset<T, TownshipDeleteArgs<ExtArgs>>): Prisma__TownshipClient<$Result.GetResult<Prisma.$TownshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Township.
     * @param {TownshipUpdateArgs} args - Arguments to update one Township.
     * @example
     * // Update one Township
     * const township = await prisma.township.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TownshipUpdateArgs>(args: SelectSubset<T, TownshipUpdateArgs<ExtArgs>>): Prisma__TownshipClient<$Result.GetResult<Prisma.$TownshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Townships.
     * @param {TownshipDeleteManyArgs} args - Arguments to filter Townships to delete.
     * @example
     * // Delete a few Townships
     * const { count } = await prisma.township.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TownshipDeleteManyArgs>(args?: SelectSubset<T, TownshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Townships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Townships
     * const township = await prisma.township.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TownshipUpdateManyArgs>(args: SelectSubset<T, TownshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Townships and returns the data updated in the database.
     * @param {TownshipUpdateManyAndReturnArgs} args - Arguments to update many Townships.
     * @example
     * // Update many Townships
     * const township = await prisma.township.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Townships and only return the `id`
     * const townshipWithIdOnly = await prisma.township.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TownshipUpdateManyAndReturnArgs>(args: SelectSubset<T, TownshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TownshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Township.
     * @param {TownshipUpsertArgs} args - Arguments to update or create a Township.
     * @example
     * // Update or create a Township
     * const township = await prisma.township.upsert({
     *   create: {
     *     // ... data to create a Township
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Township we want to update
     *   }
     * })
     */
    upsert<T extends TownshipUpsertArgs>(args: SelectSubset<T, TownshipUpsertArgs<ExtArgs>>): Prisma__TownshipClient<$Result.GetResult<Prisma.$TownshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Townships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownshipCountArgs} args - Arguments to filter Townships to count.
     * @example
     * // Count the number of Townships
     * const count = await prisma.township.count({
     *   where: {
     *     // ... the filter for the Townships we want to count
     *   }
     * })
    **/
    count<T extends TownshipCountArgs>(
      args?: Subset<T, TownshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TownshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Township.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TownshipAggregateArgs>(args: Subset<T, TownshipAggregateArgs>): Prisma.PrismaPromise<GetTownshipAggregateType<T>>

    /**
     * Group by Township.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TownshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TownshipGroupByArgs['orderBy'] }
        : { orderBy?: TownshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TownshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTownshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Township model
   */
  readonly fields: TownshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Township.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TownshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    distributions<T extends Township$distributionsArgs<ExtArgs> = {}>(args?: Subset<T, Township$distributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Township model
   */
  interface TownshipFieldRefs {
    readonly id: FieldRef<"Township", 'Int'>
    readonly name: FieldRef<"Township", 'String'>
    readonly region: FieldRef<"Township", 'String'>
    readonly latitude: FieldRef<"Township", 'Float'>
    readonly longitude: FieldRef<"Township", 'Float'>
    readonly createdAt: FieldRef<"Township", 'DateTime'>
    readonly updatedAt: FieldRef<"Township", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Township findUnique
   */
  export type TownshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Township
     */
    select?: TownshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Township
     */
    omit?: TownshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownshipInclude<ExtArgs> | null
    /**
     * Filter, which Township to fetch.
     */
    where: TownshipWhereUniqueInput
  }

  /**
   * Township findUniqueOrThrow
   */
  export type TownshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Township
     */
    select?: TownshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Township
     */
    omit?: TownshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownshipInclude<ExtArgs> | null
    /**
     * Filter, which Township to fetch.
     */
    where: TownshipWhereUniqueInput
  }

  /**
   * Township findFirst
   */
  export type TownshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Township
     */
    select?: TownshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Township
     */
    omit?: TownshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownshipInclude<ExtArgs> | null
    /**
     * Filter, which Township to fetch.
     */
    where?: TownshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Townships to fetch.
     */
    orderBy?: TownshipOrderByWithRelationInput | TownshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Townships.
     */
    cursor?: TownshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Townships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Townships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Townships.
     */
    distinct?: TownshipScalarFieldEnum | TownshipScalarFieldEnum[]
  }

  /**
   * Township findFirstOrThrow
   */
  export type TownshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Township
     */
    select?: TownshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Township
     */
    omit?: TownshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownshipInclude<ExtArgs> | null
    /**
     * Filter, which Township to fetch.
     */
    where?: TownshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Townships to fetch.
     */
    orderBy?: TownshipOrderByWithRelationInput | TownshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Townships.
     */
    cursor?: TownshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Townships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Townships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Townships.
     */
    distinct?: TownshipScalarFieldEnum | TownshipScalarFieldEnum[]
  }

  /**
   * Township findMany
   */
  export type TownshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Township
     */
    select?: TownshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Township
     */
    omit?: TownshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownshipInclude<ExtArgs> | null
    /**
     * Filter, which Townships to fetch.
     */
    where?: TownshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Townships to fetch.
     */
    orderBy?: TownshipOrderByWithRelationInput | TownshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Townships.
     */
    cursor?: TownshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Townships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Townships.
     */
    skip?: number
    distinct?: TownshipScalarFieldEnum | TownshipScalarFieldEnum[]
  }

  /**
   * Township create
   */
  export type TownshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Township
     */
    select?: TownshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Township
     */
    omit?: TownshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Township.
     */
    data: XOR<TownshipCreateInput, TownshipUncheckedCreateInput>
  }

  /**
   * Township createMany
   */
  export type TownshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Townships.
     */
    data: TownshipCreateManyInput | TownshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Township createManyAndReturn
   */
  export type TownshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Township
     */
    select?: TownshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Township
     */
    omit?: TownshipOmit<ExtArgs> | null
    /**
     * The data used to create many Townships.
     */
    data: TownshipCreateManyInput | TownshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Township update
   */
  export type TownshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Township
     */
    select?: TownshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Township
     */
    omit?: TownshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Township.
     */
    data: XOR<TownshipUpdateInput, TownshipUncheckedUpdateInput>
    /**
     * Choose, which Township to update.
     */
    where: TownshipWhereUniqueInput
  }

  /**
   * Township updateMany
   */
  export type TownshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Townships.
     */
    data: XOR<TownshipUpdateManyMutationInput, TownshipUncheckedUpdateManyInput>
    /**
     * Filter which Townships to update
     */
    where?: TownshipWhereInput
    /**
     * Limit how many Townships to update.
     */
    limit?: number
  }

  /**
   * Township updateManyAndReturn
   */
  export type TownshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Township
     */
    select?: TownshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Township
     */
    omit?: TownshipOmit<ExtArgs> | null
    /**
     * The data used to update Townships.
     */
    data: XOR<TownshipUpdateManyMutationInput, TownshipUncheckedUpdateManyInput>
    /**
     * Filter which Townships to update
     */
    where?: TownshipWhereInput
    /**
     * Limit how many Townships to update.
     */
    limit?: number
  }

  /**
   * Township upsert
   */
  export type TownshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Township
     */
    select?: TownshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Township
     */
    omit?: TownshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Township to update in case it exists.
     */
    where: TownshipWhereUniqueInput
    /**
     * In case the Township found by the `where` argument doesn't exist, create a new Township with this data.
     */
    create: XOR<TownshipCreateInput, TownshipUncheckedCreateInput>
    /**
     * In case the Township was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TownshipUpdateInput, TownshipUncheckedUpdateInput>
  }

  /**
   * Township delete
   */
  export type TownshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Township
     */
    select?: TownshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Township
     */
    omit?: TownshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownshipInclude<ExtArgs> | null
    /**
     * Filter which Township to delete.
     */
    where: TownshipWhereUniqueInput
  }

  /**
   * Township deleteMany
   */
  export type TownshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Townships to delete
     */
    where?: TownshipWhereInput
    /**
     * Limit how many Townships to delete.
     */
    limit?: number
  }

  /**
   * Township.distributions
   */
  export type Township$distributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    where?: DistributionWhereInput
    orderBy?: DistributionOrderByWithRelationInput | DistributionOrderByWithRelationInput[]
    cursor?: DistributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistributionScalarFieldEnum | DistributionScalarFieldEnum[]
  }

  /**
   * Township without action
   */
  export type TownshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Township
     */
    select?: TownshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Township
     */
    omit?: TownshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownshipInclude<ExtArgs> | null
  }


  /**
   * Model AidType
   */

  export type AggregateAidType = {
    _count: AidTypeCountAggregateOutputType | null
    _avg: AidTypeAvgAggregateOutputType | null
    _sum: AidTypeSumAggregateOutputType | null
    _min: AidTypeMinAggregateOutputType | null
    _max: AidTypeMaxAggregateOutputType | null
  }

  export type AidTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type AidTypeSumAggregateOutputType = {
    id: number | null
  }

  export type AidTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AidTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AidTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AidTypeAvgAggregateInputType = {
    id?: true
  }

  export type AidTypeSumAggregateInputType = {
    id?: true
  }

  export type AidTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AidTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AidTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AidTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AidType to aggregate.
     */
    where?: AidTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AidTypes to fetch.
     */
    orderBy?: AidTypeOrderByWithRelationInput | AidTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AidTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AidTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AidTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AidTypes
    **/
    _count?: true | AidTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AidTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AidTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AidTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AidTypeMaxAggregateInputType
  }

  export type GetAidTypeAggregateType<T extends AidTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateAidType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAidType[P]>
      : GetScalarType<T[P], AggregateAidType[P]>
  }




  export type AidTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AidTypeWhereInput
    orderBy?: AidTypeOrderByWithAggregationInput | AidTypeOrderByWithAggregationInput[]
    by: AidTypeScalarFieldEnum[] | AidTypeScalarFieldEnum
    having?: AidTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AidTypeCountAggregateInputType | true
    _avg?: AidTypeAvgAggregateInputType
    _sum?: AidTypeSumAggregateInputType
    _min?: AidTypeMinAggregateInputType
    _max?: AidTypeMaxAggregateInputType
  }

  export type AidTypeGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: AidTypeCountAggregateOutputType | null
    _avg: AidTypeAvgAggregateOutputType | null
    _sum: AidTypeSumAggregateOutputType | null
    _min: AidTypeMinAggregateOutputType | null
    _max: AidTypeMaxAggregateOutputType | null
  }

  type GetAidTypeGroupByPayload<T extends AidTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AidTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AidTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AidTypeGroupByOutputType[P]>
            : GetScalarType<T[P], AidTypeGroupByOutputType[P]>
        }
      >
    >


  export type AidTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    distributions?: boolean | AidType$distributionsArgs<ExtArgs>
    _count?: boolean | AidTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aidType"]>

  export type AidTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aidType"]>

  export type AidTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aidType"]>

  export type AidTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AidTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["aidType"]>
  export type AidTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distributions?: boolean | AidType$distributionsArgs<ExtArgs>
    _count?: boolean | AidTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AidTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AidTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AidTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AidType"
    objects: {
      distributions: Prisma.$DistributionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aidType"]>
    composites: {}
  }

  type AidTypeGetPayload<S extends boolean | null | undefined | AidTypeDefaultArgs> = $Result.GetResult<Prisma.$AidTypePayload, S>

  type AidTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AidTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AidTypeCountAggregateInputType | true
    }

  export interface AidTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AidType'], meta: { name: 'AidType' } }
    /**
     * Find zero or one AidType that matches the filter.
     * @param {AidTypeFindUniqueArgs} args - Arguments to find a AidType
     * @example
     * // Get one AidType
     * const aidType = await prisma.aidType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AidTypeFindUniqueArgs>(args: SelectSubset<T, AidTypeFindUniqueArgs<ExtArgs>>): Prisma__AidTypeClient<$Result.GetResult<Prisma.$AidTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AidType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AidTypeFindUniqueOrThrowArgs} args - Arguments to find a AidType
     * @example
     * // Get one AidType
     * const aidType = await prisma.aidType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AidTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, AidTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AidTypeClient<$Result.GetResult<Prisma.$AidTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AidType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AidTypeFindFirstArgs} args - Arguments to find a AidType
     * @example
     * // Get one AidType
     * const aidType = await prisma.aidType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AidTypeFindFirstArgs>(args?: SelectSubset<T, AidTypeFindFirstArgs<ExtArgs>>): Prisma__AidTypeClient<$Result.GetResult<Prisma.$AidTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AidType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AidTypeFindFirstOrThrowArgs} args - Arguments to find a AidType
     * @example
     * // Get one AidType
     * const aidType = await prisma.aidType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AidTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, AidTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AidTypeClient<$Result.GetResult<Prisma.$AidTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AidTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AidTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AidTypes
     * const aidTypes = await prisma.aidType.findMany()
     * 
     * // Get first 10 AidTypes
     * const aidTypes = await prisma.aidType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aidTypeWithIdOnly = await prisma.aidType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AidTypeFindManyArgs>(args?: SelectSubset<T, AidTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AidTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AidType.
     * @param {AidTypeCreateArgs} args - Arguments to create a AidType.
     * @example
     * // Create one AidType
     * const AidType = await prisma.aidType.create({
     *   data: {
     *     // ... data to create a AidType
     *   }
     * })
     * 
     */
    create<T extends AidTypeCreateArgs>(args: SelectSubset<T, AidTypeCreateArgs<ExtArgs>>): Prisma__AidTypeClient<$Result.GetResult<Prisma.$AidTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AidTypes.
     * @param {AidTypeCreateManyArgs} args - Arguments to create many AidTypes.
     * @example
     * // Create many AidTypes
     * const aidType = await prisma.aidType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AidTypeCreateManyArgs>(args?: SelectSubset<T, AidTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AidTypes and returns the data saved in the database.
     * @param {AidTypeCreateManyAndReturnArgs} args - Arguments to create many AidTypes.
     * @example
     * // Create many AidTypes
     * const aidType = await prisma.aidType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AidTypes and only return the `id`
     * const aidTypeWithIdOnly = await prisma.aidType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AidTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, AidTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AidTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AidType.
     * @param {AidTypeDeleteArgs} args - Arguments to delete one AidType.
     * @example
     * // Delete one AidType
     * const AidType = await prisma.aidType.delete({
     *   where: {
     *     // ... filter to delete one AidType
     *   }
     * })
     * 
     */
    delete<T extends AidTypeDeleteArgs>(args: SelectSubset<T, AidTypeDeleteArgs<ExtArgs>>): Prisma__AidTypeClient<$Result.GetResult<Prisma.$AidTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AidType.
     * @param {AidTypeUpdateArgs} args - Arguments to update one AidType.
     * @example
     * // Update one AidType
     * const aidType = await prisma.aidType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AidTypeUpdateArgs>(args: SelectSubset<T, AidTypeUpdateArgs<ExtArgs>>): Prisma__AidTypeClient<$Result.GetResult<Prisma.$AidTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AidTypes.
     * @param {AidTypeDeleteManyArgs} args - Arguments to filter AidTypes to delete.
     * @example
     * // Delete a few AidTypes
     * const { count } = await prisma.aidType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AidTypeDeleteManyArgs>(args?: SelectSubset<T, AidTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AidTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AidTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AidTypes
     * const aidType = await prisma.aidType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AidTypeUpdateManyArgs>(args: SelectSubset<T, AidTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AidTypes and returns the data updated in the database.
     * @param {AidTypeUpdateManyAndReturnArgs} args - Arguments to update many AidTypes.
     * @example
     * // Update many AidTypes
     * const aidType = await prisma.aidType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AidTypes and only return the `id`
     * const aidTypeWithIdOnly = await prisma.aidType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AidTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, AidTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AidTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AidType.
     * @param {AidTypeUpsertArgs} args - Arguments to update or create a AidType.
     * @example
     * // Update or create a AidType
     * const aidType = await prisma.aidType.upsert({
     *   create: {
     *     // ... data to create a AidType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AidType we want to update
     *   }
     * })
     */
    upsert<T extends AidTypeUpsertArgs>(args: SelectSubset<T, AidTypeUpsertArgs<ExtArgs>>): Prisma__AidTypeClient<$Result.GetResult<Prisma.$AidTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AidTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AidTypeCountArgs} args - Arguments to filter AidTypes to count.
     * @example
     * // Count the number of AidTypes
     * const count = await prisma.aidType.count({
     *   where: {
     *     // ... the filter for the AidTypes we want to count
     *   }
     * })
    **/
    count<T extends AidTypeCountArgs>(
      args?: Subset<T, AidTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AidTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AidType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AidTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AidTypeAggregateArgs>(args: Subset<T, AidTypeAggregateArgs>): Prisma.PrismaPromise<GetAidTypeAggregateType<T>>

    /**
     * Group by AidType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AidTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AidTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AidTypeGroupByArgs['orderBy'] }
        : { orderBy?: AidTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AidTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAidTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AidType model
   */
  readonly fields: AidTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AidType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AidTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    distributions<T extends AidType$distributionsArgs<ExtArgs> = {}>(args?: Subset<T, AidType$distributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AidType model
   */
  interface AidTypeFieldRefs {
    readonly id: FieldRef<"AidType", 'Int'>
    readonly name: FieldRef<"AidType", 'String'>
    readonly description: FieldRef<"AidType", 'String'>
    readonly createdAt: FieldRef<"AidType", 'DateTime'>
    readonly updatedAt: FieldRef<"AidType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AidType findUnique
   */
  export type AidTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AidType
     */
    select?: AidTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AidType
     */
    omit?: AidTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AidTypeInclude<ExtArgs> | null
    /**
     * Filter, which AidType to fetch.
     */
    where: AidTypeWhereUniqueInput
  }

  /**
   * AidType findUniqueOrThrow
   */
  export type AidTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AidType
     */
    select?: AidTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AidType
     */
    omit?: AidTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AidTypeInclude<ExtArgs> | null
    /**
     * Filter, which AidType to fetch.
     */
    where: AidTypeWhereUniqueInput
  }

  /**
   * AidType findFirst
   */
  export type AidTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AidType
     */
    select?: AidTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AidType
     */
    omit?: AidTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AidTypeInclude<ExtArgs> | null
    /**
     * Filter, which AidType to fetch.
     */
    where?: AidTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AidTypes to fetch.
     */
    orderBy?: AidTypeOrderByWithRelationInput | AidTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AidTypes.
     */
    cursor?: AidTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AidTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AidTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AidTypes.
     */
    distinct?: AidTypeScalarFieldEnum | AidTypeScalarFieldEnum[]
  }

  /**
   * AidType findFirstOrThrow
   */
  export type AidTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AidType
     */
    select?: AidTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AidType
     */
    omit?: AidTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AidTypeInclude<ExtArgs> | null
    /**
     * Filter, which AidType to fetch.
     */
    where?: AidTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AidTypes to fetch.
     */
    orderBy?: AidTypeOrderByWithRelationInput | AidTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AidTypes.
     */
    cursor?: AidTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AidTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AidTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AidTypes.
     */
    distinct?: AidTypeScalarFieldEnum | AidTypeScalarFieldEnum[]
  }

  /**
   * AidType findMany
   */
  export type AidTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AidType
     */
    select?: AidTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AidType
     */
    omit?: AidTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AidTypeInclude<ExtArgs> | null
    /**
     * Filter, which AidTypes to fetch.
     */
    where?: AidTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AidTypes to fetch.
     */
    orderBy?: AidTypeOrderByWithRelationInput | AidTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AidTypes.
     */
    cursor?: AidTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AidTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AidTypes.
     */
    skip?: number
    distinct?: AidTypeScalarFieldEnum | AidTypeScalarFieldEnum[]
  }

  /**
   * AidType create
   */
  export type AidTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AidType
     */
    select?: AidTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AidType
     */
    omit?: AidTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AidTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a AidType.
     */
    data: XOR<AidTypeCreateInput, AidTypeUncheckedCreateInput>
  }

  /**
   * AidType createMany
   */
  export type AidTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AidTypes.
     */
    data: AidTypeCreateManyInput | AidTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AidType createManyAndReturn
   */
  export type AidTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AidType
     */
    select?: AidTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AidType
     */
    omit?: AidTypeOmit<ExtArgs> | null
    /**
     * The data used to create many AidTypes.
     */
    data: AidTypeCreateManyInput | AidTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AidType update
   */
  export type AidTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AidType
     */
    select?: AidTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AidType
     */
    omit?: AidTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AidTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a AidType.
     */
    data: XOR<AidTypeUpdateInput, AidTypeUncheckedUpdateInput>
    /**
     * Choose, which AidType to update.
     */
    where: AidTypeWhereUniqueInput
  }

  /**
   * AidType updateMany
   */
  export type AidTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AidTypes.
     */
    data: XOR<AidTypeUpdateManyMutationInput, AidTypeUncheckedUpdateManyInput>
    /**
     * Filter which AidTypes to update
     */
    where?: AidTypeWhereInput
    /**
     * Limit how many AidTypes to update.
     */
    limit?: number
  }

  /**
   * AidType updateManyAndReturn
   */
  export type AidTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AidType
     */
    select?: AidTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AidType
     */
    omit?: AidTypeOmit<ExtArgs> | null
    /**
     * The data used to update AidTypes.
     */
    data: XOR<AidTypeUpdateManyMutationInput, AidTypeUncheckedUpdateManyInput>
    /**
     * Filter which AidTypes to update
     */
    where?: AidTypeWhereInput
    /**
     * Limit how many AidTypes to update.
     */
    limit?: number
  }

  /**
   * AidType upsert
   */
  export type AidTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AidType
     */
    select?: AidTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AidType
     */
    omit?: AidTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AidTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the AidType to update in case it exists.
     */
    where: AidTypeWhereUniqueInput
    /**
     * In case the AidType found by the `where` argument doesn't exist, create a new AidType with this data.
     */
    create: XOR<AidTypeCreateInput, AidTypeUncheckedCreateInput>
    /**
     * In case the AidType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AidTypeUpdateInput, AidTypeUncheckedUpdateInput>
  }

  /**
   * AidType delete
   */
  export type AidTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AidType
     */
    select?: AidTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AidType
     */
    omit?: AidTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AidTypeInclude<ExtArgs> | null
    /**
     * Filter which AidType to delete.
     */
    where: AidTypeWhereUniqueInput
  }

  /**
   * AidType deleteMany
   */
  export type AidTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AidTypes to delete
     */
    where?: AidTypeWhereInput
    /**
     * Limit how many AidTypes to delete.
     */
    limit?: number
  }

  /**
   * AidType.distributions
   */
  export type AidType$distributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    where?: DistributionWhereInput
    orderBy?: DistributionOrderByWithRelationInput | DistributionOrderByWithRelationInput[]
    cursor?: DistributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistributionScalarFieldEnum | DistributionScalarFieldEnum[]
  }

  /**
   * AidType without action
   */
  export type AidTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AidType
     */
    select?: AidTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AidType
     */
    omit?: AidTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AidTypeInclude<ExtArgs> | null
  }


  /**
   * Model FieldWorker
   */

  export type AggregateFieldWorker = {
    _count: FieldWorkerCountAggregateOutputType | null
    _avg: FieldWorkerAvgAggregateOutputType | null
    _sum: FieldWorkerSumAggregateOutputType | null
    _min: FieldWorkerMinAggregateOutputType | null
    _max: FieldWorkerMaxAggregateOutputType | null
  }

  export type FieldWorkerAvgAggregateOutputType = {
    id: number | null
  }

  export type FieldWorkerSumAggregateOutputType = {
    id: number | null
  }

  export type FieldWorkerMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FieldWorkerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FieldWorkerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FieldWorkerAvgAggregateInputType = {
    id?: true
  }

  export type FieldWorkerSumAggregateInputType = {
    id?: true
  }

  export type FieldWorkerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FieldWorkerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FieldWorkerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FieldWorkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldWorker to aggregate.
     */
    where?: FieldWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldWorkers to fetch.
     */
    orderBy?: FieldWorkerOrderByWithRelationInput | FieldWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FieldWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FieldWorkers
    **/
    _count?: true | FieldWorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FieldWorkerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FieldWorkerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldWorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldWorkerMaxAggregateInputType
  }

  export type GetFieldWorkerAggregateType<T extends FieldWorkerAggregateArgs> = {
        [P in keyof T & keyof AggregateFieldWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFieldWorker[P]>
      : GetScalarType<T[P], AggregateFieldWorker[P]>
  }




  export type FieldWorkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldWorkerWhereInput
    orderBy?: FieldWorkerOrderByWithAggregationInput | FieldWorkerOrderByWithAggregationInput[]
    by: FieldWorkerScalarFieldEnum[] | FieldWorkerScalarFieldEnum
    having?: FieldWorkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldWorkerCountAggregateInputType | true
    _avg?: FieldWorkerAvgAggregateInputType
    _sum?: FieldWorkerSumAggregateInputType
    _min?: FieldWorkerMinAggregateInputType
    _max?: FieldWorkerMaxAggregateInputType
  }

  export type FieldWorkerGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: FieldWorkerCountAggregateOutputType | null
    _avg: FieldWorkerAvgAggregateOutputType | null
    _sum: FieldWorkerSumAggregateOutputType | null
    _min: FieldWorkerMinAggregateOutputType | null
    _max: FieldWorkerMaxAggregateOutputType | null
  }

  type GetFieldWorkerGroupByPayload<T extends FieldWorkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldWorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldWorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldWorkerGroupByOutputType[P]>
            : GetScalarType<T[P], FieldWorkerGroupByOutputType[P]>
        }
      >
    >


  export type FieldWorkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    distributions?: boolean | FieldWorker$distributionsArgs<ExtArgs>
    _count?: boolean | FieldWorkerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fieldWorker"]>

  export type FieldWorkerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fieldWorker"]>

  export type FieldWorkerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fieldWorker"]>

  export type FieldWorkerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FieldWorkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["fieldWorker"]>
  export type FieldWorkerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distributions?: boolean | FieldWorker$distributionsArgs<ExtArgs>
    _count?: boolean | FieldWorkerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FieldWorkerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FieldWorkerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FieldWorkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FieldWorker"
    objects: {
      distributions: Prisma.$DistributionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fieldWorker"]>
    composites: {}
  }

  type FieldWorkerGetPayload<S extends boolean | null | undefined | FieldWorkerDefaultArgs> = $Result.GetResult<Prisma.$FieldWorkerPayload, S>

  type FieldWorkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FieldWorkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FieldWorkerCountAggregateInputType | true
    }

  export interface FieldWorkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FieldWorker'], meta: { name: 'FieldWorker' } }
    /**
     * Find zero or one FieldWorker that matches the filter.
     * @param {FieldWorkerFindUniqueArgs} args - Arguments to find a FieldWorker
     * @example
     * // Get one FieldWorker
     * const fieldWorker = await prisma.fieldWorker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FieldWorkerFindUniqueArgs>(args: SelectSubset<T, FieldWorkerFindUniqueArgs<ExtArgs>>): Prisma__FieldWorkerClient<$Result.GetResult<Prisma.$FieldWorkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FieldWorker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FieldWorkerFindUniqueOrThrowArgs} args - Arguments to find a FieldWorker
     * @example
     * // Get one FieldWorker
     * const fieldWorker = await prisma.fieldWorker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FieldWorkerFindUniqueOrThrowArgs>(args: SelectSubset<T, FieldWorkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FieldWorkerClient<$Result.GetResult<Prisma.$FieldWorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FieldWorker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldWorkerFindFirstArgs} args - Arguments to find a FieldWorker
     * @example
     * // Get one FieldWorker
     * const fieldWorker = await prisma.fieldWorker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FieldWorkerFindFirstArgs>(args?: SelectSubset<T, FieldWorkerFindFirstArgs<ExtArgs>>): Prisma__FieldWorkerClient<$Result.GetResult<Prisma.$FieldWorkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FieldWorker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldWorkerFindFirstOrThrowArgs} args - Arguments to find a FieldWorker
     * @example
     * // Get one FieldWorker
     * const fieldWorker = await prisma.fieldWorker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FieldWorkerFindFirstOrThrowArgs>(args?: SelectSubset<T, FieldWorkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__FieldWorkerClient<$Result.GetResult<Prisma.$FieldWorkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FieldWorkers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldWorkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FieldWorkers
     * const fieldWorkers = await prisma.fieldWorker.findMany()
     * 
     * // Get first 10 FieldWorkers
     * const fieldWorkers = await prisma.fieldWorker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldWorkerWithIdOnly = await prisma.fieldWorker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FieldWorkerFindManyArgs>(args?: SelectSubset<T, FieldWorkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldWorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FieldWorker.
     * @param {FieldWorkerCreateArgs} args - Arguments to create a FieldWorker.
     * @example
     * // Create one FieldWorker
     * const FieldWorker = await prisma.fieldWorker.create({
     *   data: {
     *     // ... data to create a FieldWorker
     *   }
     * })
     * 
     */
    create<T extends FieldWorkerCreateArgs>(args: SelectSubset<T, FieldWorkerCreateArgs<ExtArgs>>): Prisma__FieldWorkerClient<$Result.GetResult<Prisma.$FieldWorkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FieldWorkers.
     * @param {FieldWorkerCreateManyArgs} args - Arguments to create many FieldWorkers.
     * @example
     * // Create many FieldWorkers
     * const fieldWorker = await prisma.fieldWorker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FieldWorkerCreateManyArgs>(args?: SelectSubset<T, FieldWorkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FieldWorkers and returns the data saved in the database.
     * @param {FieldWorkerCreateManyAndReturnArgs} args - Arguments to create many FieldWorkers.
     * @example
     * // Create many FieldWorkers
     * const fieldWorker = await prisma.fieldWorker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FieldWorkers and only return the `id`
     * const fieldWorkerWithIdOnly = await prisma.fieldWorker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FieldWorkerCreateManyAndReturnArgs>(args?: SelectSubset<T, FieldWorkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldWorkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FieldWorker.
     * @param {FieldWorkerDeleteArgs} args - Arguments to delete one FieldWorker.
     * @example
     * // Delete one FieldWorker
     * const FieldWorker = await prisma.fieldWorker.delete({
     *   where: {
     *     // ... filter to delete one FieldWorker
     *   }
     * })
     * 
     */
    delete<T extends FieldWorkerDeleteArgs>(args: SelectSubset<T, FieldWorkerDeleteArgs<ExtArgs>>): Prisma__FieldWorkerClient<$Result.GetResult<Prisma.$FieldWorkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FieldWorker.
     * @param {FieldWorkerUpdateArgs} args - Arguments to update one FieldWorker.
     * @example
     * // Update one FieldWorker
     * const fieldWorker = await prisma.fieldWorker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FieldWorkerUpdateArgs>(args: SelectSubset<T, FieldWorkerUpdateArgs<ExtArgs>>): Prisma__FieldWorkerClient<$Result.GetResult<Prisma.$FieldWorkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FieldWorkers.
     * @param {FieldWorkerDeleteManyArgs} args - Arguments to filter FieldWorkers to delete.
     * @example
     * // Delete a few FieldWorkers
     * const { count } = await prisma.fieldWorker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FieldWorkerDeleteManyArgs>(args?: SelectSubset<T, FieldWorkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FieldWorkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldWorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FieldWorkers
     * const fieldWorker = await prisma.fieldWorker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FieldWorkerUpdateManyArgs>(args: SelectSubset<T, FieldWorkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FieldWorkers and returns the data updated in the database.
     * @param {FieldWorkerUpdateManyAndReturnArgs} args - Arguments to update many FieldWorkers.
     * @example
     * // Update many FieldWorkers
     * const fieldWorker = await prisma.fieldWorker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FieldWorkers and only return the `id`
     * const fieldWorkerWithIdOnly = await prisma.fieldWorker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FieldWorkerUpdateManyAndReturnArgs>(args: SelectSubset<T, FieldWorkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldWorkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FieldWorker.
     * @param {FieldWorkerUpsertArgs} args - Arguments to update or create a FieldWorker.
     * @example
     * // Update or create a FieldWorker
     * const fieldWorker = await prisma.fieldWorker.upsert({
     *   create: {
     *     // ... data to create a FieldWorker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FieldWorker we want to update
     *   }
     * })
     */
    upsert<T extends FieldWorkerUpsertArgs>(args: SelectSubset<T, FieldWorkerUpsertArgs<ExtArgs>>): Prisma__FieldWorkerClient<$Result.GetResult<Prisma.$FieldWorkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FieldWorkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldWorkerCountArgs} args - Arguments to filter FieldWorkers to count.
     * @example
     * // Count the number of FieldWorkers
     * const count = await prisma.fieldWorker.count({
     *   where: {
     *     // ... the filter for the FieldWorkers we want to count
     *   }
     * })
    **/
    count<T extends FieldWorkerCountArgs>(
      args?: Subset<T, FieldWorkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldWorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FieldWorker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldWorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FieldWorkerAggregateArgs>(args: Subset<T, FieldWorkerAggregateArgs>): Prisma.PrismaPromise<GetFieldWorkerAggregateType<T>>

    /**
     * Group by FieldWorker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldWorkerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FieldWorkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FieldWorkerGroupByArgs['orderBy'] }
        : { orderBy?: FieldWorkerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FieldWorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FieldWorker model
   */
  readonly fields: FieldWorkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FieldWorker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FieldWorkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    distributions<T extends FieldWorker$distributionsArgs<ExtArgs> = {}>(args?: Subset<T, FieldWorker$distributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FieldWorker model
   */
  interface FieldWorkerFieldRefs {
    readonly id: FieldRef<"FieldWorker", 'Int'>
    readonly name: FieldRef<"FieldWorker", 'String'>
    readonly email: FieldRef<"FieldWorker", 'String'>
    readonly phone: FieldRef<"FieldWorker", 'String'>
    readonly createdAt: FieldRef<"FieldWorker", 'DateTime'>
    readonly updatedAt: FieldRef<"FieldWorker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FieldWorker findUnique
   */
  export type FieldWorkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldWorker
     */
    select?: FieldWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldWorker
     */
    omit?: FieldWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldWorkerInclude<ExtArgs> | null
    /**
     * Filter, which FieldWorker to fetch.
     */
    where: FieldWorkerWhereUniqueInput
  }

  /**
   * FieldWorker findUniqueOrThrow
   */
  export type FieldWorkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldWorker
     */
    select?: FieldWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldWorker
     */
    omit?: FieldWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldWorkerInclude<ExtArgs> | null
    /**
     * Filter, which FieldWorker to fetch.
     */
    where: FieldWorkerWhereUniqueInput
  }

  /**
   * FieldWorker findFirst
   */
  export type FieldWorkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldWorker
     */
    select?: FieldWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldWorker
     */
    omit?: FieldWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldWorkerInclude<ExtArgs> | null
    /**
     * Filter, which FieldWorker to fetch.
     */
    where?: FieldWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldWorkers to fetch.
     */
    orderBy?: FieldWorkerOrderByWithRelationInput | FieldWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldWorkers.
     */
    cursor?: FieldWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldWorkers.
     */
    distinct?: FieldWorkerScalarFieldEnum | FieldWorkerScalarFieldEnum[]
  }

  /**
   * FieldWorker findFirstOrThrow
   */
  export type FieldWorkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldWorker
     */
    select?: FieldWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldWorker
     */
    omit?: FieldWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldWorkerInclude<ExtArgs> | null
    /**
     * Filter, which FieldWorker to fetch.
     */
    where?: FieldWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldWorkers to fetch.
     */
    orderBy?: FieldWorkerOrderByWithRelationInput | FieldWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldWorkers.
     */
    cursor?: FieldWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldWorkers.
     */
    distinct?: FieldWorkerScalarFieldEnum | FieldWorkerScalarFieldEnum[]
  }

  /**
   * FieldWorker findMany
   */
  export type FieldWorkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldWorker
     */
    select?: FieldWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldWorker
     */
    omit?: FieldWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldWorkerInclude<ExtArgs> | null
    /**
     * Filter, which FieldWorkers to fetch.
     */
    where?: FieldWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldWorkers to fetch.
     */
    orderBy?: FieldWorkerOrderByWithRelationInput | FieldWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FieldWorkers.
     */
    cursor?: FieldWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldWorkers.
     */
    skip?: number
    distinct?: FieldWorkerScalarFieldEnum | FieldWorkerScalarFieldEnum[]
  }

  /**
   * FieldWorker create
   */
  export type FieldWorkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldWorker
     */
    select?: FieldWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldWorker
     */
    omit?: FieldWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldWorkerInclude<ExtArgs> | null
    /**
     * The data needed to create a FieldWorker.
     */
    data: XOR<FieldWorkerCreateInput, FieldWorkerUncheckedCreateInput>
  }

  /**
   * FieldWorker createMany
   */
  export type FieldWorkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FieldWorkers.
     */
    data: FieldWorkerCreateManyInput | FieldWorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FieldWorker createManyAndReturn
   */
  export type FieldWorkerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldWorker
     */
    select?: FieldWorkerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FieldWorker
     */
    omit?: FieldWorkerOmit<ExtArgs> | null
    /**
     * The data used to create many FieldWorkers.
     */
    data: FieldWorkerCreateManyInput | FieldWorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FieldWorker update
   */
  export type FieldWorkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldWorker
     */
    select?: FieldWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldWorker
     */
    omit?: FieldWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldWorkerInclude<ExtArgs> | null
    /**
     * The data needed to update a FieldWorker.
     */
    data: XOR<FieldWorkerUpdateInput, FieldWorkerUncheckedUpdateInput>
    /**
     * Choose, which FieldWorker to update.
     */
    where: FieldWorkerWhereUniqueInput
  }

  /**
   * FieldWorker updateMany
   */
  export type FieldWorkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FieldWorkers.
     */
    data: XOR<FieldWorkerUpdateManyMutationInput, FieldWorkerUncheckedUpdateManyInput>
    /**
     * Filter which FieldWorkers to update
     */
    where?: FieldWorkerWhereInput
    /**
     * Limit how many FieldWorkers to update.
     */
    limit?: number
  }

  /**
   * FieldWorker updateManyAndReturn
   */
  export type FieldWorkerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldWorker
     */
    select?: FieldWorkerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FieldWorker
     */
    omit?: FieldWorkerOmit<ExtArgs> | null
    /**
     * The data used to update FieldWorkers.
     */
    data: XOR<FieldWorkerUpdateManyMutationInput, FieldWorkerUncheckedUpdateManyInput>
    /**
     * Filter which FieldWorkers to update
     */
    where?: FieldWorkerWhereInput
    /**
     * Limit how many FieldWorkers to update.
     */
    limit?: number
  }

  /**
   * FieldWorker upsert
   */
  export type FieldWorkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldWorker
     */
    select?: FieldWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldWorker
     */
    omit?: FieldWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldWorkerInclude<ExtArgs> | null
    /**
     * The filter to search for the FieldWorker to update in case it exists.
     */
    where: FieldWorkerWhereUniqueInput
    /**
     * In case the FieldWorker found by the `where` argument doesn't exist, create a new FieldWorker with this data.
     */
    create: XOR<FieldWorkerCreateInput, FieldWorkerUncheckedCreateInput>
    /**
     * In case the FieldWorker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FieldWorkerUpdateInput, FieldWorkerUncheckedUpdateInput>
  }

  /**
   * FieldWorker delete
   */
  export type FieldWorkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldWorker
     */
    select?: FieldWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldWorker
     */
    omit?: FieldWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldWorkerInclude<ExtArgs> | null
    /**
     * Filter which FieldWorker to delete.
     */
    where: FieldWorkerWhereUniqueInput
  }

  /**
   * FieldWorker deleteMany
   */
  export type FieldWorkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldWorkers to delete
     */
    where?: FieldWorkerWhereInput
    /**
     * Limit how many FieldWorkers to delete.
     */
    limit?: number
  }

  /**
   * FieldWorker.distributions
   */
  export type FieldWorker$distributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    where?: DistributionWhereInput
    orderBy?: DistributionOrderByWithRelationInput | DistributionOrderByWithRelationInput[]
    cursor?: DistributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistributionScalarFieldEnum | DistributionScalarFieldEnum[]
  }

  /**
   * FieldWorker without action
   */
  export type FieldWorkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldWorker
     */
    select?: FieldWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldWorker
     */
    omit?: FieldWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldWorkerInclude<ExtArgs> | null
  }


  /**
   * Model Distribution
   */

  export type AggregateDistribution = {
    _count: DistributionCountAggregateOutputType | null
    _avg: DistributionAvgAggregateOutputType | null
    _sum: DistributionSumAggregateOutputType | null
    _min: DistributionMinAggregateOutputType | null
    _max: DistributionMaxAggregateOutputType | null
  }

  export type DistributionAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    townshipId: number | null
    aidTypeId: number | null
    fieldWorkerId: number | null
  }

  export type DistributionSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    townshipId: number | null
    aidTypeId: number | null
    fieldWorkerId: number | null
  }

  export type DistributionMinAggregateOutputType = {
    id: number | null
    date: Date | null
    quantity: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    townshipId: number | null
    aidTypeId: number | null
    fieldWorkerId: number | null
  }

  export type DistributionMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    quantity: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    townshipId: number | null
    aidTypeId: number | null
    fieldWorkerId: number | null
  }

  export type DistributionCountAggregateOutputType = {
    id: number
    date: number
    quantity: number
    notes: number
    createdAt: number
    updatedAt: number
    townshipId: number
    aidTypeId: number
    fieldWorkerId: number
    _all: number
  }


  export type DistributionAvgAggregateInputType = {
    id?: true
    quantity?: true
    townshipId?: true
    aidTypeId?: true
    fieldWorkerId?: true
  }

  export type DistributionSumAggregateInputType = {
    id?: true
    quantity?: true
    townshipId?: true
    aidTypeId?: true
    fieldWorkerId?: true
  }

  export type DistributionMinAggregateInputType = {
    id?: true
    date?: true
    quantity?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    townshipId?: true
    aidTypeId?: true
    fieldWorkerId?: true
  }

  export type DistributionMaxAggregateInputType = {
    id?: true
    date?: true
    quantity?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    townshipId?: true
    aidTypeId?: true
    fieldWorkerId?: true
  }

  export type DistributionCountAggregateInputType = {
    id?: true
    date?: true
    quantity?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    townshipId?: true
    aidTypeId?: true
    fieldWorkerId?: true
    _all?: true
  }

  export type DistributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distribution to aggregate.
     */
    where?: DistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributions to fetch.
     */
    orderBy?: DistributionOrderByWithRelationInput | DistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Distributions
    **/
    _count?: true | DistributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistributionMaxAggregateInputType
  }

  export type GetDistributionAggregateType<T extends DistributionAggregateArgs> = {
        [P in keyof T & keyof AggregateDistribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistribution[P]>
      : GetScalarType<T[P], AggregateDistribution[P]>
  }




  export type DistributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributionWhereInput
    orderBy?: DistributionOrderByWithAggregationInput | DistributionOrderByWithAggregationInput[]
    by: DistributionScalarFieldEnum[] | DistributionScalarFieldEnum
    having?: DistributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistributionCountAggregateInputType | true
    _avg?: DistributionAvgAggregateInputType
    _sum?: DistributionSumAggregateInputType
    _min?: DistributionMinAggregateInputType
    _max?: DistributionMaxAggregateInputType
  }

  export type DistributionGroupByOutputType = {
    id: number
    date: Date
    quantity: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    townshipId: number
    aidTypeId: number
    fieldWorkerId: number
    _count: DistributionCountAggregateOutputType | null
    _avg: DistributionAvgAggregateOutputType | null
    _sum: DistributionSumAggregateOutputType | null
    _min: DistributionMinAggregateOutputType | null
    _max: DistributionMaxAggregateOutputType | null
  }

  type GetDistributionGroupByPayload<T extends DistributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistributionGroupByOutputType[P]>
            : GetScalarType<T[P], DistributionGroupByOutputType[P]>
        }
      >
    >


  export type DistributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    quantity?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    townshipId?: boolean
    aidTypeId?: boolean
    fieldWorkerId?: boolean
    aidType?: boolean | AidTypeDefaultArgs<ExtArgs>
    fieldWorker?: boolean | FieldWorkerDefaultArgs<ExtArgs>
    township?: boolean | TownshipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distribution"]>

  export type DistributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    quantity?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    townshipId?: boolean
    aidTypeId?: boolean
    fieldWorkerId?: boolean
    aidType?: boolean | AidTypeDefaultArgs<ExtArgs>
    fieldWorker?: boolean | FieldWorkerDefaultArgs<ExtArgs>
    township?: boolean | TownshipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distribution"]>

  export type DistributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    quantity?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    townshipId?: boolean
    aidTypeId?: boolean
    fieldWorkerId?: boolean
    aidType?: boolean | AidTypeDefaultArgs<ExtArgs>
    fieldWorker?: boolean | FieldWorkerDefaultArgs<ExtArgs>
    township?: boolean | TownshipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distribution"]>

  export type DistributionSelectScalar = {
    id?: boolean
    date?: boolean
    quantity?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    townshipId?: boolean
    aidTypeId?: boolean
    fieldWorkerId?: boolean
  }

  export type DistributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "quantity" | "notes" | "createdAt" | "updatedAt" | "townshipId" | "aidTypeId" | "fieldWorkerId", ExtArgs["result"]["distribution"]>
  export type DistributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aidType?: boolean | AidTypeDefaultArgs<ExtArgs>
    fieldWorker?: boolean | FieldWorkerDefaultArgs<ExtArgs>
    township?: boolean | TownshipDefaultArgs<ExtArgs>
  }
  export type DistributionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aidType?: boolean | AidTypeDefaultArgs<ExtArgs>
    fieldWorker?: boolean | FieldWorkerDefaultArgs<ExtArgs>
    township?: boolean | TownshipDefaultArgs<ExtArgs>
  }
  export type DistributionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aidType?: boolean | AidTypeDefaultArgs<ExtArgs>
    fieldWorker?: boolean | FieldWorkerDefaultArgs<ExtArgs>
    township?: boolean | TownshipDefaultArgs<ExtArgs>
  }

  export type $DistributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Distribution"
    objects: {
      aidType: Prisma.$AidTypePayload<ExtArgs>
      fieldWorker: Prisma.$FieldWorkerPayload<ExtArgs>
      township: Prisma.$TownshipPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      quantity: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
      townshipId: number
      aidTypeId: number
      fieldWorkerId: number
    }, ExtArgs["result"]["distribution"]>
    composites: {}
  }

  type DistributionGetPayload<S extends boolean | null | undefined | DistributionDefaultArgs> = $Result.GetResult<Prisma.$DistributionPayload, S>

  type DistributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistributionCountAggregateInputType | true
    }

  export interface DistributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Distribution'], meta: { name: 'Distribution' } }
    /**
     * Find zero or one Distribution that matches the filter.
     * @param {DistributionFindUniqueArgs} args - Arguments to find a Distribution
     * @example
     * // Get one Distribution
     * const distribution = await prisma.distribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistributionFindUniqueArgs>(args: SelectSubset<T, DistributionFindUniqueArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Distribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistributionFindUniqueOrThrowArgs} args - Arguments to find a Distribution
     * @example
     * // Get one Distribution
     * const distribution = await prisma.distribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistributionFindUniqueOrThrowArgs>(args: SelectSubset<T, DistributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributionFindFirstArgs} args - Arguments to find a Distribution
     * @example
     * // Get one Distribution
     * const distribution = await prisma.distribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistributionFindFirstArgs>(args?: SelectSubset<T, DistributionFindFirstArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributionFindFirstOrThrowArgs} args - Arguments to find a Distribution
     * @example
     * // Get one Distribution
     * const distribution = await prisma.distribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistributionFindFirstOrThrowArgs>(args?: SelectSubset<T, DistributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Distributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Distributions
     * const distributions = await prisma.distribution.findMany()
     * 
     * // Get first 10 Distributions
     * const distributions = await prisma.distribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distributionWithIdOnly = await prisma.distribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistributionFindManyArgs>(args?: SelectSubset<T, DistributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Distribution.
     * @param {DistributionCreateArgs} args - Arguments to create a Distribution.
     * @example
     * // Create one Distribution
     * const Distribution = await prisma.distribution.create({
     *   data: {
     *     // ... data to create a Distribution
     *   }
     * })
     * 
     */
    create<T extends DistributionCreateArgs>(args: SelectSubset<T, DistributionCreateArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Distributions.
     * @param {DistributionCreateManyArgs} args - Arguments to create many Distributions.
     * @example
     * // Create many Distributions
     * const distribution = await prisma.distribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistributionCreateManyArgs>(args?: SelectSubset<T, DistributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Distributions and returns the data saved in the database.
     * @param {DistributionCreateManyAndReturnArgs} args - Arguments to create many Distributions.
     * @example
     * // Create many Distributions
     * const distribution = await prisma.distribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Distributions and only return the `id`
     * const distributionWithIdOnly = await prisma.distribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistributionCreateManyAndReturnArgs>(args?: SelectSubset<T, DistributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Distribution.
     * @param {DistributionDeleteArgs} args - Arguments to delete one Distribution.
     * @example
     * // Delete one Distribution
     * const Distribution = await prisma.distribution.delete({
     *   where: {
     *     // ... filter to delete one Distribution
     *   }
     * })
     * 
     */
    delete<T extends DistributionDeleteArgs>(args: SelectSubset<T, DistributionDeleteArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Distribution.
     * @param {DistributionUpdateArgs} args - Arguments to update one Distribution.
     * @example
     * // Update one Distribution
     * const distribution = await prisma.distribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistributionUpdateArgs>(args: SelectSubset<T, DistributionUpdateArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Distributions.
     * @param {DistributionDeleteManyArgs} args - Arguments to filter Distributions to delete.
     * @example
     * // Delete a few Distributions
     * const { count } = await prisma.distribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistributionDeleteManyArgs>(args?: SelectSubset<T, DistributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Distributions
     * const distribution = await prisma.distribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistributionUpdateManyArgs>(args: SelectSubset<T, DistributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distributions and returns the data updated in the database.
     * @param {DistributionUpdateManyAndReturnArgs} args - Arguments to update many Distributions.
     * @example
     * // Update many Distributions
     * const distribution = await prisma.distribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Distributions and only return the `id`
     * const distributionWithIdOnly = await prisma.distribution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DistributionUpdateManyAndReturnArgs>(args: SelectSubset<T, DistributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Distribution.
     * @param {DistributionUpsertArgs} args - Arguments to update or create a Distribution.
     * @example
     * // Update or create a Distribution
     * const distribution = await prisma.distribution.upsert({
     *   create: {
     *     // ... data to create a Distribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Distribution we want to update
     *   }
     * })
     */
    upsert<T extends DistributionUpsertArgs>(args: SelectSubset<T, DistributionUpsertArgs<ExtArgs>>): Prisma__DistributionClient<$Result.GetResult<Prisma.$DistributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Distributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributionCountArgs} args - Arguments to filter Distributions to count.
     * @example
     * // Count the number of Distributions
     * const count = await prisma.distribution.count({
     *   where: {
     *     // ... the filter for the Distributions we want to count
     *   }
     * })
    **/
    count<T extends DistributionCountArgs>(
      args?: Subset<T, DistributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Distribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistributionAggregateArgs>(args: Subset<T, DistributionAggregateArgs>): Prisma.PrismaPromise<GetDistributionAggregateType<T>>

    /**
     * Group by Distribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistributionGroupByArgs['orderBy'] }
        : { orderBy?: DistributionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Distribution model
   */
  readonly fields: DistributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Distribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aidType<T extends AidTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AidTypeDefaultArgs<ExtArgs>>): Prisma__AidTypeClient<$Result.GetResult<Prisma.$AidTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fieldWorker<T extends FieldWorkerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FieldWorkerDefaultArgs<ExtArgs>>): Prisma__FieldWorkerClient<$Result.GetResult<Prisma.$FieldWorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    township<T extends TownshipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TownshipDefaultArgs<ExtArgs>>): Prisma__TownshipClient<$Result.GetResult<Prisma.$TownshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Distribution model
   */
  interface DistributionFieldRefs {
    readonly id: FieldRef<"Distribution", 'Int'>
    readonly date: FieldRef<"Distribution", 'DateTime'>
    readonly quantity: FieldRef<"Distribution", 'Int'>
    readonly notes: FieldRef<"Distribution", 'String'>
    readonly createdAt: FieldRef<"Distribution", 'DateTime'>
    readonly updatedAt: FieldRef<"Distribution", 'DateTime'>
    readonly townshipId: FieldRef<"Distribution", 'Int'>
    readonly aidTypeId: FieldRef<"Distribution", 'Int'>
    readonly fieldWorkerId: FieldRef<"Distribution", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Distribution findUnique
   */
  export type DistributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * Filter, which Distribution to fetch.
     */
    where: DistributionWhereUniqueInput
  }

  /**
   * Distribution findUniqueOrThrow
   */
  export type DistributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * Filter, which Distribution to fetch.
     */
    where: DistributionWhereUniqueInput
  }

  /**
   * Distribution findFirst
   */
  export type DistributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * Filter, which Distribution to fetch.
     */
    where?: DistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributions to fetch.
     */
    orderBy?: DistributionOrderByWithRelationInput | DistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distributions.
     */
    cursor?: DistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distributions.
     */
    distinct?: DistributionScalarFieldEnum | DistributionScalarFieldEnum[]
  }

  /**
   * Distribution findFirstOrThrow
   */
  export type DistributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * Filter, which Distribution to fetch.
     */
    where?: DistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributions to fetch.
     */
    orderBy?: DistributionOrderByWithRelationInput | DistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distributions.
     */
    cursor?: DistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distributions.
     */
    distinct?: DistributionScalarFieldEnum | DistributionScalarFieldEnum[]
  }

  /**
   * Distribution findMany
   */
  export type DistributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * Filter, which Distributions to fetch.
     */
    where?: DistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributions to fetch.
     */
    orderBy?: DistributionOrderByWithRelationInput | DistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Distributions.
     */
    cursor?: DistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributions.
     */
    skip?: number
    distinct?: DistributionScalarFieldEnum | DistributionScalarFieldEnum[]
  }

  /**
   * Distribution create
   */
  export type DistributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * The data needed to create a Distribution.
     */
    data: XOR<DistributionCreateInput, DistributionUncheckedCreateInput>
  }

  /**
   * Distribution createMany
   */
  export type DistributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Distributions.
     */
    data: DistributionCreateManyInput | DistributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Distribution createManyAndReturn
   */
  export type DistributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * The data used to create many Distributions.
     */
    data: DistributionCreateManyInput | DistributionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distribution update
   */
  export type DistributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * The data needed to update a Distribution.
     */
    data: XOR<DistributionUpdateInput, DistributionUncheckedUpdateInput>
    /**
     * Choose, which Distribution to update.
     */
    where: DistributionWhereUniqueInput
  }

  /**
   * Distribution updateMany
   */
  export type DistributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Distributions.
     */
    data: XOR<DistributionUpdateManyMutationInput, DistributionUncheckedUpdateManyInput>
    /**
     * Filter which Distributions to update
     */
    where?: DistributionWhereInput
    /**
     * Limit how many Distributions to update.
     */
    limit?: number
  }

  /**
   * Distribution updateManyAndReturn
   */
  export type DistributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * The data used to update Distributions.
     */
    data: XOR<DistributionUpdateManyMutationInput, DistributionUncheckedUpdateManyInput>
    /**
     * Filter which Distributions to update
     */
    where?: DistributionWhereInput
    /**
     * Limit how many Distributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distribution upsert
   */
  export type DistributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * The filter to search for the Distribution to update in case it exists.
     */
    where: DistributionWhereUniqueInput
    /**
     * In case the Distribution found by the `where` argument doesn't exist, create a new Distribution with this data.
     */
    create: XOR<DistributionCreateInput, DistributionUncheckedCreateInput>
    /**
     * In case the Distribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistributionUpdateInput, DistributionUncheckedUpdateInput>
  }

  /**
   * Distribution delete
   */
  export type DistributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
    /**
     * Filter which Distribution to delete.
     */
    where: DistributionWhereUniqueInput
  }

  /**
   * Distribution deleteMany
   */
  export type DistributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distributions to delete
     */
    where?: DistributionWhereInput
    /**
     * Limit how many Distributions to delete.
     */
    limit?: number
  }

  /**
   * Distribution without action
   */
  export type DistributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribution
     */
    select?: DistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribution
     */
    omit?: DistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TownshipScalarFieldEnum: {
    id: 'id',
    name: 'name',
    region: 'region',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TownshipScalarFieldEnum = (typeof TownshipScalarFieldEnum)[keyof typeof TownshipScalarFieldEnum]


  export const AidTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AidTypeScalarFieldEnum = (typeof AidTypeScalarFieldEnum)[keyof typeof AidTypeScalarFieldEnum]


  export const FieldWorkerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FieldWorkerScalarFieldEnum = (typeof FieldWorkerScalarFieldEnum)[keyof typeof FieldWorkerScalarFieldEnum]


  export const DistributionScalarFieldEnum: {
    id: 'id',
    date: 'date',
    quantity: 'quantity',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    townshipId: 'townshipId',
    aidTypeId: 'aidTypeId',
    fieldWorkerId: 'fieldWorkerId'
  };

  export type DistributionScalarFieldEnum = (typeof DistributionScalarFieldEnum)[keyof typeof DistributionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type TownshipWhereInput = {
    AND?: TownshipWhereInput | TownshipWhereInput[]
    OR?: TownshipWhereInput[]
    NOT?: TownshipWhereInput | TownshipWhereInput[]
    id?: IntFilter<"Township"> | number
    name?: StringFilter<"Township"> | string
    region?: StringNullableFilter<"Township"> | string | null
    latitude?: FloatNullableFilter<"Township"> | number | null
    longitude?: FloatNullableFilter<"Township"> | number | null
    createdAt?: DateTimeFilter<"Township"> | Date | string
    updatedAt?: DateTimeFilter<"Township"> | Date | string
    distributions?: DistributionListRelationFilter
  }

  export type TownshipOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distributions?: DistributionOrderByRelationAggregateInput
  }

  export type TownshipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TownshipWhereInput | TownshipWhereInput[]
    OR?: TownshipWhereInput[]
    NOT?: TownshipWhereInput | TownshipWhereInput[]
    region?: StringNullableFilter<"Township"> | string | null
    latitude?: FloatNullableFilter<"Township"> | number | null
    longitude?: FloatNullableFilter<"Township"> | number | null
    createdAt?: DateTimeFilter<"Township"> | Date | string
    updatedAt?: DateTimeFilter<"Township"> | Date | string
    distributions?: DistributionListRelationFilter
  }, "id" | "name">

  export type TownshipOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TownshipCountOrderByAggregateInput
    _avg?: TownshipAvgOrderByAggregateInput
    _max?: TownshipMaxOrderByAggregateInput
    _min?: TownshipMinOrderByAggregateInput
    _sum?: TownshipSumOrderByAggregateInput
  }

  export type TownshipScalarWhereWithAggregatesInput = {
    AND?: TownshipScalarWhereWithAggregatesInput | TownshipScalarWhereWithAggregatesInput[]
    OR?: TownshipScalarWhereWithAggregatesInput[]
    NOT?: TownshipScalarWhereWithAggregatesInput | TownshipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Township"> | number
    name?: StringWithAggregatesFilter<"Township"> | string
    region?: StringNullableWithAggregatesFilter<"Township"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Township"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Township"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Township"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Township"> | Date | string
  }

  export type AidTypeWhereInput = {
    AND?: AidTypeWhereInput | AidTypeWhereInput[]
    OR?: AidTypeWhereInput[]
    NOT?: AidTypeWhereInput | AidTypeWhereInput[]
    id?: IntFilter<"AidType"> | number
    name?: StringFilter<"AidType"> | string
    description?: StringNullableFilter<"AidType"> | string | null
    createdAt?: DateTimeFilter<"AidType"> | Date | string
    updatedAt?: DateTimeFilter<"AidType"> | Date | string
    distributions?: DistributionListRelationFilter
  }

  export type AidTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distributions?: DistributionOrderByRelationAggregateInput
  }

  export type AidTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: AidTypeWhereInput | AidTypeWhereInput[]
    OR?: AidTypeWhereInput[]
    NOT?: AidTypeWhereInput | AidTypeWhereInput[]
    description?: StringNullableFilter<"AidType"> | string | null
    createdAt?: DateTimeFilter<"AidType"> | Date | string
    updatedAt?: DateTimeFilter<"AidType"> | Date | string
    distributions?: DistributionListRelationFilter
  }, "id" | "name">

  export type AidTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AidTypeCountOrderByAggregateInput
    _avg?: AidTypeAvgOrderByAggregateInput
    _max?: AidTypeMaxOrderByAggregateInput
    _min?: AidTypeMinOrderByAggregateInput
    _sum?: AidTypeSumOrderByAggregateInput
  }

  export type AidTypeScalarWhereWithAggregatesInput = {
    AND?: AidTypeScalarWhereWithAggregatesInput | AidTypeScalarWhereWithAggregatesInput[]
    OR?: AidTypeScalarWhereWithAggregatesInput[]
    NOT?: AidTypeScalarWhereWithAggregatesInput | AidTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AidType"> | number
    name?: StringWithAggregatesFilter<"AidType"> | string
    description?: StringNullableWithAggregatesFilter<"AidType"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AidType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AidType"> | Date | string
  }

  export type FieldWorkerWhereInput = {
    AND?: FieldWorkerWhereInput | FieldWorkerWhereInput[]
    OR?: FieldWorkerWhereInput[]
    NOT?: FieldWorkerWhereInput | FieldWorkerWhereInput[]
    id?: IntFilter<"FieldWorker"> | number
    name?: StringFilter<"FieldWorker"> | string
    email?: StringFilter<"FieldWorker"> | string
    phone?: StringNullableFilter<"FieldWorker"> | string | null
    createdAt?: DateTimeFilter<"FieldWorker"> | Date | string
    updatedAt?: DateTimeFilter<"FieldWorker"> | Date | string
    distributions?: DistributionListRelationFilter
  }

  export type FieldWorkerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distributions?: DistributionOrderByRelationAggregateInput
  }

  export type FieldWorkerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: FieldWorkerWhereInput | FieldWorkerWhereInput[]
    OR?: FieldWorkerWhereInput[]
    NOT?: FieldWorkerWhereInput | FieldWorkerWhereInput[]
    name?: StringFilter<"FieldWorker"> | string
    phone?: StringNullableFilter<"FieldWorker"> | string | null
    createdAt?: DateTimeFilter<"FieldWorker"> | Date | string
    updatedAt?: DateTimeFilter<"FieldWorker"> | Date | string
    distributions?: DistributionListRelationFilter
  }, "id" | "email">

  export type FieldWorkerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FieldWorkerCountOrderByAggregateInput
    _avg?: FieldWorkerAvgOrderByAggregateInput
    _max?: FieldWorkerMaxOrderByAggregateInput
    _min?: FieldWorkerMinOrderByAggregateInput
    _sum?: FieldWorkerSumOrderByAggregateInput
  }

  export type FieldWorkerScalarWhereWithAggregatesInput = {
    AND?: FieldWorkerScalarWhereWithAggregatesInput | FieldWorkerScalarWhereWithAggregatesInput[]
    OR?: FieldWorkerScalarWhereWithAggregatesInput[]
    NOT?: FieldWorkerScalarWhereWithAggregatesInput | FieldWorkerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FieldWorker"> | number
    name?: StringWithAggregatesFilter<"FieldWorker"> | string
    email?: StringWithAggregatesFilter<"FieldWorker"> | string
    phone?: StringNullableWithAggregatesFilter<"FieldWorker"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FieldWorker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FieldWorker"> | Date | string
  }

  export type DistributionWhereInput = {
    AND?: DistributionWhereInput | DistributionWhereInput[]
    OR?: DistributionWhereInput[]
    NOT?: DistributionWhereInput | DistributionWhereInput[]
    id?: IntFilter<"Distribution"> | number
    date?: DateTimeFilter<"Distribution"> | Date | string
    quantity?: IntFilter<"Distribution"> | number
    notes?: StringNullableFilter<"Distribution"> | string | null
    createdAt?: DateTimeFilter<"Distribution"> | Date | string
    updatedAt?: DateTimeFilter<"Distribution"> | Date | string
    townshipId?: IntFilter<"Distribution"> | number
    aidTypeId?: IntFilter<"Distribution"> | number
    fieldWorkerId?: IntFilter<"Distribution"> | number
    aidType?: XOR<AidTypeScalarRelationFilter, AidTypeWhereInput>
    fieldWorker?: XOR<FieldWorkerScalarRelationFilter, FieldWorkerWhereInput>
    township?: XOR<TownshipScalarRelationFilter, TownshipWhereInput>
  }

  export type DistributionOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    townshipId?: SortOrder
    aidTypeId?: SortOrder
    fieldWorkerId?: SortOrder
    aidType?: AidTypeOrderByWithRelationInput
    fieldWorker?: FieldWorkerOrderByWithRelationInput
    township?: TownshipOrderByWithRelationInput
  }

  export type DistributionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DistributionWhereInput | DistributionWhereInput[]
    OR?: DistributionWhereInput[]
    NOT?: DistributionWhereInput | DistributionWhereInput[]
    date?: DateTimeFilter<"Distribution"> | Date | string
    quantity?: IntFilter<"Distribution"> | number
    notes?: StringNullableFilter<"Distribution"> | string | null
    createdAt?: DateTimeFilter<"Distribution"> | Date | string
    updatedAt?: DateTimeFilter<"Distribution"> | Date | string
    townshipId?: IntFilter<"Distribution"> | number
    aidTypeId?: IntFilter<"Distribution"> | number
    fieldWorkerId?: IntFilter<"Distribution"> | number
    aidType?: XOR<AidTypeScalarRelationFilter, AidTypeWhereInput>
    fieldWorker?: XOR<FieldWorkerScalarRelationFilter, FieldWorkerWhereInput>
    township?: XOR<TownshipScalarRelationFilter, TownshipWhereInput>
  }, "id">

  export type DistributionOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    townshipId?: SortOrder
    aidTypeId?: SortOrder
    fieldWorkerId?: SortOrder
    _count?: DistributionCountOrderByAggregateInput
    _avg?: DistributionAvgOrderByAggregateInput
    _max?: DistributionMaxOrderByAggregateInput
    _min?: DistributionMinOrderByAggregateInput
    _sum?: DistributionSumOrderByAggregateInput
  }

  export type DistributionScalarWhereWithAggregatesInput = {
    AND?: DistributionScalarWhereWithAggregatesInput | DistributionScalarWhereWithAggregatesInput[]
    OR?: DistributionScalarWhereWithAggregatesInput[]
    NOT?: DistributionScalarWhereWithAggregatesInput | DistributionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Distribution"> | number
    date?: DateTimeWithAggregatesFilter<"Distribution"> | Date | string
    quantity?: IntWithAggregatesFilter<"Distribution"> | number
    notes?: StringNullableWithAggregatesFilter<"Distribution"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Distribution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Distribution"> | Date | string
    townshipId?: IntWithAggregatesFilter<"Distribution"> | number
    aidTypeId?: IntWithAggregatesFilter<"Distribution"> | number
    fieldWorkerId?: IntWithAggregatesFilter<"Distribution"> | number
  }

  export type TownshipCreateInput = {
    name: string
    region?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distributions?: DistributionCreateNestedManyWithoutTownshipInput
  }

  export type TownshipUncheckedCreateInput = {
    id?: number
    name: string
    region?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distributions?: DistributionUncheckedCreateNestedManyWithoutTownshipInput
  }

  export type TownshipUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distributions?: DistributionUpdateManyWithoutTownshipNestedInput
  }

  export type TownshipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distributions?: DistributionUncheckedUpdateManyWithoutTownshipNestedInput
  }

  export type TownshipCreateManyInput = {
    id?: number
    name: string
    region?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TownshipUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TownshipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AidTypeCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distributions?: DistributionCreateNestedManyWithoutAidTypeInput
  }

  export type AidTypeUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distributions?: DistributionUncheckedCreateNestedManyWithoutAidTypeInput
  }

  export type AidTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distributions?: DistributionUpdateManyWithoutAidTypeNestedInput
  }

  export type AidTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distributions?: DistributionUncheckedUpdateManyWithoutAidTypeNestedInput
  }

  export type AidTypeCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AidTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AidTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldWorkerCreateInput = {
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distributions?: DistributionCreateNestedManyWithoutFieldWorkerInput
  }

  export type FieldWorkerUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distributions?: DistributionUncheckedCreateNestedManyWithoutFieldWorkerInput
  }

  export type FieldWorkerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distributions?: DistributionUpdateManyWithoutFieldWorkerNestedInput
  }

  export type FieldWorkerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distributions?: DistributionUncheckedUpdateManyWithoutFieldWorkerNestedInput
  }

  export type FieldWorkerCreateManyInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldWorkerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldWorkerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributionCreateInput = {
    date: Date | string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aidType: AidTypeCreateNestedOneWithoutDistributionsInput
    fieldWorker: FieldWorkerCreateNestedOneWithoutDistributionsInput
    township: TownshipCreateNestedOneWithoutDistributionsInput
  }

  export type DistributionUncheckedCreateInput = {
    id?: number
    date: Date | string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    townshipId: number
    aidTypeId: number
    fieldWorkerId: number
  }

  export type DistributionUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aidType?: AidTypeUpdateOneRequiredWithoutDistributionsNestedInput
    fieldWorker?: FieldWorkerUpdateOneRequiredWithoutDistributionsNestedInput
    township?: TownshipUpdateOneRequiredWithoutDistributionsNestedInput
  }

  export type DistributionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townshipId?: IntFieldUpdateOperationsInput | number
    aidTypeId?: IntFieldUpdateOperationsInput | number
    fieldWorkerId?: IntFieldUpdateOperationsInput | number
  }

  export type DistributionCreateManyInput = {
    id?: number
    date: Date | string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    townshipId: number
    aidTypeId: number
    fieldWorkerId: number
  }

  export type DistributionUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townshipId?: IntFieldUpdateOperationsInput | number
    aidTypeId?: IntFieldUpdateOperationsInput | number
    fieldWorkerId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DistributionListRelationFilter = {
    every?: DistributionWhereInput
    some?: DistributionWhereInput
    none?: DistributionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DistributionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TownshipCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TownshipAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type TownshipMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TownshipMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TownshipSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AidTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AidTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AidTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AidTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AidTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FieldWorkerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FieldWorkerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FieldWorkerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FieldWorkerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FieldWorkerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AidTypeScalarRelationFilter = {
    is?: AidTypeWhereInput
    isNot?: AidTypeWhereInput
  }

  export type FieldWorkerScalarRelationFilter = {
    is?: FieldWorkerWhereInput
    isNot?: FieldWorkerWhereInput
  }

  export type TownshipScalarRelationFilter = {
    is?: TownshipWhereInput
    isNot?: TownshipWhereInput
  }

  export type DistributionCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    townshipId?: SortOrder
    aidTypeId?: SortOrder
    fieldWorkerId?: SortOrder
  }

  export type DistributionAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    townshipId?: SortOrder
    aidTypeId?: SortOrder
    fieldWorkerId?: SortOrder
  }

  export type DistributionMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    townshipId?: SortOrder
    aidTypeId?: SortOrder
    fieldWorkerId?: SortOrder
  }

  export type DistributionMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    townshipId?: SortOrder
    aidTypeId?: SortOrder
    fieldWorkerId?: SortOrder
  }

  export type DistributionSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    townshipId?: SortOrder
    aidTypeId?: SortOrder
    fieldWorkerId?: SortOrder
  }

  export type DistributionCreateNestedManyWithoutTownshipInput = {
    create?: XOR<DistributionCreateWithoutTownshipInput, DistributionUncheckedCreateWithoutTownshipInput> | DistributionCreateWithoutTownshipInput[] | DistributionUncheckedCreateWithoutTownshipInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutTownshipInput | DistributionCreateOrConnectWithoutTownshipInput[]
    createMany?: DistributionCreateManyTownshipInputEnvelope
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
  }

  export type DistributionUncheckedCreateNestedManyWithoutTownshipInput = {
    create?: XOR<DistributionCreateWithoutTownshipInput, DistributionUncheckedCreateWithoutTownshipInput> | DistributionCreateWithoutTownshipInput[] | DistributionUncheckedCreateWithoutTownshipInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutTownshipInput | DistributionCreateOrConnectWithoutTownshipInput[]
    createMany?: DistributionCreateManyTownshipInputEnvelope
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DistributionUpdateManyWithoutTownshipNestedInput = {
    create?: XOR<DistributionCreateWithoutTownshipInput, DistributionUncheckedCreateWithoutTownshipInput> | DistributionCreateWithoutTownshipInput[] | DistributionUncheckedCreateWithoutTownshipInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutTownshipInput | DistributionCreateOrConnectWithoutTownshipInput[]
    upsert?: DistributionUpsertWithWhereUniqueWithoutTownshipInput | DistributionUpsertWithWhereUniqueWithoutTownshipInput[]
    createMany?: DistributionCreateManyTownshipInputEnvelope
    set?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    disconnect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    delete?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    update?: DistributionUpdateWithWhereUniqueWithoutTownshipInput | DistributionUpdateWithWhereUniqueWithoutTownshipInput[]
    updateMany?: DistributionUpdateManyWithWhereWithoutTownshipInput | DistributionUpdateManyWithWhereWithoutTownshipInput[]
    deleteMany?: DistributionScalarWhereInput | DistributionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DistributionUncheckedUpdateManyWithoutTownshipNestedInput = {
    create?: XOR<DistributionCreateWithoutTownshipInput, DistributionUncheckedCreateWithoutTownshipInput> | DistributionCreateWithoutTownshipInput[] | DistributionUncheckedCreateWithoutTownshipInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutTownshipInput | DistributionCreateOrConnectWithoutTownshipInput[]
    upsert?: DistributionUpsertWithWhereUniqueWithoutTownshipInput | DistributionUpsertWithWhereUniqueWithoutTownshipInput[]
    createMany?: DistributionCreateManyTownshipInputEnvelope
    set?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    disconnect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    delete?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    update?: DistributionUpdateWithWhereUniqueWithoutTownshipInput | DistributionUpdateWithWhereUniqueWithoutTownshipInput[]
    updateMany?: DistributionUpdateManyWithWhereWithoutTownshipInput | DistributionUpdateManyWithWhereWithoutTownshipInput[]
    deleteMany?: DistributionScalarWhereInput | DistributionScalarWhereInput[]
  }

  export type DistributionCreateNestedManyWithoutAidTypeInput = {
    create?: XOR<DistributionCreateWithoutAidTypeInput, DistributionUncheckedCreateWithoutAidTypeInput> | DistributionCreateWithoutAidTypeInput[] | DistributionUncheckedCreateWithoutAidTypeInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutAidTypeInput | DistributionCreateOrConnectWithoutAidTypeInput[]
    createMany?: DistributionCreateManyAidTypeInputEnvelope
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
  }

  export type DistributionUncheckedCreateNestedManyWithoutAidTypeInput = {
    create?: XOR<DistributionCreateWithoutAidTypeInput, DistributionUncheckedCreateWithoutAidTypeInput> | DistributionCreateWithoutAidTypeInput[] | DistributionUncheckedCreateWithoutAidTypeInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutAidTypeInput | DistributionCreateOrConnectWithoutAidTypeInput[]
    createMany?: DistributionCreateManyAidTypeInputEnvelope
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
  }

  export type DistributionUpdateManyWithoutAidTypeNestedInput = {
    create?: XOR<DistributionCreateWithoutAidTypeInput, DistributionUncheckedCreateWithoutAidTypeInput> | DistributionCreateWithoutAidTypeInput[] | DistributionUncheckedCreateWithoutAidTypeInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutAidTypeInput | DistributionCreateOrConnectWithoutAidTypeInput[]
    upsert?: DistributionUpsertWithWhereUniqueWithoutAidTypeInput | DistributionUpsertWithWhereUniqueWithoutAidTypeInput[]
    createMany?: DistributionCreateManyAidTypeInputEnvelope
    set?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    disconnect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    delete?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    update?: DistributionUpdateWithWhereUniqueWithoutAidTypeInput | DistributionUpdateWithWhereUniqueWithoutAidTypeInput[]
    updateMany?: DistributionUpdateManyWithWhereWithoutAidTypeInput | DistributionUpdateManyWithWhereWithoutAidTypeInput[]
    deleteMany?: DistributionScalarWhereInput | DistributionScalarWhereInput[]
  }

  export type DistributionUncheckedUpdateManyWithoutAidTypeNestedInput = {
    create?: XOR<DistributionCreateWithoutAidTypeInput, DistributionUncheckedCreateWithoutAidTypeInput> | DistributionCreateWithoutAidTypeInput[] | DistributionUncheckedCreateWithoutAidTypeInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutAidTypeInput | DistributionCreateOrConnectWithoutAidTypeInput[]
    upsert?: DistributionUpsertWithWhereUniqueWithoutAidTypeInput | DistributionUpsertWithWhereUniqueWithoutAidTypeInput[]
    createMany?: DistributionCreateManyAidTypeInputEnvelope
    set?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    disconnect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    delete?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    update?: DistributionUpdateWithWhereUniqueWithoutAidTypeInput | DistributionUpdateWithWhereUniqueWithoutAidTypeInput[]
    updateMany?: DistributionUpdateManyWithWhereWithoutAidTypeInput | DistributionUpdateManyWithWhereWithoutAidTypeInput[]
    deleteMany?: DistributionScalarWhereInput | DistributionScalarWhereInput[]
  }

  export type DistributionCreateNestedManyWithoutFieldWorkerInput = {
    create?: XOR<DistributionCreateWithoutFieldWorkerInput, DistributionUncheckedCreateWithoutFieldWorkerInput> | DistributionCreateWithoutFieldWorkerInput[] | DistributionUncheckedCreateWithoutFieldWorkerInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutFieldWorkerInput | DistributionCreateOrConnectWithoutFieldWorkerInput[]
    createMany?: DistributionCreateManyFieldWorkerInputEnvelope
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
  }

  export type DistributionUncheckedCreateNestedManyWithoutFieldWorkerInput = {
    create?: XOR<DistributionCreateWithoutFieldWorkerInput, DistributionUncheckedCreateWithoutFieldWorkerInput> | DistributionCreateWithoutFieldWorkerInput[] | DistributionUncheckedCreateWithoutFieldWorkerInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutFieldWorkerInput | DistributionCreateOrConnectWithoutFieldWorkerInput[]
    createMany?: DistributionCreateManyFieldWorkerInputEnvelope
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
  }

  export type DistributionUpdateManyWithoutFieldWorkerNestedInput = {
    create?: XOR<DistributionCreateWithoutFieldWorkerInput, DistributionUncheckedCreateWithoutFieldWorkerInput> | DistributionCreateWithoutFieldWorkerInput[] | DistributionUncheckedCreateWithoutFieldWorkerInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutFieldWorkerInput | DistributionCreateOrConnectWithoutFieldWorkerInput[]
    upsert?: DistributionUpsertWithWhereUniqueWithoutFieldWorkerInput | DistributionUpsertWithWhereUniqueWithoutFieldWorkerInput[]
    createMany?: DistributionCreateManyFieldWorkerInputEnvelope
    set?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    disconnect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    delete?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    update?: DistributionUpdateWithWhereUniqueWithoutFieldWorkerInput | DistributionUpdateWithWhereUniqueWithoutFieldWorkerInput[]
    updateMany?: DistributionUpdateManyWithWhereWithoutFieldWorkerInput | DistributionUpdateManyWithWhereWithoutFieldWorkerInput[]
    deleteMany?: DistributionScalarWhereInput | DistributionScalarWhereInput[]
  }

  export type DistributionUncheckedUpdateManyWithoutFieldWorkerNestedInput = {
    create?: XOR<DistributionCreateWithoutFieldWorkerInput, DistributionUncheckedCreateWithoutFieldWorkerInput> | DistributionCreateWithoutFieldWorkerInput[] | DistributionUncheckedCreateWithoutFieldWorkerInput[]
    connectOrCreate?: DistributionCreateOrConnectWithoutFieldWorkerInput | DistributionCreateOrConnectWithoutFieldWorkerInput[]
    upsert?: DistributionUpsertWithWhereUniqueWithoutFieldWorkerInput | DistributionUpsertWithWhereUniqueWithoutFieldWorkerInput[]
    createMany?: DistributionCreateManyFieldWorkerInputEnvelope
    set?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    disconnect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    delete?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    connect?: DistributionWhereUniqueInput | DistributionWhereUniqueInput[]
    update?: DistributionUpdateWithWhereUniqueWithoutFieldWorkerInput | DistributionUpdateWithWhereUniqueWithoutFieldWorkerInput[]
    updateMany?: DistributionUpdateManyWithWhereWithoutFieldWorkerInput | DistributionUpdateManyWithWhereWithoutFieldWorkerInput[]
    deleteMany?: DistributionScalarWhereInput | DistributionScalarWhereInput[]
  }

  export type AidTypeCreateNestedOneWithoutDistributionsInput = {
    create?: XOR<AidTypeCreateWithoutDistributionsInput, AidTypeUncheckedCreateWithoutDistributionsInput>
    connectOrCreate?: AidTypeCreateOrConnectWithoutDistributionsInput
    connect?: AidTypeWhereUniqueInput
  }

  export type FieldWorkerCreateNestedOneWithoutDistributionsInput = {
    create?: XOR<FieldWorkerCreateWithoutDistributionsInput, FieldWorkerUncheckedCreateWithoutDistributionsInput>
    connectOrCreate?: FieldWorkerCreateOrConnectWithoutDistributionsInput
    connect?: FieldWorkerWhereUniqueInput
  }

  export type TownshipCreateNestedOneWithoutDistributionsInput = {
    create?: XOR<TownshipCreateWithoutDistributionsInput, TownshipUncheckedCreateWithoutDistributionsInput>
    connectOrCreate?: TownshipCreateOrConnectWithoutDistributionsInput
    connect?: TownshipWhereUniqueInput
  }

  export type AidTypeUpdateOneRequiredWithoutDistributionsNestedInput = {
    create?: XOR<AidTypeCreateWithoutDistributionsInput, AidTypeUncheckedCreateWithoutDistributionsInput>
    connectOrCreate?: AidTypeCreateOrConnectWithoutDistributionsInput
    upsert?: AidTypeUpsertWithoutDistributionsInput
    connect?: AidTypeWhereUniqueInput
    update?: XOR<XOR<AidTypeUpdateToOneWithWhereWithoutDistributionsInput, AidTypeUpdateWithoutDistributionsInput>, AidTypeUncheckedUpdateWithoutDistributionsInput>
  }

  export type FieldWorkerUpdateOneRequiredWithoutDistributionsNestedInput = {
    create?: XOR<FieldWorkerCreateWithoutDistributionsInput, FieldWorkerUncheckedCreateWithoutDistributionsInput>
    connectOrCreate?: FieldWorkerCreateOrConnectWithoutDistributionsInput
    upsert?: FieldWorkerUpsertWithoutDistributionsInput
    connect?: FieldWorkerWhereUniqueInput
    update?: XOR<XOR<FieldWorkerUpdateToOneWithWhereWithoutDistributionsInput, FieldWorkerUpdateWithoutDistributionsInput>, FieldWorkerUncheckedUpdateWithoutDistributionsInput>
  }

  export type TownshipUpdateOneRequiredWithoutDistributionsNestedInput = {
    create?: XOR<TownshipCreateWithoutDistributionsInput, TownshipUncheckedCreateWithoutDistributionsInput>
    connectOrCreate?: TownshipCreateOrConnectWithoutDistributionsInput
    upsert?: TownshipUpsertWithoutDistributionsInput
    connect?: TownshipWhereUniqueInput
    update?: XOR<XOR<TownshipUpdateToOneWithWhereWithoutDistributionsInput, TownshipUpdateWithoutDistributionsInput>, TownshipUncheckedUpdateWithoutDistributionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DistributionCreateWithoutTownshipInput = {
    date: Date | string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aidType: AidTypeCreateNestedOneWithoutDistributionsInput
    fieldWorker: FieldWorkerCreateNestedOneWithoutDistributionsInput
  }

  export type DistributionUncheckedCreateWithoutTownshipInput = {
    id?: number
    date: Date | string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aidTypeId: number
    fieldWorkerId: number
  }

  export type DistributionCreateOrConnectWithoutTownshipInput = {
    where: DistributionWhereUniqueInput
    create: XOR<DistributionCreateWithoutTownshipInput, DistributionUncheckedCreateWithoutTownshipInput>
  }

  export type DistributionCreateManyTownshipInputEnvelope = {
    data: DistributionCreateManyTownshipInput | DistributionCreateManyTownshipInput[]
    skipDuplicates?: boolean
  }

  export type DistributionUpsertWithWhereUniqueWithoutTownshipInput = {
    where: DistributionWhereUniqueInput
    update: XOR<DistributionUpdateWithoutTownshipInput, DistributionUncheckedUpdateWithoutTownshipInput>
    create: XOR<DistributionCreateWithoutTownshipInput, DistributionUncheckedCreateWithoutTownshipInput>
  }

  export type DistributionUpdateWithWhereUniqueWithoutTownshipInput = {
    where: DistributionWhereUniqueInput
    data: XOR<DistributionUpdateWithoutTownshipInput, DistributionUncheckedUpdateWithoutTownshipInput>
  }

  export type DistributionUpdateManyWithWhereWithoutTownshipInput = {
    where: DistributionScalarWhereInput
    data: XOR<DistributionUpdateManyMutationInput, DistributionUncheckedUpdateManyWithoutTownshipInput>
  }

  export type DistributionScalarWhereInput = {
    AND?: DistributionScalarWhereInput | DistributionScalarWhereInput[]
    OR?: DistributionScalarWhereInput[]
    NOT?: DistributionScalarWhereInput | DistributionScalarWhereInput[]
    id?: IntFilter<"Distribution"> | number
    date?: DateTimeFilter<"Distribution"> | Date | string
    quantity?: IntFilter<"Distribution"> | number
    notes?: StringNullableFilter<"Distribution"> | string | null
    createdAt?: DateTimeFilter<"Distribution"> | Date | string
    updatedAt?: DateTimeFilter<"Distribution"> | Date | string
    townshipId?: IntFilter<"Distribution"> | number
    aidTypeId?: IntFilter<"Distribution"> | number
    fieldWorkerId?: IntFilter<"Distribution"> | number
  }

  export type DistributionCreateWithoutAidTypeInput = {
    date: Date | string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldWorker: FieldWorkerCreateNestedOneWithoutDistributionsInput
    township: TownshipCreateNestedOneWithoutDistributionsInput
  }

  export type DistributionUncheckedCreateWithoutAidTypeInput = {
    id?: number
    date: Date | string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    townshipId: number
    fieldWorkerId: number
  }

  export type DistributionCreateOrConnectWithoutAidTypeInput = {
    where: DistributionWhereUniqueInput
    create: XOR<DistributionCreateWithoutAidTypeInput, DistributionUncheckedCreateWithoutAidTypeInput>
  }

  export type DistributionCreateManyAidTypeInputEnvelope = {
    data: DistributionCreateManyAidTypeInput | DistributionCreateManyAidTypeInput[]
    skipDuplicates?: boolean
  }

  export type DistributionUpsertWithWhereUniqueWithoutAidTypeInput = {
    where: DistributionWhereUniqueInput
    update: XOR<DistributionUpdateWithoutAidTypeInput, DistributionUncheckedUpdateWithoutAidTypeInput>
    create: XOR<DistributionCreateWithoutAidTypeInput, DistributionUncheckedCreateWithoutAidTypeInput>
  }

  export type DistributionUpdateWithWhereUniqueWithoutAidTypeInput = {
    where: DistributionWhereUniqueInput
    data: XOR<DistributionUpdateWithoutAidTypeInput, DistributionUncheckedUpdateWithoutAidTypeInput>
  }

  export type DistributionUpdateManyWithWhereWithoutAidTypeInput = {
    where: DistributionScalarWhereInput
    data: XOR<DistributionUpdateManyMutationInput, DistributionUncheckedUpdateManyWithoutAidTypeInput>
  }

  export type DistributionCreateWithoutFieldWorkerInput = {
    date: Date | string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aidType: AidTypeCreateNestedOneWithoutDistributionsInput
    township: TownshipCreateNestedOneWithoutDistributionsInput
  }

  export type DistributionUncheckedCreateWithoutFieldWorkerInput = {
    id?: number
    date: Date | string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    townshipId: number
    aidTypeId: number
  }

  export type DistributionCreateOrConnectWithoutFieldWorkerInput = {
    where: DistributionWhereUniqueInput
    create: XOR<DistributionCreateWithoutFieldWorkerInput, DistributionUncheckedCreateWithoutFieldWorkerInput>
  }

  export type DistributionCreateManyFieldWorkerInputEnvelope = {
    data: DistributionCreateManyFieldWorkerInput | DistributionCreateManyFieldWorkerInput[]
    skipDuplicates?: boolean
  }

  export type DistributionUpsertWithWhereUniqueWithoutFieldWorkerInput = {
    where: DistributionWhereUniqueInput
    update: XOR<DistributionUpdateWithoutFieldWorkerInput, DistributionUncheckedUpdateWithoutFieldWorkerInput>
    create: XOR<DistributionCreateWithoutFieldWorkerInput, DistributionUncheckedCreateWithoutFieldWorkerInput>
  }

  export type DistributionUpdateWithWhereUniqueWithoutFieldWorkerInput = {
    where: DistributionWhereUniqueInput
    data: XOR<DistributionUpdateWithoutFieldWorkerInput, DistributionUncheckedUpdateWithoutFieldWorkerInput>
  }

  export type DistributionUpdateManyWithWhereWithoutFieldWorkerInput = {
    where: DistributionScalarWhereInput
    data: XOR<DistributionUpdateManyMutationInput, DistributionUncheckedUpdateManyWithoutFieldWorkerInput>
  }

  export type AidTypeCreateWithoutDistributionsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AidTypeUncheckedCreateWithoutDistributionsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AidTypeCreateOrConnectWithoutDistributionsInput = {
    where: AidTypeWhereUniqueInput
    create: XOR<AidTypeCreateWithoutDistributionsInput, AidTypeUncheckedCreateWithoutDistributionsInput>
  }

  export type FieldWorkerCreateWithoutDistributionsInput = {
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldWorkerUncheckedCreateWithoutDistributionsInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldWorkerCreateOrConnectWithoutDistributionsInput = {
    where: FieldWorkerWhereUniqueInput
    create: XOR<FieldWorkerCreateWithoutDistributionsInput, FieldWorkerUncheckedCreateWithoutDistributionsInput>
  }

  export type TownshipCreateWithoutDistributionsInput = {
    name: string
    region?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TownshipUncheckedCreateWithoutDistributionsInput = {
    id?: number
    name: string
    region?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TownshipCreateOrConnectWithoutDistributionsInput = {
    where: TownshipWhereUniqueInput
    create: XOR<TownshipCreateWithoutDistributionsInput, TownshipUncheckedCreateWithoutDistributionsInput>
  }

  export type AidTypeUpsertWithoutDistributionsInput = {
    update: XOR<AidTypeUpdateWithoutDistributionsInput, AidTypeUncheckedUpdateWithoutDistributionsInput>
    create: XOR<AidTypeCreateWithoutDistributionsInput, AidTypeUncheckedCreateWithoutDistributionsInput>
    where?: AidTypeWhereInput
  }

  export type AidTypeUpdateToOneWithWhereWithoutDistributionsInput = {
    where?: AidTypeWhereInput
    data: XOR<AidTypeUpdateWithoutDistributionsInput, AidTypeUncheckedUpdateWithoutDistributionsInput>
  }

  export type AidTypeUpdateWithoutDistributionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AidTypeUncheckedUpdateWithoutDistributionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldWorkerUpsertWithoutDistributionsInput = {
    update: XOR<FieldWorkerUpdateWithoutDistributionsInput, FieldWorkerUncheckedUpdateWithoutDistributionsInput>
    create: XOR<FieldWorkerCreateWithoutDistributionsInput, FieldWorkerUncheckedCreateWithoutDistributionsInput>
    where?: FieldWorkerWhereInput
  }

  export type FieldWorkerUpdateToOneWithWhereWithoutDistributionsInput = {
    where?: FieldWorkerWhereInput
    data: XOR<FieldWorkerUpdateWithoutDistributionsInput, FieldWorkerUncheckedUpdateWithoutDistributionsInput>
  }

  export type FieldWorkerUpdateWithoutDistributionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldWorkerUncheckedUpdateWithoutDistributionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TownshipUpsertWithoutDistributionsInput = {
    update: XOR<TownshipUpdateWithoutDistributionsInput, TownshipUncheckedUpdateWithoutDistributionsInput>
    create: XOR<TownshipCreateWithoutDistributionsInput, TownshipUncheckedCreateWithoutDistributionsInput>
    where?: TownshipWhereInput
  }

  export type TownshipUpdateToOneWithWhereWithoutDistributionsInput = {
    where?: TownshipWhereInput
    data: XOR<TownshipUpdateWithoutDistributionsInput, TownshipUncheckedUpdateWithoutDistributionsInput>
  }

  export type TownshipUpdateWithoutDistributionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TownshipUncheckedUpdateWithoutDistributionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributionCreateManyTownshipInput = {
    id?: number
    date: Date | string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aidTypeId: number
    fieldWorkerId: number
  }

  export type DistributionUpdateWithoutTownshipInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aidType?: AidTypeUpdateOneRequiredWithoutDistributionsNestedInput
    fieldWorker?: FieldWorkerUpdateOneRequiredWithoutDistributionsNestedInput
  }

  export type DistributionUncheckedUpdateWithoutTownshipInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aidTypeId?: IntFieldUpdateOperationsInput | number
    fieldWorkerId?: IntFieldUpdateOperationsInput | number
  }

  export type DistributionUncheckedUpdateManyWithoutTownshipInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aidTypeId?: IntFieldUpdateOperationsInput | number
    fieldWorkerId?: IntFieldUpdateOperationsInput | number
  }

  export type DistributionCreateManyAidTypeInput = {
    id?: number
    date: Date | string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    townshipId: number
    fieldWorkerId: number
  }

  export type DistributionUpdateWithoutAidTypeInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldWorker?: FieldWorkerUpdateOneRequiredWithoutDistributionsNestedInput
    township?: TownshipUpdateOneRequiredWithoutDistributionsNestedInput
  }

  export type DistributionUncheckedUpdateWithoutAidTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townshipId?: IntFieldUpdateOperationsInput | number
    fieldWorkerId?: IntFieldUpdateOperationsInput | number
  }

  export type DistributionUncheckedUpdateManyWithoutAidTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townshipId?: IntFieldUpdateOperationsInput | number
    fieldWorkerId?: IntFieldUpdateOperationsInput | number
  }

  export type DistributionCreateManyFieldWorkerInput = {
    id?: number
    date: Date | string
    quantity: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    townshipId: number
    aidTypeId: number
  }

  export type DistributionUpdateWithoutFieldWorkerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aidType?: AidTypeUpdateOneRequiredWithoutDistributionsNestedInput
    township?: TownshipUpdateOneRequiredWithoutDistributionsNestedInput
  }

  export type DistributionUncheckedUpdateWithoutFieldWorkerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townshipId?: IntFieldUpdateOperationsInput | number
    aidTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type DistributionUncheckedUpdateManyWithoutFieldWorkerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townshipId?: IntFieldUpdateOperationsInput | number
    aidTypeId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}