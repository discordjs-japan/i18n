// allow specify unknown properties in object literal
type Object<T> = T & { [others: string]: any; }

export interface Custom {
  name: string // category name
  files: Object<{
    [id: string]: Object<{
      name: string // page name
      content: string // markdown
    }>
  }>
}

export interface Prop {
  description: string
}

export interface Class {
  description?: string // description
  construct?: Object<{
    params?: Array<Object<{
      description?: string // description
    }>>
  }>
  props?: Array<Object<{
    description: string // description
  }>>
  methods?: Array<Object<{
    description?: string // description
    params?: Array<Object<{
      description: string // description
    }>>
  }>>
  events?: Array<Object<{
    description?: string // description
    params?: Array<Object<{
      description?: string // description
    }>>
  }>>
}

export interface Interface {
  description: string // description
  props?: Array<Object<{
    description: string // description
  }>>
  methods: Array<Object<{
    description: string // description
    examples?: string[] // examples
    params?: Array<Object<{
      description: string // description
    }>>
  }>>
}

export interface Typedef {
  description?: string // description
  props?: Array<Object<{
    description: string // description
  }>>
}

export interface Document {
  meta: Object<{}>
  custom: {
    [id: string]: Object<Custom>
  }
  classes: Object<Class>[]
  interfaces: Object<Interface>[]
  typedefs: Object<Typedef>[]
  externals: Object<{}>
}
