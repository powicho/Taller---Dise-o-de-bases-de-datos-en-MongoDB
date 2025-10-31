//CONSULTA 3

/*
 * ======================= ANÁLISIS DE LA CONSULTA 3 =======================
 * El `winningPlan` demuestra el uso del índice compuesto
 * `customerId_1_createdAt_-1`. El plan consta de varias etapas:
 *    1. `IXSCAN`: Usa el índice para encontrar eficientemente *todos* los
 *       pedidos del cliente (`totalKeysExamined: 2` para este cliente).
 *    2. `FETCH`: Recupera los documentos completos que corresponden a esas claves.
 *    3. `LIMIT`: Detiene la operación tan pronto como encuentra los 2
 *       resultados, sin seguir buscando.

 * Conclusión: El índice compuesto es el principal ya que no solo aceleró la
 * búsqueda por `customerId`, sino que también proporcionó los datos ya
 * pre-ordenados por `createdAt: -1`. Esto evita una costosa operación de
 * ordenamiento en memoria (SORT), lo cual es una optimización clave para este
 * tipo de consultas frecuentes. El diseño es perfecto.
 */

// Usamos el ObjectId de "Ana Torres", que tiene 2 pedidos para probar el sort
const customerIdPedidos = ObjectId("670000000000000000000001");

db.orders
  .find({
    customerId: customerIdPedidos,
  })
  .sort({
    createdAt: -1, // Ordena de mas reciente a mas antiguo
  })
  .limit(10)
  .explain("executionStats");

//print("\n========== [INICIO] CONSULTA 3: uLTIMOS PEDIDOS DEL CLIENTE ==========");
const resultadoConsultado3 = {
  explainVersion: "1",
  queryPlanner: {
    namespace: "ecommerceTareaTaller.orders",
    parsedQuery: {
      customerId: {
        $eq: ObjectId("670000000000000000000001"),
      },
    },
    indexFilterSet: false,
    queryHash: "564BE11C",
    planCacheShapeHash: "564BE11C",
    planCacheKey: "EBA20FF7",
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: "LIMIT",
      limitAmount: 10,
      inputStage: {
        stage: "FETCH",
        inputStage: {
          stage: "IXSCAN",
          keyPattern: {
            customerId: 1,
            createdAt: -1,
          },
          indexName: "customerId_1_createdAt_-1",
          isMultiKey: false,
          multiKeyPaths: {
            customerId: [],
            createdAt: [],
          },
          isUnique: false,
          isSparse: false,
          isPartial: false,
          indexVersion: 2,
          direction: "forward",
          indexBounds: {
            customerId: [
              "[ObjectId('670000000000000000000001'), ObjectId('670000000000000000000001')]",
            ],
            createdAt: ["[MaxKey, MinKey]"],
          },
        },
      },
    },
    rejectedPlans: [],
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 2,
    executionTimeMillis: 0,
    totalKeysExamined: 2,
    totalDocsExamined: 2,
    executionStages: {
      isCached: false,
      stage: "LIMIT",
      nReturned: 2,
      executionTimeMillisEstimate: 0,
      works: 3,
      advanced: 2,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      limitAmount: 10,
      inputStage: {
        stage: "FETCH",
        nReturned: 2,
        executionTimeMillisEstimate: 0,
        works: 3,
        advanced: 2,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        docsExamined: 2,
        alreadyHasObj: 0,
        inputStage: {
          stage: "IXSCAN",
          nReturned: 2,
          executionTimeMillisEstimate: 0,
          works: 3,
          advanced: 2,
          needTime: 0,
          needYield: 0,
          saveState: 0,
          restoreState: 0,
          isEOF: 1,
          keyPattern: {
            customerId: 1,
            createdAt: -1,
          },
          indexName: "customerId_1_createdAt_-1",
          isMultiKey: false,
          multiKeyPaths: {
            customerId: [],
            createdAt: [],
          },
          isUnique: false,
          isSparse: false,
          isPartial: false,
          indexVersion: 2,
          direction: "forward",
          indexBounds: {
            customerId: [
              "[ObjectId('670000000000000000000001'), ObjectId('670000000000000000000001')]",
            ],
            createdAt: ["[MaxKey, MinKey]"],
          },
          keysExamined: 2,
          seeks: 1,
          dupsTested: 0,
          dupsDropped: 0,
        },
      },
    },
  },
  queryShapeHash:
    "E25350D5012EEB5969EF0873D8EA18CA482AF9D33773B614394CA76D5DF148E5",
  command: {
    find: "orders",
    filter: {
      customerId: ObjectId("670000000000000000000001"),
    },
    sort: {
      createdAt: -1,
    },
    limit: 10,
    $db: "ecommerceTareaTaller",
  },
  serverInfo: {
    host: "powicho",
    port: 27017,
    version: "8.2.1",
    gitVersion: "3312bdcf28aa65f5930005e21c2cb130f648b8c3",
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: "trySbeRestricted",
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1,
  },
  ok: 1,
};
//print("========== [FIN] CONSULTA 3: uLTIMOS PEDIDOS DEL CLIENTE ==========\n");

