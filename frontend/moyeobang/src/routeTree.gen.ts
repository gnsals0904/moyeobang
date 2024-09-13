/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as PosIndexImport } from './routes/pos/index'
import { Route as LayoutProtectedImport } from './routes/_layout/_protected'
import { Route as LayoutEntranceIndexImport } from './routes/_layout/entrance/index'
import { Route as LayoutProtectedLayoutImport } from './routes/_layout/_protected/_layout'
import { Route as LayoutProtectedLayoutQuizIndexImport } from './routes/_layout/_protected/_layout/quiz/index'
import { Route as LayoutProtectedLayoutProfileIndexImport } from './routes/_layout/_protected/_layout/profile/index'
import { Route as LayoutProtectedLayoutAccountIndexImport } from './routes/_layout/_protected/_layout/account/index'
import { Route as LayoutProtectedLayoutAccountSettleIndexImport } from './routes/_layout/_protected/_layout/account/settle/index'
import { Route as LayoutProtectedLayoutAccountSettledReceiptLayoutImport } from './routes/_layout/_protected/_layout/account/settledReceipt/_layout'
import { Route as LayoutProtectedLayoutAccountDetailLayoutImport } from './routes/_layout/_protected/_layout/account/detail/_layout'
import { Route as LayoutProtectedLayoutAccountSettledReceiptLayoutIndexImport } from './routes/_layout/_protected/_layout/account/settledReceipt/_layout/index'
import { Route as LayoutProtectedLayoutAccountDetailLayoutTransactionIdImport } from './routes/_layout/_protected/_layout/account/detail/_layout/$transactionId'

// Create Virtual Routes

const LayoutProtectedLayoutAccountSettledReceiptImport = createFileRoute(
  '/_layout/_protected/_layout/account/settledReceipt',
)()
const LayoutProtectedLayoutAccountDetailImport = createFileRoute(
  '/_layout/_protected/_layout/account/detail',
)()
const LayoutProtectedLayoutHomeIndexLazyImport = createFileRoute(
  '/_layout/_protected/_layout/_Home/',
)()

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const PosIndexRoute = PosIndexImport.update({
  path: '/pos/',
  getParentRoute: () => rootRoute,
} as any)

const LayoutProtectedRoute = LayoutProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutEntranceIndexRoute = LayoutEntranceIndexImport.update({
  path: '/entrance/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutProtectedLayoutRoute = LayoutProtectedLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => LayoutProtectedRoute,
} as any)

const LayoutProtectedLayoutAccountSettledReceiptRoute =
  LayoutProtectedLayoutAccountSettledReceiptImport.update({
    path: '/account/settledReceipt',
    getParentRoute: () => LayoutProtectedLayoutRoute,
  } as any)

const LayoutProtectedLayoutAccountDetailRoute =
  LayoutProtectedLayoutAccountDetailImport.update({
    path: '/account/detail',
    getParentRoute: () => LayoutProtectedLayoutRoute,
  } as any)

const LayoutProtectedLayoutHomeIndexLazyRoute =
  LayoutProtectedLayoutHomeIndexLazyImport.update({
    path: '/',
    getParentRoute: () => LayoutProtectedLayoutRoute,
  } as any).lazy(() =>
    import('./routes/_layout/_protected/_layout/_Home/index.lazy').then(
      (d) => d.Route,
    ),
  )

const LayoutProtectedLayoutQuizIndexRoute =
  LayoutProtectedLayoutQuizIndexImport.update({
    path: '/quiz/',
    getParentRoute: () => LayoutProtectedLayoutRoute,
  } as any)

const LayoutProtectedLayoutProfileIndexRoute =
  LayoutProtectedLayoutProfileIndexImport.update({
    path: '/profile/',
    getParentRoute: () => LayoutProtectedLayoutRoute,
  } as any)

const LayoutProtectedLayoutAccountIndexRoute =
  LayoutProtectedLayoutAccountIndexImport.update({
    path: '/account/',
    getParentRoute: () => LayoutProtectedLayoutRoute,
  } as any)

const LayoutProtectedLayoutAccountSettleIndexRoute =
  LayoutProtectedLayoutAccountSettleIndexImport.update({
    path: '/account/settle/',
    getParentRoute: () => LayoutProtectedLayoutRoute,
  } as any)

