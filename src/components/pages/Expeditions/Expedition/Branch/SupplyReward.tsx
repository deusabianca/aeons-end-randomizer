import React from 'react'

import * as types from 'types'

import SupplySelection from 'components/molecules/SupplySelection'
import SectionHeadline from 'components/atoms/SectionHeadline'

import { ListWithSelection } from './helpers'
import SupplyList from 'components/molecules/SupplyList'

type Props = {
  bigPocketVariant: boolean
  newSupplyCards: types.ICard[]
  listsWithSelectionState: ListWithSelection[]
  handleSelection: (val: any) => void
  amountOfCardsToSelect: number
  selectedCardsCount: number
}

const SupplyReward = ({
  bigPocketVariant,
  newSupplyCards,
  listsWithSelectionState,
  handleSelection,
  amountOfCardsToSelect,
  selectedCardsCount,
}: Props) => {
  return (
    <>
      {newSupplyCards.length > 0 && (
        <SectionHeadline>New Cards</SectionHeadline>
      )}
      {newSupplyCards.length > 0 && !bigPocketVariant ? (
        <SupplySelection
          lists={listsWithSelectionState}
          handleSelection={handleSelection}
          amountOfCardsToSelect={amountOfCardsToSelect}
          selectedCardsCount={selectedCardsCount}
        />
      ) : (
        newSupplyCards.length > 0 && <SupplyList tiles={newSupplyCards} />
      )}
    </>
  )
}

export default React.memo(SupplyReward)