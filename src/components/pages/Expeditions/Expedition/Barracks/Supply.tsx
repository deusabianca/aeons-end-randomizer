import React from 'react'

import ExpansionPanel from '../../../../molecules/ExpansionPanel'
import SupplyList, { OptionalTile } from '../../../../molecules/SupplyList'

type Props = {
  tiles: OptionalTile[]
  expansionKey: string
  expansionHandler: (
    e: React.ChangeEvent<any> | undefined,
    expanded: string | boolean
  ) => void
  expanded: boolean | string
}

const Supply = React.memo(
  ({ tiles, expansionKey, expansionHandler, expanded }: Props) => (
    <ExpansionPanel
      summary="Supply"
      expansionKey={expansionKey}
      expansionHandler={expansionHandler}
      expanded={expanded}
    >
      <SupplyList tiles={tiles} />
    </ExpansionPanel>
  )
)

Supply.displayName = 'Supply'

export default Supply