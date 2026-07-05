//priority 999

/* //RegExp to replace :
function RegN(string) {
return string.replace(/:/g, '_')
} */

function ItemOrTag(value) {
  if (value.charAt(0) == "#") {
    return {
      tag: cut(value, 1),
    };
  } else {
    return JsonMakeItem(value);
  }
}
//check if value is a tag or item and return as json + count value
function ItemOrTagAndCount(value, count) {
  if (count < 2) {
    return ItemOrTag(value);
  } else if (value.charAt(0) === "#") {
    return {
      tag: cut(value, 1),
      count: count,
    };
  } else {
    return ItemAndCount(value, count);
  }
}
//return as json + count value
function ItemAndCount(value, count) {
  if (count < 2) {
    return JsonMakeItem(value);
  } else
    return {
      item: value,
      count: count,
    };
}