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

import '../../../amp-ad/0.1/amp-ad';
import * as vendors from '../vendors';
import {AmpAdNetworkDianomiImpl} from '../amp-ad-network-dianomi-impl';
import {
  AmpAdXOriginIframeHandler, // eslint-disable-line no-unused-vars
} from '../../../amp-ad/0.1/amp-ad-xorigin-iframe-handler';
import {dianomiIsA4AEnabled} from '../dianomi-a4a-config';
import {createElementWithAttributes} from '../../../../src/dom';


describes.realWin('dianomi-a4a-config', {
  amp: {
    extensions: ['amp-ad', 'amp-ad-network-dianomi-impl'],
  },
}, env => {
  let doc;
  let win;
  beforeEach(() => {
    win = env.win;
    doc = env.win.document;
  });
  it('should pass a4a config predicate', () => {
    const el = createElementWithAttributes(doc, 'amp-ad', {
      'data-smartad-id': '1234',
    });
    expect(dianomiIsA4AEnabled(win, el)).to.be.true;
  });

  it('should not pass a4a config predicate when useRemoteHtml is true', () => {
    const el = createElementWithAttributes(doc, 'amp-ad', {
      'data-smartad-id' : '1234',
    });
    const useRemoteHtml = true;
    expect(dianomiIsA4AEnabled(win, el, useRemoteHtml)).to.be.false;
  });
});

describes.realWin('amp-ad-network-dianomi-impl', {
  amp: {
    extensions: ['amp-ad', 'amp-ad-network-dianomi-impl'],
  },
}, env => {

  let dianomiImpl;
  let el;
  let doc;

  beforeEach(() => {
    doc = env.win.document;
    el = doc.createElement('amp-ad');
    el.setAttribute('type', 'dianomi');
    el.setAttribute('data-smartad-id', '1234');
    sandbox.stub(el, 'tryUpgrade_').callsFake(() => {});
    doc.body.appendChild(el);
    dianomiImpl = new AmpAdNetworkDianomiImpl(el);
  });

  describe('#isValidElement', () => {
    it('should be valid', () => {
      expect(dianomiImpl.isValidElement()).to.be.true;
    });
    it('should NOT be valid (impl tag name)', () => {
      el = doc.createElement('amp-ad-network-dianomi-impl');
      el.setAttribute('type', 'dianomi');
      cloudflareImpl = new AmpAdNetworkDianomiImpl(el);
      expect(dianomiImpl.isValidElement()).to.be.false;
    });
  });

  describe('#getAdUrl', () => {

    it('should be valid', () => {
      expect(dianomiImpl.getAdUrl()).to.equal(
          'https://www.dianomi.com/cgi-bin/smartads.epl?format=a4a&id=1234');
    });
  });
});
