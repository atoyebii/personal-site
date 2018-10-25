---
title: Terminal Aliases
author: James W.
type: post
date: 2018-04-04T12:05:30+00:00
url: /2018/04/04/terminal-aliases/
categories:
  - Terminal
tags:
  - bash
  - shortcuts

---
Aliases are nothing more than keyboard shortcuts or abbreviations, and although they’re a bit limited, they’re great for simple commands. Edit the `nano ~/.bash_profile` file and add your alias, save and restart and boom, shortcuts!<!--more-->

## Projects Folder {#projects-folder}

    alias code="cd /Users/jameswilliams/documents/repos"

## Symbolic links  for applications. {#symbolic-links-for-applications}

Use applications more easily from the command line.

### Sourcetree {#sourcetree}

    ln -s /Applications/SourceTree.app/Contents/Resources/stree /usr/local/bin/

### Sublime Text {#sublime-text}

    ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl