//CONSULTA 1

/*
 * ======================= ANÁLISIS DE LA CONSULTA 1 =======================
 * El `winningPlan` es un `IXSCAN` que utiliza el índice `email_1`.
 * Las `executionStats` muestran que se examinó una sola clave (`totalKeysExamined: 1`)
 * y un solo documento (`totalDocsExamined: 1`), logrando la búsqueda en 0ms.
 
 * Conclusión: La estrategia de indexación sobre el campo `email` es la
 * correcta para el caso de uso de "buscar un cliente", garantizando una
 * respuesta instantánea para operaciones críticas como el login o la
 * carga del perfil.
 */

db.customers.find({ email: "ana.torres@example.com" }).explain("executionStats");

//print("\n========== [INICIO] CONSULTA 1: CLIENTE POR EMAIL ==========");
const resultadoConsultado1 = {
  explainVersion: "1",
  queryPlanner: {
    namespace: "ecommerceTareaTaller.customers",
    parsedQuery: {
      email: {
        $eq: "ana.torres@example.com",
      },
    },
    indexFilterSet: false,
    queryHash: "2C2F10E4",
    planCacheShapeHash: "2C2F10E4",
    planCacheKey: "F713C797",
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: "EXPRESS_IXSCAN",
      keyPattern: "{ email: 1 }",
      indexName: "email_1",
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
      keyPattern: "{ email: 1 }",
      indexName: "email_1",
      keysExamined: 1,
      docsExamined: 1,
      nReturned: 1,
    },
  },
  queryShapeHash:
    "70AA20BD2D42430464031CE8C457FC8324B078E273508567732E3C45E0E42C5F",
  command: {
    find: "customers",
    filter: {
      email: "ana.torres@example.com",
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
//print("========== [FIN] CONSULTA 1: CLIENTE POR EMAIL ==========\n");

