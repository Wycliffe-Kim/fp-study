import pydash
from .Maybe import Maybe

lift = pydash.curry(lambda f, value: Maybe.from_nullable(value).map(f))