const LayoutProtectedLayoutAccountSettledReceiptLayoutRoute =
  LayoutProtectedLayoutAccountSettledReceiptLayoutImport.update({
    id: '/_layout',
    getParentRoute: () => LayoutProtectedLayoutAccountSettledReceiptRoute,
  } as any)

const LayoutProtectedLayoutAccountDetailLayoutRoute =
  LayoutProtectedLayoutAccountDetailLayoutImport.update({
    id: '/_layout',
    getParentRoute: () => LayoutProtectedLayoutAccountDetailRoute,
  } as any)

const LayoutProtectedLayoutAccountSettledReceiptLayoutIndexRoute =
  LayoutProtectedLayoutAccountSettledReceiptLayoutIndexImport.update({
    path: '/',
    getParentRoute: () => LayoutProtectedLayoutAccountSettledReceiptLayoutRoute,
  } as any)

const LayoutProtectedLayoutAccountDetailLayoutTransactionIdRoute =
  LayoutProtectedLayoutAccountDetailLayoutTransactionIdImport.update({
    path: '/$transactionId',
    getParentRoute: () => LayoutProtectedLayoutAccountDetailLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/_protected': {
      id: '/_layout/_protected'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutProtectedImport
      parentRoute: typeof LayoutImport
    }
    '/pos/': {
      id: '/pos/'
      path: '/pos'
      fullPath: '/pos'
      preLoaderRoute: typeof PosIndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout/_protected/_layout': {
      id: '/_layout/_protected/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutProtectedLayoutImport
      parentRoute: typeof LayoutProtectedImport
    }
    '/_layout/entrance/': {
      id: '/_layout/entrance/'
      path: '/entrance'
      fullPath: '/entrance'
      preLoaderRoute: typeof LayoutEntranceIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/_protected/_layout/account/': {
      id: '/_layout/_protected/_layout/account/'
      path: '/account'
      fullPath: '/account'
      preLoaderRoute: typeof LayoutProtectedLayoutAccountIndexImport
      parentRoute: typeof LayoutProtectedLayoutImport
    }
    '/_layout/_protected/_layout/profile/': {
      id: '/_layout/_protected/_layout/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof LayoutProtectedLayoutProfileIndexImport
      parentRoute: typeof LayoutProtectedLayoutImport
    }
    '/_layout/_protected/_layout/quiz/': {
      id: '/_layout/_protected/_layout/quiz/'
      path: '/quiz'
      fullPath: '/quiz'
      preLoaderRoute: typeof LayoutProtectedLayoutQuizIndexImport
      parentRoute: typeof LayoutProtectedLayoutImport
    }
    '/_layout/_protected/_layout/_Home/': {
      id: '/_layout/_protected/_layout/_Home/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutProtectedLayoutHomeIndexLazyImport
      parentRoute: typeof LayoutProtectedLayoutImport
    }
    '/_layout/_protected/_layout/account/detail': {
      id: '/_layout/_protected/_layout/account/detail'
      path: '/account/detail'
      fullPath: '/account/detail'
      preLoaderRoute: typeof LayoutProtectedLayoutAccountDetailImport
      parentRoute: typeof LayoutProtectedLayoutImport
    }
    '/_layout/_protected/_layout/account/detail/_layout': {
      id: '/_layout/_protected/_layout/account/detail/_layout'
      path: '/account/detail'
      fullPath: '/account/detail'
      preLoaderRoute: typeof LayoutProtectedLayoutAccountDetailLayoutImport
      parentRoute: typeof LayoutProtectedLayoutAccountDetailRoute
    }
    '/_layout/_protected/_layout/account/settledReceipt': {
      id: '/_layout/_protected/_layout/account/settledReceipt'
      path: '/account/settledReceipt'
      fullPath: '/account/settledReceipt'
      preLoaderRoute: typeof LayoutProtectedLayoutAccountSettledReceiptImport
      parentRoute: typeof LayoutProtectedLayoutImport
    }
    '/_layout/_protected/_layout/account/settledReceipt/_layout': {
      id: '/_layout/_protected/_layout/account/settledReceipt/_layout'
      path: '/account/settledReceipt'
      fullPath: '/account/settledReceipt'
      preLoaderRoute: typeof LayoutProtectedLayoutAccountSettledReceiptLayoutImport
      parentRoute: typeof LayoutProtectedLayoutAccountSettledReceiptRoute
    }
    '/_layout/_protected/_layout/account/settle/': {
      id: '/_layout/_protected/_layout/account/settle/'
      path: '/account/settle'
      fullPath: '/account/settle'
      preLoaderRoute: typeof LayoutProtectedLayoutAccountSettleIndexImport
      parentRoute: typeof LayoutProtectedLayoutImport
    }
    '/_layout/_protected/_layout/account/detail/_layout/$transactionId': {
      id: '/_layout/_protected/_layout/account/detail/_layout/$transactionId'
      path: '/$transactionId'
      fullPath: '/account/detail/$transactionId'
      preLoaderRoute: typeof LayoutProtectedLayoutAccountDetailLayoutTransactionIdImport
      parentRoute: typeof LayoutProtectedLayoutAccountDetailLayoutImport
    }
    '/_layout/_protected/_layout/account/settledReceipt/_layout/': {
      id: '/_layout/_protected/_layout/account/settledReceipt/_layout/'
      path: '/'
      fullPath: '/account/settledReceipt/'
      preLoaderRoute: typeof LayoutProtectedLayoutAccountSettledReceiptLayoutIndexImport
      parentRoute: typeof LayoutProtectedLayoutAccountSettledReceiptLayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutProtectedLayoutAccountDetailLayoutRouteChildren {
  LayoutProtectedLayoutAccountDetailLayoutTransactionIdRoute: typeof LayoutProtectedLayoutAccountDetailLayoutTransactionIdRoute
}

const LayoutProtectedLayoutAccountDetailLayoutRouteChildren: LayoutProtectedLayoutAccountDetailLayoutRouteChildren =
  {
    LayoutProtectedLayoutAccountDetailLayoutTransactionIdRoute:
      LayoutProtectedLayoutAccountDetailLayoutTransactionIdRoute,
  }

const LayoutProtectedLayoutAccountDetailLayoutRouteWithChildren =
  LayoutProtectedLayoutAccountDetailLayoutRoute._addFileChildren(
    LayoutProtectedLayoutAccountDetailLayoutRouteChildren,
  )

interface LayoutProtectedLayoutAccountDetailRouteChildren {
  LayoutProtectedLayoutAccountDetailLayoutRoute: typeof LayoutProtectedLayoutAccountDetailLayoutRouteWithChildren
}

const LayoutProtectedLayoutAccountDetailRouteChildren: LayoutProtectedLayoutAccountDetailRouteChildren =
  {
    LayoutProtectedLayoutAccountDetailLayoutRoute:
      LayoutProtectedLayoutAccountDetailLayoutRouteWithChildren,
  }

const LayoutProtectedLayoutAccountDetailRouteWithChildren =
  LayoutProtectedLayoutAccountDetailRoute._addFileChildren(
    LayoutProtectedLayoutAccountDetailRouteChildren,
  )

interface LayoutProtectedLayoutAccountSettledReceiptLayoutRouteChildren {
  LayoutProtectedLayoutAccountSettledReceiptLayoutIndexRoute: typeof LayoutProtectedLayoutAccountSettledReceiptLayoutIndexRoute
}

const LayoutProtectedLayoutAccountSettledReceiptLayoutRouteChildren: LayoutProtectedLayoutAccountSettledReceiptLayoutRouteChildren =
  {
    LayoutProtectedLayoutAccountSettledReceiptLayoutIndexRoute:
      LayoutProtectedLayoutAccountSettledReceiptLayoutIndexRoute,
  }

const LayoutProtectedLayoutAccountSettledReceiptLayoutRouteWithChildren =
  LayoutProtectedLayoutAccountSettledReceiptLayoutRoute._addFileChildren(
    LayoutProtectedLayoutAccountSettledReceiptLayoutRouteChildren,
  )

interface LayoutProtectedLayoutAccountSettledReceiptRouteChildren {
  LayoutProtectedLayoutAccountSettledReceiptLayoutRoute: typeof LayoutProtectedLayoutAccountSettledReceiptLayoutRouteWithChildren
}

const LayoutProtectedLayoutAccountSettledReceiptRouteChildren: LayoutProtectedLayoutAccountSettledReceiptRouteChildren =
  {
    LayoutProtectedLayoutAccountSettledReceiptLayoutRoute:
      LayoutProtectedLayoutAccountSettledReceiptLayoutRouteWithChildren,
  }

const LayoutProtectedLayoutAccountSettledReceiptRouteWithChildren =
  LayoutProtectedLayoutAccountSettledReceiptRoute._addFileChildren(
    LayoutProtectedLayoutAccountSettledReceiptRouteChildren,
  )

interface LayoutProtectedLayoutRouteChildren {
  LayoutProtectedLayoutAccountIndexRoute: typeof LayoutProtectedLayoutAccountIndexRoute
  LayoutProtectedLayoutProfileIndexRoute: typeof LayoutProtectedLayoutProfileIndexRoute
  LayoutProtectedLayoutQuizIndexRoute: typeof LayoutProtectedLayoutQuizIndexRoute
  LayoutProtectedLayoutHomeIndexLazyRoute: typeof LayoutProtectedLayoutHomeIndexLazyRoute
  LayoutProtectedLayoutAccountDetailRoute: typeof LayoutProtectedLayoutAccountDetailRouteWithChildren
  LayoutProtectedLayoutAccountSettledReceiptRoute: typeof LayoutProtectedLayoutAccountSettledReceiptRouteWithChildren
  LayoutProtectedLayoutAccountSettleIndexRoute: typeof LayoutProtectedLayoutAccountSettleIndexRoute
}

const LayoutProtectedLayoutRouteChildren: LayoutProtectedLayoutRouteChildren = {
  LayoutProtectedLayoutAccountIndexRoute:
    LayoutProtectedLayoutAccountIndexRoute,
  LayoutProtectedLayoutProfileIndexRoute:
    LayoutProtectedLayoutProfileIndexRoute,
  LayoutProtectedLayoutQuizIndexRoute: LayoutProtectedLayoutQuizIndexRoute,
  LayoutProtectedLayoutHomeIndexLazyRoute:
    LayoutProtectedLayoutHomeIndexLazyRoute,
  LayoutProtectedLayoutAccountDetailRoute:
    LayoutProtectedLayoutAccountDetailRouteWithChildren,
  LayoutProtectedLayoutAccountSettledReceiptRoute:
    LayoutProtectedLayoutAccountSettledReceiptRouteWithChildren,
  LayoutProtectedLayoutAccountSettleIndexRoute:
    LayoutProtectedLayoutAccountSettleIndexRoute,
}

const LayoutProtectedLayoutRouteWithChildren =
  LayoutProtectedLayoutRoute._addFileChildren(
    LayoutProtectedLayoutRouteChildren,
  )

interface LayoutProtectedRouteChildren {
  LayoutProtectedLayoutRoute: typeof LayoutProtectedLayoutRouteWithChildren
}

const LayoutProtectedRouteChildren: LayoutProtectedRouteChildren = {
  LayoutProtectedLayoutRoute: LayoutProtectedLayoutRouteWithChildren,
}

const LayoutProtectedRouteWithChildren = LayoutProtectedRoute._addFileChildren(
  LayoutProtectedRouteChildren,
)

interface LayoutRouteChildren {
  LayoutProtectedRoute: typeof LayoutProtectedRouteWithChildren
  LayoutEntranceIndexRoute: typeof LayoutEntranceIndexRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutProtectedRoute: LayoutProtectedRouteWithChildren,
  LayoutEntranceIndexRoute: LayoutEntranceIndexRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutProtectedLayoutRouteWithChildren
  '/pos': typeof PosIndexRoute
  '/entrance': typeof LayoutEntranceIndexRoute
  '/account': typeof LayoutProtectedLayoutAccountIndexRoute
  '/profile': typeof LayoutProtectedLayoutProfileIndexRoute
  '/quiz': typeof LayoutProtectedLayoutQuizIndexRoute
  '/': typeof LayoutProtectedLayoutHomeIndexLazyRoute
  '/account/detail': typeof LayoutProtectedLayoutAccountDetailLayoutRouteWithChildren
  '/account/settledReceipt': typeof LayoutProtectedLayoutAccountSettledReceiptLayoutRouteWithChildren
  '/account/settle': typeof LayoutProtectedLayoutAccountSettleIndexRoute
  '/account/detail/$transactionId': typeof LayoutProtectedLayoutAccountDetailLayoutTransactionIdRoute
  '/account/settledReceipt/': typeof LayoutProtectedLayoutAccountSettledReceiptLayoutIndexRoute
}

export interface FileRoutesByTo {
  '': typeof LayoutProtectedRouteWithChildren
  '/pos': typeof PosIndexRoute
  '/entrance': typeof LayoutEntranceIndexRoute
  '/account': typeof LayoutProtectedLayoutAccountIndexRoute
  '/profile': typeof LayoutProtectedLayoutProfileIndexRoute
  '/quiz': typeof LayoutProtectedLayoutQuizIndexRoute
  '/': typeof LayoutProtectedLayoutHomeIndexLazyRoute
  '/account/detail': typeof LayoutProtectedLayoutAccountDetailLayoutRouteWithChildren
  '/account/settledReceipt': typeof LayoutProtectedLayoutAccountSettledReceiptLayoutIndexRoute
  '/account/settle': typeof LayoutProtectedLayoutAccountSettleIndexRoute
  '/account/detail/$transactionId': typeof LayoutProtectedLayoutAccountDetailLayoutTransactionIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/_protected': typeof LayoutProtectedRouteWithChildren
  '/pos/': typeof PosIndexRoute
  '/_layout/_protected/_layout': typeof LayoutProtectedLayoutRouteWithChildren
  '/_layout/entrance/': typeof LayoutEntranceIndexRoute
  '/_layout/_protected/_layout/account/': typeof LayoutProtectedLayoutAccountIndexRoute
  '/_layout/_protected/_layout/profile/': typeof LayoutProtectedLayoutProfileIndexRoute
  '/_layout/_protected/_layout/quiz/': typeof LayoutProtectedLayoutQuizIndexRoute
  '/_layout/_protected/_layout/_Home/': typeof LayoutProtectedLayoutHomeIndexLazyRoute
  '/_layout/_protected/_layout/account/detail': typeof LayoutProtectedLayoutAccountDetailRouteWithChildren
  '/_layout/_protected/_layout/account/detail/_layout': typeof LayoutProtectedLayoutAccountDetailLayoutRouteWithChildren
  '/_layout/_protected/_layout/account/settledReceipt': typeof LayoutProtectedLayoutAccountSettledReceiptRouteWithChildren
  '/_layout/_protected/_layout/account/settledReceipt/_layout': typeof LayoutProtectedLayoutAccountSettledReceiptLayoutRouteWithChildren
  '/_layout/_protected/_layout/account/settle/': typeof LayoutProtectedLayoutAccountSettleIndexRoute
  '/_layout/_protected/_layout/account/detail/_layout/$transactionId': typeof LayoutProtectedLayoutAccountDetailLayoutTransactionIdRoute
  '/_layout/_protected/_layout/account/settledReceipt/_layout/': typeof LayoutProtectedLayoutAccountSettledReceiptLayoutIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/pos'
    | '/entrance'
    | '/account'
    | '/profile'
    | '/quiz'
    | '/'
    | '/account/detail'
    | '/account/settledReceipt'
    | '/account/settle'
    | '/account/detail/$transactionId'
    | '/account/settledReceipt/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/pos'
    | '/entrance'
    | '/account'
    | '/profile'
    | '/quiz'
    | '/'
    | '/account/detail'
    | '/account/settledReceipt'
    | '/account/settle'
    | '/account/detail/$transactionId'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/_protected'
    | '/pos/'
    | '/_layout/_protected/_layout'
    | '/_layout/entrance/'
    | '/_layout/_protected/_layout/account/'
    | '/_layout/_protected/_layout/profile/'
    | '/_layout/_protected/_layout/quiz/'
    | '/_layout/_protected/_layout/_Home/'
    | '/_layout/_protected/_layout/account/detail'
    | '/_layout/_protected/_layout/account/detail/_layout'
    | '/_layout/_protected/_layout/account/settledReceipt'
    | '/_layout/_protected/_layout/account/settledReceipt/_layout'
    | '/_layout/_protected/_layout/account/settle/'
    | '/_layout/_protected/_layout/account/detail/_layout/$transactionId'
    | '/_layout/_protected/_layout/account/settledReceipt/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
  PosIndexRoute: typeof PosIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
  PosIndexRoute: PosIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout",
        "/pos/"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/_protected",
        "/_layout/entrance/"
      ]
    },
    "/_layout/_protected": {
      "filePath": "_layout/_protected.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/_protected/_layout"
      ]
    },
    "/pos/": {
      "filePath": "pos/index.tsx"
    },
    "/_layout/_protected/_layout": {
      "filePath": "_layout/_protected/_layout.tsx",
      "parent": "/_layout/_protected",
      "children": [
        "/_layout/_protected/_layout/account/",
        "/_layout/_protected/_layout/profile/",
        "/_layout/_protected/_layout/quiz/",
        "/_layout/_protected/_layout/_Home/",
        "/_layout/_protected/_layout/account/detail",
        "/_layout/_protected/_layout/account/settledReceipt",
        "/_layout/_protected/_layout/account/settle/"
      ]
    },
    "/_layout/entrance/": {
      "filePath": "_layout/entrance/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/_protected/_layout/account/": {
      "filePath": "_layout/_protected/_layout/account/index.tsx",
      "parent": "/_layout/_protected/_layout"
    },
    "/_layout/_protected/_layout/profile/": {
      "filePath": "_layout/_protected/_layout/profile/index.tsx",
      "parent": "/_layout/_protected/_layout"
    },
    "/_layout/_protected/_layout/quiz/": {
      "filePath": "_layout/_protected/_layout/quiz/index.tsx",
      "parent": "/_layout/_protected/_layout"
    },
    "/_layout/_protected/_layout/_Home/": {
      "filePath": "_layout/_protected/_layout/_Home/index.lazy.tsx",
      "parent": "/_layout/_protected/_layout"
    },
    "/_layout/_protected/_layout/account/detail": {
      "filePath": "_layout/_protected/_layout/account/detail",
      "parent": "/_layout/_protected/_layout",
      "children": [
        "/_layout/_protected/_layout/account/detail/_layout"
      ]
    },
    "/_layout/_protected/_layout/account/detail/_layout": {
      "filePath": "_layout/_protected/_layout/account/detail/_layout.tsx",
      "parent": "/_layout/_protected/_layout/account/detail",
      "children": [
        "/_layout/_protected/_layout/account/detail/_layout/$transactionId"
      ]
    },
    "/_layout/_protected/_layout/account/settledReceipt": {
      "filePath": "_layout/_protected/_layout/account/settledReceipt",
      "parent": "/_layout/_protected/_layout",
      "children": [
        "/_layout/_protected/_layout/account/settledReceipt/_layout"
      ]
    },
    "/_layout/_protected/_layout/account/settledReceipt/_layout": {
      "filePath": "_layout/_protected/_layout/account/settledReceipt/_layout.tsx",
      "parent": "/_layout/_protected/_layout/account/settledReceipt",
      "children": [
        "/_layout/_protected/_layout/account/settledReceipt/_layout/"
      ]
    },
    "/_layout/_protected/_layout/account/settle/": {
      "filePath": "_layout/_protected/_layout/account/settle/index.tsx",
      "parent": "/_layout/_protected/_layout"
    },
    "/_layout/_protected/_layout/account/detail/_layout/$transactionId": {
      "filePath": "_layout/_protected/_layout/account/detail/_layout/$transactionId.tsx",
      "parent": "/_layout/_protected/_layout/account/detail/_layout"
    },
    "/_layout/_protected/_layout/account/settledReceipt/_layout/": {
      "filePath": "_layout/_protected/_layout/account/settledReceipt/_layout/index.tsx",
      "parent": "/_layout/_protected/_layout/account/settledReceipt/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
