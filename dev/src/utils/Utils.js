export const NumberSettings = {
    decimalSeparator: ".",
    thousandSeparator: " ",
    surfaceUnit: "yolo",
    surfaceMultiplyer: 1.0,
}
export const formatNumber = (_number, _suffix) => {
    _number = typeof _number == "number" ? _number + "" : _number;
    _number = typeof _number != "undefined" && _number > 0 ? _number : "";
    _suffix = _suffix == undefined ? "" : _suffix;
    _number = _number.replace(new RegExp("^(\\d{" + (_number.length % 3 ? _number.length % 3 : 0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
    if (typeof NumberSettings.decimalSeparator != "undefined" && NumberSettings.decimalSeparator != " ") {
        _number = _number.replace(".", NumberSettings.decimalSeparator);
    }
    if (typeof NumberSettings.thousandSeparator != "undefined" && NumberSettings.thousandSeparator != " ") {
        _number = _number.replace(/\s/g, NumberSettings.thousandSeparator);
    }
    return _number + " " + _suffix;
}
export const formatEuro = (_number) => {
    return formatNumber(_number, "€");
}
export const formatPercent = (_number) => {
    console.warn(Math.round(_number * 100 * 100) / 100)
    return formatNumber((Math.round(_number * 100 * 100) / 100), "%");
}
export const formatInc = (_number) => {
    _number += 1;
    if (_number < 10) return "0" + _number;
    return _number;
}
export const formatDate = (dateString, locale) => {
    // const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString+'T03:24:00').toLocaleDateString(locale, options)
}
export const formatSurface = (surface, round=true) => {
    console.warn('formatSurface', NumberSettings.decimalSeparator)
    const precision = round?1:100;
    return formatNumber(Math.round(surface*NumberSettings.surfaceMultiplyer*round)/round, NumberSettings.surfaceUnit);
}
