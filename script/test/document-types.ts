import { Document } from '../lib/document-types'

import * as builders from '../../source/builders/main.json'
import * as collection from '../../source/collection/main.json'
import * as discordjs_oldest from '../../source/discord.js/9.0.2.json'
import * as discordjs_stable from '../../source/discord.js/stable.json'
import * as discordjs_main from '../../source/discord.js/main.json'
import * as rest from '../../source/rest/main.json'
import * as voice from '../../source/voice/main.json'

const _docs: Document[] = [
  builders,
  collection,
  discordjs_oldest,
  discordjs_stable,
  discordjs_main,
  rest,
  voice
]
