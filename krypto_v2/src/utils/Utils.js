export const formatNumber = (_number, decimalSeparator=".", thousandSeparator=" ", _suffix) => {
    _number = typeof _number == "number" ? _number + "" : _number;
    _number = typeof _number != "undefined" && _number > 0 ? _number : "";
    _suffix = _suffix == undefined ? "" : _suffix;
    _number = _number.replace(new RegExp("^(\\d{" + (_number.length%3? _number.length%3:0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
    if(typeof decimalSeparator != "undefined" && decimalSeparator != " ") {
        _number = _number.replace(".", decimalSeparator);
    }
    if(typeof thousandSeparator != "undefined" && thousandSeparator != " ") {
        _number = _number.replace(/\s/g, thousandSeparator);
    }
    return _number+_suffix;
}
export const formatEuro = (_number, decimalSeparator=".", thousandSeparator=" ") => {
    return formatNumber(_number, decimalSeparator, thousandSeparator, "€");
}
export const formatPercent = (_number, decimalSeparator, thousandSeparator) => {
    console.warn(Math.round(_number*100*100)/100)
    return formatNumber((Math.round(_number*100*100)/100), decimalSeparator, thousandSeparator, "%");
}
export const formatInc = (_number) => {
    _number+=1;
    if(_number<10) return "0"+_number;
    return _number;
}