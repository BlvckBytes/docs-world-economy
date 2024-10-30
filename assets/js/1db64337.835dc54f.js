"use strict";(self.webpackChunkdocs_world_economy=self.webpackChunkdocs_world_economy||[]).push([[413],{3022:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=l(4848),o=l(8453);const i={sidebar_position:1,slug:"/"},s="Overview",d={id:"overview",title:"Overview",description:"A highly simplistic, Vault-based economy provider, supporting per-world balances and world-groups.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/docs-world-economy/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"documentationSidebar",next:{title:"Configuration",permalink:"/docs-world-economy/configuration"}},c={},a=[{value:"Persistence",id:"persistence",level:2},{value:"World-Groups",id:"world-groups",level:2},{value:"Currently Active World-Group",id:"currently-active-world-group",level:3},{value:"Last Active World-Group",id:"last-active-world-group",level:3},{value:"Commands And Permissions",id:"commands-and-permissions",level:2},{value:"Balance",id:"balance",level:3},{value:"Balance Group",id:"balance-group",level:3},{value:"Balances",id:"balances",level:3},{value:"Balance Top",id:"balance-top",level:3},{value:"Money",id:"money",level:3},{value:"Pay",id:"pay",level:3},{value:"Pay Group",id:"pay-group",level:3},{value:"Reload",id:"reload",level:3}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"overview",children:"Overview"})}),"\n",(0,r.jsx)(n.p,{children:"A highly simplistic, Vault-based economy provider, supporting per-world balances and world-groups."}),"\n",(0,r.jsx)(n.h2,{id:"persistence",children:"Persistence"}),"\n",(0,r.jsxs)(n.p,{children:["Data is stored in exactly one file per player, residing in the ",(0,r.jsx)(n.code,{children:"WorldEconomy/players"}),"-directory, with the name corresponding to the respective holder-UUID. File-contents are formatted as JSON, mapping the identifiers of configured world-groups to the balance of the user within that group."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "world-group-A": 250.45,\n  "world-group-B": 563.18,\n  "world-group-C": 201.21\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"world-groups",children:"World-Groups"}),"\n",(0,r.jsxs)(n.p,{children:["Not only due to the fact that worlds are usually split into multiple realms, like ",(0,r.jsx)(n.code,{children:"overworld"}),", ",(0,r.jsx)(n.code,{children:"nether"})," and ",(0,r.jsx)(n.code,{children:"end"}),", some worlds may also be logically linked together, like a plot- and a farm-world; in order to allow multiple worlds to coalesce into a single logical unit, world-groups have been introduced."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"worldGroups:\n  # Used to internally identify balances, as well as for tab-completion\n  # Do not alter once initially established!\n  World:\n    # Rendered in chat, whenever this world-group is referred to\n    displayName: '&6World'\n    # List of world-names which are combined into a single economy-account per player\n    members:\n      - world\n      - world_nether\n      - world_the_end\n"})}),"\n",(0,r.jsx)(n.h3,{id:"currently-active-world-group",children:"Currently Active World-Group"}),"\n",(0,r.jsx)(n.p,{children:"If a player is currently online, their active world-group is determined by the name of the world they're currently in."}),"\n",(0,r.jsx)(n.h3,{id:"last-active-world-group",children:"Last Active World-Group"}),"\n",(0,r.jsx)(n.p,{children:"For offline-players, their last active world-group is treated as their current, which is determined by looking at the playerdata-file of the main world, where the server natively stores the last location of said player."}),"\n",(0,r.jsx)(n.h2,{id:"commands-and-permissions",children:"Commands And Permissions"}),"\n",(0,r.jsx)(n.p,{children:"The following section provides a list of supported commands, usages, explanations as well as their permissions. Command-names and aliases are configurable, so this section refers to the default configuration."}),"\n",(0,r.jsx)(n.h3,{id:"balance",children:"Balance"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Usage: ",(0,r.jsx)(n.code,{children:"/balance [player]"})]}),"\n",(0,r.jsxs)(n.li,{children:["Aliases:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/bal"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Permissions:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worldeconomy.command.balance"}),": View your own balance"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worldeconomy.command.balance.other"}),": View the balance of others"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Description: Displays the balance of a player within their current world-group"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"balance-group",children:"Balance Group"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Usage: ",(0,r.jsx)(n.code,{children:"/balancegroup <world-group> [player]"})]}),"\n",(0,r.jsxs)(n.li,{children:["Aliases:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/balgroup"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/balg"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Permissions:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worldeconomy.command.balancegroup"}),": View your own balance"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worldeconomy.command.balancegroup.other"}),": View the balance of others"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Description: Displays the balance of a player within the specified world-group"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"balances",children:"Balances"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Usage: ",(0,r.jsx)(n.code,{children:"/balances [player]"})]}),"\n",(0,r.jsxs)(n.li,{children:["Aliases:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/bals"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Permissions:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worldeconomy.command.balances"}),": View your own balances"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worldeconomy.command.balances.other"}),": View the balances of others"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Description: Displays the balances of a player for all existing world-groups"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"balance-top",children:"Balance Top"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Usage: ",(0,r.jsx)(n.code,{children:"/balancetop [world-group]"})]}),"\n",(0,r.jsxs)(n.li,{children:["Aliases:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/baltop"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Permissions:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worldeconomy.command.balancetop"}),": View the top-list of the current world-group"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worldeconomy.command.balancetop.group"}),": View the top-list of a specified world-group"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Description: Displays the top N (as configured) balances and their holder-names for any specified world-group"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"money",children:"Money"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Usage: ",(0,r.jsx)(n.code,{children:"/money <Set/Remove/Add> <player> <value> [world-group]"})]}),"\n",(0,r.jsxs)(n.li,{children:["Permissions:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worldeconomy.command.money"}),": Execute the money command"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Description: Admin-tool to manage the balance of any given player within either their current, or a specified world-group"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"pay",children:"Pay"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Usage: ",(0,r.jsx)(n.code,{children:"/pay <name> <amount>"})]}),"\n",(0,r.jsxs)(n.li,{children:["Permissions:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worldeconomy.command.pay"}),": Execute the pay command"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worldeconomy.command.pay.cross"}),": Whether the player can pay to players in other world-groups"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Description: Pay money to another player"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"pay-group",children:"Pay Group"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Usage: ",(0,r.jsx)(n.code,{children:"/paygroup <name> <amount> <target world-group> [source world-group]"})]}),"\n",(0,r.jsxs)(n.li,{children:["Aliases:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/payg"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Permissions:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worldeconomy.command.paygroup"}),": Execute the paygroup command"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worldeconomy.command.paygroup.source"}),": Specify a custom source-group to pay from"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"worldeconomy.command.paygroup.cross"}),": Whether the player can pay to players in other world-groups"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Description: Pay from a world-group possibly different than the current of the sender, to a world-group different than the current of the recipient"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"reload",children:"Reload"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Usage: ",(0,r.jsx)(n.code,{children:"/worldeconomyreload"})]}),"\n",(0,r.jsxs)(n.li,{children:["Aliases:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/wereload"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Permissions:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"worldeconomy.command.reload"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Description: Reload the configuration- and language-file"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>d});var r=l(6540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);