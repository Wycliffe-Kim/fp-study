import rx
from promise import Promise

def from_promise(promise: Promise):
    return rx.create(
        lambda observer, scheduler: 
            observer.on_next(promise.value) 
            if promise.is_fulfilled else 
            observer.on_error(promise.value)
    )