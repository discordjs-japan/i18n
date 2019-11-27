import { Document } from './document-types'
import { forEach } from './utils'

type Sentences = { [original: string]: string }

const filter = (document: Document): Sentences => {
  const sentences: Sentences = {}
  const add = (sentence?: string) =>
    sentence && (sentences[sentence] = sentence)

  forEach(document.custom, custom => {
    add(custom.name)

    forEach(custom.files, file => {
      add(file.name)
      add(file.content)
    })
  })

  document.classes.forEach(_class => {
    add(_class.description)

    _class.construct?.params?.forEach(param => {
      add(param.description)
    })

    _class.props?.forEach(prop => {
      add(prop.description)
    })

    _class.methods?.forEach(method => {
      add(method.description)

      method.params?.forEach(param => {
        add(param.description)
      })

      add(method.returns?.description)
    })

    _class.events?.forEach(event => {
      add(event.description)

      event.params?.forEach(param => {
        add(param.description)
      })
    })
  })

  document.interfaces.forEach(_interface => {
    add(_interface.description)

    _interface.props?.forEach(prop => {
      add(prop.description)
    })

    _interface.methods.forEach(method => {
      add(method.description)

      method.params?.forEach(param => {
        add(param.description)
      })
    })
  })

  document.typedefs.forEach(typedef => {
    add(typedef.description)

    typedef.props?.forEach(prop => {
      add(prop.description)
    })

    add(typedef.returns?.description)
  })

  return sentences
}

export default filter
