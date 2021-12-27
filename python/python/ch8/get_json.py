import asyncio
import json
from promise import Promise

from .fetch import fetch

def get_json_callback(url, success, fail):
    async def run():
        try:
            data = await fetch(url)
            success(json.loads(data))
        except ValueError as err:
            fail(err)
    
    asyncio.run(asyncio.wait([run()]));
  
def get_json_promise(url):
    async def promise_func(resolve, reject):
        try:
            data = await fetch(url)
            resolve(json.loads(data))
        except ValueError as err:
            reject(err)
              
    return Promise(lambda resolve, reject: asyncio.run(asyncio.wait([promise_func(resolve, reject)])))