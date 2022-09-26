function sentensify(str) {
    return str.split(/\s|\W/).join(' ');
}

sentensify('May-the-force-be-with-you');
