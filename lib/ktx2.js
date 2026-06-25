import { KTX2Loader } from "three-stdlib";
import { REVISION } from "three";

let ktx2Loader = null;

export const withKTX2 = (gl) => (loader) => {
    if (!ktx2Loader) {
        ktx2Loader = new KTX2Loader();
        // Temporary: matches your exact three version's basis files.
        ktx2Loader.setTranscoderPath(
            `https://unpkg.com/three@0.${REVISION}.0/examples/jsm/libs/basis/`
        );
        ktx2Loader.detectSupport(gl);
    }
    loader.setKTX2Loader(ktx2Loader);
};