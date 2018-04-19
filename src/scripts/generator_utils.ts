// Copyright 2014-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Build a string used to create a URL from the discovery doc provided URL.
 *
 * @private
 * @param  input URL to build from
 * @return Resulting built URL
 */
export function buildurl(input?: string) {
  return input ?
      ('\'' + input + '\'')
          // replace double slashes with single slash (except in https://)
          .replace(/([^:]\/)\/+/g, '$1') :
      '';
}
