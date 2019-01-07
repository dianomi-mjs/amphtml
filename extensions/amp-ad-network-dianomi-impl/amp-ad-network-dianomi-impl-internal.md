<!---
Copyright 2018 Dianomi Ltd. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

### <a name="amp-ad-network-dianomi-impl"></a> `amp-ad-network-dianomi-impl`

<table>
  <tr>
    <td width="40%"><strong>Description</strong></td>
    <td>Dianomi implementation of AMP Ad tag which integrates with
    Dianomi's Ad Network.
    </td>
  </tr>
  <tr>
    <td width="40%"><strong>Availability</strong></td>
    <td>In Development</td>
  </tr>
  <tr>
    <td width="40%"><strong>Required Script</strong></td>
    <td><code>&lt;script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js">&lt;/script></code></td>
  </tr>
</table>

#### Examples
Example - Simple Ad
```html
<amp-ad 
    type="dianomi"
    data-smartad-id="1234">
</amp-ad>
```


#### Attributes

* data-smartad-id - id of ad on dianomi network
