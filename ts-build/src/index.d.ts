/**
 * Penumbra
 * Fetch and decrypt files in the browser using whatwg streams and web workers.
 *
 * @module penumbra
 * @author Transcend Inc. <https://transcend.io>
 * @license Apache 2.0
 */
import penumbra from './API';
import MOCK_API from './mock';
import './transferHandlers/penumbra-events';
import { PenumbraAPI, PenumbraSupportLevel } from './types';
export * from './types';
export { penumbra, MOCK_API, PenumbraSupportLevel };
/** Extend global Window */
declare global {
    /** Extend self */
    interface Window {
        /** self.penumbra interface */
        penumbra?: PenumbraAPI;
        /** TODO: remove debug intoStream global */
        intoStream: any;
    }
}
//# sourceMappingURL=index.d.ts.map