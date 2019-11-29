import { Document } from '../lib/document-types'

import * as discordjs_oldest from '../../source/discord.js/9.0.2.json'
import * as discordjs_stable from '../../source/discord.js/stable.json'
import * as discordjs_master from '../../source/discord.js/master.json'
import * as collection_master from '../../source/collection/master.json'
import * as commando_oldest from '../../source/Commando/v0.5.0.json'
import * as commando_master from '../../source/Commando/master.json'
import * as rpc_master from '../../source/RPC/master.json'

const _docs: Document[] = [
  discordjs_oldest, // discord.js/9.0.2.json
  discordjs_stable, // discord.js/stable.json
  discordjs_master, // discord.js/master.json
  collection_master, // collection/master.json
  commando_oldest, // Commando/v0.5.0.json
  commando_master, // Commando/master.json
  rpc_master, // RPC/master.json
]
