
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VideoJob
 * 
 */
export type VideoJob = $Result.DefaultSelection<Prisma.$VideoJobPayload>
/**
 * Model VideoVariant
 * 
 */
export type VideoVariant = $Result.DefaultSelection<Prisma.$VideoVariantPayload>
/**
 * Model BatchJob
 * 
 */
export type BatchJob = $Result.DefaultSelection<Prisma.$BatchJobPayload>
/**
 * Model ProcessingTemplate
 * 
 */
export type ProcessingTemplate = $Result.DefaultSelection<Prisma.$ProcessingTemplatePayload>
/**
 * Model SystemMetric
 * 
 */
export type SystemMetric = $Result.DefaultSelection<Prisma.$SystemMetricPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const JobStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const BatchStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
  PAUSED: 'PAUSED'
};

export type BatchStatus = (typeof BatchStatus)[keyof typeof BatchStatus]


export const CloudProvider: {
  AWS_S3: 'AWS_S3',
  GOOGLE_CLOUD: 'GOOGLE_CLOUD',
  LOCAL: 'LOCAL'
};

export type CloudProvider = (typeof CloudProvider)[keyof typeof CloudProvider]


export const MetricType: {
  PROCESSING_TIME: 'PROCESSING_TIME',
  FILE_SIZE: 'FILE_SIZE',
  QUEUE_LENGTH: 'QUEUE_LENGTH',
  ERROR_RATE: 'ERROR_RATE',
  DISK_USAGE: 'DISK_USAGE',
  MEMORY_USAGE: 'MEMORY_USAGE',
  CPU_USAGE: 'CPU_USAGE'
};

export type MetricType = (typeof MetricType)[keyof typeof MetricType]

}

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type BatchStatus = $Enums.BatchStatus

export const BatchStatus: typeof $Enums.BatchStatus

export type CloudProvider = $Enums.CloudProvider

export const CloudProvider: typeof $Enums.CloudProvider

export type MetricType = $Enums.MetricType

