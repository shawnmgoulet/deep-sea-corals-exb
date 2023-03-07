# taxon-selector

provides heirarchical selector for Phylum/Class/Family/Order/Genus. Available choices are limited based on selection in previous level, i.e. choice of Phylum will determine what choices are offered for Class.

A framework filter change message is published with each selection so this widget must be configured in the builder environment to publish to all interested widgets.

