---
sidebar_position: 1
slug: /
---

# Overview

A highly simplistic, Vault-based economy provider, supporting per-world balances and world-groups.

## Persistence

Data is stored in exactly one file per player, residing in the `WorldEconomy/players`-directory, with the name corresponding to the respective holder-UUID. File-contents are formatted as JSON, mapping the identifiers of configured world-groups to the balance of the user within that group.

```json
{
  "world-group-A": 250.45,
  "world-group-B": 563.18,
  "world-group-C": 201.21
}
```

## World-Groups

Not only due to the fact that worlds are usually split into multiple realms, like `overworld`, `nether` and `end`, some worlds may also be logically linked together, like a plot- and a farm-world; in order to allow multiple worlds to coalesce into a single logical unit, world-groups have been introduced.

```yaml
worldGroups:
  # Used to internally identify balances, as well as for tab-completion
  # Do not alter once initially established!
  World:
    # Rendered in chat, whenever this world-group is referred to
    displayName: '&6World'
    # List of world-names which are combined into a single economy-account per player
    members:
      - world
      - world_nether
      - world_the_end
```

### Currently Active World-Group

If a player is currently online, their active world-group is determined by the name of the world they're currently in.

### Last Active World-Group

For offline-players, their last active world-group is treated as their current, which is determined by looking at the playerdata-file of the main world, where the server natively stores the last location of said player.

## Commands And Permissions

The following section provides a list of supported commands, usages, explanations as well as their permissions. Command-names and aliases are configurable, so this section refers to the default configuration.

### Balance

- Usage: `/balance [player]`
- Aliases:
  - `/bal`
- Permissions:
  - `worldeconomy.command.balance`: View your own balance
  - `worldeconomy.command.balance.other`: View the balance of others
- Description: Displays the balance of a player within their current world-group

### Balance Group

- Usage: `/balancegroup <world-group> [player]`
- Aliases:
  - `/balgroup`
  - `/balg`
- Permissions:
  - `worldeconomy.command.balancegroup`: View your own balance
  - `worldeconomy.command.balancegroup.other`: View the balance of others
- Description: Displays the balance of a player within the specified world-group

### Balances

- Usage: `/balances [player]`
- Aliases:
  - `/bals`
- Permissions:
  - `worldeconomy.command.balances`: View your own balances
  - `worldeconomy.command.balances.other`: View the balances of others
- Description: Displays the balances of a player for all existing world-groups

### Balance Top

- Usage: `/balancetop [world-group]`
- Aliases:
  - `/baltop`
- Permissions:
  - `worldeconomy.command.balancetop`: View the top-list of the current world-group
  - `worldeconomy.command.balancetop.group`: View the top-list of a specified world-group
- Description: Displays the top N (as configured) balances and their holder-names for any specified world-group

### Money

- Usage: `/money <Set/Remove/Add> <player> <value> [world-group]`
- Permissions:
  - `worldeconomy.command.money`: Execute the money command
- Description: Admin-tool to manage the balance of any given player within either their current, or a specified world-group

### Pay

- Usage: `/pay <name> <amount>`
- Permissions:
  - `worldeconomy.command.pay`: Execute the pay command
  - `worldeconomy.command.pay.cross`: Whether the player can pay to players in other world-groups
- Description: Pay money to another player

### Pay Group

- Usage: `/paygroup <name> <amount> <target world-group> [source world-group]`
- Aliases:
  -  `/payg`
- Permissions:
  - `worldeconomy.command.paygroup`: Execute the paygroup command
  - `worldeconomy.command.paygroup.source`: Specify a custom source-group to pay from
  - `worldeconomy.command.paygroup.cross`: Whether the player can pay to players in other world-groups
- Description: Pay from a world-group possibly different than the current of the sender, to a world-group different than the current of the recipient

### Reload

- Usage: `/worldeconomyreload`
- Aliases:
  - `/wereload`
- Permissions:
  - `worldeconomy.command.reload`
- Description: Reload the configuration- and language-file