export const MetricType: typeof $Enums.MetricType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoJob`: Exposes CRUD operations for the **VideoJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoJobs
    * const videoJobs = await prisma.videoJob.findMany()
    * ```
    */
  get videoJob(): Prisma.VideoJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoVariant`: Exposes CRUD operations for the **VideoVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoVariants
    * const videoVariants = await prisma.videoVariant.findMany()
    * ```
    */
  get videoVariant(): Prisma.VideoVariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batchJob`: Exposes CRUD operations for the **BatchJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BatchJobs
    * const batchJobs = await prisma.batchJob.findMany()
    * ```
    */
  get batchJob(): Prisma.BatchJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processingTemplate`: Exposes CRUD operations for the **ProcessingTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessingTemplates
    * const processingTemplates = await prisma.processingTemplate.findMany()
    * ```
    */
  get processingTemplate(): Prisma.ProcessingTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemMetric`: Exposes CRUD operations for the **SystemMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemMetrics
    * const systemMetrics = await prisma.systemMetric.findMany()
    * ```
    */
  get systemMetric(): Prisma.SystemMetricDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    User: 'User',
    VideoJob: 'VideoJob',
    VideoVariant: 'VideoVariant',
    BatchJob: 'BatchJob',
    ProcessingTemplate: 'ProcessingTemplate',
    SystemMetric: 'SystemMetric'
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
      modelProps: "user" | "videoJob" | "videoVariant" | "batchJob" | "processingTemplate" | "systemMetric"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VideoJob: {
        payload: Prisma.$VideoJobPayload<ExtArgs>
        fields: Prisma.VideoJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>
          }
          findFirst: {
            args: Prisma.VideoJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>
          }
          findMany: {
            args: Prisma.VideoJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>[]
          }
          create: {
            args: Prisma.VideoJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>
          }
          createMany: {
            args: Prisma.VideoJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>[]
          }
          delete: {
            args: Prisma.VideoJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>
          }
          update: {
            args: Prisma.VideoJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>
          }
          deleteMany: {
            args: Prisma.VideoJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>[]
          }
          upsert: {
            args: Prisma.VideoJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoJobPayload>
          }
          aggregate: {
            args: Prisma.VideoJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoJob>
          }
          groupBy: {
            args: Prisma.VideoJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoJobCountArgs<ExtArgs>
            result: $Utils.Optional<VideoJobCountAggregateOutputType> | number
          }
        }
      }
      VideoVariant: {
        payload: Prisma.$VideoVariantPayload<ExtArgs>
        fields: Prisma.VideoVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoVariantPayload>
          }
          findFirst: {
            args: Prisma.VideoVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoVariantPayload>
          }
          findMany: {
            args: Prisma.VideoVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoVariantPayload>[]
          }
          create: {
            args: Prisma.VideoVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoVariantPayload>
          }
          createMany: {
            args: Prisma.VideoVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoVariantPayload>[]
          }
          delete: {
            args: Prisma.VideoVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoVariantPayload>
          }
          update: {
            args: Prisma.VideoVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoVariantPayload>
          }
          deleteMany: {
            args: Prisma.VideoVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoVariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoVariantPayload>[]
          }
          upsert: {
            args: Prisma.VideoVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoVariantPayload>
          }
          aggregate: {
            args: Prisma.VideoVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoVariant>
          }
          groupBy: {
            args: Prisma.VideoVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoVariantCountArgs<ExtArgs>
            result: $Utils.Optional<VideoVariantCountAggregateOutputType> | number
          }
        }
      }
      BatchJob: {
        payload: Prisma.$BatchJobPayload<ExtArgs>
        fields: Prisma.BatchJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchJobPayload>
          }
          findFirst: {
            args: Prisma.BatchJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchJobPayload>
          }
          findMany: {
            args: Prisma.BatchJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchJobPayload>[]
          }
          create: {
            args: Prisma.BatchJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchJobPayload>
          }
          createMany: {
            args: Prisma.BatchJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BatchJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchJobPayload>[]
          }
          delete: {
            args: Prisma.BatchJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchJobPayload>
          }
          update: {
            args: Prisma.BatchJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchJobPayload>
          }
          deleteMany: {
            args: Prisma.BatchJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BatchJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchJobPayload>[]
          }
          upsert: {
            args: Prisma.BatchJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchJobPayload>
          }
          aggregate: {
            args: Prisma.BatchJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatchJob>
          }
          groupBy: {
            args: Prisma.BatchJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchJobCountArgs<ExtArgs>
            result: $Utils.Optional<BatchJobCountAggregateOutputType> | number
          }
        }
      }
      ProcessingTemplate: {
        payload: Prisma.$ProcessingTemplatePayload<ExtArgs>
        fields: Prisma.ProcessingTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessingTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessingTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingTemplatePayload>
          }
          findFirst: {
            args: Prisma.ProcessingTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessingTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingTemplatePayload>
          }
          findMany: {
            args: Prisma.ProcessingTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingTemplatePayload>[]
          }
          create: {
            args: Prisma.ProcessingTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingTemplatePayload>
          }
          createMany: {
            args: Prisma.ProcessingTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessingTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingTemplatePayload>[]
          }
          delete: {
            args: Prisma.ProcessingTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingTemplatePayload>
          }
          update: {
            args: Prisma.ProcessingTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingTemplatePayload>
          }
          deleteMany: {
            args: Prisma.ProcessingTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessingTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessingTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingTemplatePayload>[]
          }
          upsert: {
            args: Prisma.ProcessingTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingTemplatePayload>
          }
          aggregate: {
            args: Prisma.ProcessingTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcessingTemplate>
          }
          groupBy: {
            args: Prisma.ProcessingTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessingTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessingTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessingTemplateCountAggregateOutputType> | number
          }
        }
      }
      SystemMetric: {
        payload: Prisma.$SystemMetricPayload<ExtArgs>
        fields: Prisma.SystemMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricPayload>
          }
          findFirst: {
            args: Prisma.SystemMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricPayload>
          }
          findMany: {
            args: Prisma.SystemMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricPayload>[]
          }
          create: {
            args: Prisma.SystemMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricPayload>
          }
          createMany: {
            args: Prisma.SystemMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemMetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricPayload>[]
          }
          delete: {
            args: Prisma.SystemMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricPayload>
          }
          update: {
            args: Prisma.SystemMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricPayload>
          }
          deleteMany: {
            args: Prisma.SystemMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemMetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricPayload>[]
          }
          upsert: {
            args: Prisma.SystemMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricPayload>
          }
          aggregate: {
            args: Prisma.SystemMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemMetric>
          }
          groupBy: {
            args: Prisma.SystemMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemMetricCountArgs<ExtArgs>
            result: $Utils.Optional<SystemMetricCountAggregateOutputType> | number
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
    user?: UserOmit
    videoJob?: VideoJobOmit
    videoVariant?: VideoVariantOmit
    batchJob?: BatchJobOmit
    processingTemplate?: ProcessingTemplateOmit
    systemMetric?: SystemMetricOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    jobs: number
    batches: number
    templates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | UserCountOutputTypeCountJobsArgs
    batches?: boolean | UserCountOutputTypeCountBatchesArgs
    templates?: boolean | UserCountOutputTypeCountTemplatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoJobWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchJobWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessingTemplateWhereInput
  }


  /**
   * Count Type VideoJobCountOutputType
   */

  export type VideoJobCountOutputType = {
    variants: number
  }

  export type VideoJobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | VideoJobCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * VideoJobCountOutputType without action
   */
  export type VideoJobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJobCountOutputType
     */
    select?: VideoJobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoJobCountOutputType without action
   */
  export type VideoJobCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoVariantWhereInput
  }


  /**
   * Count Type BatchJobCountOutputType
   */

  export type BatchJobCountOutputType = {
    jobs: number
  }

  export type BatchJobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | BatchJobCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * BatchJobCountOutputType without action
   */
  export type BatchJobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJobCountOutputType
     */
    select?: BatchJobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BatchJobCountOutputType without action
   */
  export type BatchJobCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoJobWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    apiKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    apiKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    apiKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    apiKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    apiKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    apiKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    passwordHash: string | null
    apiKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    apiKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobs?: boolean | User$jobsArgs<ExtArgs>
    batches?: boolean | User$batchesArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    apiKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    apiKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    apiKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "passwordHash" | "apiKey" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | User$jobsArgs<ExtArgs>
    batches?: boolean | User$batchesArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      jobs: Prisma.$VideoJobPayload<ExtArgs>[]
      batches: Prisma.$BatchJobPayload<ExtArgs>[]
      templates: Prisma.$ProcessingTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      passwordHash: string | null
      apiKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs<T extends User$jobsArgs<ExtArgs> = {}>(args?: Subset<T, User$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    batches<T extends User$batchesArgs<ExtArgs> = {}>(args?: Subset<T, User$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends User$templatesArgs<ExtArgs> = {}>(args?: Subset<T, User$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessingTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly apiKey: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.jobs
   */
  export type User$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoJob
     */
    omit?: VideoJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoJobInclude<ExtArgs> | null
    where?: VideoJobWhereInput
    orderBy?: VideoJobOrderByWithRelationInput | VideoJobOrderByWithRelationInput[]
    cursor?: VideoJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoJobScalarFieldEnum | VideoJobScalarFieldEnum[]
  }

  /**
   * User.batches
   */
  export type User$batchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJob
     */
    select?: BatchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchJob
     */
    omit?: BatchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchJobInclude<ExtArgs> | null
    where?: BatchJobWhereInput
    orderBy?: BatchJobOrderByWithRelationInput | BatchJobOrderByWithRelationInput[]
    cursor?: BatchJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchJobScalarFieldEnum | BatchJobScalarFieldEnum[]
  }

  /**
   * User.templates
   */
  export type User$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingTemplate
     */
    select?: ProcessingTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessingTemplate
     */
    omit?: ProcessingTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingTemplateInclude<ExtArgs> | null
    where?: ProcessingTemplateWhereInput
    orderBy?: ProcessingTemplateOrderByWithRelationInput | ProcessingTemplateOrderByWithRelationInput[]
    cursor?: ProcessingTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessingTemplateScalarFieldEnum | ProcessingTemplateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VideoJob
   */

  export type AggregateVideoJob = {
    _count: VideoJobCountAggregateOutputType | null
    _avg: VideoJobAvgAggregateOutputType | null
    _sum: VideoJobSumAggregateOutputType | null
    _min: VideoJobMinAggregateOutputType | null
    _max: VideoJobMaxAggregateOutputType | null
  }

  export type VideoJobAvgAggregateOutputType = {
    progress: number | null
  }

  export type VideoJobSumAggregateOutputType = {
    progress: number | null
  }

  export type VideoJobMinAggregateOutputType = {
    id: string | null
    originalName: string | null
    filePath: string | null
    outputPath: string | null
    status: $Enums.JobStatus | null
    progress: number | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    batchJobId: string | null
    cloudStorageUrl: string | null
    cloudProvider: $Enums.CloudProvider | null
  }

  export type VideoJobMaxAggregateOutputType = {
    id: string | null
    originalName: string | null
    filePath: string | null
    outputPath: string | null
    status: $Enums.JobStatus | null
    progress: number | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    batchJobId: string | null
    cloudStorageUrl: string | null
    cloudProvider: $Enums.CloudProvider | null
  }

  export type VideoJobCountAggregateOutputType = {
    id: number
    originalName: number
    filePath: number
    outputPath: number
    status: number
    progress: number
    errorMessage: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    options: number
    userId: number
    batchJobId: number
    cloudStorageUrl: number
    cloudProvider: number
    _all: number
  }


  export type VideoJobAvgAggregateInputType = {
    progress?: true
  }

  export type VideoJobSumAggregateInputType = {
    progress?: true
  }

  export type VideoJobMinAggregateInputType = {
    id?: true
    originalName?: true
    filePath?: true
    outputPath?: true
    status?: true
    progress?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    batchJobId?: true
    cloudStorageUrl?: true
    cloudProvider?: true
  }

  export type VideoJobMaxAggregateInputType = {
    id?: true
    originalName?: true
    filePath?: true
    outputPath?: true
    status?: true
    progress?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    batchJobId?: true
    cloudStorageUrl?: true
    cloudProvider?: true
  }

  export type VideoJobCountAggregateInputType = {
    id?: true
    originalName?: true
    filePath?: true
    outputPath?: true
    status?: true
    progress?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    options?: true
    userId?: true
    batchJobId?: true
    cloudStorageUrl?: true
    cloudProvider?: true
    _all?: true
  }

  export type VideoJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoJob to aggregate.
     */
    where?: VideoJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoJobs to fetch.
     */
    orderBy?: VideoJobOrderByWithRelationInput | VideoJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoJobs
    **/
    _count?: true | VideoJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoJobMaxAggregateInputType
  }

  export type GetVideoJobAggregateType<T extends VideoJobAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoJob[P]>
      : GetScalarType<T[P], AggregateVideoJob[P]>
  }




  export type VideoJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoJobWhereInput
    orderBy?: VideoJobOrderByWithAggregationInput | VideoJobOrderByWithAggregationInput[]
    by: VideoJobScalarFieldEnum[] | VideoJobScalarFieldEnum
    having?: VideoJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoJobCountAggregateInputType | true
    _avg?: VideoJobAvgAggregateInputType
    _sum?: VideoJobSumAggregateInputType
    _min?: VideoJobMinAggregateInputType
    _max?: VideoJobMaxAggregateInputType
  }

  export type VideoJobGroupByOutputType = {
    id: string
    originalName: string
    filePath: string
    outputPath: string | null
    status: $Enums.JobStatus
    progress: number
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    options: JsonValue | null
    userId: string | null
    batchJobId: string | null
    cloudStorageUrl: string | null
    cloudProvider: $Enums.CloudProvider | null
    _count: VideoJobCountAggregateOutputType | null
    _avg: VideoJobAvgAggregateOutputType | null
    _sum: VideoJobSumAggregateOutputType | null
    _min: VideoJobMinAggregateOutputType | null
    _max: VideoJobMaxAggregateOutputType | null
  }

  type GetVideoJobGroupByPayload<T extends VideoJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoJobGroupByOutputType[P]>
            : GetScalarType<T[P], VideoJobGroupByOutputType[P]>
        }
      >
    >


  export type VideoJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalName?: boolean
    filePath?: boolean
    outputPath?: boolean
    status?: boolean
    progress?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    options?: boolean
    userId?: boolean
    batchJobId?: boolean
    cloudStorageUrl?: boolean
    cloudProvider?: boolean
    user?: boolean | VideoJob$userArgs<ExtArgs>
    variants?: boolean | VideoJob$variantsArgs<ExtArgs>
    batchJob?: boolean | VideoJob$batchJobArgs<ExtArgs>
    _count?: boolean | VideoJobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoJob"]>

  export type VideoJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalName?: boolean
    filePath?: boolean
    outputPath?: boolean
    status?: boolean
    progress?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    options?: boolean
    userId?: boolean
    batchJobId?: boolean
    cloudStorageUrl?: boolean
    cloudProvider?: boolean
    user?: boolean | VideoJob$userArgs<ExtArgs>
    batchJob?: boolean | VideoJob$batchJobArgs<ExtArgs>
  }, ExtArgs["result"]["videoJob"]>

  export type VideoJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalName?: boolean
    filePath?: boolean
    outputPath?: boolean
    status?: boolean
    progress?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    options?: boolean
    userId?: boolean
    batchJobId?: boolean
    cloudStorageUrl?: boolean
    cloudProvider?: boolean
    user?: boolean | VideoJob$userArgs<ExtArgs>
    batchJob?: boolean | VideoJob$batchJobArgs<ExtArgs>
  }, ExtArgs["result"]["videoJob"]>

  export type VideoJobSelectScalar = {
    id?: boolean
    originalName?: boolean
    filePath?: boolean
    outputPath?: boolean
    status?: boolean
    progress?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    options?: boolean
    userId?: boolean
    batchJobId?: boolean
    cloudStorageUrl?: boolean
    cloudProvider?: boolean
  }

  export type VideoJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originalName" | "filePath" | "outputPath" | "status" | "progress" | "errorMessage" | "startedAt" | "completedAt" | "createdAt" | "updatedAt" | "options" | "userId" | "batchJobId" | "cloudStorageUrl" | "cloudProvider", ExtArgs["result"]["videoJob"]>
  export type VideoJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | VideoJob$userArgs<ExtArgs>
    variants?: boolean | VideoJob$variantsArgs<ExtArgs>
    batchJob?: boolean | VideoJob$batchJobArgs<ExtArgs>
    _count?: boolean | VideoJobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VideoJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | VideoJob$userArgs<ExtArgs>
    batchJob?: boolean | VideoJob$batchJobArgs<ExtArgs>
  }
  export type VideoJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | VideoJob$userArgs<ExtArgs>
    batchJob?: boolean | VideoJob$batchJobArgs<ExtArgs>
  }

  export type $VideoJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoJob"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      variants: Prisma.$VideoVariantPayload<ExtArgs>[]
      batchJob: Prisma.$BatchJobPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originalName: string
      filePath: string
      outputPath: string | null
      status: $Enums.JobStatus
      progress: number
      errorMessage: string | null
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
      options: Prisma.JsonValue | null
      userId: string | null
      batchJobId: string | null
      cloudStorageUrl: string | null
      cloudProvider: $Enums.CloudProvider | null
    }, ExtArgs["result"]["videoJob"]>
    composites: {}
  }

  type VideoJobGetPayload<S extends boolean | null | undefined | VideoJobDefaultArgs> = $Result.GetResult<Prisma.$VideoJobPayload, S>

  type VideoJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoJobCountAggregateInputType | true
    }

  export interface VideoJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoJob'], meta: { name: 'VideoJob' } }
    /**
     * Find zero or one VideoJob that matches the filter.
     * @param {VideoJobFindUniqueArgs} args - Arguments to find a VideoJob
     * @example
     * // Get one VideoJob
     * const videoJob = await prisma.videoJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoJobFindUniqueArgs>(args: SelectSubset<T, VideoJobFindUniqueArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoJobFindUniqueOrThrowArgs} args - Arguments to find a VideoJob
     * @example
     * // Get one VideoJob
     * const videoJob = await prisma.videoJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoJobFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoJobFindFirstArgs} args - Arguments to find a VideoJob
     * @example
     * // Get one VideoJob
     * const videoJob = await prisma.videoJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoJobFindFirstArgs>(args?: SelectSubset<T, VideoJobFindFirstArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoJobFindFirstOrThrowArgs} args - Arguments to find a VideoJob
     * @example
     * // Get one VideoJob
     * const videoJob = await prisma.videoJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoJobFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoJobs
     * const videoJobs = await prisma.videoJob.findMany()
     * 
     * // Get first 10 VideoJobs
     * const videoJobs = await prisma.videoJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoJobWithIdOnly = await prisma.videoJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoJobFindManyArgs>(args?: SelectSubset<T, VideoJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoJob.
     * @param {VideoJobCreateArgs} args - Arguments to create a VideoJob.
     * @example
     * // Create one VideoJob
     * const VideoJob = await prisma.videoJob.create({
     *   data: {
     *     // ... data to create a VideoJob
     *   }
     * })
     * 
     */
    create<T extends VideoJobCreateArgs>(args: SelectSubset<T, VideoJobCreateArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoJobs.
     * @param {VideoJobCreateManyArgs} args - Arguments to create many VideoJobs.
     * @example
     * // Create many VideoJobs
     * const videoJob = await prisma.videoJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoJobCreateManyArgs>(args?: SelectSubset<T, VideoJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoJobs and returns the data saved in the database.
     * @param {VideoJobCreateManyAndReturnArgs} args - Arguments to create many VideoJobs.
     * @example
     * // Create many VideoJobs
     * const videoJob = await prisma.videoJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoJobs and only return the `id`
     * const videoJobWithIdOnly = await prisma.videoJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoJobCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoJob.
     * @param {VideoJobDeleteArgs} args - Arguments to delete one VideoJob.
     * @example
     * // Delete one VideoJob
     * const VideoJob = await prisma.videoJob.delete({
     *   where: {
     *     // ... filter to delete one VideoJob
     *   }
     * })
     * 
     */
    delete<T extends VideoJobDeleteArgs>(args: SelectSubset<T, VideoJobDeleteArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoJob.
     * @param {VideoJobUpdateArgs} args - Arguments to update one VideoJob.
     * @example
     * // Update one VideoJob
     * const videoJob = await prisma.videoJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoJobUpdateArgs>(args: SelectSubset<T, VideoJobUpdateArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoJobs.
     * @param {VideoJobDeleteManyArgs} args - Arguments to filter VideoJobs to delete.
     * @example
     * // Delete a few VideoJobs
     * const { count } = await prisma.videoJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoJobDeleteManyArgs>(args?: SelectSubset<T, VideoJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoJobs
     * const videoJob = await prisma.videoJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoJobUpdateManyArgs>(args: SelectSubset<T, VideoJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoJobs and returns the data updated in the database.
     * @param {VideoJobUpdateManyAndReturnArgs} args - Arguments to update many VideoJobs.
     * @example
     * // Update many VideoJobs
     * const videoJob = await prisma.videoJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoJobs and only return the `id`
     * const videoJobWithIdOnly = await prisma.videoJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoJobUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoJob.
     * @param {VideoJobUpsertArgs} args - Arguments to update or create a VideoJob.
     * @example
     * // Update or create a VideoJob
     * const videoJob = await prisma.videoJob.upsert({
     *   create: {
     *     // ... data to create a VideoJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoJob we want to update
     *   }
     * })
     */
    upsert<T extends VideoJobUpsertArgs>(args: SelectSubset<T, VideoJobUpsertArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoJobCountArgs} args - Arguments to filter VideoJobs to count.
     * @example
     * // Count the number of VideoJobs
     * const count = await prisma.videoJob.count({
     *   where: {
     *     // ... the filter for the VideoJobs we want to count
     *   }
     * })
    **/
    count<T extends VideoJobCountArgs>(
      args?: Subset<T, VideoJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoJobAggregateArgs>(args: Subset<T, VideoJobAggregateArgs>): Prisma.PrismaPromise<GetVideoJobAggregateType<T>>

    /**
     * Group by VideoJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoJobGroupByArgs} args - Group by arguments.
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
      T extends VideoJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoJobGroupByArgs['orderBy'] }
        : { orderBy?: VideoJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoJob model
   */
  readonly fields: VideoJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends VideoJob$userArgs<ExtArgs> = {}>(args?: Subset<T, VideoJob$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    variants<T extends VideoJob$variantsArgs<ExtArgs> = {}>(args?: Subset<T, VideoJob$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    batchJob<T extends VideoJob$batchJobArgs<ExtArgs> = {}>(args?: Subset<T, VideoJob$batchJobArgs<ExtArgs>>): Prisma__BatchJobClient<$Result.GetResult<Prisma.$BatchJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoJob model
   */
  interface VideoJobFieldRefs {
    readonly id: FieldRef<"VideoJob", 'String'>
    readonly originalName: FieldRef<"VideoJob", 'String'>
    readonly filePath: FieldRef<"VideoJob", 'String'>
    readonly outputPath: FieldRef<"VideoJob", 'String'>
    readonly status: FieldRef<"VideoJob", 'JobStatus'>
    readonly progress: FieldRef<"VideoJob", 'Float'>
    readonly errorMessage: FieldRef<"VideoJob", 'String'>
    readonly startedAt: FieldRef<"VideoJob", 'DateTime'>
    readonly completedAt: FieldRef<"VideoJob", 'DateTime'>
    readonly createdAt: FieldRef<"VideoJob", 'DateTime'>
    readonly updatedAt: FieldRef<"VideoJob", 'DateTime'>
    readonly options: FieldRef<"VideoJob", 'Json'>
    readonly userId: FieldRef<"VideoJob", 'String'>
    readonly batchJobId: FieldRef<"VideoJob", 'String'>
    readonly cloudStorageUrl: FieldRef<"VideoJob", 'String'>
    readonly cloudProvider: FieldRef<"VideoJob", 'CloudProvider'>
  }
    

  // Custom InputTypes
  /**
   * VideoJob findUnique
   */
  export type VideoJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoJob
     */
    omit?: VideoJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoJobInclude<ExtArgs> | null
    /**
     * Filter, which VideoJob to fetch.
     */
    where: VideoJobWhereUniqueInput
  }

  /**
   * VideoJob findUniqueOrThrow
   */
  export type VideoJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoJob
     */
    omit?: VideoJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoJobInclude<ExtArgs> | null
    /**
     * Filter, which VideoJob to fetch.
     */
    where: VideoJobWhereUniqueInput
  }

  /**
   * VideoJob findFirst
   */
  export type VideoJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoJob
     */
    omit?: VideoJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoJobInclude<ExtArgs> | null
    /**
     * Filter, which VideoJob to fetch.
     */
    where?: VideoJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoJobs to fetch.
     */
    orderBy?: VideoJobOrderByWithRelationInput | VideoJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoJobs.
     */
    cursor?: VideoJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoJobs.
     */
    distinct?: VideoJobScalarFieldEnum | VideoJobScalarFieldEnum[]
  }

  /**
   * VideoJob findFirstOrThrow
   */
  export type VideoJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoJob
     */
    omit?: VideoJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoJobInclude<ExtArgs> | null
    /**
     * Filter, which VideoJob to fetch.
     */
    where?: VideoJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoJobs to fetch.
     */
    orderBy?: VideoJobOrderByWithRelationInput | VideoJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoJobs.
     */
    cursor?: VideoJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoJobs.
     */
    distinct?: VideoJobScalarFieldEnum | VideoJobScalarFieldEnum[]
  }

  /**
   * VideoJob findMany
   */
  export type VideoJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoJob
     */
    omit?: VideoJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoJobInclude<ExtArgs> | null
    /**
     * Filter, which VideoJobs to fetch.
     */
    where?: VideoJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoJobs to fetch.
     */
    orderBy?: VideoJobOrderByWithRelationInput | VideoJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoJobs.
     */
    cursor?: VideoJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoJobs.
     */
    skip?: number
    distinct?: VideoJobScalarFieldEnum | VideoJobScalarFieldEnum[]
  }

  /**
   * VideoJob create
   */
  export type VideoJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoJob
     */
    omit?: VideoJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoJobInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoJob.
     */
    data: XOR<VideoJobCreateInput, VideoJobUncheckedCreateInput>
  }

  /**
   * VideoJob createMany
   */
  export type VideoJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoJobs.
     */
    data: VideoJobCreateManyInput | VideoJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoJob createManyAndReturn
   */
  export type VideoJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoJob
     */
    omit?: VideoJobOmit<ExtArgs> | null
    /**
     * The data used to create many VideoJobs.
     */
    data: VideoJobCreateManyInput | VideoJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoJob update
   */
  export type VideoJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoJob
     */
    omit?: VideoJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoJobInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoJob.
     */
    data: XOR<VideoJobUpdateInput, VideoJobUncheckedUpdateInput>
    /**
     * Choose, which VideoJob to update.
     */
    where: VideoJobWhereUniqueInput
  }

  /**
   * VideoJob updateMany
   */
  export type VideoJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoJobs.
     */
    data: XOR<VideoJobUpdateManyMutationInput, VideoJobUncheckedUpdateManyInput>
    /**
     * Filter which VideoJobs to update
     */
    where?: VideoJobWhereInput
    /**
     * Limit how many VideoJobs to update.
     */
    limit?: number
  }

  /**
   * VideoJob updateManyAndReturn
   */
  export type VideoJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoJob
     */
    omit?: VideoJobOmit<ExtArgs> | null
    /**
     * The data used to update VideoJobs.
     */
    data: XOR<VideoJobUpdateManyMutationInput, VideoJobUncheckedUpdateManyInput>
    /**
     * Filter which VideoJobs to update
     */
    where?: VideoJobWhereInput
    /**
     * Limit how many VideoJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoJob upsert
   */
  export type VideoJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoJob
     */
    omit?: VideoJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoJobInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoJob to update in case it exists.
     */
    where: VideoJobWhereUniqueInput
    /**
     * In case the VideoJob found by the `where` argument doesn't exist, create a new VideoJob with this data.
     */
    create: XOR<VideoJobCreateInput, VideoJobUncheckedCreateInput>
    /**
     * In case the VideoJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoJobUpdateInput, VideoJobUncheckedUpdateInput>
  }

  /**
   * VideoJob delete
   */
  export type VideoJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoJob
     */
    omit?: VideoJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoJobInclude<ExtArgs> | null
    /**
     * Filter which VideoJob to delete.
     */
    where: VideoJobWhereUniqueInput
  }

  /**
   * VideoJob deleteMany
   */
  export type VideoJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoJobs to delete
     */
    where?: VideoJobWhereInput
    /**
     * Limit how many VideoJobs to delete.
     */
    limit?: number
  }

  /**
   * VideoJob.user
   */
  export type VideoJob$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * VideoJob.variants
   */
  export type VideoJob$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoVariant
     */
    select?: VideoVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoVariant
     */
    omit?: VideoVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoVariantInclude<ExtArgs> | null
    where?: VideoVariantWhereInput
    orderBy?: VideoVariantOrderByWithRelationInput | VideoVariantOrderByWithRelationInput[]
    cursor?: VideoVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoVariantScalarFieldEnum | VideoVariantScalarFieldEnum[]
  }

  /**
   * VideoJob.batchJob
   */
  export type VideoJob$batchJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJob
     */
    select?: BatchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchJob
     */
    omit?: BatchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchJobInclude<ExtArgs> | null
    where?: BatchJobWhereInput
  }

  /**
   * VideoJob without action
   */
  export type VideoJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoJob
     */
    omit?: VideoJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoJobInclude<ExtArgs> | null
  }


  /**
   * Model VideoVariant
   */

  export type AggregateVideoVariant = {
    _count: VideoVariantCountAggregateOutputType | null
    _avg: VideoVariantAvgAggregateOutputType | null
    _sum: VideoVariantSumAggregateOutputType | null
    _min: VideoVariantMinAggregateOutputType | null
    _max: VideoVariantMaxAggregateOutputType | null
  }

  export type VideoVariantAvgAggregateOutputType = {
    progress: number | null
    processingTime: number | null
    fileSize: number | null
    duration: number | null
  }

  export type VideoVariantSumAggregateOutputType = {
    progress: number | null
    processingTime: number | null
    fileSize: bigint | null
    duration: number | null
  }

  export type VideoVariantMinAggregateOutputType = {
    id: string | null
    name: string | null
    filePath: string | null
    outputPath: string | null
    status: $Enums.JobStatus | null
    progress: number | null
    errorMessage: string | null
    processingTime: number | null
    fileSize: bigint | null
    duration: number | null
    resolution: string | null
    createdAt: Date | null
    updatedAt: Date | null
    videoJobId: string | null
    cloudStorageUrl: string | null
    cloudProvider: $Enums.CloudProvider | null
  }

  export type VideoVariantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    filePath: string | null
    outputPath: string | null
    status: $Enums.JobStatus | null
    progress: number | null
    errorMessage: string | null
    processingTime: number | null
    fileSize: bigint | null
    duration: number | null
    resolution: string | null
    createdAt: Date | null
    updatedAt: Date | null
    videoJobId: string | null
    cloudStorageUrl: string | null
    cloudProvider: $Enums.CloudProvider | null
  }

  export type VideoVariantCountAggregateOutputType = {
    id: number
    name: number
    filePath: number
    outputPath: number
    status: number
    progress: number
    errorMessage: number
    processingTime: number
    fileSize: number
    duration: number
    resolution: number
    createdAt: number
    updatedAt: number
    variantOptions: number
    videoJobId: number
    cloudStorageUrl: number
    cloudProvider: number
    _all: number
  }


  export type VideoVariantAvgAggregateInputType = {
    progress?: true
    processingTime?: true
    fileSize?: true
    duration?: true
  }

  export type VideoVariantSumAggregateInputType = {
    progress?: true
    processingTime?: true
    fileSize?: true
    duration?: true
  }

  export type VideoVariantMinAggregateInputType = {
    id?: true
    name?: true
    filePath?: true
    outputPath?: true
    status?: true
    progress?: true
    errorMessage?: true
    processingTime?: true
    fileSize?: true
    duration?: true
    resolution?: true
    createdAt?: true
    updatedAt?: true
    videoJobId?: true
    cloudStorageUrl?: true
    cloudProvider?: true
  }

  export type VideoVariantMaxAggregateInputType = {
    id?: true
    name?: true
    filePath?: true
    outputPath?: true
    status?: true
    progress?: true
    errorMessage?: true
    processingTime?: true
    fileSize?: true
    duration?: true
    resolution?: true
    createdAt?: true
    updatedAt?: true
    videoJobId?: true
    cloudStorageUrl?: true
    cloudProvider?: true
  }

  export type VideoVariantCountAggregateInputType = {
    id?: true
    name?: true
    filePath?: true
    outputPath?: true
    status?: true
    progress?: true
    errorMessage?: true
    processingTime?: true
    fileSize?: true
    duration?: true
    resolution?: true
    createdAt?: true
    updatedAt?: true
    variantOptions?: true
    videoJobId?: true
    cloudStorageUrl?: true
    cloudProvider?: true
    _all?: true
  }

  export type VideoVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoVariant to aggregate.
     */
    where?: VideoVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoVariants to fetch.
     */
    orderBy?: VideoVariantOrderByWithRelationInput | VideoVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoVariants
    **/
    _count?: true | VideoVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoVariantMaxAggregateInputType
  }

  export type GetVideoVariantAggregateType<T extends VideoVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoVariant[P]>
      : GetScalarType<T[P], AggregateVideoVariant[P]>
  }




  export type VideoVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoVariantWhereInput
    orderBy?: VideoVariantOrderByWithAggregationInput | VideoVariantOrderByWithAggregationInput[]
    by: VideoVariantScalarFieldEnum[] | VideoVariantScalarFieldEnum
    having?: VideoVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoVariantCountAggregateInputType | true
    _avg?: VideoVariantAvgAggregateInputType
    _sum?: VideoVariantSumAggregateInputType
    _min?: VideoVariantMinAggregateInputType
    _max?: VideoVariantMaxAggregateInputType
  }

  export type VideoVariantGroupByOutputType = {
    id: string
    name: string
    filePath: string
    outputPath: string | null
    status: $Enums.JobStatus
    progress: number
    errorMessage: string | null
    processingTime: number | null
    fileSize: bigint | null
    duration: number | null
    resolution: string | null
    createdAt: Date
    updatedAt: Date
    variantOptions: JsonValue | null
    videoJobId: string
    cloudStorageUrl: string | null
    cloudProvider: $Enums.CloudProvider | null
    _count: VideoVariantCountAggregateOutputType | null
    _avg: VideoVariantAvgAggregateOutputType | null
    _sum: VideoVariantSumAggregateOutputType | null
    _min: VideoVariantMinAggregateOutputType | null
    _max: VideoVariantMaxAggregateOutputType | null
  }

  type GetVideoVariantGroupByPayload<T extends VideoVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoVariantGroupByOutputType[P]>
            : GetScalarType<T[P], VideoVariantGroupByOutputType[P]>
        }
      >
    >


  export type VideoVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    filePath?: boolean
    outputPath?: boolean
    status?: boolean
    progress?: boolean
    errorMessage?: boolean
    processingTime?: boolean
    fileSize?: boolean
    duration?: boolean
    resolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variantOptions?: boolean
    videoJobId?: boolean
    cloudStorageUrl?: boolean
    cloudProvider?: boolean
    videoJob?: boolean | VideoJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoVariant"]>

  export type VideoVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    filePath?: boolean
    outputPath?: boolean
    status?: boolean
    progress?: boolean
    errorMessage?: boolean
    processingTime?: boolean
    fileSize?: boolean
    duration?: boolean
    resolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variantOptions?: boolean
    videoJobId?: boolean
    cloudStorageUrl?: boolean
    cloudProvider?: boolean
    videoJob?: boolean | VideoJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoVariant"]>

  export type VideoVariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    filePath?: boolean
    outputPath?: boolean
    status?: boolean
    progress?: boolean
    errorMessage?: boolean
    processingTime?: boolean
    fileSize?: boolean
    duration?: boolean
    resolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variantOptions?: boolean
    videoJobId?: boolean
    cloudStorageUrl?: boolean
    cloudProvider?: boolean
    videoJob?: boolean | VideoJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoVariant"]>

  export type VideoVariantSelectScalar = {
    id?: boolean
    name?: boolean
    filePath?: boolean
    outputPath?: boolean
    status?: boolean
    progress?: boolean
    errorMessage?: boolean
    processingTime?: boolean
    fileSize?: boolean
    duration?: boolean
    resolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variantOptions?: boolean
    videoJobId?: boolean
    cloudStorageUrl?: boolean
    cloudProvider?: boolean
  }

  export type VideoVariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "filePath" | "outputPath" | "status" | "progress" | "errorMessage" | "processingTime" | "fileSize" | "duration" | "resolution" | "createdAt" | "updatedAt" | "variantOptions" | "videoJobId" | "cloudStorageUrl" | "cloudProvider", ExtArgs["result"]["videoVariant"]>
  export type VideoVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videoJob?: boolean | VideoJobDefaultArgs<ExtArgs>
  }
  export type VideoVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videoJob?: boolean | VideoJobDefaultArgs<ExtArgs>
  }
  export type VideoVariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videoJob?: boolean | VideoJobDefaultArgs<ExtArgs>
  }

  export type $VideoVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoVariant"
    objects: {
      videoJob: Prisma.$VideoJobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      filePath: string
      outputPath: string | null
      status: $Enums.JobStatus
      progress: number
      errorMessage: string | null
      processingTime: number | null
      fileSize: bigint | null
      duration: number | null
      resolution: string | null
      createdAt: Date
      updatedAt: Date
      variantOptions: Prisma.JsonValue | null
      videoJobId: string
      cloudStorageUrl: string | null
      cloudProvider: $Enums.CloudProvider | null
    }, ExtArgs["result"]["videoVariant"]>
    composites: {}
  }

  type VideoVariantGetPayload<S extends boolean | null | undefined | VideoVariantDefaultArgs> = $Result.GetResult<Prisma.$VideoVariantPayload, S>

  type VideoVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoVariantCountAggregateInputType | true
    }

  export interface VideoVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoVariant'], meta: { name: 'VideoVariant' } }
    /**
     * Find zero or one VideoVariant that matches the filter.
     * @param {VideoVariantFindUniqueArgs} args - Arguments to find a VideoVariant
     * @example
     * // Get one VideoVariant
     * const videoVariant = await prisma.videoVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoVariantFindUniqueArgs>(args: SelectSubset<T, VideoVariantFindUniqueArgs<ExtArgs>>): Prisma__VideoVariantClient<$Result.GetResult<Prisma.$VideoVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoVariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoVariantFindUniqueOrThrowArgs} args - Arguments to find a VideoVariant
     * @example
     * // Get one VideoVariant
     * const videoVariant = await prisma.videoVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoVariantClient<$Result.GetResult<Prisma.$VideoVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoVariantFindFirstArgs} args - Arguments to find a VideoVariant
     * @example
     * // Get one VideoVariant
     * const videoVariant = await prisma.videoVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoVariantFindFirstArgs>(args?: SelectSubset<T, VideoVariantFindFirstArgs<ExtArgs>>): Prisma__VideoVariantClient<$Result.GetResult<Prisma.$VideoVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoVariantFindFirstOrThrowArgs} args - Arguments to find a VideoVariant
     * @example
     * // Get one VideoVariant
     * const videoVariant = await prisma.videoVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoVariantClient<$Result.GetResult<Prisma.$VideoVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoVariants
     * const videoVariants = await prisma.videoVariant.findMany()
     * 
     * // Get first 10 VideoVariants
     * const videoVariants = await prisma.videoVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoVariantWithIdOnly = await prisma.videoVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoVariantFindManyArgs>(args?: SelectSubset<T, VideoVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoVariant.
     * @param {VideoVariantCreateArgs} args - Arguments to create a VideoVariant.
     * @example
     * // Create one VideoVariant
     * const VideoVariant = await prisma.videoVariant.create({
     *   data: {
     *     // ... data to create a VideoVariant
     *   }
     * })
     * 
     */
    create<T extends VideoVariantCreateArgs>(args: SelectSubset<T, VideoVariantCreateArgs<ExtArgs>>): Prisma__VideoVariantClient<$Result.GetResult<Prisma.$VideoVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoVariants.
     * @param {VideoVariantCreateManyArgs} args - Arguments to create many VideoVariants.
     * @example
     * // Create many VideoVariants
     * const videoVariant = await prisma.videoVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoVariantCreateManyArgs>(args?: SelectSubset<T, VideoVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoVariants and returns the data saved in the database.
     * @param {VideoVariantCreateManyAndReturnArgs} args - Arguments to create many VideoVariants.
     * @example
     * // Create many VideoVariants
     * const videoVariant = await prisma.videoVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoVariants and only return the `id`
     * const videoVariantWithIdOnly = await prisma.videoVariant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoVariant.
     * @param {VideoVariantDeleteArgs} args - Arguments to delete one VideoVariant.
     * @example
     * // Delete one VideoVariant
     * const VideoVariant = await prisma.videoVariant.delete({
     *   where: {
     *     // ... filter to delete one VideoVariant
     *   }
     * })
     * 
     */
    delete<T extends VideoVariantDeleteArgs>(args: SelectSubset<T, VideoVariantDeleteArgs<ExtArgs>>): Prisma__VideoVariantClient<$Result.GetResult<Prisma.$VideoVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoVariant.
     * @param {VideoVariantUpdateArgs} args - Arguments to update one VideoVariant.
     * @example
     * // Update one VideoVariant
     * const videoVariant = await prisma.videoVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoVariantUpdateArgs>(args: SelectSubset<T, VideoVariantUpdateArgs<ExtArgs>>): Prisma__VideoVariantClient<$Result.GetResult<Prisma.$VideoVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoVariants.
     * @param {VideoVariantDeleteManyArgs} args - Arguments to filter VideoVariants to delete.
     * @example
     * // Delete a few VideoVariants
     * const { count } = await prisma.videoVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoVariantDeleteManyArgs>(args?: SelectSubset<T, VideoVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoVariants
     * const videoVariant = await prisma.videoVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoVariantUpdateManyArgs>(args: SelectSubset<T, VideoVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoVariants and returns the data updated in the database.
     * @param {VideoVariantUpdateManyAndReturnArgs} args - Arguments to update many VideoVariants.
     * @example
     * // Update many VideoVariants
     * const videoVariant = await prisma.videoVariant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoVariants and only return the `id`
     * const videoVariantWithIdOnly = await prisma.videoVariant.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoVariantUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoVariant.
     * @param {VideoVariantUpsertArgs} args - Arguments to update or create a VideoVariant.
     * @example
     * // Update or create a VideoVariant
     * const videoVariant = await prisma.videoVariant.upsert({
     *   create: {
     *     // ... data to create a VideoVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoVariant we want to update
     *   }
     * })
     */
    upsert<T extends VideoVariantUpsertArgs>(args: SelectSubset<T, VideoVariantUpsertArgs<ExtArgs>>): Prisma__VideoVariantClient<$Result.GetResult<Prisma.$VideoVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoVariantCountArgs} args - Arguments to filter VideoVariants to count.
     * @example
     * // Count the number of VideoVariants
     * const count = await prisma.videoVariant.count({
     *   where: {
     *     // ... the filter for the VideoVariants we want to count
     *   }
     * })
    **/
    count<T extends VideoVariantCountArgs>(
      args?: Subset<T, VideoVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoVariantAggregateArgs>(args: Subset<T, VideoVariantAggregateArgs>): Prisma.PrismaPromise<GetVideoVariantAggregateType<T>>

    /**
     * Group by VideoVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoVariantGroupByArgs} args - Group by arguments.
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
      T extends VideoVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoVariantGroupByArgs['orderBy'] }
        : { orderBy?: VideoVariantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoVariant model
   */
  readonly fields: VideoVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videoJob<T extends VideoJobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoJobDefaultArgs<ExtArgs>>): Prisma__VideoJobClient<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoVariant model
   */
  interface VideoVariantFieldRefs {
    readonly id: FieldRef<"VideoVariant", 'String'>
    readonly name: FieldRef<"VideoVariant", 'String'>
    readonly filePath: FieldRef<"VideoVariant", 'String'>
    readonly outputPath: FieldRef<"VideoVariant", 'String'>
    readonly status: FieldRef<"VideoVariant", 'JobStatus'>
    readonly progress: FieldRef<"VideoVariant", 'Float'>
    readonly errorMessage: FieldRef<"VideoVariant", 'String'>
    readonly processingTime: FieldRef<"VideoVariant", 'Int'>
    readonly fileSize: FieldRef<"VideoVariant", 'BigInt'>
    readonly duration: FieldRef<"VideoVariant", 'Float'>
    readonly resolution: FieldRef<"VideoVariant", 'String'>
    readonly createdAt: FieldRef<"VideoVariant", 'DateTime'>
    readonly updatedAt: FieldRef<"VideoVariant", 'DateTime'>
    readonly variantOptions: FieldRef<"VideoVariant", 'Json'>
    readonly videoJobId: FieldRef<"VideoVariant", 'String'>
    readonly cloudStorageUrl: FieldRef<"VideoVariant", 'String'>
    readonly cloudProvider: FieldRef<"VideoVariant", 'CloudProvider'>
  }
    

  // Custom InputTypes
  /**
   * VideoVariant findUnique
   */
  export type VideoVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoVariant
     */
    select?: VideoVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoVariant
     */
    omit?: VideoVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoVariantInclude<ExtArgs> | null
    /**
     * Filter, which VideoVariant to fetch.
     */
    where: VideoVariantWhereUniqueInput
  }

  /**
   * VideoVariant findUniqueOrThrow
   */
  export type VideoVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoVariant
     */
    select?: VideoVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoVariant
     */
    omit?: VideoVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoVariantInclude<ExtArgs> | null
    /**
     * Filter, which VideoVariant to fetch.
     */
    where: VideoVariantWhereUniqueInput
  }

  /**
   * VideoVariant findFirst
   */
  export type VideoVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoVariant
     */
    select?: VideoVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoVariant
     */
    omit?: VideoVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoVariantInclude<ExtArgs> | null
    /**
     * Filter, which VideoVariant to fetch.
     */
    where?: VideoVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoVariants to fetch.
     */
    orderBy?: VideoVariantOrderByWithRelationInput | VideoVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoVariants.
     */
    cursor?: VideoVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoVariants.
     */
    distinct?: VideoVariantScalarFieldEnum | VideoVariantScalarFieldEnum[]
  }

  /**
   * VideoVariant findFirstOrThrow
   */
  export type VideoVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoVariant
     */
    select?: VideoVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoVariant
     */
    omit?: VideoVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoVariantInclude<ExtArgs> | null
    /**
     * Filter, which VideoVariant to fetch.
     */
    where?: VideoVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoVariants to fetch.
     */
    orderBy?: VideoVariantOrderByWithRelationInput | VideoVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoVariants.
     */
    cursor?: VideoVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoVariants.
     */
    distinct?: VideoVariantScalarFieldEnum | VideoVariantScalarFieldEnum[]
  }

  /**
   * VideoVariant findMany
   */
  export type VideoVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoVariant
     */
    select?: VideoVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoVariant
     */
    omit?: VideoVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoVariantInclude<ExtArgs> | null
    /**
     * Filter, which VideoVariants to fetch.
     */
    where?: VideoVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoVariants to fetch.
     */
    orderBy?: VideoVariantOrderByWithRelationInput | VideoVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoVariants.
     */
    cursor?: VideoVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoVariants.
     */
    skip?: number
    distinct?: VideoVariantScalarFieldEnum | VideoVariantScalarFieldEnum[]
  }

  /**
   * VideoVariant create
   */
  export type VideoVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoVariant
     */
    select?: VideoVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoVariant
     */
    omit?: VideoVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoVariant.
     */
    data: XOR<VideoVariantCreateInput, VideoVariantUncheckedCreateInput>
  }

  /**
   * VideoVariant createMany
   */
  export type VideoVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoVariants.
     */
    data: VideoVariantCreateManyInput | VideoVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoVariant createManyAndReturn
   */
  export type VideoVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoVariant
     */
    select?: VideoVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoVariant
     */
    omit?: VideoVariantOmit<ExtArgs> | null
    /**
     * The data used to create many VideoVariants.
     */
    data: VideoVariantCreateManyInput | VideoVariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoVariant update
   */
  export type VideoVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoVariant
     */
    select?: VideoVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoVariant
     */
    omit?: VideoVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoVariant.
     */
    data: XOR<VideoVariantUpdateInput, VideoVariantUncheckedUpdateInput>
    /**
     * Choose, which VideoVariant to update.
     */
    where: VideoVariantWhereUniqueInput
  }

  /**
   * VideoVariant updateMany
   */
  export type VideoVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoVariants.
     */
    data: XOR<VideoVariantUpdateManyMutationInput, VideoVariantUncheckedUpdateManyInput>
    /**
     * Filter which VideoVariants to update
     */
    where?: VideoVariantWhereInput
    /**
     * Limit how many VideoVariants to update.
     */
    limit?: number
  }

  /**
   * VideoVariant updateManyAndReturn
   */
  export type VideoVariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoVariant
     */
    select?: VideoVariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoVariant
     */
    omit?: VideoVariantOmit<ExtArgs> | null
    /**
     * The data used to update VideoVariants.
     */
    data: XOR<VideoVariantUpdateManyMutationInput, VideoVariantUncheckedUpdateManyInput>
    /**
     * Filter which VideoVariants to update
     */
    where?: VideoVariantWhereInput
    /**
     * Limit how many VideoVariants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoVariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoVariant upsert
   */
  export type VideoVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoVariant
     */
    select?: VideoVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoVariant
     */
    omit?: VideoVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoVariant to update in case it exists.
     */
    where: VideoVariantWhereUniqueInput
    /**
     * In case the VideoVariant found by the `where` argument doesn't exist, create a new VideoVariant with this data.
     */
    create: XOR<VideoVariantCreateInput, VideoVariantUncheckedCreateInput>
    /**
     * In case the VideoVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoVariantUpdateInput, VideoVariantUncheckedUpdateInput>
  }

  /**
   * VideoVariant delete
   */
  export type VideoVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoVariant
     */
    select?: VideoVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoVariant
     */
    omit?: VideoVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoVariantInclude<ExtArgs> | null
    /**
     * Filter which VideoVariant to delete.
     */
    where: VideoVariantWhereUniqueInput
  }

  /**
   * VideoVariant deleteMany
   */
  export type VideoVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoVariants to delete
     */
    where?: VideoVariantWhereInput
    /**
     * Limit how many VideoVariants to delete.
     */
    limit?: number
  }

  /**
   * VideoVariant without action
   */
  export type VideoVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoVariant
     */
    select?: VideoVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoVariant
     */
    omit?: VideoVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoVariantInclude<ExtArgs> | null
  }


  /**
   * Model BatchJob
   */

  export type AggregateBatchJob = {
    _count: BatchJobCountAggregateOutputType | null
    _avg: BatchJobAvgAggregateOutputType | null
    _sum: BatchJobSumAggregateOutputType | null
    _min: BatchJobMinAggregateOutputType | null
    _max: BatchJobMaxAggregateOutputType | null
  }

  export type BatchJobAvgAggregateOutputType = {
    totalJobs: number | null
    completedJobs: number | null
    failedJobs: number | null
    progress: number | null
  }

  export type BatchJobSumAggregateOutputType = {
    totalJobs: number | null
    completedJobs: number | null
    failedJobs: number | null
    progress: number | null
  }

  export type BatchJobMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.BatchStatus | null
    totalJobs: number | null
    completedJobs: number | null
    failedJobs: number | null
    progress: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type BatchJobMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.BatchStatus | null
    totalJobs: number | null
    completedJobs: number | null
    failedJobs: number | null
    progress: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type BatchJobCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    totalJobs: number
    completedJobs: number
    failedJobs: number
    progress: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    batchOptions: number
    userId: number
    _all: number
  }


  export type BatchJobAvgAggregateInputType = {
    totalJobs?: true
    completedJobs?: true
    failedJobs?: true
    progress?: true
  }

  export type BatchJobSumAggregateInputType = {
    totalJobs?: true
    completedJobs?: true
    failedJobs?: true
    progress?: true
  }

  export type BatchJobMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    totalJobs?: true
    completedJobs?: true
    failedJobs?: true
    progress?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BatchJobMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    totalJobs?: true
    completedJobs?: true
    failedJobs?: true
    progress?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BatchJobCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    totalJobs?: true
    completedJobs?: true
    failedJobs?: true
    progress?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    batchOptions?: true
    userId?: true
    _all?: true
  }

  export type BatchJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BatchJob to aggregate.
     */
    where?: BatchJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchJobs to fetch.
     */
    orderBy?: BatchJobOrderByWithRelationInput | BatchJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BatchJobs
    **/
    _count?: true | BatchJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BatchJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BatchJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchJobMaxAggregateInputType
  }

  export type GetBatchJobAggregateType<T extends BatchJobAggregateArgs> = {
        [P in keyof T & keyof AggregateBatchJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatchJob[P]>
      : GetScalarType<T[P], AggregateBatchJob[P]>
  }




  export type BatchJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchJobWhereInput
    orderBy?: BatchJobOrderByWithAggregationInput | BatchJobOrderByWithAggregationInput[]
    by: BatchJobScalarFieldEnum[] | BatchJobScalarFieldEnum
    having?: BatchJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchJobCountAggregateInputType | true
    _avg?: BatchJobAvgAggregateInputType
    _sum?: BatchJobSumAggregateInputType
    _min?: BatchJobMinAggregateInputType
    _max?: BatchJobMaxAggregateInputType
  }

  export type BatchJobGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: $Enums.BatchStatus
    totalJobs: number
    completedJobs: number
    failedJobs: number
    progress: number
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    batchOptions: JsonValue | null
    userId: string | null
    _count: BatchJobCountAggregateOutputType | null
    _avg: BatchJobAvgAggregateOutputType | null
    _sum: BatchJobSumAggregateOutputType | null
    _min: BatchJobMinAggregateOutputType | null
    _max: BatchJobMaxAggregateOutputType | null
  }

  type GetBatchJobGroupByPayload<T extends BatchJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchJobGroupByOutputType[P]>
            : GetScalarType<T[P], BatchJobGroupByOutputType[P]>
        }
      >
    >


  export type BatchJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    totalJobs?: boolean
    completedJobs?: boolean
    failedJobs?: boolean
    progress?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchOptions?: boolean
    userId?: boolean
    user?: boolean | BatchJob$userArgs<ExtArgs>
    jobs?: boolean | BatchJob$jobsArgs<ExtArgs>
    _count?: boolean | BatchJobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batchJob"]>

  export type BatchJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    totalJobs?: boolean
    completedJobs?: boolean
    failedJobs?: boolean
    progress?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchOptions?: boolean
    userId?: boolean
    user?: boolean | BatchJob$userArgs<ExtArgs>
  }, ExtArgs["result"]["batchJob"]>

  export type BatchJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    totalJobs?: boolean
    completedJobs?: boolean
    failedJobs?: boolean
    progress?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchOptions?: boolean
    userId?: boolean
    user?: boolean | BatchJob$userArgs<ExtArgs>
  }, ExtArgs["result"]["batchJob"]>

  export type BatchJobSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    totalJobs?: boolean
    completedJobs?: boolean
    failedJobs?: boolean
    progress?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchOptions?: boolean
    userId?: boolean
  }

  export type BatchJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "totalJobs" | "completedJobs" | "failedJobs" | "progress" | "startedAt" | "completedAt" | "createdAt" | "updatedAt" | "batchOptions" | "userId", ExtArgs["result"]["batchJob"]>
  export type BatchJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BatchJob$userArgs<ExtArgs>
    jobs?: boolean | BatchJob$jobsArgs<ExtArgs>
    _count?: boolean | BatchJobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BatchJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BatchJob$userArgs<ExtArgs>
  }
  export type BatchJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BatchJob$userArgs<ExtArgs>
  }

  export type $BatchJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BatchJob"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      jobs: Prisma.$VideoJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: $Enums.BatchStatus
      totalJobs: number
      completedJobs: number
      failedJobs: number
      progress: number
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
      batchOptions: Prisma.JsonValue | null
      userId: string | null
    }, ExtArgs["result"]["batchJob"]>
    composites: {}
  }

  type BatchJobGetPayload<S extends boolean | null | undefined | BatchJobDefaultArgs> = $Result.GetResult<Prisma.$BatchJobPayload, S>

  type BatchJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchJobCountAggregateInputType | true
    }

  export interface BatchJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BatchJob'], meta: { name: 'BatchJob' } }
    /**
     * Find zero or one BatchJob that matches the filter.
     * @param {BatchJobFindUniqueArgs} args - Arguments to find a BatchJob
     * @example
     * // Get one BatchJob
     * const batchJob = await prisma.batchJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchJobFindUniqueArgs>(args: SelectSubset<T, BatchJobFindUniqueArgs<ExtArgs>>): Prisma__BatchJobClient<$Result.GetResult<Prisma.$BatchJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BatchJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchJobFindUniqueOrThrowArgs} args - Arguments to find a BatchJob
     * @example
     * // Get one BatchJob
     * const batchJob = await prisma.batchJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchJobFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchJobClient<$Result.GetResult<Prisma.$BatchJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BatchJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchJobFindFirstArgs} args - Arguments to find a BatchJob
     * @example
     * // Get one BatchJob
     * const batchJob = await prisma.batchJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchJobFindFirstArgs>(args?: SelectSubset<T, BatchJobFindFirstArgs<ExtArgs>>): Prisma__BatchJobClient<$Result.GetResult<Prisma.$BatchJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BatchJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchJobFindFirstOrThrowArgs} args - Arguments to find a BatchJob
     * @example
     * // Get one BatchJob
     * const batchJob = await prisma.batchJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchJobFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchJobClient<$Result.GetResult<Prisma.$BatchJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BatchJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BatchJobs
     * const batchJobs = await prisma.batchJob.findMany()
     * 
     * // Get first 10 BatchJobs
     * const batchJobs = await prisma.batchJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchJobWithIdOnly = await prisma.batchJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchJobFindManyArgs>(args?: SelectSubset<T, BatchJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BatchJob.
     * @param {BatchJobCreateArgs} args - Arguments to create a BatchJob.
     * @example
     * // Create one BatchJob
     * const BatchJob = await prisma.batchJob.create({
     *   data: {
     *     // ... data to create a BatchJob
     *   }
     * })
     * 
     */
    create<T extends BatchJobCreateArgs>(args: SelectSubset<T, BatchJobCreateArgs<ExtArgs>>): Prisma__BatchJobClient<$Result.GetResult<Prisma.$BatchJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BatchJobs.
     * @param {BatchJobCreateManyArgs} args - Arguments to create many BatchJobs.
     * @example
     * // Create many BatchJobs
     * const batchJob = await prisma.batchJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchJobCreateManyArgs>(args?: SelectSubset<T, BatchJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BatchJobs and returns the data saved in the database.
     * @param {BatchJobCreateManyAndReturnArgs} args - Arguments to create many BatchJobs.
     * @example
     * // Create many BatchJobs
     * const batchJob = await prisma.batchJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BatchJobs and only return the `id`
     * const batchJobWithIdOnly = await prisma.batchJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BatchJobCreateManyAndReturnArgs>(args?: SelectSubset<T, BatchJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BatchJob.
     * @param {BatchJobDeleteArgs} args - Arguments to delete one BatchJob.
     * @example
     * // Delete one BatchJob
     * const BatchJob = await prisma.batchJob.delete({
     *   where: {
     *     // ... filter to delete one BatchJob
     *   }
     * })
     * 
     */
    delete<T extends BatchJobDeleteArgs>(args: SelectSubset<T, BatchJobDeleteArgs<ExtArgs>>): Prisma__BatchJobClient<$Result.GetResult<Prisma.$BatchJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BatchJob.
     * @param {BatchJobUpdateArgs} args - Arguments to update one BatchJob.
     * @example
     * // Update one BatchJob
     * const batchJob = await prisma.batchJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchJobUpdateArgs>(args: SelectSubset<T, BatchJobUpdateArgs<ExtArgs>>): Prisma__BatchJobClient<$Result.GetResult<Prisma.$BatchJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BatchJobs.
     * @param {BatchJobDeleteManyArgs} args - Arguments to filter BatchJobs to delete.
     * @example
     * // Delete a few BatchJobs
     * const { count } = await prisma.batchJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchJobDeleteManyArgs>(args?: SelectSubset<T, BatchJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BatchJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BatchJobs
     * const batchJob = await prisma.batchJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchJobUpdateManyArgs>(args: SelectSubset<T, BatchJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BatchJobs and returns the data updated in the database.
     * @param {BatchJobUpdateManyAndReturnArgs} args - Arguments to update many BatchJobs.
     * @example
     * // Update many BatchJobs
     * const batchJob = await prisma.batchJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BatchJobs and only return the `id`
     * const batchJobWithIdOnly = await prisma.batchJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends BatchJobUpdateManyAndReturnArgs>(args: SelectSubset<T, BatchJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BatchJob.
     * @param {BatchJobUpsertArgs} args - Arguments to update or create a BatchJob.
     * @example
     * // Update or create a BatchJob
     * const batchJob = await prisma.batchJob.upsert({
     *   create: {
     *     // ... data to create a BatchJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BatchJob we want to update
     *   }
     * })
     */
    upsert<T extends BatchJobUpsertArgs>(args: SelectSubset<T, BatchJobUpsertArgs<ExtArgs>>): Prisma__BatchJobClient<$Result.GetResult<Prisma.$BatchJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BatchJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchJobCountArgs} args - Arguments to filter BatchJobs to count.
     * @example
     * // Count the number of BatchJobs
     * const count = await prisma.batchJob.count({
     *   where: {
     *     // ... the filter for the BatchJobs we want to count
     *   }
     * })
    **/
    count<T extends BatchJobCountArgs>(
      args?: Subset<T, BatchJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BatchJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BatchJobAggregateArgs>(args: Subset<T, BatchJobAggregateArgs>): Prisma.PrismaPromise<GetBatchJobAggregateType<T>>

    /**
     * Group by BatchJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchJobGroupByArgs} args - Group by arguments.
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
      T extends BatchJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchJobGroupByArgs['orderBy'] }
        : { orderBy?: BatchJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BatchJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BatchJob model
   */
  readonly fields: BatchJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BatchJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends BatchJob$userArgs<ExtArgs> = {}>(args?: Subset<T, BatchJob$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    jobs<T extends BatchJob$jobsArgs<ExtArgs> = {}>(args?: Subset<T, BatchJob$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BatchJob model
   */
  interface BatchJobFieldRefs {
    readonly id: FieldRef<"BatchJob", 'String'>
    readonly name: FieldRef<"BatchJob", 'String'>
    readonly description: FieldRef<"BatchJob", 'String'>
    readonly status: FieldRef<"BatchJob", 'BatchStatus'>
    readonly totalJobs: FieldRef<"BatchJob", 'Int'>
    readonly completedJobs: FieldRef<"BatchJob", 'Int'>
    readonly failedJobs: FieldRef<"BatchJob", 'Int'>
    readonly progress: FieldRef<"BatchJob", 'Float'>
    readonly startedAt: FieldRef<"BatchJob", 'DateTime'>
    readonly completedAt: FieldRef<"BatchJob", 'DateTime'>
    readonly createdAt: FieldRef<"BatchJob", 'DateTime'>
    readonly updatedAt: FieldRef<"BatchJob", 'DateTime'>
    readonly batchOptions: FieldRef<"BatchJob", 'Json'>
    readonly userId: FieldRef<"BatchJob", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BatchJob findUnique
   */
  export type BatchJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJob
     */
    select?: BatchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchJob
     */
    omit?: BatchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchJobInclude<ExtArgs> | null
    /**
     * Filter, which BatchJob to fetch.
     */
    where: BatchJobWhereUniqueInput
  }

  /**
   * BatchJob findUniqueOrThrow
   */
  export type BatchJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJob
     */
    select?: BatchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchJob
     */
    omit?: BatchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchJobInclude<ExtArgs> | null
    /**
     * Filter, which BatchJob to fetch.
     */
    where: BatchJobWhereUniqueInput
  }

  /**
   * BatchJob findFirst
   */
  export type BatchJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJob
     */
    select?: BatchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchJob
     */
    omit?: BatchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchJobInclude<ExtArgs> | null
    /**
     * Filter, which BatchJob to fetch.
     */
    where?: BatchJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchJobs to fetch.
     */
    orderBy?: BatchJobOrderByWithRelationInput | BatchJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BatchJobs.
     */
    cursor?: BatchJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BatchJobs.
     */
    distinct?: BatchJobScalarFieldEnum | BatchJobScalarFieldEnum[]
  }

  /**
   * BatchJob findFirstOrThrow
   */
  export type BatchJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJob
     */
    select?: BatchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchJob
     */
    omit?: BatchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchJobInclude<ExtArgs> | null
    /**
     * Filter, which BatchJob to fetch.
     */
    where?: BatchJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchJobs to fetch.
     */
    orderBy?: BatchJobOrderByWithRelationInput | BatchJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BatchJobs.
     */
    cursor?: BatchJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BatchJobs.
     */
    distinct?: BatchJobScalarFieldEnum | BatchJobScalarFieldEnum[]
  }

  /**
   * BatchJob findMany
   */
  export type BatchJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJob
     */
    select?: BatchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchJob
     */
    omit?: BatchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchJobInclude<ExtArgs> | null
    /**
     * Filter, which BatchJobs to fetch.
     */
    where?: BatchJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchJobs to fetch.
     */
    orderBy?: BatchJobOrderByWithRelationInput | BatchJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BatchJobs.
     */
    cursor?: BatchJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchJobs.
     */
    skip?: number
    distinct?: BatchJobScalarFieldEnum | BatchJobScalarFieldEnum[]
  }

  /**
   * BatchJob create
   */
  export type BatchJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJob
     */
    select?: BatchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchJob
     */
    omit?: BatchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchJobInclude<ExtArgs> | null
    /**
     * The data needed to create a BatchJob.
     */
    data: XOR<BatchJobCreateInput, BatchJobUncheckedCreateInput>
  }

  /**
   * BatchJob createMany
   */
  export type BatchJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BatchJobs.
     */
    data: BatchJobCreateManyInput | BatchJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BatchJob createManyAndReturn
   */
  export type BatchJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJob
     */
    select?: BatchJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BatchJob
     */
    omit?: BatchJobOmit<ExtArgs> | null
    /**
     * The data used to create many BatchJobs.
     */
    data: BatchJobCreateManyInput | BatchJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BatchJob update
   */
  export type BatchJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJob
     */
    select?: BatchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchJob
     */
    omit?: BatchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchJobInclude<ExtArgs> | null
    /**
     * The data needed to update a BatchJob.
     */
    data: XOR<BatchJobUpdateInput, BatchJobUncheckedUpdateInput>
    /**
     * Choose, which BatchJob to update.
     */
    where: BatchJobWhereUniqueInput
  }

  /**
   * BatchJob updateMany
   */
  export type BatchJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BatchJobs.
     */
    data: XOR<BatchJobUpdateManyMutationInput, BatchJobUncheckedUpdateManyInput>
    /**
     * Filter which BatchJobs to update
     */
    where?: BatchJobWhereInput
    /**
     * Limit how many BatchJobs to update.
     */
    limit?: number
  }

  /**
   * BatchJob updateManyAndReturn
   */
  export type BatchJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJob
     */
    select?: BatchJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BatchJob
     */
    omit?: BatchJobOmit<ExtArgs> | null
    /**
     * The data used to update BatchJobs.
     */
    data: XOR<BatchJobUpdateManyMutationInput, BatchJobUncheckedUpdateManyInput>
    /**
     * Filter which BatchJobs to update
     */
    where?: BatchJobWhereInput
    /**
     * Limit how many BatchJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BatchJob upsert
   */
  export type BatchJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJob
     */
    select?: BatchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchJob
     */
    omit?: BatchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchJobInclude<ExtArgs> | null
    /**
     * The filter to search for the BatchJob to update in case it exists.
     */
    where: BatchJobWhereUniqueInput
    /**
     * In case the BatchJob found by the `where` argument doesn't exist, create a new BatchJob with this data.
     */
    create: XOR<BatchJobCreateInput, BatchJobUncheckedCreateInput>
    /**
     * In case the BatchJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchJobUpdateInput, BatchJobUncheckedUpdateInput>
  }

  /**
   * BatchJob delete
   */
  export type BatchJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJob
     */
    select?: BatchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchJob
     */
    omit?: BatchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchJobInclude<ExtArgs> | null
    /**
     * Filter which BatchJob to delete.
     */
    where: BatchJobWhereUniqueInput
  }

  /**
   * BatchJob deleteMany
   */
  export type BatchJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BatchJobs to delete
     */
    where?: BatchJobWhereInput
    /**
     * Limit how many BatchJobs to delete.
     */
    limit?: number
  }

  /**
   * BatchJob.user
   */
  export type BatchJob$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * BatchJob.jobs
   */
  export type BatchJob$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoJob
     */
    select?: VideoJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoJob
     */
    omit?: VideoJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoJobInclude<ExtArgs> | null
    where?: VideoJobWhereInput
    orderBy?: VideoJobOrderByWithRelationInput | VideoJobOrderByWithRelationInput[]
    cursor?: VideoJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoJobScalarFieldEnum | VideoJobScalarFieldEnum[]
  }

  /**
   * BatchJob without action
   */
  export type BatchJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchJob
     */
    select?: BatchJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchJob
     */
    omit?: BatchJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchJobInclude<ExtArgs> | null
  }


  /**
   * Model ProcessingTemplate
   */

  export type AggregateProcessingTemplate = {
    _count: ProcessingTemplateCountAggregateOutputType | null
    _avg: ProcessingTemplateAvgAggregateOutputType | null
    _sum: ProcessingTemplateSumAggregateOutputType | null
    _min: ProcessingTemplateMinAggregateOutputType | null
    _max: ProcessingTemplateMaxAggregateOutputType | null
  }

  export type ProcessingTemplateAvgAggregateOutputType = {
    usageCount: number | null
  }

  export type ProcessingTemplateSumAggregateOutputType = {
    usageCount: number | null
  }

  export type ProcessingTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPublic: boolean | null
    usageCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type ProcessingTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPublic: boolean | null
    usageCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type ProcessingTemplateCountAggregateOutputType = {
    id: number
    name: number
    description: number
    templateOptions: number
    isPublic: number
    usageCount: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type ProcessingTemplateAvgAggregateInputType = {
    usageCount?: true
  }

  export type ProcessingTemplateSumAggregateInputType = {
    usageCount?: true
  }

  export type ProcessingTemplateMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublic?: true
    usageCount?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type ProcessingTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublic?: true
    usageCount?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type ProcessingTemplateCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    templateOptions?: true
    isPublic?: true
    usageCount?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type ProcessingTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessingTemplate to aggregate.
     */
    where?: ProcessingTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessingTemplates to fetch.
     */
    orderBy?: ProcessingTemplateOrderByWithRelationInput | ProcessingTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessingTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessingTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessingTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcessingTemplates
    **/
    _count?: true | ProcessingTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcessingTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcessingTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessingTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessingTemplateMaxAggregateInputType
  }

  export type GetProcessingTemplateAggregateType<T extends ProcessingTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateProcessingTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessingTemplate[P]>
      : GetScalarType<T[P], AggregateProcessingTemplate[P]>
  }




  export type ProcessingTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessingTemplateWhereInput
    orderBy?: ProcessingTemplateOrderByWithAggregationInput | ProcessingTemplateOrderByWithAggregationInput[]
    by: ProcessingTemplateScalarFieldEnum[] | ProcessingTemplateScalarFieldEnum
    having?: ProcessingTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessingTemplateCountAggregateInputType | true
    _avg?: ProcessingTemplateAvgAggregateInputType
    _sum?: ProcessingTemplateSumAggregateInputType
    _min?: ProcessingTemplateMinAggregateInputType
    _max?: ProcessingTemplateMaxAggregateInputType
  }

  export type ProcessingTemplateGroupByOutputType = {
    id: string
    name: string
    description: string | null
    templateOptions: JsonValue
    isPublic: boolean
    usageCount: number
    createdAt: Date
    updatedAt: Date
    createdById: string | null
    _count: ProcessingTemplateCountAggregateOutputType | null
    _avg: ProcessingTemplateAvgAggregateOutputType | null
    _sum: ProcessingTemplateSumAggregateOutputType | null
    _min: ProcessingTemplateMinAggregateOutputType | null
    _max: ProcessingTemplateMaxAggregateOutputType | null
  }

  type GetProcessingTemplateGroupByPayload<T extends ProcessingTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessingTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessingTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessingTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessingTemplateGroupByOutputType[P]>
        }
      >
    >


  export type ProcessingTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    templateOptions?: boolean
    isPublic?: boolean
    usageCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | ProcessingTemplate$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["processingTemplate"]>

  export type ProcessingTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    templateOptions?: boolean
    isPublic?: boolean
    usageCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | ProcessingTemplate$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["processingTemplate"]>

  export type ProcessingTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    templateOptions?: boolean
    isPublic?: boolean
    usageCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | ProcessingTemplate$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["processingTemplate"]>

  export type ProcessingTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    templateOptions?: boolean
    isPublic?: boolean
    usageCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type ProcessingTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "templateOptions" | "isPublic" | "usageCount" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["processingTemplate"]>
  export type ProcessingTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | ProcessingTemplate$createdByArgs<ExtArgs>
  }
  export type ProcessingTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | ProcessingTemplate$createdByArgs<ExtArgs>
  }
  export type ProcessingTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | ProcessingTemplate$createdByArgs<ExtArgs>
  }

  export type $ProcessingTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcessingTemplate"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      templateOptions: Prisma.JsonValue
      isPublic: boolean
      usageCount: number
      createdAt: Date
      updatedAt: Date
      createdById: string | null
    }, ExtArgs["result"]["processingTemplate"]>
    composites: {}
  }

  type ProcessingTemplateGetPayload<S extends boolean | null | undefined | ProcessingTemplateDefaultArgs> = $Result.GetResult<Prisma.$ProcessingTemplatePayload, S>

  type ProcessingTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessingTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessingTemplateCountAggregateInputType | true
    }

  export interface ProcessingTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcessingTemplate'], meta: { name: 'ProcessingTemplate' } }
    /**
     * Find zero or one ProcessingTemplate that matches the filter.
     * @param {ProcessingTemplateFindUniqueArgs} args - Arguments to find a ProcessingTemplate
     * @example
     * // Get one ProcessingTemplate
     * const processingTemplate = await prisma.processingTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessingTemplateFindUniqueArgs>(args: SelectSubset<T, ProcessingTemplateFindUniqueArgs<ExtArgs>>): Prisma__ProcessingTemplateClient<$Result.GetResult<Prisma.$ProcessingTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcessingTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessingTemplateFindUniqueOrThrowArgs} args - Arguments to find a ProcessingTemplate
     * @example
     * // Get one ProcessingTemplate
     * const processingTemplate = await prisma.processingTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessingTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessingTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessingTemplateClient<$Result.GetResult<Prisma.$ProcessingTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessingTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingTemplateFindFirstArgs} args - Arguments to find a ProcessingTemplate
     * @example
     * // Get one ProcessingTemplate
     * const processingTemplate = await prisma.processingTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessingTemplateFindFirstArgs>(args?: SelectSubset<T, ProcessingTemplateFindFirstArgs<ExtArgs>>): Prisma__ProcessingTemplateClient<$Result.GetResult<Prisma.$ProcessingTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessingTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingTemplateFindFirstOrThrowArgs} args - Arguments to find a ProcessingTemplate
     * @example
     * // Get one ProcessingTemplate
     * const processingTemplate = await prisma.processingTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessingTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessingTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessingTemplateClient<$Result.GetResult<Prisma.$ProcessingTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcessingTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessingTemplates
     * const processingTemplates = await prisma.processingTemplate.findMany()
     * 
     * // Get first 10 ProcessingTemplates
     * const processingTemplates = await prisma.processingTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const processingTemplateWithIdOnly = await prisma.processingTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcessingTemplateFindManyArgs>(args?: SelectSubset<T, ProcessingTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessingTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcessingTemplate.
     * @param {ProcessingTemplateCreateArgs} args - Arguments to create a ProcessingTemplate.
     * @example
     * // Create one ProcessingTemplate
     * const ProcessingTemplate = await prisma.processingTemplate.create({
     *   data: {
     *     // ... data to create a ProcessingTemplate
     *   }
     * })
     * 
     */
    create<T extends ProcessingTemplateCreateArgs>(args: SelectSubset<T, ProcessingTemplateCreateArgs<ExtArgs>>): Prisma__ProcessingTemplateClient<$Result.GetResult<Prisma.$ProcessingTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcessingTemplates.
     * @param {ProcessingTemplateCreateManyArgs} args - Arguments to create many ProcessingTemplates.
     * @example
     * // Create many ProcessingTemplates
     * const processingTemplate = await prisma.processingTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessingTemplateCreateManyArgs>(args?: SelectSubset<T, ProcessingTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProcessingTemplates and returns the data saved in the database.
     * @param {ProcessingTemplateCreateManyAndReturnArgs} args - Arguments to create many ProcessingTemplates.
     * @example
     * // Create many ProcessingTemplates
     * const processingTemplate = await prisma.processingTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProcessingTemplates and only return the `id`
     * const processingTemplateWithIdOnly = await prisma.processingTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessingTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessingTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessingTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProcessingTemplate.
     * @param {ProcessingTemplateDeleteArgs} args - Arguments to delete one ProcessingTemplate.
     * @example
     * // Delete one ProcessingTemplate
     * const ProcessingTemplate = await prisma.processingTemplate.delete({
     *   where: {
     *     // ... filter to delete one ProcessingTemplate
     *   }
     * })
     * 
     */
    delete<T extends ProcessingTemplateDeleteArgs>(args: SelectSubset<T, ProcessingTemplateDeleteArgs<ExtArgs>>): Prisma__ProcessingTemplateClient<$Result.GetResult<Prisma.$ProcessingTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcessingTemplate.
     * @param {ProcessingTemplateUpdateArgs} args - Arguments to update one ProcessingTemplate.
     * @example
     * // Update one ProcessingTemplate
     * const processingTemplate = await prisma.processingTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessingTemplateUpdateArgs>(args: SelectSubset<T, ProcessingTemplateUpdateArgs<ExtArgs>>): Prisma__ProcessingTemplateClient<$Result.GetResult<Prisma.$ProcessingTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcessingTemplates.
     * @param {ProcessingTemplateDeleteManyArgs} args - Arguments to filter ProcessingTemplates to delete.
     * @example
     * // Delete a few ProcessingTemplates
     * const { count } = await prisma.processingTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessingTemplateDeleteManyArgs>(args?: SelectSubset<T, ProcessingTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessingTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessingTemplates
     * const processingTemplate = await prisma.processingTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessingTemplateUpdateManyArgs>(args: SelectSubset<T, ProcessingTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessingTemplates and returns the data updated in the database.
     * @param {ProcessingTemplateUpdateManyAndReturnArgs} args - Arguments to update many ProcessingTemplates.
     * @example
     * // Update many ProcessingTemplates
     * const processingTemplate = await prisma.processingTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProcessingTemplates and only return the `id`
     * const processingTemplateWithIdOnly = await prisma.processingTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessingTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessingTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessingTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProcessingTemplate.
     * @param {ProcessingTemplateUpsertArgs} args - Arguments to update or create a ProcessingTemplate.
     * @example
     * // Update or create a ProcessingTemplate
     * const processingTemplate = await prisma.processingTemplate.upsert({
     *   create: {
     *     // ... data to create a ProcessingTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessingTemplate we want to update
     *   }
     * })
     */
    upsert<T extends ProcessingTemplateUpsertArgs>(args: SelectSubset<T, ProcessingTemplateUpsertArgs<ExtArgs>>): Prisma__ProcessingTemplateClient<$Result.GetResult<Prisma.$ProcessingTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcessingTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingTemplateCountArgs} args - Arguments to filter ProcessingTemplates to count.
     * @example
     * // Count the number of ProcessingTemplates
     * const count = await prisma.processingTemplate.count({
     *   where: {
     *     // ... the filter for the ProcessingTemplates we want to count
     *   }
     * })
    **/
    count<T extends ProcessingTemplateCountArgs>(
      args?: Subset<T, ProcessingTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessingTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcessingTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessingTemplateAggregateArgs>(args: Subset<T, ProcessingTemplateAggregateArgs>): Prisma.PrismaPromise<GetProcessingTemplateAggregateType<T>>

    /**
     * Group by ProcessingTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingTemplateGroupByArgs} args - Group by arguments.
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
      T extends ProcessingTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessingTemplateGroupByArgs['orderBy'] }
        : { orderBy?: ProcessingTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcessingTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessingTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcessingTemplate model
   */
  readonly fields: ProcessingTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessingTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessingTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends ProcessingTemplate$createdByArgs<ExtArgs> = {}>(args?: Subset<T, ProcessingTemplate$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProcessingTemplate model
   */
  interface ProcessingTemplateFieldRefs {
    readonly id: FieldRef<"ProcessingTemplate", 'String'>
    readonly name: FieldRef<"ProcessingTemplate", 'String'>
    readonly description: FieldRef<"ProcessingTemplate", 'String'>
    readonly templateOptions: FieldRef<"ProcessingTemplate", 'Json'>
    readonly isPublic: FieldRef<"ProcessingTemplate", 'Boolean'>
    readonly usageCount: FieldRef<"ProcessingTemplate", 'Int'>
    readonly createdAt: FieldRef<"ProcessingTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"ProcessingTemplate", 'DateTime'>
    readonly createdById: FieldRef<"ProcessingTemplate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProcessingTemplate findUnique
   */
  export type ProcessingTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingTemplate
     */
    select?: ProcessingTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessingTemplate
     */
    omit?: ProcessingTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProcessingTemplate to fetch.
     */
    where: ProcessingTemplateWhereUniqueInput
  }

  /**
   * ProcessingTemplate findUniqueOrThrow
   */
  export type ProcessingTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingTemplate
     */
    select?: ProcessingTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessingTemplate
     */
    omit?: ProcessingTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProcessingTemplate to fetch.
     */
    where: ProcessingTemplateWhereUniqueInput
  }

  /**
   * ProcessingTemplate findFirst
   */
  export type ProcessingTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingTemplate
     */
    select?: ProcessingTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessingTemplate
     */
    omit?: ProcessingTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProcessingTemplate to fetch.
     */
    where?: ProcessingTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessingTemplates to fetch.
     */
    orderBy?: ProcessingTemplateOrderByWithRelationInput | ProcessingTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessingTemplates.
     */
    cursor?: ProcessingTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessingTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessingTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessingTemplates.
     */
    distinct?: ProcessingTemplateScalarFieldEnum | ProcessingTemplateScalarFieldEnum[]
  }

  /**
   * ProcessingTemplate findFirstOrThrow
   */
  export type ProcessingTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingTemplate
     */
    select?: ProcessingTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessingTemplate
     */
    omit?: ProcessingTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProcessingTemplate to fetch.
     */
    where?: ProcessingTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessingTemplates to fetch.
     */
    orderBy?: ProcessingTemplateOrderByWithRelationInput | ProcessingTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessingTemplates.
     */
    cursor?: ProcessingTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessingTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessingTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessingTemplates.
     */
    distinct?: ProcessingTemplateScalarFieldEnum | ProcessingTemplateScalarFieldEnum[]
  }

  /**
   * ProcessingTemplate findMany
   */
  export type ProcessingTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingTemplate
     */
    select?: ProcessingTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessingTemplate
     */
    omit?: ProcessingTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProcessingTemplates to fetch.
     */
    where?: ProcessingTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessingTemplates to fetch.
     */
    orderBy?: ProcessingTemplateOrderByWithRelationInput | ProcessingTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcessingTemplates.
     */
    cursor?: ProcessingTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessingTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessingTemplates.
     */
    skip?: number
    distinct?: ProcessingTemplateScalarFieldEnum | ProcessingTemplateScalarFieldEnum[]
  }

  /**
   * ProcessingTemplate create
   */
  export type ProcessingTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingTemplate
     */
    select?: ProcessingTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessingTemplate
     */
    omit?: ProcessingTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcessingTemplate.
     */
    data: XOR<ProcessingTemplateCreateInput, ProcessingTemplateUncheckedCreateInput>
  }

  /**
   * ProcessingTemplate createMany
   */
  export type ProcessingTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessingTemplates.
     */
    data: ProcessingTemplateCreateManyInput | ProcessingTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcessingTemplate createManyAndReturn
   */
  export type ProcessingTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingTemplate
     */
    select?: ProcessingTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessingTemplate
     */
    omit?: ProcessingTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many ProcessingTemplates.
     */
    data: ProcessingTemplateCreateManyInput | ProcessingTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessingTemplate update
   */
  export type ProcessingTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingTemplate
     */
    select?: ProcessingTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessingTemplate
     */
    omit?: ProcessingTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcessingTemplate.
     */
    data: XOR<ProcessingTemplateUpdateInput, ProcessingTemplateUncheckedUpdateInput>
    /**
     * Choose, which ProcessingTemplate to update.
     */
    where: ProcessingTemplateWhereUniqueInput
  }

  /**
   * ProcessingTemplate updateMany
   */
  export type ProcessingTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessingTemplates.
     */
    data: XOR<ProcessingTemplateUpdateManyMutationInput, ProcessingTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ProcessingTemplates to update
     */
    where?: ProcessingTemplateWhereInput
    /**
     * Limit how many ProcessingTemplates to update.
     */
    limit?: number
  }

  /**
   * ProcessingTemplate updateManyAndReturn
   */
  export type ProcessingTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingTemplate
     */
    select?: ProcessingTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessingTemplate
     */
    omit?: ProcessingTemplateOmit<ExtArgs> | null
    /**
     * The data used to update ProcessingTemplates.
     */
    data: XOR<ProcessingTemplateUpdateManyMutationInput, ProcessingTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ProcessingTemplates to update
     */
    where?: ProcessingTemplateWhereInput
    /**
     * Limit how many ProcessingTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessingTemplate upsert
   */
  export type ProcessingTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingTemplate
     */
    select?: ProcessingTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessingTemplate
     */
    omit?: ProcessingTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcessingTemplate to update in case it exists.
     */
    where: ProcessingTemplateWhereUniqueInput
    /**
     * In case the ProcessingTemplate found by the `where` argument doesn't exist, create a new ProcessingTemplate with this data.
     */
    create: XOR<ProcessingTemplateCreateInput, ProcessingTemplateUncheckedCreateInput>
    /**
     * In case the ProcessingTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessingTemplateUpdateInput, ProcessingTemplateUncheckedUpdateInput>
  }

  /**
   * ProcessingTemplate delete
   */
  export type ProcessingTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingTemplate
     */
    select?: ProcessingTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessingTemplate
     */
    omit?: ProcessingTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingTemplateInclude<ExtArgs> | null
    /**
     * Filter which ProcessingTemplate to delete.
     */
    where: ProcessingTemplateWhereUniqueInput
  }

  /**
   * ProcessingTemplate deleteMany
   */
  export type ProcessingTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessingTemplates to delete
     */
    where?: ProcessingTemplateWhereInput
    /**
     * Limit how many ProcessingTemplates to delete.
     */
    limit?: number
  }

  /**
   * ProcessingTemplate.createdBy
   */
  export type ProcessingTemplate$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ProcessingTemplate without action
   */
  export type ProcessingTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingTemplate
     */
    select?: ProcessingTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessingTemplate
     */
    omit?: ProcessingTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingTemplateInclude<ExtArgs> | null
  }


  /**
   * Model SystemMetric
   */

  export type AggregateSystemMetric = {
    _count: SystemMetricCountAggregateOutputType | null
    _avg: SystemMetricAvgAggregateOutputType | null
    _sum: SystemMetricSumAggregateOutputType | null
    _min: SystemMetricMinAggregateOutputType | null
    _max: SystemMetricMaxAggregateOutputType | null
  }

  export type SystemMetricAvgAggregateOutputType = {
    value: number | null
  }

  export type SystemMetricSumAggregateOutputType = {
    value: number | null
  }

  export type SystemMetricMinAggregateOutputType = {
    id: string | null
    metricType: $Enums.MetricType | null
    value: number | null
    timestamp: Date | null
  }

  export type SystemMetricMaxAggregateOutputType = {
    id: string | null
    metricType: $Enums.MetricType | null
    value: number | null
    timestamp: Date | null
  }

  export type SystemMetricCountAggregateOutputType = {
    id: number
    metricType: number
    value: number
    metadata: number
    timestamp: number
    _all: number
  }


  export type SystemMetricAvgAggregateInputType = {
    value?: true
  }

  export type SystemMetricSumAggregateInputType = {
    value?: true
  }

  export type SystemMetricMinAggregateInputType = {
    id?: true
    metricType?: true
    value?: true
    timestamp?: true
  }

  export type SystemMetricMaxAggregateInputType = {
    id?: true
    metricType?: true
    value?: true
    timestamp?: true
  }

  export type SystemMetricCountAggregateInputType = {
    id?: true
    metricType?: true
    value?: true
    metadata?: true
    timestamp?: true
    _all?: true
  }

  export type SystemMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemMetric to aggregate.
     */
    where?: SystemMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMetrics to fetch.
     */
    orderBy?: SystemMetricOrderByWithRelationInput | SystemMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemMetrics
    **/
    _count?: true | SystemMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemMetricMaxAggregateInputType
  }

  export type GetSystemMetricAggregateType<T extends SystemMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemMetric[P]>
      : GetScalarType<T[P], AggregateSystemMetric[P]>
  }




  export type SystemMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemMetricWhereInput
    orderBy?: SystemMetricOrderByWithAggregationInput | SystemMetricOrderByWithAggregationInput[]
    by: SystemMetricScalarFieldEnum[] | SystemMetricScalarFieldEnum
    having?: SystemMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemMetricCountAggregateInputType | true
    _avg?: SystemMetricAvgAggregateInputType
    _sum?: SystemMetricSumAggregateInputType
    _min?: SystemMetricMinAggregateInputType
    _max?: SystemMetricMaxAggregateInputType
  }

  export type SystemMetricGroupByOutputType = {
    id: string
    metricType: $Enums.MetricType
    value: number
    metadata: JsonValue | null
    timestamp: Date
    _count: SystemMetricCountAggregateOutputType | null
    _avg: SystemMetricAvgAggregateOutputType | null
    _sum: SystemMetricSumAggregateOutputType | null
    _min: SystemMetricMinAggregateOutputType | null
    _max: SystemMetricMaxAggregateOutputType | null
  }

  type GetSystemMetricGroupByPayload<T extends SystemMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemMetricGroupByOutputType[P]>
            : GetScalarType<T[P], SystemMetricGroupByOutputType[P]>
        }
      >
    >


  export type SystemMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metricType?: boolean
    value?: boolean
    metadata?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["systemMetric"]>

  export type SystemMetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metricType?: boolean
    value?: boolean
    metadata?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["systemMetric"]>

  export type SystemMetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metricType?: boolean
    value?: boolean
    metadata?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["systemMetric"]>

  export type SystemMetricSelectScalar = {
    id?: boolean
    metricType?: boolean
    value?: boolean
    metadata?: boolean
    timestamp?: boolean
  }

  export type SystemMetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "metricType" | "value" | "metadata" | "timestamp", ExtArgs["result"]["systemMetric"]>

  export type $SystemMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemMetric"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      metricType: $Enums.MetricType
      value: number
      metadata: Prisma.JsonValue | null
      timestamp: Date
    }, ExtArgs["result"]["systemMetric"]>
    composites: {}
  }

  type SystemMetricGetPayload<S extends boolean | null | undefined | SystemMetricDefaultArgs> = $Result.GetResult<Prisma.$SystemMetricPayload, S>

  type SystemMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemMetricCountAggregateInputType | true
    }

  export interface SystemMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemMetric'], meta: { name: 'SystemMetric' } }
    /**
     * Find zero or one SystemMetric that matches the filter.
     * @param {SystemMetricFindUniqueArgs} args - Arguments to find a SystemMetric
     * @example
     * // Get one SystemMetric
     * const systemMetric = await prisma.systemMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemMetricFindUniqueArgs>(args: SelectSubset<T, SystemMetricFindUniqueArgs<ExtArgs>>): Prisma__SystemMetricClient<$Result.GetResult<Prisma.$SystemMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemMetric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemMetricFindUniqueOrThrowArgs} args - Arguments to find a SystemMetric
     * @example
     * // Get one SystemMetric
     * const systemMetric = await prisma.systemMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemMetricClient<$Result.GetResult<Prisma.$SystemMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMetricFindFirstArgs} args - Arguments to find a SystemMetric
     * @example
     * // Get one SystemMetric
     * const systemMetric = await prisma.systemMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemMetricFindFirstArgs>(args?: SelectSubset<T, SystemMetricFindFirstArgs<ExtArgs>>): Prisma__SystemMetricClient<$Result.GetResult<Prisma.$SystemMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMetricFindFirstOrThrowArgs} args - Arguments to find a SystemMetric
     * @example
     * // Get one SystemMetric
     * const systemMetric = await prisma.systemMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemMetricClient<$Result.GetResult<Prisma.$SystemMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemMetrics
     * const systemMetrics = await prisma.systemMetric.findMany()
     * 
     * // Get first 10 SystemMetrics
     * const systemMetrics = await prisma.systemMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemMetricWithIdOnly = await prisma.systemMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemMetricFindManyArgs>(args?: SelectSubset<T, SystemMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemMetric.
     * @param {SystemMetricCreateArgs} args - Arguments to create a SystemMetric.
     * @example
     * // Create one SystemMetric
     * const SystemMetric = await prisma.systemMetric.create({
     *   data: {
     *     // ... data to create a SystemMetric
     *   }
     * })
     * 
     */
    create<T extends SystemMetricCreateArgs>(args: SelectSubset<T, SystemMetricCreateArgs<ExtArgs>>): Prisma__SystemMetricClient<$Result.GetResult<Prisma.$SystemMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemMetrics.
     * @param {SystemMetricCreateManyArgs} args - Arguments to create many SystemMetrics.
     * @example
     * // Create many SystemMetrics
     * const systemMetric = await prisma.systemMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemMetricCreateManyArgs>(args?: SelectSubset<T, SystemMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemMetrics and returns the data saved in the database.
     * @param {SystemMetricCreateManyAndReturnArgs} args - Arguments to create many SystemMetrics.
     * @example
     * // Create many SystemMetrics
     * const systemMetric = await prisma.systemMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemMetrics and only return the `id`
     * const systemMetricWithIdOnly = await prisma.systemMetric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemMetricCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemMetric.
     * @param {SystemMetricDeleteArgs} args - Arguments to delete one SystemMetric.
     * @example
     * // Delete one SystemMetric
     * const SystemMetric = await prisma.systemMetric.delete({
     *   where: {
     *     // ... filter to delete one SystemMetric
     *   }
     * })
     * 
     */
    delete<T extends SystemMetricDeleteArgs>(args: SelectSubset<T, SystemMetricDeleteArgs<ExtArgs>>): Prisma__SystemMetricClient<$Result.GetResult<Prisma.$SystemMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemMetric.
     * @param {SystemMetricUpdateArgs} args - Arguments to update one SystemMetric.
     * @example
     * // Update one SystemMetric
     * const systemMetric = await prisma.systemMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemMetricUpdateArgs>(args: SelectSubset<T, SystemMetricUpdateArgs<ExtArgs>>): Prisma__SystemMetricClient<$Result.GetResult<Prisma.$SystemMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemMetrics.
     * @param {SystemMetricDeleteManyArgs} args - Arguments to filter SystemMetrics to delete.
     * @example
     * // Delete a few SystemMetrics
     * const { count } = await prisma.systemMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemMetricDeleteManyArgs>(args?: SelectSubset<T, SystemMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemMetrics
     * const systemMetric = await prisma.systemMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemMetricUpdateManyArgs>(args: SelectSubset<T, SystemMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemMetrics and returns the data updated in the database.
     * @param {SystemMetricUpdateManyAndReturnArgs} args - Arguments to update many SystemMetrics.
     * @example
     * // Update many SystemMetrics
     * const systemMetric = await prisma.systemMetric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemMetrics and only return the `id`
     * const systemMetricWithIdOnly = await prisma.systemMetric.updateManyAndReturn({
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
    updateManyAndReturn<T extends SystemMetricUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemMetric.
     * @param {SystemMetricUpsertArgs} args - Arguments to update or create a SystemMetric.
     * @example
     * // Update or create a SystemMetric
     * const systemMetric = await prisma.systemMetric.upsert({
     *   create: {
     *     // ... data to create a SystemMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemMetric we want to update
     *   }
     * })
     */
    upsert<T extends SystemMetricUpsertArgs>(args: SelectSubset<T, SystemMetricUpsertArgs<ExtArgs>>): Prisma__SystemMetricClient<$Result.GetResult<Prisma.$SystemMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMetricCountArgs} args - Arguments to filter SystemMetrics to count.
     * @example
     * // Count the number of SystemMetrics
     * const count = await prisma.systemMetric.count({
     *   where: {
     *     // ... the filter for the SystemMetrics we want to count
     *   }
     * })
    **/
    count<T extends SystemMetricCountArgs>(
      args?: Subset<T, SystemMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemMetricAggregateArgs>(args: Subset<T, SystemMetricAggregateArgs>): Prisma.PrismaPromise<GetSystemMetricAggregateType<T>>

    /**
     * Group by SystemMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMetricGroupByArgs} args - Group by arguments.
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
      T extends SystemMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemMetricGroupByArgs['orderBy'] }
        : { orderBy?: SystemMetricGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemMetric model
   */
  readonly fields: SystemMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SystemMetric model
   */
  interface SystemMetricFieldRefs {
    readonly id: FieldRef<"SystemMetric", 'String'>
    readonly metricType: FieldRef<"SystemMetric", 'MetricType'>
    readonly value: FieldRef<"SystemMetric", 'Float'>
    readonly metadata: FieldRef<"SystemMetric", 'Json'>
    readonly timestamp: FieldRef<"SystemMetric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemMetric findUnique
   */
  export type SystemMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetric
     */
    select?: SystemMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetric
     */
    omit?: SystemMetricOmit<ExtArgs> | null
    /**
     * Filter, which SystemMetric to fetch.
     */
    where: SystemMetricWhereUniqueInput
  }

  /**
   * SystemMetric findUniqueOrThrow
   */
  export type SystemMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetric
     */
    select?: SystemMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetric
     */
    omit?: SystemMetricOmit<ExtArgs> | null
    /**
     * Filter, which SystemMetric to fetch.
     */
    where: SystemMetricWhereUniqueInput
  }

  /**
   * SystemMetric findFirst
   */
  export type SystemMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetric
     */
    select?: SystemMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetric
     */
    omit?: SystemMetricOmit<ExtArgs> | null
    /**
     * Filter, which SystemMetric to fetch.
     */
    where?: SystemMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMetrics to fetch.
     */
    orderBy?: SystemMetricOrderByWithRelationInput | SystemMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemMetrics.
     */
    cursor?: SystemMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemMetrics.
     */
    distinct?: SystemMetricScalarFieldEnum | SystemMetricScalarFieldEnum[]
  }

  /**
   * SystemMetric findFirstOrThrow
   */
  export type SystemMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetric
     */
    select?: SystemMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetric
     */
    omit?: SystemMetricOmit<ExtArgs> | null
    /**
     * Filter, which SystemMetric to fetch.
     */
    where?: SystemMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMetrics to fetch.
     */
    orderBy?: SystemMetricOrderByWithRelationInput | SystemMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemMetrics.
     */
    cursor?: SystemMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemMetrics.
     */
    distinct?: SystemMetricScalarFieldEnum | SystemMetricScalarFieldEnum[]
  }

  /**
   * SystemMetric findMany
   */
  export type SystemMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetric
     */
    select?: SystemMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetric
     */
    omit?: SystemMetricOmit<ExtArgs> | null
    /**
     * Filter, which SystemMetrics to fetch.
     */
    where?: SystemMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMetrics to fetch.
     */
    orderBy?: SystemMetricOrderByWithRelationInput | SystemMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemMetrics.
     */
    cursor?: SystemMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMetrics.
     */
    skip?: number
    distinct?: SystemMetricScalarFieldEnum | SystemMetricScalarFieldEnum[]
  }

  /**
   * SystemMetric create
   */
  export type SystemMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetric
     */
    select?: SystemMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetric
     */
    omit?: SystemMetricOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemMetric.
     */
    data: XOR<SystemMetricCreateInput, SystemMetricUncheckedCreateInput>
  }

  /**
   * SystemMetric createMany
   */
  export type SystemMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemMetrics.
     */
    data: SystemMetricCreateManyInput | SystemMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemMetric createManyAndReturn
   */
  export type SystemMetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetric
     */
    select?: SystemMetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetric
     */
    omit?: SystemMetricOmit<ExtArgs> | null
    /**
     * The data used to create many SystemMetrics.
     */
    data: SystemMetricCreateManyInput | SystemMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemMetric update
   */
  export type SystemMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetric
     */
    select?: SystemMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetric
     */
    omit?: SystemMetricOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemMetric.
     */
    data: XOR<SystemMetricUpdateInput, SystemMetricUncheckedUpdateInput>
    /**
     * Choose, which SystemMetric to update.
     */
    where: SystemMetricWhereUniqueInput
  }

  /**
   * SystemMetric updateMany
   */
  export type SystemMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemMetrics.
     */
    data: XOR<SystemMetricUpdateManyMutationInput, SystemMetricUncheckedUpdateManyInput>
    /**
     * Filter which SystemMetrics to update
     */
    where?: SystemMetricWhereInput
    /**
     * Limit how many SystemMetrics to update.
     */
    limit?: number
  }

  /**
   * SystemMetric updateManyAndReturn
   */
  export type SystemMetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetric
     */
    select?: SystemMetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetric
     */
    omit?: SystemMetricOmit<ExtArgs> | null
    /**
     * The data used to update SystemMetrics.
     */
    data: XOR<SystemMetricUpdateManyMutationInput, SystemMetricUncheckedUpdateManyInput>
    /**
     * Filter which SystemMetrics to update
     */
    where?: SystemMetricWhereInput
    /**
     * Limit how many SystemMetrics to update.
     */
    limit?: number
  }

  /**
   * SystemMetric upsert
   */
  export type SystemMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetric
     */
    select?: SystemMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetric
     */
    omit?: SystemMetricOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemMetric to update in case it exists.
     */
    where: SystemMetricWhereUniqueInput
    /**
     * In case the SystemMetric found by the `where` argument doesn't exist, create a new SystemMetric with this data.
     */
    create: XOR<SystemMetricCreateInput, SystemMetricUncheckedCreateInput>
    /**
     * In case the SystemMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemMetricUpdateInput, SystemMetricUncheckedUpdateInput>
  }

  /**
   * SystemMetric delete
   */
  export type SystemMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetric
     */
    select?: SystemMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetric
     */
    omit?: SystemMetricOmit<ExtArgs> | null
    /**
     * Filter which SystemMetric to delete.
     */
    where: SystemMetricWhereUniqueInput
  }

  /**
   * SystemMetric deleteMany
   */
  export type SystemMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemMetrics to delete
     */
    where?: SystemMetricWhereInput
    /**
     * Limit how many SystemMetrics to delete.
     */
    limit?: number
  }

  /**
   * SystemMetric without action
   */
  export type SystemMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetric
     */
    select?: SystemMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetric
     */
    omit?: SystemMetricOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    passwordHash: 'passwordHash',
    apiKey: 'apiKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VideoJobScalarFieldEnum: {
    id: 'id',
    originalName: 'originalName',
    filePath: 'filePath',
    outputPath: 'outputPath',
    status: 'status',
    progress: 'progress',
    errorMessage: 'errorMessage',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    options: 'options',
    userId: 'userId',
    batchJobId: 'batchJobId',
    cloudStorageUrl: 'cloudStorageUrl',
    cloudProvider: 'cloudProvider'
  };

  export type VideoJobScalarFieldEnum = (typeof VideoJobScalarFieldEnum)[keyof typeof VideoJobScalarFieldEnum]


  export const VideoVariantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    filePath: 'filePath',
    outputPath: 'outputPath',
    status: 'status',
    progress: 'progress',
    errorMessage: 'errorMessage',
    processingTime: 'processingTime',
    fileSize: 'fileSize',
    duration: 'duration',
    resolution: 'resolution',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    variantOptions: 'variantOptions',
    videoJobId: 'videoJobId',
    cloudStorageUrl: 'cloudStorageUrl',
    cloudProvider: 'cloudProvider'
  };

  export type VideoVariantScalarFieldEnum = (typeof VideoVariantScalarFieldEnum)[keyof typeof VideoVariantScalarFieldEnum]


  export const BatchJobScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    totalJobs: 'totalJobs',
    completedJobs: 'completedJobs',
    failedJobs: 'failedJobs',
    progress: 'progress',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    batchOptions: 'batchOptions',
    userId: 'userId'
  };

  export type BatchJobScalarFieldEnum = (typeof BatchJobScalarFieldEnum)[keyof typeof BatchJobScalarFieldEnum]


  export const ProcessingTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    templateOptions: 'templateOptions',
    isPublic: 'isPublic',
    usageCount: 'usageCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type ProcessingTemplateScalarFieldEnum = (typeof ProcessingTemplateScalarFieldEnum)[keyof typeof ProcessingTemplateScalarFieldEnum]


  export const SystemMetricScalarFieldEnum: {
    id: 'id',
    metricType: 'metricType',
    value: 'value',
    metadata: 'metadata',
    timestamp: 'timestamp'
  };

  export type SystemMetricScalarFieldEnum = (typeof SystemMetricScalarFieldEnum)[keyof typeof SystemMetricScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'CloudProvider'
   */
  export type EnumCloudProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CloudProvider'>
    


  /**
   * Reference to a field of type 'CloudProvider[]'
   */
  export type ListEnumCloudProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CloudProvider[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'BatchStatus'
   */
  export type EnumBatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BatchStatus'>
    


  /**
   * Reference to a field of type 'BatchStatus[]'
   */
  export type ListEnumBatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BatchStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MetricType'
   */
  export type EnumMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricType'>
    


  /**
   * Reference to a field of type 'MetricType[]'
   */
  export type ListEnumMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    apiKey?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    jobs?: VideoJobListRelationFilter
    batches?: BatchJobListRelationFilter
    templates?: ProcessingTemplateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    apiKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobs?: VideoJobOrderByRelationAggregateInput
    batches?: BatchJobOrderByRelationAggregateInput
    templates?: ProcessingTemplateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    apiKey?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    jobs?: VideoJobListRelationFilter
    batches?: BatchJobListRelationFilter
    templates?: ProcessingTemplateListRelationFilter
  }, "id" | "email" | "apiKey">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    apiKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    apiKey?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VideoJobWhereInput = {
    AND?: VideoJobWhereInput | VideoJobWhereInput[]
    OR?: VideoJobWhereInput[]
    NOT?: VideoJobWhereInput | VideoJobWhereInput[]
    id?: StringFilter<"VideoJob"> | string
    originalName?: StringFilter<"VideoJob"> | string
    filePath?: StringFilter<"VideoJob"> | string
    outputPath?: StringNullableFilter<"VideoJob"> | string | null
    status?: EnumJobStatusFilter<"VideoJob"> | $Enums.JobStatus
    progress?: FloatFilter<"VideoJob"> | number
    errorMessage?: StringNullableFilter<"VideoJob"> | string | null
    startedAt?: DateTimeNullableFilter<"VideoJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"VideoJob"> | Date | string | null
    createdAt?: DateTimeFilter<"VideoJob"> | Date | string
    updatedAt?: DateTimeFilter<"VideoJob"> | Date | string
    options?: JsonNullableFilter<"VideoJob">
    userId?: StringNullableFilter<"VideoJob"> | string | null
    batchJobId?: StringNullableFilter<"VideoJob"> | string | null
    cloudStorageUrl?: StringNullableFilter<"VideoJob"> | string | null
    cloudProvider?: EnumCloudProviderNullableFilter<"VideoJob"> | $Enums.CloudProvider | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    variants?: VideoVariantListRelationFilter
    batchJob?: XOR<BatchJobNullableScalarRelationFilter, BatchJobWhereInput> | null
  }

  export type VideoJobOrderByWithRelationInput = {
    id?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    outputPath?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    options?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    batchJobId?: SortOrderInput | SortOrder
    cloudStorageUrl?: SortOrderInput | SortOrder
    cloudProvider?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    variants?: VideoVariantOrderByRelationAggregateInput
    batchJob?: BatchJobOrderByWithRelationInput
  }

  export type VideoJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoJobWhereInput | VideoJobWhereInput[]
    OR?: VideoJobWhereInput[]
    NOT?: VideoJobWhereInput | VideoJobWhereInput[]
    originalName?: StringFilter<"VideoJob"> | string
    filePath?: StringFilter<"VideoJob"> | string
    outputPath?: StringNullableFilter<"VideoJob"> | string | null
    status?: EnumJobStatusFilter<"VideoJob"> | $Enums.JobStatus
    progress?: FloatFilter<"VideoJob"> | number
    errorMessage?: StringNullableFilter<"VideoJob"> | string | null
    startedAt?: DateTimeNullableFilter<"VideoJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"VideoJob"> | Date | string | null
    createdAt?: DateTimeFilter<"VideoJob"> | Date | string
    updatedAt?: DateTimeFilter<"VideoJob"> | Date | string
    options?: JsonNullableFilter<"VideoJob">
    userId?: StringNullableFilter<"VideoJob"> | string | null
    batchJobId?: StringNullableFilter<"VideoJob"> | string | null
    cloudStorageUrl?: StringNullableFilter<"VideoJob"> | string | null
    cloudProvider?: EnumCloudProviderNullableFilter<"VideoJob"> | $Enums.CloudProvider | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    variants?: VideoVariantListRelationFilter
    batchJob?: XOR<BatchJobNullableScalarRelationFilter, BatchJobWhereInput> | null
  }, "id">

  export type VideoJobOrderByWithAggregationInput = {
    id?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    outputPath?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    options?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    batchJobId?: SortOrderInput | SortOrder
    cloudStorageUrl?: SortOrderInput | SortOrder
    cloudProvider?: SortOrderInput | SortOrder
    _count?: VideoJobCountOrderByAggregateInput
    _avg?: VideoJobAvgOrderByAggregateInput
    _max?: VideoJobMaxOrderByAggregateInput
    _min?: VideoJobMinOrderByAggregateInput
    _sum?: VideoJobSumOrderByAggregateInput
  }

  export type VideoJobScalarWhereWithAggregatesInput = {
    AND?: VideoJobScalarWhereWithAggregatesInput | VideoJobScalarWhereWithAggregatesInput[]
    OR?: VideoJobScalarWhereWithAggregatesInput[]
    NOT?: VideoJobScalarWhereWithAggregatesInput | VideoJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoJob"> | string
    originalName?: StringWithAggregatesFilter<"VideoJob"> | string
    filePath?: StringWithAggregatesFilter<"VideoJob"> | string
    outputPath?: StringNullableWithAggregatesFilter<"VideoJob"> | string | null
    status?: EnumJobStatusWithAggregatesFilter<"VideoJob"> | $Enums.JobStatus
    progress?: FloatWithAggregatesFilter<"VideoJob"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"VideoJob"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"VideoJob"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"VideoJob"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VideoJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VideoJob"> | Date | string
    options?: JsonNullableWithAggregatesFilter<"VideoJob">
    userId?: StringNullableWithAggregatesFilter<"VideoJob"> | string | null
    batchJobId?: StringNullableWithAggregatesFilter<"VideoJob"> | string | null
    cloudStorageUrl?: StringNullableWithAggregatesFilter<"VideoJob"> | string | null
    cloudProvider?: EnumCloudProviderNullableWithAggregatesFilter<"VideoJob"> | $Enums.CloudProvider | null
  }

  export type VideoVariantWhereInput = {
    AND?: VideoVariantWhereInput | VideoVariantWhereInput[]
    OR?: VideoVariantWhereInput[]
    NOT?: VideoVariantWhereInput | VideoVariantWhereInput[]
    id?: StringFilter<"VideoVariant"> | string
    name?: StringFilter<"VideoVariant"> | string
    filePath?: StringFilter<"VideoVariant"> | string
    outputPath?: StringNullableFilter<"VideoVariant"> | string | null
    status?: EnumJobStatusFilter<"VideoVariant"> | $Enums.JobStatus
    progress?: FloatFilter<"VideoVariant"> | number
    errorMessage?: StringNullableFilter<"VideoVariant"> | string | null
    processingTime?: IntNullableFilter<"VideoVariant"> | number | null
    fileSize?: BigIntNullableFilter<"VideoVariant"> | bigint | number | null
    duration?: FloatNullableFilter<"VideoVariant"> | number | null
    resolution?: StringNullableFilter<"VideoVariant"> | string | null
    createdAt?: DateTimeFilter<"VideoVariant"> | Date | string
    updatedAt?: DateTimeFilter<"VideoVariant"> | Date | string
    variantOptions?: JsonNullableFilter<"VideoVariant">
    videoJobId?: StringFilter<"VideoVariant"> | string
    cloudStorageUrl?: StringNullableFilter<"VideoVariant"> | string | null
    cloudProvider?: EnumCloudProviderNullableFilter<"VideoVariant"> | $Enums.CloudProvider | null
    videoJob?: XOR<VideoJobScalarRelationFilter, VideoJobWhereInput>
  }

  export type VideoVariantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    filePath?: SortOrder
    outputPath?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    processingTime?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    resolution?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    variantOptions?: SortOrderInput | SortOrder
    videoJobId?: SortOrder
    cloudStorageUrl?: SortOrderInput | SortOrder
    cloudProvider?: SortOrderInput | SortOrder
    videoJob?: VideoJobOrderByWithRelationInput
  }

  export type VideoVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoVariantWhereInput | VideoVariantWhereInput[]
    OR?: VideoVariantWhereInput[]
    NOT?: VideoVariantWhereInput | VideoVariantWhereInput[]
    name?: StringFilter<"VideoVariant"> | string
    filePath?: StringFilter<"VideoVariant"> | string
    outputPath?: StringNullableFilter<"VideoVariant"> | string | null
    status?: EnumJobStatusFilter<"VideoVariant"> | $Enums.JobStatus
    progress?: FloatFilter<"VideoVariant"> | number
    errorMessage?: StringNullableFilter<"VideoVariant"> | string | null
    processingTime?: IntNullableFilter<"VideoVariant"> | number | null
    fileSize?: BigIntNullableFilter<"VideoVariant"> | bigint | number | null
    duration?: FloatNullableFilter<"VideoVariant"> | number | null
    resolution?: StringNullableFilter<"VideoVariant"> | string | null
    createdAt?: DateTimeFilter<"VideoVariant"> | Date | string
    updatedAt?: DateTimeFilter<"VideoVariant"> | Date | string
    variantOptions?: JsonNullableFilter<"VideoVariant">
    videoJobId?: StringFilter<"VideoVariant"> | string
    cloudStorageUrl?: StringNullableFilter<"VideoVariant"> | string | null
    cloudProvider?: EnumCloudProviderNullableFilter<"VideoVariant"> | $Enums.CloudProvider | null
    videoJob?: XOR<VideoJobScalarRelationFilter, VideoJobWhereInput>
  }, "id">

  export type VideoVariantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    filePath?: SortOrder
    outputPath?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    processingTime?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    resolution?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    variantOptions?: SortOrderInput | SortOrder
    videoJobId?: SortOrder
    cloudStorageUrl?: SortOrderInput | SortOrder
    cloudProvider?: SortOrderInput | SortOrder
    _count?: VideoVariantCountOrderByAggregateInput
    _avg?: VideoVariantAvgOrderByAggregateInput
    _max?: VideoVariantMaxOrderByAggregateInput
    _min?: VideoVariantMinOrderByAggregateInput
    _sum?: VideoVariantSumOrderByAggregateInput
  }

  export type VideoVariantScalarWhereWithAggregatesInput = {
    AND?: VideoVariantScalarWhereWithAggregatesInput | VideoVariantScalarWhereWithAggregatesInput[]
    OR?: VideoVariantScalarWhereWithAggregatesInput[]
    NOT?: VideoVariantScalarWhereWithAggregatesInput | VideoVariantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoVariant"> | string
    name?: StringWithAggregatesFilter<"VideoVariant"> | string
    filePath?: StringWithAggregatesFilter<"VideoVariant"> | string
    outputPath?: StringNullableWithAggregatesFilter<"VideoVariant"> | string | null
    status?: EnumJobStatusWithAggregatesFilter<"VideoVariant"> | $Enums.JobStatus
    progress?: FloatWithAggregatesFilter<"VideoVariant"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"VideoVariant"> | string | null
    processingTime?: IntNullableWithAggregatesFilter<"VideoVariant"> | number | null
    fileSize?: BigIntNullableWithAggregatesFilter<"VideoVariant"> | bigint | number | null
    duration?: FloatNullableWithAggregatesFilter<"VideoVariant"> | number | null
    resolution?: StringNullableWithAggregatesFilter<"VideoVariant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VideoVariant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VideoVariant"> | Date | string
    variantOptions?: JsonNullableWithAggregatesFilter<"VideoVariant">
    videoJobId?: StringWithAggregatesFilter<"VideoVariant"> | string
    cloudStorageUrl?: StringNullableWithAggregatesFilter<"VideoVariant"> | string | null
    cloudProvider?: EnumCloudProviderNullableWithAggregatesFilter<"VideoVariant"> | $Enums.CloudProvider | null
  }

  export type BatchJobWhereInput = {
    AND?: BatchJobWhereInput | BatchJobWhereInput[]
    OR?: BatchJobWhereInput[]
    NOT?: BatchJobWhereInput | BatchJobWhereInput[]
    id?: StringFilter<"BatchJob"> | string
    name?: StringFilter<"BatchJob"> | string
    description?: StringNullableFilter<"BatchJob"> | string | null
    status?: EnumBatchStatusFilter<"BatchJob"> | $Enums.BatchStatus
    totalJobs?: IntFilter<"BatchJob"> | number
    completedJobs?: IntFilter<"BatchJob"> | number
    failedJobs?: IntFilter<"BatchJob"> | number
    progress?: FloatFilter<"BatchJob"> | number
    startedAt?: DateTimeNullableFilter<"BatchJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"BatchJob"> | Date | string | null
    createdAt?: DateTimeFilter<"BatchJob"> | Date | string
    updatedAt?: DateTimeFilter<"BatchJob"> | Date | string
    batchOptions?: JsonNullableFilter<"BatchJob">
    userId?: StringNullableFilter<"BatchJob"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    jobs?: VideoJobListRelationFilter
  }

  export type BatchJobOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    totalJobs?: SortOrder
    completedJobs?: SortOrder
    failedJobs?: SortOrder
    progress?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchOptions?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    jobs?: VideoJobOrderByRelationAggregateInput
  }

  export type BatchJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BatchJobWhereInput | BatchJobWhereInput[]
    OR?: BatchJobWhereInput[]
    NOT?: BatchJobWhereInput | BatchJobWhereInput[]
    name?: StringFilter<"BatchJob"> | string
    description?: StringNullableFilter<"BatchJob"> | string | null
    status?: EnumBatchStatusFilter<"BatchJob"> | $Enums.BatchStatus
    totalJobs?: IntFilter<"BatchJob"> | number
    completedJobs?: IntFilter<"BatchJob"> | number
    failedJobs?: IntFilter<"BatchJob"> | number
    progress?: FloatFilter<"BatchJob"> | number
    startedAt?: DateTimeNullableFilter<"BatchJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"BatchJob"> | Date | string | null
    createdAt?: DateTimeFilter<"BatchJob"> | Date | string
    updatedAt?: DateTimeFilter<"BatchJob"> | Date | string
    batchOptions?: JsonNullableFilter<"BatchJob">
    userId?: StringNullableFilter<"BatchJob"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    jobs?: VideoJobListRelationFilter
  }, "id">

  export type BatchJobOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    totalJobs?: SortOrder
    completedJobs?: SortOrder
    failedJobs?: SortOrder
    progress?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchOptions?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: BatchJobCountOrderByAggregateInput
    _avg?: BatchJobAvgOrderByAggregateInput
    _max?: BatchJobMaxOrderByAggregateInput
    _min?: BatchJobMinOrderByAggregateInput
    _sum?: BatchJobSumOrderByAggregateInput
  }

  export type BatchJobScalarWhereWithAggregatesInput = {
    AND?: BatchJobScalarWhereWithAggregatesInput | BatchJobScalarWhereWithAggregatesInput[]
    OR?: BatchJobScalarWhereWithAggregatesInput[]
    NOT?: BatchJobScalarWhereWithAggregatesInput | BatchJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BatchJob"> | string
    name?: StringWithAggregatesFilter<"BatchJob"> | string
    description?: StringNullableWithAggregatesFilter<"BatchJob"> | string | null
    status?: EnumBatchStatusWithAggregatesFilter<"BatchJob"> | $Enums.BatchStatus
    totalJobs?: IntWithAggregatesFilter<"BatchJob"> | number
    completedJobs?: IntWithAggregatesFilter<"BatchJob"> | number
    failedJobs?: IntWithAggregatesFilter<"BatchJob"> | number
    progress?: FloatWithAggregatesFilter<"BatchJob"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"BatchJob"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"BatchJob"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BatchJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BatchJob"> | Date | string
    batchOptions?: JsonNullableWithAggregatesFilter<"BatchJob">
    userId?: StringNullableWithAggregatesFilter<"BatchJob"> | string | null
  }

  export type ProcessingTemplateWhereInput = {
    AND?: ProcessingTemplateWhereInput | ProcessingTemplateWhereInput[]
    OR?: ProcessingTemplateWhereInput[]
    NOT?: ProcessingTemplateWhereInput | ProcessingTemplateWhereInput[]
    id?: StringFilter<"ProcessingTemplate"> | string
    name?: StringFilter<"ProcessingTemplate"> | string
    description?: StringNullableFilter<"ProcessingTemplate"> | string | null
    templateOptions?: JsonFilter<"ProcessingTemplate">
    isPublic?: BoolFilter<"ProcessingTemplate"> | boolean
    usageCount?: IntFilter<"ProcessingTemplate"> | number
    createdAt?: DateTimeFilter<"ProcessingTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ProcessingTemplate"> | Date | string
    createdById?: StringNullableFilter<"ProcessingTemplate"> | string | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ProcessingTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    templateOptions?: SortOrder
    isPublic?: SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type ProcessingTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProcessingTemplateWhereInput | ProcessingTemplateWhereInput[]
    OR?: ProcessingTemplateWhereInput[]
    NOT?: ProcessingTemplateWhereInput | ProcessingTemplateWhereInput[]
    name?: StringFilter<"ProcessingTemplate"> | string
    description?: StringNullableFilter<"ProcessingTemplate"> | string | null
    templateOptions?: JsonFilter<"ProcessingTemplate">
    isPublic?: BoolFilter<"ProcessingTemplate"> | boolean
    usageCount?: IntFilter<"ProcessingTemplate"> | number
    createdAt?: DateTimeFilter<"ProcessingTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ProcessingTemplate"> | Date | string
    createdById?: StringNullableFilter<"ProcessingTemplate"> | string | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ProcessingTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    templateOptions?: SortOrder
    isPublic?: SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    _count?: ProcessingTemplateCountOrderByAggregateInput
    _avg?: ProcessingTemplateAvgOrderByAggregateInput
    _max?: ProcessingTemplateMaxOrderByAggregateInput
    _min?: ProcessingTemplateMinOrderByAggregateInput
    _sum?: ProcessingTemplateSumOrderByAggregateInput
  }

  export type ProcessingTemplateScalarWhereWithAggregatesInput = {
    AND?: ProcessingTemplateScalarWhereWithAggregatesInput | ProcessingTemplateScalarWhereWithAggregatesInput[]
    OR?: ProcessingTemplateScalarWhereWithAggregatesInput[]
    NOT?: ProcessingTemplateScalarWhereWithAggregatesInput | ProcessingTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProcessingTemplate"> | string
    name?: StringWithAggregatesFilter<"ProcessingTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"ProcessingTemplate"> | string | null
    templateOptions?: JsonWithAggregatesFilter<"ProcessingTemplate">
    isPublic?: BoolWithAggregatesFilter<"ProcessingTemplate"> | boolean
    usageCount?: IntWithAggregatesFilter<"ProcessingTemplate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProcessingTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProcessingTemplate"> | Date | string
    createdById?: StringNullableWithAggregatesFilter<"ProcessingTemplate"> | string | null
  }

  export type SystemMetricWhereInput = {
    AND?: SystemMetricWhereInput | SystemMetricWhereInput[]
    OR?: SystemMetricWhereInput[]
    NOT?: SystemMetricWhereInput | SystemMetricWhereInput[]
    id?: StringFilter<"SystemMetric"> | string
    metricType?: EnumMetricTypeFilter<"SystemMetric"> | $Enums.MetricType
    value?: FloatFilter<"SystemMetric"> | number
    metadata?: JsonNullableFilter<"SystemMetric">
    timestamp?: DateTimeFilter<"SystemMetric"> | Date | string
  }

  export type SystemMetricOrderByWithRelationInput = {
    id?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    metadata?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type SystemMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SystemMetricWhereInput | SystemMetricWhereInput[]
    OR?: SystemMetricWhereInput[]
    NOT?: SystemMetricWhereInput | SystemMetricWhereInput[]
    metricType?: EnumMetricTypeFilter<"SystemMetric"> | $Enums.MetricType
    value?: FloatFilter<"SystemMetric"> | number
    metadata?: JsonNullableFilter<"SystemMetric">
    timestamp?: DateTimeFilter<"SystemMetric"> | Date | string
  }, "id">

  export type SystemMetricOrderByWithAggregationInput = {
    id?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    metadata?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: SystemMetricCountOrderByAggregateInput
    _avg?: SystemMetricAvgOrderByAggregateInput
    _max?: SystemMetricMaxOrderByAggregateInput
    _min?: SystemMetricMinOrderByAggregateInput
    _sum?: SystemMetricSumOrderByAggregateInput
  }

  export type SystemMetricScalarWhereWithAggregatesInput = {
    AND?: SystemMetricScalarWhereWithAggregatesInput | SystemMetricScalarWhereWithAggregatesInput[]
    OR?: SystemMetricScalarWhereWithAggregatesInput[]
    NOT?: SystemMetricScalarWhereWithAggregatesInput | SystemMetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemMetric"> | string
    metricType?: EnumMetricTypeWithAggregatesFilter<"SystemMetric"> | $Enums.MetricType
    value?: FloatWithAggregatesFilter<"SystemMetric"> | number
    metadata?: JsonNullableWithAggregatesFilter<"SystemMetric">
    timestamp?: DateTimeWithAggregatesFilter<"SystemMetric"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    apiKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: VideoJobCreateNestedManyWithoutUserInput
    batches?: BatchJobCreateNestedManyWithoutUserInput
    templates?: ProcessingTemplateCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    apiKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: VideoJobUncheckedCreateNestedManyWithoutUserInput
    batches?: BatchJobUncheckedCreateNestedManyWithoutUserInput
    templates?: ProcessingTemplateUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: VideoJobUpdateManyWithoutUserNestedInput
    batches?: BatchJobUpdateManyWithoutUserNestedInput
    templates?: ProcessingTemplateUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: VideoJobUncheckedUpdateManyWithoutUserNestedInput
    batches?: BatchJobUncheckedUpdateManyWithoutUserNestedInput
    templates?: ProcessingTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    apiKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoJobCreateInput = {
    id?: string
    originalName: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
    user?: UserCreateNestedOneWithoutJobsInput
    variants?: VideoVariantCreateNestedManyWithoutVideoJobInput
    batchJob?: BatchJobCreateNestedOneWithoutJobsInput
  }

  export type VideoJobUncheckedCreateInput = {
    id?: string
    originalName: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    userId?: string | null
    batchJobId?: string | null
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
    variants?: VideoVariantUncheckedCreateNestedManyWithoutVideoJobInput
  }

  export type VideoJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
    user?: UserUpdateOneWithoutJobsNestedInput
    variants?: VideoVariantUpdateManyWithoutVideoJobNestedInput
    batchJob?: BatchJobUpdateOneWithoutJobsNestedInput
  }

  export type VideoJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    batchJobId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
    variants?: VideoVariantUncheckedUpdateManyWithoutVideoJobNestedInput
  }

  export type VideoJobCreateManyInput = {
    id?: string
    originalName: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    userId?: string | null
    batchJobId?: string | null
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
  }

  export type VideoJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
  }

  export type VideoJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    batchJobId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
  }

  export type VideoVariantCreateInput = {
    id?: string
    name: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    processingTime?: number | null
    fileSize?: bigint | number | null
    duration?: number | null
    resolution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variantOptions?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
    videoJob: VideoJobCreateNestedOneWithoutVariantsInput
  }

  export type VideoVariantUncheckedCreateInput = {
    id?: string
    name: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    processingTime?: number | null
    fileSize?: bigint | number | null
    duration?: number | null
    resolution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variantOptions?: NullableJsonNullValueInput | InputJsonValue
    videoJobId: string
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
  }

  export type VideoVariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantOptions?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
    videoJob?: VideoJobUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type VideoVariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantOptions?: NullableJsonNullValueInput | InputJsonValue
    videoJobId?: StringFieldUpdateOperationsInput | string
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
  }

  export type VideoVariantCreateManyInput = {
    id?: string
    name: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    processingTime?: number | null
    fileSize?: bigint | number | null
    duration?: number | null
    resolution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variantOptions?: NullableJsonNullValueInput | InputJsonValue
    videoJobId: string
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
  }

  export type VideoVariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantOptions?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
  }

  export type VideoVariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantOptions?: NullableJsonNullValueInput | InputJsonValue
    videoJobId?: StringFieldUpdateOperationsInput | string
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
  }

  export type BatchJobCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.BatchStatus
    totalJobs?: number
    completedJobs?: number
    failedJobs?: number
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
    user?: UserCreateNestedOneWithoutBatchesInput
    jobs?: VideoJobCreateNestedManyWithoutBatchJobInput
  }

  export type BatchJobUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.BatchStatus
    totalJobs?: number
    completedJobs?: number
    failedJobs?: number
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
    userId?: string | null
    jobs?: VideoJobUncheckedCreateNestedManyWithoutBatchJobInput
  }

  export type BatchJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    totalJobs?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneWithoutBatchesNestedInput
    jobs?: VideoJobUpdateManyWithoutBatchJobNestedInput
  }

  export type BatchJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    totalJobs?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    jobs?: VideoJobUncheckedUpdateManyWithoutBatchJobNestedInput
  }

  export type BatchJobCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.BatchStatus
    totalJobs?: number
    completedJobs?: number
    failedJobs?: number
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
    userId?: string | null
  }

  export type BatchJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    totalJobs?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BatchJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    totalJobs?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessingTemplateCreateInput = {
    id?: string
    name: string
    description?: string | null
    templateOptions: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    usageCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutTemplatesInput
  }

  export type ProcessingTemplateUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    templateOptions: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    usageCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
  }

  export type ProcessingTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    templateOptions?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutTemplatesNestedInput
  }

  export type ProcessingTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    templateOptions?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessingTemplateCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    templateOptions: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    usageCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
  }

  export type ProcessingTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    templateOptions?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessingTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    templateOptions?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemMetricCreateInput = {
    id?: string
    metricType: $Enums.MetricType
    value: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type SystemMetricUncheckedCreateInput = {
    id?: string
    metricType: $Enums.MetricType
    value: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type SystemMetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemMetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemMetricCreateManyInput = {
    id?: string
    metricType: $Enums.MetricType
    value: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type SystemMetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemMetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type VideoJobListRelationFilter = {
    every?: VideoJobWhereInput
    some?: VideoJobWhereInput
    none?: VideoJobWhereInput
  }

  export type BatchJobListRelationFilter = {
    every?: BatchJobWhereInput
    some?: BatchJobWhereInput
    none?: BatchJobWhereInput
  }

  export type ProcessingTemplateListRelationFilter = {
    every?: ProcessingTemplateWhereInput
    some?: ProcessingTemplateWhereInput
    none?: ProcessingTemplateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VideoJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BatchJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessingTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumCloudProviderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CloudProvider | EnumCloudProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.CloudProvider[] | ListEnumCloudProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CloudProvider[] | ListEnumCloudProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCloudProviderNullableFilter<$PrismaModel> | $Enums.CloudProvider | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type VideoVariantListRelationFilter = {
    every?: VideoVariantWhereInput
    some?: VideoVariantWhereInput
    none?: VideoVariantWhereInput
  }

  export type BatchJobNullableScalarRelationFilter = {
    is?: BatchJobWhereInput | null
    isNot?: BatchJobWhereInput | null
  }

  export type VideoVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoJobCountOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    outputPath?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    options?: SortOrder
    userId?: SortOrder
    batchJobId?: SortOrder
    cloudStorageUrl?: SortOrder
    cloudProvider?: SortOrder
  }

  export type VideoJobAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type VideoJobMaxOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    outputPath?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    batchJobId?: SortOrder
    cloudStorageUrl?: SortOrder
    cloudProvider?: SortOrder
  }

  export type VideoJobMinOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    filePath?: SortOrder
    outputPath?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    batchJobId?: SortOrder
    cloudStorageUrl?: SortOrder
    cloudProvider?: SortOrder
  }

  export type VideoJobSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumCloudProviderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CloudProvider | EnumCloudProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.CloudProvider[] | ListEnumCloudProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CloudProvider[] | ListEnumCloudProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCloudProviderNullableWithAggregatesFilter<$PrismaModel> | $Enums.CloudProvider | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCloudProviderNullableFilter<$PrismaModel>
    _max?: NestedEnumCloudProviderNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type VideoJobScalarRelationFilter = {
    is?: VideoJobWhereInput
    isNot?: VideoJobWhereInput
  }

  export type VideoVariantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filePath?: SortOrder
    outputPath?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    errorMessage?: SortOrder
    processingTime?: SortOrder
    fileSize?: SortOrder
    duration?: SortOrder
    resolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    variantOptions?: SortOrder
    videoJobId?: SortOrder
    cloudStorageUrl?: SortOrder
    cloudProvider?: SortOrder
  }

  export type VideoVariantAvgOrderByAggregateInput = {
    progress?: SortOrder
    processingTime?: SortOrder
    fileSize?: SortOrder
    duration?: SortOrder
  }

  export type VideoVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filePath?: SortOrder
    outputPath?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    errorMessage?: SortOrder
    processingTime?: SortOrder
    fileSize?: SortOrder
    duration?: SortOrder
    resolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videoJobId?: SortOrder
    cloudStorageUrl?: SortOrder
    cloudProvider?: SortOrder
  }

  export type VideoVariantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filePath?: SortOrder
    outputPath?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    errorMessage?: SortOrder
    processingTime?: SortOrder
    fileSize?: SortOrder
    duration?: SortOrder
    resolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videoJobId?: SortOrder
    cloudStorageUrl?: SortOrder
    cloudProvider?: SortOrder
  }

  export type VideoVariantSumOrderByAggregateInput = {
    progress?: SortOrder
    processingTime?: SortOrder
    fileSize?: SortOrder
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type EnumBatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | EnumBatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchStatusFilter<$PrismaModel> | $Enums.BatchStatus
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

  export type BatchJobCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    totalJobs?: SortOrder
    completedJobs?: SortOrder
    failedJobs?: SortOrder
    progress?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchOptions?: SortOrder
    userId?: SortOrder
  }

  export type BatchJobAvgOrderByAggregateInput = {
    totalJobs?: SortOrder
    completedJobs?: SortOrder
    failedJobs?: SortOrder
    progress?: SortOrder
  }

  export type BatchJobMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    totalJobs?: SortOrder
    completedJobs?: SortOrder
    failedJobs?: SortOrder
    progress?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BatchJobMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    totalJobs?: SortOrder
    completedJobs?: SortOrder
    failedJobs?: SortOrder
    progress?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BatchJobSumOrderByAggregateInput = {
    totalJobs?: SortOrder
    completedJobs?: SortOrder
    failedJobs?: SortOrder
    progress?: SortOrder
  }

  export type EnumBatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | EnumBatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.BatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBatchStatusFilter<$PrismaModel>
    _max?: NestedEnumBatchStatusFilter<$PrismaModel>
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProcessingTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    templateOptions?: SortOrder
    isPublic?: SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type ProcessingTemplateAvgOrderByAggregateInput = {
    usageCount?: SortOrder
  }

  export type ProcessingTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type ProcessingTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type ProcessingTemplateSumOrderByAggregateInput = {
    usageCount?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeFilter<$PrismaModel> | $Enums.MetricType
  }

  export type SystemMetricCountOrderByAggregateInput = {
    id?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    metadata?: SortOrder
    timestamp?: SortOrder
  }

  export type SystemMetricAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type SystemMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
  }

  export type SystemMetricMinOrderByAggregateInput = {
    id?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
  }

  export type SystemMetricSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type EnumMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.MetricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricTypeFilter<$PrismaModel>
    _max?: NestedEnumMetricTypeFilter<$PrismaModel>
  }

  export type VideoJobCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoJobCreateWithoutUserInput, VideoJobUncheckedCreateWithoutUserInput> | VideoJobCreateWithoutUserInput[] | VideoJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoJobCreateOrConnectWithoutUserInput | VideoJobCreateOrConnectWithoutUserInput[]
    createMany?: VideoJobCreateManyUserInputEnvelope
    connect?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
  }

  export type BatchJobCreateNestedManyWithoutUserInput = {
    create?: XOR<BatchJobCreateWithoutUserInput, BatchJobUncheckedCreateWithoutUserInput> | BatchJobCreateWithoutUserInput[] | BatchJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BatchJobCreateOrConnectWithoutUserInput | BatchJobCreateOrConnectWithoutUserInput[]
    createMany?: BatchJobCreateManyUserInputEnvelope
    connect?: BatchJobWhereUniqueInput | BatchJobWhereUniqueInput[]
  }

  export type ProcessingTemplateCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProcessingTemplateCreateWithoutCreatedByInput, ProcessingTemplateUncheckedCreateWithoutCreatedByInput> | ProcessingTemplateCreateWithoutCreatedByInput[] | ProcessingTemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProcessingTemplateCreateOrConnectWithoutCreatedByInput | ProcessingTemplateCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProcessingTemplateCreateManyCreatedByInputEnvelope
    connect?: ProcessingTemplateWhereUniqueInput | ProcessingTemplateWhereUniqueInput[]
  }

  export type VideoJobUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoJobCreateWithoutUserInput, VideoJobUncheckedCreateWithoutUserInput> | VideoJobCreateWithoutUserInput[] | VideoJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoJobCreateOrConnectWithoutUserInput | VideoJobCreateOrConnectWithoutUserInput[]
    createMany?: VideoJobCreateManyUserInputEnvelope
    connect?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
  }

  export type BatchJobUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BatchJobCreateWithoutUserInput, BatchJobUncheckedCreateWithoutUserInput> | BatchJobCreateWithoutUserInput[] | BatchJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BatchJobCreateOrConnectWithoutUserInput | BatchJobCreateOrConnectWithoutUserInput[]
    createMany?: BatchJobCreateManyUserInputEnvelope
    connect?: BatchJobWhereUniqueInput | BatchJobWhereUniqueInput[]
  }

  export type ProcessingTemplateUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProcessingTemplateCreateWithoutCreatedByInput, ProcessingTemplateUncheckedCreateWithoutCreatedByInput> | ProcessingTemplateCreateWithoutCreatedByInput[] | ProcessingTemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProcessingTemplateCreateOrConnectWithoutCreatedByInput | ProcessingTemplateCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProcessingTemplateCreateManyCreatedByInputEnvelope
    connect?: ProcessingTemplateWhereUniqueInput | ProcessingTemplateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VideoJobUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoJobCreateWithoutUserInput, VideoJobUncheckedCreateWithoutUserInput> | VideoJobCreateWithoutUserInput[] | VideoJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoJobCreateOrConnectWithoutUserInput | VideoJobCreateOrConnectWithoutUserInput[]
    upsert?: VideoJobUpsertWithWhereUniqueWithoutUserInput | VideoJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoJobCreateManyUserInputEnvelope
    set?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    disconnect?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    delete?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    connect?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    update?: VideoJobUpdateWithWhereUniqueWithoutUserInput | VideoJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoJobUpdateManyWithWhereWithoutUserInput | VideoJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoJobScalarWhereInput | VideoJobScalarWhereInput[]
  }

  export type BatchJobUpdateManyWithoutUserNestedInput = {
    create?: XOR<BatchJobCreateWithoutUserInput, BatchJobUncheckedCreateWithoutUserInput> | BatchJobCreateWithoutUserInput[] | BatchJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BatchJobCreateOrConnectWithoutUserInput | BatchJobCreateOrConnectWithoutUserInput[]
    upsert?: BatchJobUpsertWithWhereUniqueWithoutUserInput | BatchJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BatchJobCreateManyUserInputEnvelope
    set?: BatchJobWhereUniqueInput | BatchJobWhereUniqueInput[]
    disconnect?: BatchJobWhereUniqueInput | BatchJobWhereUniqueInput[]
    delete?: BatchJobWhereUniqueInput | BatchJobWhereUniqueInput[]
    connect?: BatchJobWhereUniqueInput | BatchJobWhereUniqueInput[]
    update?: BatchJobUpdateWithWhereUniqueWithoutUserInput | BatchJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BatchJobUpdateManyWithWhereWithoutUserInput | BatchJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BatchJobScalarWhereInput | BatchJobScalarWhereInput[]
  }

  export type ProcessingTemplateUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProcessingTemplateCreateWithoutCreatedByInput, ProcessingTemplateUncheckedCreateWithoutCreatedByInput> | ProcessingTemplateCreateWithoutCreatedByInput[] | ProcessingTemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProcessingTemplateCreateOrConnectWithoutCreatedByInput | ProcessingTemplateCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProcessingTemplateUpsertWithWhereUniqueWithoutCreatedByInput | ProcessingTemplateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProcessingTemplateCreateManyCreatedByInputEnvelope
    set?: ProcessingTemplateWhereUniqueInput | ProcessingTemplateWhereUniqueInput[]
    disconnect?: ProcessingTemplateWhereUniqueInput | ProcessingTemplateWhereUniqueInput[]
    delete?: ProcessingTemplateWhereUniqueInput | ProcessingTemplateWhereUniqueInput[]
    connect?: ProcessingTemplateWhereUniqueInput | ProcessingTemplateWhereUniqueInput[]
    update?: ProcessingTemplateUpdateWithWhereUniqueWithoutCreatedByInput | ProcessingTemplateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProcessingTemplateUpdateManyWithWhereWithoutCreatedByInput | ProcessingTemplateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProcessingTemplateScalarWhereInput | ProcessingTemplateScalarWhereInput[]
  }

  export type VideoJobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoJobCreateWithoutUserInput, VideoJobUncheckedCreateWithoutUserInput> | VideoJobCreateWithoutUserInput[] | VideoJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoJobCreateOrConnectWithoutUserInput | VideoJobCreateOrConnectWithoutUserInput[]
    upsert?: VideoJobUpsertWithWhereUniqueWithoutUserInput | VideoJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoJobCreateManyUserInputEnvelope
    set?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    disconnect?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    delete?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    connect?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    update?: VideoJobUpdateWithWhereUniqueWithoutUserInput | VideoJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoJobUpdateManyWithWhereWithoutUserInput | VideoJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoJobScalarWhereInput | VideoJobScalarWhereInput[]
  }

  export type BatchJobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BatchJobCreateWithoutUserInput, BatchJobUncheckedCreateWithoutUserInput> | BatchJobCreateWithoutUserInput[] | BatchJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BatchJobCreateOrConnectWithoutUserInput | BatchJobCreateOrConnectWithoutUserInput[]
    upsert?: BatchJobUpsertWithWhereUniqueWithoutUserInput | BatchJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BatchJobCreateManyUserInputEnvelope
    set?: BatchJobWhereUniqueInput | BatchJobWhereUniqueInput[]
    disconnect?: BatchJobWhereUniqueInput | BatchJobWhereUniqueInput[]
    delete?: BatchJobWhereUniqueInput | BatchJobWhereUniqueInput[]
    connect?: BatchJobWhereUniqueInput | BatchJobWhereUniqueInput[]
    update?: BatchJobUpdateWithWhereUniqueWithoutUserInput | BatchJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BatchJobUpdateManyWithWhereWithoutUserInput | BatchJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BatchJobScalarWhereInput | BatchJobScalarWhereInput[]
  }

  export type ProcessingTemplateUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProcessingTemplateCreateWithoutCreatedByInput, ProcessingTemplateUncheckedCreateWithoutCreatedByInput> | ProcessingTemplateCreateWithoutCreatedByInput[] | ProcessingTemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProcessingTemplateCreateOrConnectWithoutCreatedByInput | ProcessingTemplateCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProcessingTemplateUpsertWithWhereUniqueWithoutCreatedByInput | ProcessingTemplateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProcessingTemplateCreateManyCreatedByInputEnvelope
    set?: ProcessingTemplateWhereUniqueInput | ProcessingTemplateWhereUniqueInput[]
    disconnect?: ProcessingTemplateWhereUniqueInput | ProcessingTemplateWhereUniqueInput[]
    delete?: ProcessingTemplateWhereUniqueInput | ProcessingTemplateWhereUniqueInput[]
    connect?: ProcessingTemplateWhereUniqueInput | ProcessingTemplateWhereUniqueInput[]
    update?: ProcessingTemplateUpdateWithWhereUniqueWithoutCreatedByInput | ProcessingTemplateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProcessingTemplateUpdateManyWithWhereWithoutCreatedByInput | ProcessingTemplateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProcessingTemplateScalarWhereInput | ProcessingTemplateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutJobsInput = {
    create?: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobsInput
    connect?: UserWhereUniqueInput
  }

  export type VideoVariantCreateNestedManyWithoutVideoJobInput = {
    create?: XOR<VideoVariantCreateWithoutVideoJobInput, VideoVariantUncheckedCreateWithoutVideoJobInput> | VideoVariantCreateWithoutVideoJobInput[] | VideoVariantUncheckedCreateWithoutVideoJobInput[]
    connectOrCreate?: VideoVariantCreateOrConnectWithoutVideoJobInput | VideoVariantCreateOrConnectWithoutVideoJobInput[]
    createMany?: VideoVariantCreateManyVideoJobInputEnvelope
    connect?: VideoVariantWhereUniqueInput | VideoVariantWhereUniqueInput[]
  }

  export type BatchJobCreateNestedOneWithoutJobsInput = {
    create?: XOR<BatchJobCreateWithoutJobsInput, BatchJobUncheckedCreateWithoutJobsInput>
    connectOrCreate?: BatchJobCreateOrConnectWithoutJobsInput
    connect?: BatchJobWhereUniqueInput
  }

  export type VideoVariantUncheckedCreateNestedManyWithoutVideoJobInput = {
    create?: XOR<VideoVariantCreateWithoutVideoJobInput, VideoVariantUncheckedCreateWithoutVideoJobInput> | VideoVariantCreateWithoutVideoJobInput[] | VideoVariantUncheckedCreateWithoutVideoJobInput[]
    connectOrCreate?: VideoVariantCreateOrConnectWithoutVideoJobInput | VideoVariantCreateOrConnectWithoutVideoJobInput[]
    createMany?: VideoVariantCreateManyVideoJobInputEnvelope
    connect?: VideoVariantWhereUniqueInput | VideoVariantWhereUniqueInput[]
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumCloudProviderFieldUpdateOperationsInput = {
    set?: $Enums.CloudProvider | null
  }

  export type UserUpdateOneWithoutJobsNestedInput = {
    create?: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobsInput
    upsert?: UserUpsertWithoutJobsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobsInput, UserUpdateWithoutJobsInput>, UserUncheckedUpdateWithoutJobsInput>
  }

  export type VideoVariantUpdateManyWithoutVideoJobNestedInput = {
    create?: XOR<VideoVariantCreateWithoutVideoJobInput, VideoVariantUncheckedCreateWithoutVideoJobInput> | VideoVariantCreateWithoutVideoJobInput[] | VideoVariantUncheckedCreateWithoutVideoJobInput[]
    connectOrCreate?: VideoVariantCreateOrConnectWithoutVideoJobInput | VideoVariantCreateOrConnectWithoutVideoJobInput[]
    upsert?: VideoVariantUpsertWithWhereUniqueWithoutVideoJobInput | VideoVariantUpsertWithWhereUniqueWithoutVideoJobInput[]
    createMany?: VideoVariantCreateManyVideoJobInputEnvelope
    set?: VideoVariantWhereUniqueInput | VideoVariantWhereUniqueInput[]
    disconnect?: VideoVariantWhereUniqueInput | VideoVariantWhereUniqueInput[]
    delete?: VideoVariantWhereUniqueInput | VideoVariantWhereUniqueInput[]
    connect?: VideoVariantWhereUniqueInput | VideoVariantWhereUniqueInput[]
    update?: VideoVariantUpdateWithWhereUniqueWithoutVideoJobInput | VideoVariantUpdateWithWhereUniqueWithoutVideoJobInput[]
    updateMany?: VideoVariantUpdateManyWithWhereWithoutVideoJobInput | VideoVariantUpdateManyWithWhereWithoutVideoJobInput[]
    deleteMany?: VideoVariantScalarWhereInput | VideoVariantScalarWhereInput[]
  }

  export type BatchJobUpdateOneWithoutJobsNestedInput = {
    create?: XOR<BatchJobCreateWithoutJobsInput, BatchJobUncheckedCreateWithoutJobsInput>
    connectOrCreate?: BatchJobCreateOrConnectWithoutJobsInput
    upsert?: BatchJobUpsertWithoutJobsInput
    disconnect?: BatchJobWhereInput | boolean
    delete?: BatchJobWhereInput | boolean
    connect?: BatchJobWhereUniqueInput
    update?: XOR<XOR<BatchJobUpdateToOneWithWhereWithoutJobsInput, BatchJobUpdateWithoutJobsInput>, BatchJobUncheckedUpdateWithoutJobsInput>
  }

  export type VideoVariantUncheckedUpdateManyWithoutVideoJobNestedInput = {
    create?: XOR<VideoVariantCreateWithoutVideoJobInput, VideoVariantUncheckedCreateWithoutVideoJobInput> | VideoVariantCreateWithoutVideoJobInput[] | VideoVariantUncheckedCreateWithoutVideoJobInput[]
    connectOrCreate?: VideoVariantCreateOrConnectWithoutVideoJobInput | VideoVariantCreateOrConnectWithoutVideoJobInput[]
    upsert?: VideoVariantUpsertWithWhereUniqueWithoutVideoJobInput | VideoVariantUpsertWithWhereUniqueWithoutVideoJobInput[]
    createMany?: VideoVariantCreateManyVideoJobInputEnvelope
    set?: VideoVariantWhereUniqueInput | VideoVariantWhereUniqueInput[]
    disconnect?: VideoVariantWhereUniqueInput | VideoVariantWhereUniqueInput[]
    delete?: VideoVariantWhereUniqueInput | VideoVariantWhereUniqueInput[]
    connect?: VideoVariantWhereUniqueInput | VideoVariantWhereUniqueInput[]
    update?: VideoVariantUpdateWithWhereUniqueWithoutVideoJobInput | VideoVariantUpdateWithWhereUniqueWithoutVideoJobInput[]
    updateMany?: VideoVariantUpdateManyWithWhereWithoutVideoJobInput | VideoVariantUpdateManyWithWhereWithoutVideoJobInput[]
    deleteMany?: VideoVariantScalarWhereInput | VideoVariantScalarWhereInput[]
  }

  export type VideoJobCreateNestedOneWithoutVariantsInput = {
    create?: XOR<VideoJobCreateWithoutVariantsInput, VideoJobUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: VideoJobCreateOrConnectWithoutVariantsInput
    connect?: VideoJobWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VideoJobUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<VideoJobCreateWithoutVariantsInput, VideoJobUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: VideoJobCreateOrConnectWithoutVariantsInput
    upsert?: VideoJobUpsertWithoutVariantsInput
    connect?: VideoJobWhereUniqueInput
    update?: XOR<XOR<VideoJobUpdateToOneWithWhereWithoutVariantsInput, VideoJobUpdateWithoutVariantsInput>, VideoJobUncheckedUpdateWithoutVariantsInput>
  }

  export type UserCreateNestedOneWithoutBatchesInput = {
    create?: XOR<UserCreateWithoutBatchesInput, UserUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBatchesInput
    connect?: UserWhereUniqueInput
  }

  export type VideoJobCreateNestedManyWithoutBatchJobInput = {
    create?: XOR<VideoJobCreateWithoutBatchJobInput, VideoJobUncheckedCreateWithoutBatchJobInput> | VideoJobCreateWithoutBatchJobInput[] | VideoJobUncheckedCreateWithoutBatchJobInput[]
    connectOrCreate?: VideoJobCreateOrConnectWithoutBatchJobInput | VideoJobCreateOrConnectWithoutBatchJobInput[]
    createMany?: VideoJobCreateManyBatchJobInputEnvelope
    connect?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
  }

  export type VideoJobUncheckedCreateNestedManyWithoutBatchJobInput = {
    create?: XOR<VideoJobCreateWithoutBatchJobInput, VideoJobUncheckedCreateWithoutBatchJobInput> | VideoJobCreateWithoutBatchJobInput[] | VideoJobUncheckedCreateWithoutBatchJobInput[]
    connectOrCreate?: VideoJobCreateOrConnectWithoutBatchJobInput | VideoJobCreateOrConnectWithoutBatchJobInput[]
    createMany?: VideoJobCreateManyBatchJobInputEnvelope
    connect?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
  }

  export type EnumBatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.BatchStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutBatchesNestedInput = {
    create?: XOR<UserCreateWithoutBatchesInput, UserUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBatchesInput
    upsert?: UserUpsertWithoutBatchesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBatchesInput, UserUpdateWithoutBatchesInput>, UserUncheckedUpdateWithoutBatchesInput>
  }

  export type VideoJobUpdateManyWithoutBatchJobNestedInput = {
    create?: XOR<VideoJobCreateWithoutBatchJobInput, VideoJobUncheckedCreateWithoutBatchJobInput> | VideoJobCreateWithoutBatchJobInput[] | VideoJobUncheckedCreateWithoutBatchJobInput[]
    connectOrCreate?: VideoJobCreateOrConnectWithoutBatchJobInput | VideoJobCreateOrConnectWithoutBatchJobInput[]
    upsert?: VideoJobUpsertWithWhereUniqueWithoutBatchJobInput | VideoJobUpsertWithWhereUniqueWithoutBatchJobInput[]
    createMany?: VideoJobCreateManyBatchJobInputEnvelope
    set?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    disconnect?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    delete?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    connect?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    update?: VideoJobUpdateWithWhereUniqueWithoutBatchJobInput | VideoJobUpdateWithWhereUniqueWithoutBatchJobInput[]
    updateMany?: VideoJobUpdateManyWithWhereWithoutBatchJobInput | VideoJobUpdateManyWithWhereWithoutBatchJobInput[]
    deleteMany?: VideoJobScalarWhereInput | VideoJobScalarWhereInput[]
  }

  export type VideoJobUncheckedUpdateManyWithoutBatchJobNestedInput = {
    create?: XOR<VideoJobCreateWithoutBatchJobInput, VideoJobUncheckedCreateWithoutBatchJobInput> | VideoJobCreateWithoutBatchJobInput[] | VideoJobUncheckedCreateWithoutBatchJobInput[]
    connectOrCreate?: VideoJobCreateOrConnectWithoutBatchJobInput | VideoJobCreateOrConnectWithoutBatchJobInput[]
    upsert?: VideoJobUpsertWithWhereUniqueWithoutBatchJobInput | VideoJobUpsertWithWhereUniqueWithoutBatchJobInput[]
    createMany?: VideoJobCreateManyBatchJobInputEnvelope
    set?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    disconnect?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    delete?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    connect?: VideoJobWhereUniqueInput | VideoJobWhereUniqueInput[]
    update?: VideoJobUpdateWithWhereUniqueWithoutBatchJobInput | VideoJobUpdateWithWhereUniqueWithoutBatchJobInput[]
    updateMany?: VideoJobUpdateManyWithWhereWithoutBatchJobInput | VideoJobUpdateManyWithWhereWithoutBatchJobInput[]
    deleteMany?: VideoJobScalarWhereInput | VideoJobScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    upsert?: UserUpsertWithoutTemplatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemplatesInput, UserUpdateWithoutTemplatesInput>, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type EnumMetricTypeFieldUpdateOperationsInput = {
    set?: $Enums.MetricType
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

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCloudProviderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CloudProvider | EnumCloudProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.CloudProvider[] | ListEnumCloudProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CloudProvider[] | ListEnumCloudProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCloudProviderNullableFilter<$PrismaModel> | $Enums.CloudProvider | null
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumCloudProviderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CloudProvider | EnumCloudProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.CloudProvider[] | ListEnumCloudProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CloudProvider[] | ListEnumCloudProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCloudProviderNullableWithAggregatesFilter<$PrismaModel> | $Enums.CloudProvider | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCloudProviderNullableFilter<$PrismaModel>
    _max?: NestedEnumCloudProviderNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedEnumBatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | EnumBatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchStatusFilter<$PrismaModel> | $Enums.BatchStatus
  }

  export type NestedEnumBatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | EnumBatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.BatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBatchStatusFilter<$PrismaModel>
    _max?: NestedEnumBatchStatusFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeFilter<$PrismaModel> | $Enums.MetricType
  }

  export type NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.MetricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricTypeFilter<$PrismaModel>
    _max?: NestedEnumMetricTypeFilter<$PrismaModel>
  }

  export type VideoJobCreateWithoutUserInput = {
    id?: string
    originalName: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
    variants?: VideoVariantCreateNestedManyWithoutVideoJobInput
    batchJob?: BatchJobCreateNestedOneWithoutJobsInput
  }

  export type VideoJobUncheckedCreateWithoutUserInput = {
    id?: string
    originalName: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    batchJobId?: string | null
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
    variants?: VideoVariantUncheckedCreateNestedManyWithoutVideoJobInput
  }

  export type VideoJobCreateOrConnectWithoutUserInput = {
    where: VideoJobWhereUniqueInput
    create: XOR<VideoJobCreateWithoutUserInput, VideoJobUncheckedCreateWithoutUserInput>
  }

  export type VideoJobCreateManyUserInputEnvelope = {
    data: VideoJobCreateManyUserInput | VideoJobCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BatchJobCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.BatchStatus
    totalJobs?: number
    completedJobs?: number
    failedJobs?: number
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
    jobs?: VideoJobCreateNestedManyWithoutBatchJobInput
  }

  export type BatchJobUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.BatchStatus
    totalJobs?: number
    completedJobs?: number
    failedJobs?: number
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
    jobs?: VideoJobUncheckedCreateNestedManyWithoutBatchJobInput
  }

  export type BatchJobCreateOrConnectWithoutUserInput = {
    where: BatchJobWhereUniqueInput
    create: XOR<BatchJobCreateWithoutUserInput, BatchJobUncheckedCreateWithoutUserInput>
  }

  export type BatchJobCreateManyUserInputEnvelope = {
    data: BatchJobCreateManyUserInput | BatchJobCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProcessingTemplateCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    templateOptions: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    usageCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessingTemplateUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    templateOptions: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    usageCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessingTemplateCreateOrConnectWithoutCreatedByInput = {
    where: ProcessingTemplateWhereUniqueInput
    create: XOR<ProcessingTemplateCreateWithoutCreatedByInput, ProcessingTemplateUncheckedCreateWithoutCreatedByInput>
  }

  export type ProcessingTemplateCreateManyCreatedByInputEnvelope = {
    data: ProcessingTemplateCreateManyCreatedByInput | ProcessingTemplateCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type VideoJobUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoJobWhereUniqueInput
    update: XOR<VideoJobUpdateWithoutUserInput, VideoJobUncheckedUpdateWithoutUserInput>
    create: XOR<VideoJobCreateWithoutUserInput, VideoJobUncheckedCreateWithoutUserInput>
  }

  export type VideoJobUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoJobWhereUniqueInput
    data: XOR<VideoJobUpdateWithoutUserInput, VideoJobUncheckedUpdateWithoutUserInput>
  }

  export type VideoJobUpdateManyWithWhereWithoutUserInput = {
    where: VideoJobScalarWhereInput
    data: XOR<VideoJobUpdateManyMutationInput, VideoJobUncheckedUpdateManyWithoutUserInput>
  }

  export type VideoJobScalarWhereInput = {
    AND?: VideoJobScalarWhereInput | VideoJobScalarWhereInput[]
    OR?: VideoJobScalarWhereInput[]
    NOT?: VideoJobScalarWhereInput | VideoJobScalarWhereInput[]
    id?: StringFilter<"VideoJob"> | string
    originalName?: StringFilter<"VideoJob"> | string
    filePath?: StringFilter<"VideoJob"> | string
    outputPath?: StringNullableFilter<"VideoJob"> | string | null
    status?: EnumJobStatusFilter<"VideoJob"> | $Enums.JobStatus
    progress?: FloatFilter<"VideoJob"> | number
    errorMessage?: StringNullableFilter<"VideoJob"> | string | null
    startedAt?: DateTimeNullableFilter<"VideoJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"VideoJob"> | Date | string | null
    createdAt?: DateTimeFilter<"VideoJob"> | Date | string
    updatedAt?: DateTimeFilter<"VideoJob"> | Date | string
    options?: JsonNullableFilter<"VideoJob">
    userId?: StringNullableFilter<"VideoJob"> | string | null
    batchJobId?: StringNullableFilter<"VideoJob"> | string | null
    cloudStorageUrl?: StringNullableFilter<"VideoJob"> | string | null
    cloudProvider?: EnumCloudProviderNullableFilter<"VideoJob"> | $Enums.CloudProvider | null
  }

  export type BatchJobUpsertWithWhereUniqueWithoutUserInput = {
    where: BatchJobWhereUniqueInput
    update: XOR<BatchJobUpdateWithoutUserInput, BatchJobUncheckedUpdateWithoutUserInput>
    create: XOR<BatchJobCreateWithoutUserInput, BatchJobUncheckedCreateWithoutUserInput>
  }

  export type BatchJobUpdateWithWhereUniqueWithoutUserInput = {
    where: BatchJobWhereUniqueInput
    data: XOR<BatchJobUpdateWithoutUserInput, BatchJobUncheckedUpdateWithoutUserInput>
  }

  export type BatchJobUpdateManyWithWhereWithoutUserInput = {
    where: BatchJobScalarWhereInput
    data: XOR<BatchJobUpdateManyMutationInput, BatchJobUncheckedUpdateManyWithoutUserInput>
  }

  export type BatchJobScalarWhereInput = {
    AND?: BatchJobScalarWhereInput | BatchJobScalarWhereInput[]
    OR?: BatchJobScalarWhereInput[]
    NOT?: BatchJobScalarWhereInput | BatchJobScalarWhereInput[]
    id?: StringFilter<"BatchJob"> | string
    name?: StringFilter<"BatchJob"> | string
    description?: StringNullableFilter<"BatchJob"> | string | null
    status?: EnumBatchStatusFilter<"BatchJob"> | $Enums.BatchStatus
    totalJobs?: IntFilter<"BatchJob"> | number
    completedJobs?: IntFilter<"BatchJob"> | number
    failedJobs?: IntFilter<"BatchJob"> | number
    progress?: FloatFilter<"BatchJob"> | number
    startedAt?: DateTimeNullableFilter<"BatchJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"BatchJob"> | Date | string | null
    createdAt?: DateTimeFilter<"BatchJob"> | Date | string
    updatedAt?: DateTimeFilter<"BatchJob"> | Date | string
    batchOptions?: JsonNullableFilter<"BatchJob">
    userId?: StringNullableFilter<"BatchJob"> | string | null
  }

  export type ProcessingTemplateUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ProcessingTemplateWhereUniqueInput
    update: XOR<ProcessingTemplateUpdateWithoutCreatedByInput, ProcessingTemplateUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ProcessingTemplateCreateWithoutCreatedByInput, ProcessingTemplateUncheckedCreateWithoutCreatedByInput>
  }

  export type ProcessingTemplateUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ProcessingTemplateWhereUniqueInput
    data: XOR<ProcessingTemplateUpdateWithoutCreatedByInput, ProcessingTemplateUncheckedUpdateWithoutCreatedByInput>
  }

  export type ProcessingTemplateUpdateManyWithWhereWithoutCreatedByInput = {
    where: ProcessingTemplateScalarWhereInput
    data: XOR<ProcessingTemplateUpdateManyMutationInput, ProcessingTemplateUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ProcessingTemplateScalarWhereInput = {
    AND?: ProcessingTemplateScalarWhereInput | ProcessingTemplateScalarWhereInput[]
    OR?: ProcessingTemplateScalarWhereInput[]
    NOT?: ProcessingTemplateScalarWhereInput | ProcessingTemplateScalarWhereInput[]
    id?: StringFilter<"ProcessingTemplate"> | string
    name?: StringFilter<"ProcessingTemplate"> | string
    description?: StringNullableFilter<"ProcessingTemplate"> | string | null
    templateOptions?: JsonFilter<"ProcessingTemplate">
    isPublic?: BoolFilter<"ProcessingTemplate"> | boolean
    usageCount?: IntFilter<"ProcessingTemplate"> | number
    createdAt?: DateTimeFilter<"ProcessingTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ProcessingTemplate"> | Date | string
    createdById?: StringNullableFilter<"ProcessingTemplate"> | string | null
  }

  export type UserCreateWithoutJobsInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    apiKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchJobCreateNestedManyWithoutUserInput
    templates?: ProcessingTemplateCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutJobsInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    apiKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchJobUncheckedCreateNestedManyWithoutUserInput
    templates?: ProcessingTemplateUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
  }

  export type VideoVariantCreateWithoutVideoJobInput = {
    id?: string
    name: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    processingTime?: number | null
    fileSize?: bigint | number | null
    duration?: number | null
    resolution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variantOptions?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
  }

  export type VideoVariantUncheckedCreateWithoutVideoJobInput = {
    id?: string
    name: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    processingTime?: number | null
    fileSize?: bigint | number | null
    duration?: number | null
    resolution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variantOptions?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
  }

  export type VideoVariantCreateOrConnectWithoutVideoJobInput = {
    where: VideoVariantWhereUniqueInput
    create: XOR<VideoVariantCreateWithoutVideoJobInput, VideoVariantUncheckedCreateWithoutVideoJobInput>
  }

  export type VideoVariantCreateManyVideoJobInputEnvelope = {
    data: VideoVariantCreateManyVideoJobInput | VideoVariantCreateManyVideoJobInput[]
    skipDuplicates?: boolean
  }

  export type BatchJobCreateWithoutJobsInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.BatchStatus
    totalJobs?: number
    completedJobs?: number
    failedJobs?: number
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
    user?: UserCreateNestedOneWithoutBatchesInput
  }

  export type BatchJobUncheckedCreateWithoutJobsInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.BatchStatus
    totalJobs?: number
    completedJobs?: number
    failedJobs?: number
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
    userId?: string | null
  }

  export type BatchJobCreateOrConnectWithoutJobsInput = {
    where: BatchJobWhereUniqueInput
    create: XOR<BatchJobCreateWithoutJobsInput, BatchJobUncheckedCreateWithoutJobsInput>
  }

  export type UserUpsertWithoutJobsInput = {
    update: XOR<UserUpdateWithoutJobsInput, UserUncheckedUpdateWithoutJobsInput>
    create: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobsInput, UserUncheckedUpdateWithoutJobsInput>
  }

  export type UserUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchJobUpdateManyWithoutUserNestedInput
    templates?: ProcessingTemplateUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchJobUncheckedUpdateManyWithoutUserNestedInput
    templates?: ProcessingTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type VideoVariantUpsertWithWhereUniqueWithoutVideoJobInput = {
    where: VideoVariantWhereUniqueInput
    update: XOR<VideoVariantUpdateWithoutVideoJobInput, VideoVariantUncheckedUpdateWithoutVideoJobInput>
    create: XOR<VideoVariantCreateWithoutVideoJobInput, VideoVariantUncheckedCreateWithoutVideoJobInput>
  }

  export type VideoVariantUpdateWithWhereUniqueWithoutVideoJobInput = {
    where: VideoVariantWhereUniqueInput
    data: XOR<VideoVariantUpdateWithoutVideoJobInput, VideoVariantUncheckedUpdateWithoutVideoJobInput>
  }

  export type VideoVariantUpdateManyWithWhereWithoutVideoJobInput = {
    where: VideoVariantScalarWhereInput
    data: XOR<VideoVariantUpdateManyMutationInput, VideoVariantUncheckedUpdateManyWithoutVideoJobInput>
  }

  export type VideoVariantScalarWhereInput = {
    AND?: VideoVariantScalarWhereInput | VideoVariantScalarWhereInput[]
    OR?: VideoVariantScalarWhereInput[]
    NOT?: VideoVariantScalarWhereInput | VideoVariantScalarWhereInput[]
    id?: StringFilter<"VideoVariant"> | string
    name?: StringFilter<"VideoVariant"> | string
    filePath?: StringFilter<"VideoVariant"> | string
    outputPath?: StringNullableFilter<"VideoVariant"> | string | null
    status?: EnumJobStatusFilter<"VideoVariant"> | $Enums.JobStatus
    progress?: FloatFilter<"VideoVariant"> | number
    errorMessage?: StringNullableFilter<"VideoVariant"> | string | null
    processingTime?: IntNullableFilter<"VideoVariant"> | number | null
    fileSize?: BigIntNullableFilter<"VideoVariant"> | bigint | number | null
    duration?: FloatNullableFilter<"VideoVariant"> | number | null
    resolution?: StringNullableFilter<"VideoVariant"> | string | null
    createdAt?: DateTimeFilter<"VideoVariant"> | Date | string
    updatedAt?: DateTimeFilter<"VideoVariant"> | Date | string
    variantOptions?: JsonNullableFilter<"VideoVariant">
    videoJobId?: StringFilter<"VideoVariant"> | string
    cloudStorageUrl?: StringNullableFilter<"VideoVariant"> | string | null
    cloudProvider?: EnumCloudProviderNullableFilter<"VideoVariant"> | $Enums.CloudProvider | null
  }

  export type BatchJobUpsertWithoutJobsInput = {
    update: XOR<BatchJobUpdateWithoutJobsInput, BatchJobUncheckedUpdateWithoutJobsInput>
    create: XOR<BatchJobCreateWithoutJobsInput, BatchJobUncheckedCreateWithoutJobsInput>
    where?: BatchJobWhereInput
  }

  export type BatchJobUpdateToOneWithWhereWithoutJobsInput = {
    where?: BatchJobWhereInput
    data: XOR<BatchJobUpdateWithoutJobsInput, BatchJobUncheckedUpdateWithoutJobsInput>
  }

  export type BatchJobUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    totalJobs?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneWithoutBatchesNestedInput
  }

  export type BatchJobUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    totalJobs?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoJobCreateWithoutVariantsInput = {
    id?: string
    originalName: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
    user?: UserCreateNestedOneWithoutJobsInput
    batchJob?: BatchJobCreateNestedOneWithoutJobsInput
  }

  export type VideoJobUncheckedCreateWithoutVariantsInput = {
    id?: string
    originalName: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    userId?: string | null
    batchJobId?: string | null
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
  }

  export type VideoJobCreateOrConnectWithoutVariantsInput = {
    where: VideoJobWhereUniqueInput
    create: XOR<VideoJobCreateWithoutVariantsInput, VideoJobUncheckedCreateWithoutVariantsInput>
  }

  export type VideoJobUpsertWithoutVariantsInput = {
    update: XOR<VideoJobUpdateWithoutVariantsInput, VideoJobUncheckedUpdateWithoutVariantsInput>
    create: XOR<VideoJobCreateWithoutVariantsInput, VideoJobUncheckedCreateWithoutVariantsInput>
    where?: VideoJobWhereInput
  }

  export type VideoJobUpdateToOneWithWhereWithoutVariantsInput = {
    where?: VideoJobWhereInput
    data: XOR<VideoJobUpdateWithoutVariantsInput, VideoJobUncheckedUpdateWithoutVariantsInput>
  }

  export type VideoJobUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
    user?: UserUpdateOneWithoutJobsNestedInput
    batchJob?: BatchJobUpdateOneWithoutJobsNestedInput
  }

  export type VideoJobUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    batchJobId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
  }

  export type UserCreateWithoutBatchesInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    apiKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: VideoJobCreateNestedManyWithoutUserInput
    templates?: ProcessingTemplateCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutBatchesInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    apiKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: VideoJobUncheckedCreateNestedManyWithoutUserInput
    templates?: ProcessingTemplateUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutBatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBatchesInput, UserUncheckedCreateWithoutBatchesInput>
  }

  export type VideoJobCreateWithoutBatchJobInput = {
    id?: string
    originalName: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
    user?: UserCreateNestedOneWithoutJobsInput
    variants?: VideoVariantCreateNestedManyWithoutVideoJobInput
  }

  export type VideoJobUncheckedCreateWithoutBatchJobInput = {
    id?: string
    originalName: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    userId?: string | null
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
    variants?: VideoVariantUncheckedCreateNestedManyWithoutVideoJobInput
  }

  export type VideoJobCreateOrConnectWithoutBatchJobInput = {
    where: VideoJobWhereUniqueInput
    create: XOR<VideoJobCreateWithoutBatchJobInput, VideoJobUncheckedCreateWithoutBatchJobInput>
  }

  export type VideoJobCreateManyBatchJobInputEnvelope = {
    data: VideoJobCreateManyBatchJobInput | VideoJobCreateManyBatchJobInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBatchesInput = {
    update: XOR<UserUpdateWithoutBatchesInput, UserUncheckedUpdateWithoutBatchesInput>
    create: XOR<UserCreateWithoutBatchesInput, UserUncheckedCreateWithoutBatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBatchesInput, UserUncheckedUpdateWithoutBatchesInput>
  }

  export type UserUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: VideoJobUpdateManyWithoutUserNestedInput
    templates?: ProcessingTemplateUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: VideoJobUncheckedUpdateManyWithoutUserNestedInput
    templates?: ProcessingTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type VideoJobUpsertWithWhereUniqueWithoutBatchJobInput = {
    where: VideoJobWhereUniqueInput
    update: XOR<VideoJobUpdateWithoutBatchJobInput, VideoJobUncheckedUpdateWithoutBatchJobInput>
    create: XOR<VideoJobCreateWithoutBatchJobInput, VideoJobUncheckedCreateWithoutBatchJobInput>
  }

  export type VideoJobUpdateWithWhereUniqueWithoutBatchJobInput = {
    where: VideoJobWhereUniqueInput
    data: XOR<VideoJobUpdateWithoutBatchJobInput, VideoJobUncheckedUpdateWithoutBatchJobInput>
  }

  export type VideoJobUpdateManyWithWhereWithoutBatchJobInput = {
    where: VideoJobScalarWhereInput
    data: XOR<VideoJobUpdateManyMutationInput, VideoJobUncheckedUpdateManyWithoutBatchJobInput>
  }

  export type UserCreateWithoutTemplatesInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    apiKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: VideoJobCreateNestedManyWithoutUserInput
    batches?: BatchJobCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTemplatesInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    apiKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: VideoJobUncheckedCreateNestedManyWithoutUserInput
    batches?: BatchJobUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
  }

  export type UserUpsertWithoutTemplatesInput = {
    update: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: VideoJobUpdateManyWithoutUserNestedInput
    batches?: BatchJobUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: VideoJobUncheckedUpdateManyWithoutUserNestedInput
    batches?: BatchJobUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoJobCreateManyUserInput = {
    id?: string
    originalName: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    batchJobId?: string | null
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
  }

  export type BatchJobCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.BatchStatus
    totalJobs?: number
    completedJobs?: number
    failedJobs?: number
    progress?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProcessingTemplateCreateManyCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    templateOptions: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    usageCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoJobUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
    variants?: VideoVariantUpdateManyWithoutVideoJobNestedInput
    batchJob?: BatchJobUpdateOneWithoutJobsNestedInput
  }

  export type VideoJobUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    batchJobId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
    variants?: VideoVariantUncheckedUpdateManyWithoutVideoJobNestedInput
  }

  export type VideoJobUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    batchJobId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
  }

  export type BatchJobUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    totalJobs?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
    jobs?: VideoJobUpdateManyWithoutBatchJobNestedInput
  }

  export type BatchJobUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    totalJobs?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
    jobs?: VideoJobUncheckedUpdateManyWithoutBatchJobNestedInput
  }

  export type BatchJobUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    totalJobs?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchOptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProcessingTemplateUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    templateOptions?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessingTemplateUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    templateOptions?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessingTemplateUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    templateOptions?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoVariantCreateManyVideoJobInput = {
    id?: string
    name: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    processingTime?: number | null
    fileSize?: bigint | number | null
    duration?: number | null
    resolution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    variantOptions?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
  }

  export type VideoVariantUpdateWithoutVideoJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantOptions?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
  }

  export type VideoVariantUncheckedUpdateWithoutVideoJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantOptions?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
  }

  export type VideoVariantUncheckedUpdateManyWithoutVideoJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantOptions?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
  }

  export type VideoJobCreateManyBatchJobInput = {
    id?: string
    originalName: string
    filePath: string
    outputPath?: string | null
    status?: $Enums.JobStatus
    progress?: number
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    userId?: string | null
    cloudStorageUrl?: string | null
    cloudProvider?: $Enums.CloudProvider | null
  }

  export type VideoJobUpdateWithoutBatchJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
    user?: UserUpdateOneWithoutJobsNestedInput
    variants?: VideoVariantUpdateManyWithoutVideoJobNestedInput
  }

  export type VideoJobUncheckedUpdateWithoutBatchJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
    variants?: VideoVariantUncheckedUpdateManyWithoutVideoJobNestedInput
  }

  export type VideoJobUncheckedUpdateManyWithoutBatchJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    outputPath?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: FloatFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: NullableJsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    cloudStorageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cloudProvider?: NullableEnumCloudProviderFieldUpdateOperationsInput | $Enums.CloudProvider | null
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