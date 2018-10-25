---
title: Autocomplete branch names on the command line
author: James W.
type: post
date: 2018-07-23T10:53:45+00:00
url: /2018/07/23/autocomplete-branch-names-git/
categories:
  - Resources
tags:
  - autocomplete
  - git

---
Trying to get over the force of habit that is using tab to auto-complete things on Mac. Well, it doesn&#8217;t work for git out of the box but here is a way to get it working on the command line. You can use this script as part of your bash_profile in order to be able to autocomplete long branch names by pressing TAB.

First, download the script to your home folder:

    curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash -o ~/.git-completion.bash

Next, you need to edit your `~/.bash_profile` and add the following:

    if [ -f ~/.git-completion.bash ]; then
      . ~/.git-completion.bash
    fi

Source: <http://apple.stackexchange.com/questions/55875/how-can-i-get-git-to-autocomplete-e-g-branches-at-the-command-line/55886#55886>