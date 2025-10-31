//CONSULTA 4

/*
 * ======================= ANÁLISIS DE LA CONSULTA 4 =======================
 * El `winningPlan` es un `COLLSCAN`, lo que significa que
 * MongoDB tuvo que escanear los 20 documentos de la colección (`totalDocsExamined: 20`)
 * para encontrar los 5 que coincidían con el estado "Enviado".

 * Justificación y Posible Mejora: ¿Por qué no se usó el índice en `status`?
 * Para colecciones pequeñas como esta (20 documentos), el optimizador de
 * consultas de MongoDB determina que es más rápido y eficiente leer todos
 * los documentos de la memoria (COLLSCAN) que hacer el trabajo extra de
 * leer un índice y luego ir a buscar cada documento por separado (IXSCAN + FETCH).
 
 * Para un dashboard, donde esta consulta no es tan frecuente ni crítica como
 * la carga del perfil del cliente, este rendimiento es aceptable. Si la colección
 * de `orders` creciera a millones de documentos, MongoDB probablemente sí
 * elegiría el índice. Sin embargo, si se quisiera forzar el uso del índice,
 * se podría usar `hint("status_1")` en la consulta para obligar a MongoDB
 * a utilizar el índice creado sobre el campo `status`.
 */

db.orders.find({ status: "Enviado" }).explain("executionStats");

//print("\n========== [INICIO] CONSULTA 4: PEDIDOS POR STATUS ==========");
const resultadoConsultado4 = {
  explainVersion: "1",
  queryPlanner: {
    namespace: "ecommerceTareaTaller.orders",
    parsedQuery: {
      status: {
        $eq: "Enviado",
      },
    },
    indexFilterSet: false,
    queryHash: "F7CB0027",
    planCacheShapeHash: "F7CB0027",
    planCacheKey: "05441C6E",
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: "COLLSCAN",
      filter: {
        status: {
          $eq: "Enviado",
        },
      },
      direction: "forward",
    },
    rejectedPlans: [],
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 5,
    executionTimeMillis: 0,
    totalKeysExamined: 0,
    totalDocsExamined: 20,
    executionStages: {
      isCached: false,
      stage: "COLLSCAN",
      filter: {
        status: {
          $eq: "Enviado",
        },
      },
      nReturned: 5,
      executionTimeMillisEstimate: 0,
      works: 21,
      advanced: 5,
      needTime: 15,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      direction: "forward",
      docsExamined: 20,
    },
  },
  queryShapeHash:
    "7C2388619AEB6ECE9EFEC3ECBE1D964DC99C26EEDB3179895BE621E36EFDE8AA",
  command: {
    find: "orders",
    filter: {
      status: "Enviado",
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

//print("========== [FIN] CONSULTA 4: PEDIDOS POR STATUS ==========\n");

