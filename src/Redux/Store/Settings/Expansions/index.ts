import { combineReducers } from 'redux-loop'
import { createSelector, OutputSelector } from 'reselect'

import * as SelectedExpansions from './SelectedExpansions'
import * as SelectedCards from './SelectedCards'
import * as SelectedNemeses from './SelectedNemeses'
import * as SelectedMages from './SelectedMages'
import * as Treasures from './Treasures'
import * as BasicNemesisCards from './BasicNemesisCards'
import * as UpgradedBasicNemesisCards from './UpgradedBasicNemesisCards'

import * as types from '../../../../types'
import { RootState } from '../../'

///////////
// STATE //
///////////

export type State = {
  SelectedExpansions: SelectedExpansions.State
  SelectedCards: SelectedCards.State
  SelectedNemeses: SelectedNemeses.State
  SelectedMages: SelectedMages.State
  Treasures: Treasures.State
  BasicNemesisCards: BasicNemesisCards.State
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.State
}

export const initialState: State = {
  SelectedExpansions: SelectedExpansions.initialState,
  SelectedCards: SelectedCards.initialState,
  SelectedNemeses: SelectedNemeses.initialState,
  SelectedMages: SelectedMages.initialState,
  Treasures: Treasures.initialState,
  BasicNemesisCards: BasicNemesisCards.initialState,
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.initialState,
}

/////////////
// ACTIONS //
/////////////

export type Action =
  | SelectedExpansions.Action
  | SelectedCards.Action
  | SelectedNemeses.Action
  | SelectedMages.Action
  | Treasures.Action
  | BasicNemesisCards.Action
  | UpgradedBasicNemesisCards.Action

export const actions = {
  SelectedExpansions: SelectedExpansions.actions,
  SelectedCards: SelectedCards.actions,
  SelectedNemeses: SelectedNemeses.actions,
  SelectedMages: SelectedMages.actions,
  Treasures: Treasures.actions,
  BasicNemesisCards: BasicNemesisCards.actions,
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.actions,
}

/////////////
// REDUCER //
/////////////

export const Reducer = combineReducers({
  SelectedExpansions: SelectedExpansions.Reducer,
  SelectedCards: SelectedCards.Reducer,
  SelectedNemeses: SelectedNemeses.Reducer,
  SelectedMages: SelectedMages.Reducer,
  Treasures: Treasures.Reducer,
  BasicNemesisCards: BasicNemesisCards.Reducer,
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.Reducer,
})

///////////////
// SELECTORS //
///////////////

// FIXME any typing sucks ;)
const getSelectedEntitiesForSelectedExpansions = <T>(
  entitySelector: OutputSelector<
    RootState,
    Array<{ expansion: string } & T>,
    any
  >
) =>
  createSelector(
    [SelectedExpansions.selectors.getSelectedExpansionsArray, entitySelector],
    (expansionIds, entities) =>
      entities.filter(entity => expansionIds.includes(entity.expansion))
  )

const getSelectedCardsForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  SelectedCards.selectors.getSelectedCards
)

const getSelectedCardIdsForSelectedExpansions = createSelector(
  [getSelectedCardsForSelectedExpansions],
  cards => cards.map(card => card.id)
)

const createIdsByCardTypeSelector = (type: types.CardType) =>
  createSelector(
    [getSelectedCardsForSelectedExpansions],
    (selectedCards: types.ICard[]) =>
      selectedCards.filter(card => card.type === type).map(card => card.id)
  )

const getGemIdsForSelectedExpansions = createIdsByCardTypeSelector('Gem')
const getRelicIdsForSelectedExpansions = createIdsByCardTypeSelector('Relic')
const getSpellIdsForSelectedExpansions = createIdsByCardTypeSelector('Spell')

const getSelectedNemesesForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  SelectedNemeses.selectors.getSelectedNemeses
)

const getSelectedNemesisIdsForSelectedExpansions = createSelector(
  [getSelectedNemesesForSelectedExpansions],
  nemeses => nemeses.map(nemesis => nemesis.id)
)

const getSelectedMagesForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  SelectedMages.selectors.getSelectedMages
)

const getSelectedMageIdsForSelectedExpansions = createSelector(
  [getSelectedMagesForSelectedExpansions],
  selectedMages => selectedMages.map(mage => mage.id)
)

const getTreasuresForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  Treasures.selectors.getTreasureList
)

const getTreasureIdsForSelectedExpansions = createSelector(
  [getTreasuresForSelectedExpansions],
  treasures => treasures.map(treasure => treasure.id)
)

const getTreasuresByLevelForSelectedExpansions = createSelector(
  [
    SelectedExpansions.selectors.getSelectedExpansionsArray,
    Treasures.selectors.getTreasureListByLevel,
  ],
  (expansionIds, entities) =>
    entities.filter(entity => expansionIds.includes(entity.expansion))
)

const getUpgradedBasicNemesisCardsForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  UpgradedBasicNemesisCards.selectors.getUpgradedBasicNemesisCardList
)

const getUpgradedBasicNemesisCardIdsForSelectedExpansions = createSelector(
  [getUpgradedBasicNemesisCardsForSelectedExpansions],
  upgradedBasicNemesisCards => upgradedBasicNemesisCards.map(card => card.id)
)

const getBasicNemesisCardsForSelectedExpansions = getSelectedEntitiesForSelectedExpansions(
  BasicNemesisCards.selectors.getBasicNemesisCardList
)

const getBasicNemesisCardIdsForSelectedExpansions = createSelector(
  [getBasicNemesisCardsForSelectedExpansions],
  basicNemesisCards => basicNemesisCards.map(card => card.id)
)

export const selectors = {
  SelectedExpansions: SelectedExpansions.selectors,
  SelectedCards: SelectedCards.selectors,
  SelectedNemeses: SelectedNemeses.selectors,
  SelectedMages: SelectedMages.selectors,
  Treasures: Treasures.selectors,
  BasicNemesisCards: BasicNemesisCards.selectors,
  UpgradedBasicNemesisCards: UpgradedBasicNemesisCards.selectors,
  getSelectedCardsForSelectedExpansions,
  getSelectedCardIdsForSelectedExpansions,
  getSelectedNemesesForSelectedExpansions,
  getSelectedNemesisIdsForSelectedExpansions,
  getSelectedMagesForSelectedExpansions,
  getSelectedMageIdsForSelectedExpansions,
  getTreasuresForSelectedExpansions,
  getTreasureIdsForSelectedExpansions,
  getTreasuresByLevelForSelectedExpansions,
  getBasicNemesisCardsForSelectedExpansions,
  getBasicNemesisCardIdsForSelectedExpansions,
  getUpgradedBasicNemesisCardsForSelectedExpansions,
  getUpgradedBasicNemesisCardIdsForSelectedExpansions,
  getGemIdsForSelectedExpansions,
  getRelicIdsForSelectedExpansions,
  getSpellIdsForSelectedExpansions,
}
