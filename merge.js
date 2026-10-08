function merge_sort(number_series)
{
    if (number_series.length <= 1) {
        return number_series;
    }

    const middle = Math.floor(number_series.length / 2);

    const left = merge_sort(number_series.slice(0, middle));
    const right = merge_sort(number_series.slice(middle));

    const result = []
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

console.log(merge_sort([2,9,6,7,4,1,3,2]))