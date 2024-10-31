---
sidebar_position: 3
---

# Installation

In order to successfully install this plugin, please ensure that it's dependencies are properly set up first, as enabling will be refused otherwise.

## Dependency Vault

While it is advised to install a later fork of Vault, such as [VaultUnlocked](https://www.spigotmc.org/resources/vaultunlocked.117277/), any version will do, as this plugin only depends on the very basic economy-provider interface definition.

## Dependency NBTAPI

Player-data is stored within the main world folder's `playerdata` directory as NBT-files, one per player; in order to read an offline-player's last location, said files need to be parsed, which is realized via [NBTAPI](https://github.com/tr7zw/Item-NBT-API/releases).

## Self

Simply download the latest jar-file from the corresponding repository's [Release Page](https://github.com/BlvckBytes/WorldEconomy/releases) and move it into your server's plugin folder.