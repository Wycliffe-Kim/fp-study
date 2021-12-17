import pydash
import toolz as tz

prop = pydash.curry(lambda prop_name, obj: tz.get(prop_name, obj) if prop_name in obj else None)