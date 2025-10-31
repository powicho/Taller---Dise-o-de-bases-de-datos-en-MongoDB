//CONSULTA 2

/*
 * ======================= ANÁLISIS DE LA CONSULTA 2 =======================
 * Al igual que en la consulta anterior, se utiliza un `IXSCAN`
 * sobre el índice `customerId_1`. El motor de MongoDB fue directamente al
 * documento del carrito sin examinar otros documentos (`totalDocsExamined: 1`).
 *
 * Conclusión: El diseño del modelo y el índice garantizan que la carga de la
 * vista del carrito sea extremadamente rápida. Esto valida la decisión de crear
 * una colección separada para los carritos con un índice dedicado a su
 * recuperación por cliente.
 */

// Usamos el ObjectId de "Sofia Reyes"
const customerIdCarrito = ObjectId("670000000000000000000003");

db.carts.find({ customerId: customerIdCarrito }).explain("executionStats");

//print("\n========== [INICIO] CONSULTA 2: CARRITO POR CUSTOMER_ID ==========");
const resultadoConsultado2 = {
  explainVersion: "1",
  queryPlanner: {
    namespace: "ecommerceTareaTaller.carts",
    parsedQuery: {
      customerId: {
        $eq: ObjectId("670000000000000000000003"),
      },
    },
    indexFilterSet: false,
    queryHash: "D5653163",
    planCacheShapeHash: "D5653163",
    planCacheKey: "7AAEE295",
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: "EXPRESS_IXSCAN",
      keyPattern: "{ customerId: 1 }",
      indexName: "customerId_1",
    },
    rejectedPlans: [],
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 0,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      isCached: false,
      stage: "EXPRESS_IXSCAN",
      keyPattern: "{ customerId: 1 }",
      indexName: "customerId_1",
      keysExamined: 1,
      docsExamined: 1,
      nReturned: 1,
    },
  },
  queryShapeHash:
    "575A61FE578272AE762D23C0CD86B7B85BB78AF95CA9E36101958ED2C71110CE",
  command: {
    find: "carts",
    filter: {
      customerId: ObjectId("670000000000000000000003"),
    },
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
//print("========== [FIN] CONSULTA 2: CARRITO POR CUSTOMER_ID ==========\n");

