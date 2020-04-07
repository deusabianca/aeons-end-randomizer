//
// This schema has been created by using https://github.com/YousefED/typescript-json-schema
// To recreate the schema run 'typescript-json-schema tsconfig.json ExpeditionConfig --include ./src/types/**/*.ts --required' at the project root,
// copy it to this directory and remove unwanted properties.
//

export const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  definitions: {
    Array: {
      items: {
        anyOf: [
          {
            properties: {
              level: {
                enum: [1, 2, 3],
                type: 'number',
              },
              random: {
                type: 'boolean',
              },
            },
            required: ['level', 'random'],
            type: 'object',
          },
          {
            type: 'string',
          },
        ],
      },
      type: 'array',
    },
    Array_1: {
      items: {
        anyOf: [
          {
            properties: {
              random: {
                type: 'boolean',
              },
            },
            required: ['random'],
            type: 'object',
          },
          {
            type: 'string',
          },
        ],
      },
      type: 'array',
    },
    Array_2: {
      items: {
        anyOf: [
          {
            $ref: '#/definitions/IBluePrint',
          },
          {
            type: 'string',
          },
        ],
      },
      type: 'array',
    },
    Array_3: {
      items: {
        type: 'number',
      },
      type: 'array',
    },
    Array_4: {
      items: {
        anyOf: [
          {
            $ref: '#/definitions/IBluePrint',
          },
          {
            $ref: '#/definitions/IEmptyBluePrint',
          },
        ],
      },
      type: 'array',
    },
    Barracks: {
      properties: {
        mageIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        supplyIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        treasureIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
      },
      required: ['mageIds', 'supplyIds', 'treasureIds'],
      type: 'object',
    },
    BattleConfig: {
      $ref: '#/definitions/__type_2',
    },
    BattleTreasure: {
      $ref: '#/definitions/__type_3',
    },
    BranchesConfig: {
      $ref: '#/definitions/__type_1',
    },
    CardType: {
      enum: ['EMPTY', 'Gem', 'Relic', 'Spell'],
      type: 'string',
    },
    IBluePrint: {
      properties: {
        id: {
          type: 'string',
        },
        operation: {
          $ref: '#/definitions/Operation',
        },
        threshold: {
          type: 'number',
        },
        type: {
          $ref: '#/definitions/CardType',
        },
        values: {
          $ref: '#/definitions/Array_3',
        },
      },
      required: ['operation', 'type'],
      type: 'object',
    },
    IEmptyBluePrint: {
      properties: {
        id: {
          type: 'string',
        },
        operation: {
          enum: ['NoOp'],
          type: 'string',
        },
        threshold: {
          type: 'number',
        },
        type: {
          enum: ['EMPTY'],
          type: 'string',
        },
        values: {
          $ref: '#/definitions/Array_3',
        },
      },
      required: ['operation', 'type'],
      type: 'object',
    },
    MarketType: {
      enum: ['custom', 'official'],
      type: 'string',
    },
    NarrativeConfig: {
      $ref: '#/definitions/__type_4',
    },
    NemesisTier: {
      enum: [1, 2, 3, 4],
      type: 'number',
    },
    OnLoss: {
      enum: ['skip'],
      type: 'string',
    },
    Operation: {
      type: 'string',
    },
    RewardsConfig: {
      anyOf: [
        {
          properties: {
            mage: {
              properties: {
                ids: {
                  $ref: '#/definitions/Array_1',
                },
              },
              required: ['ids'],
              type: 'object',
            },
            supply: {
              properties: {
                bigPocket: {
                  type: 'boolean',
                },
                ids: {
                  $ref: '#/definitions/Array_2',
                },
              },
              required: ['ids'],
              type: 'object',
            },
            treasure: {
              properties: {
                ids: {
                  $ref: '#/definitions/Array',
                },
              },
              required: ['ids'],
              type: 'object',
            },
          },
          type: 'object',
        },
        {
          properties: {
            regular: {
              enum: [true],
              type: 'boolean',
            },
          },
          required: ['regular'],
          type: 'object',
        },
      ],
    },
    RewardsConfig_1: {
      anyOf: [
        {
          properties: {
            mage: {
              properties: {
                ids: {
                  $ref: '#/definitions/Array_1',
                },
              },
              required: ['ids'],
              type: 'object',
            },
            supply: {
              properties: {
                bigPocket: {
                  type: 'boolean',
                },
                ids: {
                  $ref: '#/definitions/Array_2',
                },
              },
              required: ['ids'],
              type: 'object',
            },
            treasure: {
              properties: {
                ids: {
                  $ref: '#/definitions/Array',
                },
              },
              required: ['ids'],
              type: 'object',
            },
          },
          type: 'object',
        },
        {
          properties: {
            regular: {
              enum: [true],
              type: 'boolean',
            },
          },
          required: ['regular'],
          type: 'object',
        },
      ],
    },
    SequenceConfig: {
      $ref: '#/definitions/__type',
    },
    SettingsSnapshotConfig: {
      $ref: '#/definitions/__type_5',
    },
    TreasureLevel: {
      enum: [1, 2, 3],
      type: 'number',
    },
    __type: {
      properties: {
        branches: {
          $ref: '#/definitions/BranchesConfig',
        },
        firstBranchId: {
          type: 'string',
        },
      },
      required: ['branches', 'firstBranchId'],
      type: 'object',
    },
    __type_1: {
      additionalProperties: {
        anyOf: [
          {
            properties: {
              config: {
                $ref: '#/definitions/BattleConfig',
              },
              nextBranchId: {
                type: 'string',
              },
              type: {
                enum: ['battle'],
                type: 'string',
              },
            },
            required: ['config', 'type'],
            type: 'object',
          },
          {
            properties: {
              config: {
                $ref: '#/definitions/NarrativeConfig',
              },
              nextBranchId: {
                items: {
                  type: 'string',
                },
                type: 'array',
              },
              type: {
                enum: ['narrative'],
                type: 'string',
              },
            },
            required: ['config', 'type'],
            type: 'object',
          },
          {
            properties: {
              config: {
                $ref: '#/definitions/RewardsConfig_1',
              },
              nextBranchId: {
                type: 'string',
              },
              type: {
                enum: ['reward'],
                type: 'string',
              },
            },
            required: ['config', 'type'],
            type: 'object',
          },
        ],
      },
      type: 'object',
    },
    __type_2: {
      properties: {
        lossRewards: {
          items: {
            anyOf: [
              {
                properties: {
                  mage: {
                    properties: {
                      ids: {
                        $ref: '#/definitions/Array_1',
                      },
                    },
                    required: ['ids'],
                    type: 'object',
                  },
                  supply: {
                    properties: {
                      bigPocket: {
                        type: 'boolean',
                      },
                      ids: {
                        $ref: '#/definitions/Array_2',
                      },
                    },
                    required: ['ids'],
                    type: 'object',
                  },
                  treasure: {
                    properties: {
                      ids: {
                        $ref: '#/definitions/Array',
                      },
                    },
                    required: ['ids'],
                    type: 'object',
                  },
                },
                type: 'object',
              },
              {
                properties: {
                  regular: {
                    enum: [true],
                    type: 'boolean',
                  },
                },
                required: ['regular'],
                type: 'object',
              },
            ],
          },
          type: 'array',
        },
        nemesisId: {
          type: 'string',
        },
        newUBNCards: {
          properties: {
            addRandom: {
              type: 'boolean',
            },
            ids: {
              items: {
                type: 'string',
              },
              type: 'array',
            },
          },
          required: ['addRandom', 'ids'],
          type: 'object',
        },
        onLoss: {
          $ref: '#/definitions/OnLoss',
        },
        specialRules: {
          type: 'string',
        },
        tier: {
          $ref: '#/definitions/NemesisTier',
        },
        treasure: {
          $ref: '#/definitions/BattleTreasure',
        },
        winRewards: {
          $ref: '#/definitions/RewardsConfig',
        },
      },
      required: ['newUBNCards', 'tier', 'treasure'],
      type: 'object',
    },
    __type_3: {
      properties: {
        hasTreasure: {
          type: 'boolean',
        },
        level: {
          $ref: '#/definitions/TreasureLevel',
        },
      },
      required: ['hasTreasure'],
      type: 'object',
    },
    __type_4: {
      properties: {
        descisions: {
          anyOf: [
            {
              items: {
                type: 'string',
              },
              type: 'array',
            },
            {
              enum: [false],
              type: 'boolean',
            },
          ],
        },
        text: {
          type: 'string',
        },
      },
      required: ['descisions', 'text'],
      type: 'object',
    },
    __type_5: {
      properties: {
        availableCardIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        availableMageIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        availableNemesisIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        availableTreasureIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        availableUpgradedBasicNemesisCardIds: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        supplySetup: {
          properties: {
            active: {
              type: 'boolean',
            },
            default: {
              type: 'boolean',
            },
            id: {
              type: 'string',
            },
            isDirty: {
              type: 'boolean',
            },
            isNew: {
              type: 'boolean',
            },
            name: {
              type: 'string',
            },
            tiles: {
              $ref: '#/definitions/Array_4',
            },
            type: {
              $ref: '#/definitions/MarketType',
            },
          },
          required: ['active', 'id', 'name', 'tiles', 'type'],
          type: 'object',
        },
      },
      required: [
        'availableCardIds',
        'availableMageIds',
        'availableNemesisIds',
        'availableTreasureIds',
        'availableUpgradedBasicNemesisCardIds',
        'supplySetup',
      ],
      type: 'object',
    },
  },
  properties: {
    bigPocketVariantConfig: {
      type: 'boolean',
    },
    initialBarracksConfig: {
      $ref: '#/definitions/Barracks',
    },
    initialUBNCardsConfig: {
      items: {
        type: 'string',
      },
      type: 'array',
    },
    name: {
      type: 'string',
    },
    seedConfig: {
      type: 'string',
    },
    sequenceConfig: {
      $ref: '#/definitions/SequenceConfig',
    },
    settingsSnapshotConfig: {
      $ref: '#/definitions/SettingsSnapshotConfig',
    },
  },
  required: [
    'bigPocketVariantConfig',
    'name',
    'sequenceConfig',
    'settingsSnapshotConfig',
  ],
  type: 'object',
}
