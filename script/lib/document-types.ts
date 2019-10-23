export interface Custom {
  name: string // category name
  files: {
    [id: string]: {
      name: string // page name
      content: string // markdown
    }
  }
}

export interface Prop {
  description: string
}

export interface Class {
  description?: string // description
  construct?: {
    params?: Array<{
      description?: string // description
    }>
  }
  props?: Array<{
    description: string // description
  }>
  methods?: Array<{
    description?: string // description
    params?: Array<{
      description: string // description
    }>
  }>
  events?: Array<{
    description?: string // description
    params?: Array<{
      description?: string // description
    } | {}>
  }>
}

export interface Interface {
  description: string // description
  props?: Array<{
    description: string // description
  }>
  methods: Array<{
    description: string // description
    examples?: string[] // examples
    params?: Array<{
      description: string // description
    }>
  }>
}

export interface Typedef {
  description?: string // description
  props?: Array<{
    description: string // description
  }>
}

export interface Document {
  custom: {
    [id: string]: Custom
  }
  classes: Class[]
  interfaces: Interface[]
  typedefs: Typedef[]
}
