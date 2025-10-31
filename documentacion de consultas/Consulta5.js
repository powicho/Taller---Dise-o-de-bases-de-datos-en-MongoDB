//CONSULTA 5

/*
 * ======================= ANÁLISIS DE LA CONSULTA 5 =======================
 * El plan de ejecución de la agregación muestra que la primera
 * etapa es un `COLLSCAN` con un filtro (`$match`) para seleccionar solo
 * los pedidos relevantes. Luego, los documentos pasan a la etapa de
 * agrupación (`$group`), donde se realizan los cálculos en memoria.
 *
 * Para consultas de reportería como "ventas por mes", que
 * por naturaleza deben analizar un conjunto grande de datos, un `COLLSCAN`
 * inicial es normal y esperado. La eficiencia aquí radica en que el `$match`
 * se ejecuta primero para reducir el número de documentos que se procesan
 * en la costosa etapa `$group`. El enfoque es correcto para un caso de uso
 * de Business Intelligence o administrativo.
 */

db.orders
  .aggregate([
    {
      // Paso 1: Filtrar solo pedidos que representan una venta real.
      $match: {
        status: { $in: ["Pagado", "Enviado", "Entregado"] },
      },
    },
    {
      // Paso 2: Agrupar por a�o y mes, y sumar los totales.
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
        },
        totalSales: { $sum: "$total" },
        orderCount: { $sum: 1 },
      },
    },
    {
      // Paso 3: Ordenar los resultados cronol�gicamente.
      $sort: {
        "_id.year": 1,
        "_id.month": 1,
      },
    },
  ])
  .explain(); // En agregaciones, explain() no siempre toma "executionStats"

//print("\n========== [INICIO] AGREGACION 5: VENTAS POR MES ==========");
const resultadoAgregacion5 = {
  explainVersion: "2",
  stages: [
    {
      $cursor: {
        queryPlanner: {
          namespace: "ecommerceTareaTaller.orders",
          parsedQuery: {
            status: {
              $in: ["Entregado", "Enviado", "Pagado"],
            },
          },
          indexFilterSet: false,
          queryHash: "2ACAC03B",
          planCacheShapeHash: "2ACAC03B",
          planCacheKey: "7D576FC0",
          optimizationTimeMillis: 0,
          maxIndexedOrSolutionsReached: false,
          maxIndexedAndSolutionsReached: false,
          maxScansToExplodeReached: false,
          prunedSimilarIndexes: false,
          winningPlan: {
            isCached: false,
            queryPlan: {
              stage: "GROUP",
              planNodeId: 3,
              inputStage: {
                stage: "COLLSCAN",
                planNodeId: 1,
                filter: {
                  status: {
                    $in: ["Entregado", "Enviado", "Pagado"],
                  },
                },
                direction: "forward",
              },
            },
            slotBasedPlan: {
              slots:
                '$$RESULT=s17 env: { s6 = InList("Pagado" "Enviado" "Entregado"), s7 = TimeZoneDatabase(Australia/LHI...Asia/Kabul) (timeZoneDB) }',
              stages:
                '[3] project [s17 = newObj("_id", s14, "totalSales", s15, "orderCount", s16)] \n' +
                '[3] project [s14 = newObj("year", s10, "month", s11), s15 = doubleDoubleSumFinalize(s12), s16 = (convert ( s13, int32) ?: s13)] \n' +
                "[3] group [s10, s11] [s12 = aggDoubleDoubleSum(s4), s13 = count()] spillSlots[s8, s9] mergingExprs[aggMergeDoubleDoubleSums(s8), sum(s9)] \n" +
                "[3] project [s10 = \n" +
                "    let [\n" +
                "        l5.0 = year(s3, TimeZone(UTC)) \n" +
                "    ] \n" +
                "    in \n" +
                "        if exists(l5.0) \n" +
                "        then makeOwn(move(l5.0)) \n" +
                "        else \n" +
                "            if (typeMatch(s3, 1088) ?: true) \n" +
                "            then null \n" +
                "            else \n" +
                "                if typeMatch(s3, 131712) \n" +
                "                then Nothing \n" +
                `                else fail(5157904, "year parameter 'date' must be coercible to date") \n` +
                ", s11 = \n" +
                "    let [\n" +
                "        l6.0 = month(s3, TimeZone(UTC)) \n" +
                "    ] \n" +
                "    in \n" +
                "        if exists(l6.0) \n" +
                "        then makeOwn(move(l6.0)) \n" +
                "        else \n" +
                "            if (typeMatch(s3, 1088) ?: true) \n" +
                "            then null \n" +
                "            else \n" +
                "                if typeMatch(s3, 131712) \n" +
                "                then Nothing \n" +
                `                else fail(5157904, "month parameter 'date' must be coercible to date") \n` +
                "] \n" +
                "[1] filter {traverseF(s5, lambda(l2.0) { isMember(move(l2.0), s6) }, false)} \n" +
                '[1] scan s1 s2 none none none none none none [s3 = createdAt, s4 = total, s5 = status] @"8bd86692-cbd2-415a-8a40-8922ba997583" true false ',
            },
          },
          rejectedPlans: [],
        },
      },
    },
    {
      $sort: {
        sortKey: {
          "_id.year": 1,
          "_id.month": 1,
        },
      },
    },
  ],
  queryShapeHash:
    "A2CE34A22CA0F5522AA8FF9A54D67364DB379BD6AC6F3E531F7709C268311197",
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
  command: {
    aggregate: "orders",
    pipeline: [
      {
        $match: {
          status: {
            $in: ["Pagado", "Enviado", "Entregado"],
          },
        },
      },
      {
        $group: {
          _id: {
            year: {
              $year: "$createdAt",
            },
            month: {
              $month: "$createdAt",
            },
          },
          totalSales: {
            $sum: "$total",
          },
          orderCount: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1,
        },
      },
    ],
    cursor: {},
    $db: "ecommerceTareaTaller",
  },
  ok: 1,
};
//print("========== [FIN] AGREGACION 5: VENTAS POR MES ==========\n");
