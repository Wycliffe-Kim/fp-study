import re
trim = lambda str: re.search('^\s*|\s*$', str).string
