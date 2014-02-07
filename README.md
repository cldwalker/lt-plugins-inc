## Description
This project improves on Light Table's default plugins manager. It provides one command
to save plugins to a file and another to install plugins from that file.

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
