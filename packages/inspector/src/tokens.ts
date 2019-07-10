// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { Token } from '@phosphor/coreutils';

import { ISignal } from '@phosphor/signaling';

import { Widget } from '@phosphor/widgets';

/* tslint:disable */
/**
 * The inspector panel token.
 */
export const IInspector = new Token<IInspector>(
  '@jupyterlab/inspector:IInspector'
);
/* tslint:enable */

/**
 * An interface for an inspector.
 */
export interface IInspector {
  /**
   * The source of events the inspector listens for.
   */
  source: IInspector.IInspectable | null;
}

/**
 * A namespace for inspector interfaces.
 */
export namespace IInspector {
  /**
   * The definition of an inspectable source.
   */
  export interface IInspectable {
    /**
     * A signal emitted when the inspector should clear all items.
     */
    cleared: ISignal<any, void>;

    /**
     * A signal emitted when the inspectable is disposed.
     */
    disposed: ISignal<any, void>;

    /**
     * A signal emitted when an inspector value is generated.
     */
    inspected: ISignal<any, IInspectorUpdate>;

    /**
     * Test whether the inspectable has been disposed.
     */
    isDisposed: boolean;

    /**
     * Indicates whether the inspectable source emits signals.
     *
     * #### Notes
     * The use case for this attribute is to limit the API traffic when no
     * inspector is visible. It can be modified by the consumer of the source.
     */
    standby: boolean;
  }

  /**
   * An update value for code inspectors.
   */
  export interface IInspectorUpdate {
    /**
     * The content being sent to the inspector for display.
     */
    content: Widget | null;
  }
}
