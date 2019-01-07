/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AmpA4A} from '../../amp-a4a/0.1/amp-a4a';

/**
 * This is a minimalistic AmpA4A implementation that primarily gets an Ad
 * through a source URL and extracts the Cloudflare generated signature
 * from a HTTP header.  This is then given to A4A to validate against
 * the cloudflare signing key.  Also see AmpAdNetworkFakeImpl for
 * additional guidance on other implementation details.
 */
export class AmpAdNetworkDianomiImpl extends AmpA4A {

  /**
   * Validate the tag parameters.  If invalid, ad ad will not be displayed.
   * @override
   */
  isValidElement() {
    const el = this.element;
    if (!(this.isAmpAdElement() && el.hasAttribute('data-smartad-id'))) {
      return false;
    }

    return true;
  }

  /** @override */
  getAdUrl() {
    const smartadId = this.element.getAttribute('data-smartad-id');
    const base = 'https://www.dianomi.com/smartads.pl?format=a4a&id=';
    return base + smartadId;
  }
}


AMP.extension('amp-ad-network-dianomi-impl', '0.1', AMP => {
  AMP.registerElement('amp-ad-network-dianomi-impl',
      AmpAdNetworkDianomiImpl);
});
