/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import { expect } from 'chai';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
import { JSDOM } from 'jsdom';
import { act } from 'react-dom/test-utils';

import App from './index';

let rootContainer: ReactDOM.Container;

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
    }
  }
}

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.document = window.document;
global.window = global.document.defaultView;

describe('app', () => {
  it('renders correctly', () => {
    const root = ReactDOMClient.createRoot(global.document);
    act(() => {
      root.render(
        <div>
          <App />
        </div>
      );
    });
    const h1: Element = global.document.querySelector('h1');
    expect(h1.textContent).to.equal('Hello World!');
  });
});
