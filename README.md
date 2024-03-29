# [EdhStack](https://edhstack.com) query language

## How to install

You need java version in order to run antlr4, so if `java --version` is not a command, try:
```
sudo apt install default-jre
```

```
yarn install
```

## How to build
```
yarn build
```

## How to test
```
yarn test
```

## Query language syntax

## Next steps

### Devotion query
```
devotionG > 3
devotionGreen > 3
```

### Logic

#### Implicit `and`

There is an implicit `and` between all clauses, so
```
draw discard cmc < 3
```
is equal to
```
draw and discard and cmc < 3
```

#### Explicit `or`
To match one of clauses, you can use `or` operator.
For example, cards with converted mana cost under 3 or above 5:
```
cmc < 3 or cmc > 3
```

### More complex expressions
Query
```
(type = creature or type = enchantment) color = r cmc < 3
```
is equal to
```
(type = creature or type = enchantment) and color = r and cmc < 3
```

#### `or` precedence over `and`
Query
```
type = creature or type = enchantment cmc < 3 draw discard
```
is equal to
```
type = creature or (type = enchantment and cmc < 3 and draw and discard)
```
