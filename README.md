## Description
This project improves on Light Table's default plugins manager. It provides one command
to save plugins to a file and another to install/update plugins from that file.

*UPDATE* This plugin is not being developed on. Chris pointed out this approach is overkill as you can use
[your plugins in a plugin's :dependencies](https://groups.google.com/forum/?fromgroups=#!topic/light-table-discussion/zFHDo7_1kDI).

## Install

Clone this project to your plugins directory. On a mac:

```
$ git clone https://github.com/cldwalker/lt-plugins-inc /Users/$USER/Library/Application\ Support/LightTable/plugins
```

## Usage

Save your plugins with the command `plugins-inc: Save plugins...`.

Your plugins will be saved to `plugins.edn` in your settings folder. On a mac,
this file will be at `/Users/$USER/Library/Application Support/LightTable/settings/plugins.edn`

[Example plugins.edn](https://github.com/cldwalker/dotfiles/blob/master/.light_table/plugins.edn)

After editing your plugins.edn or if using LT from a new machine, install
all your plugins with the command `plugins-inc: Update plugins...`.

## Bugs/Issues
Please report them [on github](http://github.com/cldwalker/lt-plugins-inc/issues).

## TODO
* Install a plugin given a git url and sha.

## License
See LICENSE.TXT
