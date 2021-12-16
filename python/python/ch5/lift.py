import pydash
from .MaybeFactory import MaybeFactory

lift = pydash.curry(lambda f, value: MaybeFactory.from_nullable(value).map(f))