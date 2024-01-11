// buble sort
let numbers = [1, 5, 2, 7, 5, 6];
function printArray(arr)
{
    let temp;
    let l = arr.length;
    for (let i = 0; i < l; i++)
    {
        temp = arr[i].toString();
        process.stdout.write(temp);
        process.stdout.write(' ');
    }
    console.log("");
}
//bubble sort to sort from big to small
function bubbleSort(arr)
{
    let l = arr.length
    let x = -1;
    let temparr = [];
    while (x != 0)
    {
        x = 0;
        for (let i = 0; i < l - 1; i++)
        {
            if (arr[i] < arr[i + 1]) // switch to > to sort from small to big
            {
                temparr[0] = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temparr[0];
                x++;
            }
        }
    }
    return arr;// we dont need toreturn the array here because it is passed py reference
}
/*
// to test
printArray(numbers);
let array = bubbleSort(numbers);
printArray(array);
*/
//--------------------------
//selection sort
//do i need to pass the aray to parameter???
// find the smallest element and return its index
function small(index, arr)
{
    let l = arr.length;
    let smallest = index;
    for (let i = index; i < l - 1; i++)
    {
        if (arr[smallest] > arr[i + 1])
        {
            smallest = i + 1;
        }

    }
    return smallest;
}
function swap(a, b, arr)
{
    let temp = [];
    temp[0] = arr[a];
    arr[a] = arr[b];
    arr[b] = temp[0];
}
// sort from small to big    
function selectionSort(arr)
{
    let l = arr.length
    let j;
    for (let i = 0; i < l - 1; i++)
    {
        j = small(i, arr);
        if (i != j)
        {
            swap(i, j, arr);
        }
    }
return arr;
}
printArray(numbers);
let array = selectionSort(numbers);
printArray(array);
//----------------------------------------
//insertion sort








//---------------------------
//linear search
function linearSearch(num, arr)
{
    let l = arr.length
    for (let i = 0; i < l; i++)
    {
        if (arr[i] == num)
        {
            return i;
        }
    }
    return -1;
}
let x = linearSearch(1, numbers);
if (x != -1)
{
    console.log("found at index " + x + " in the array")
}

//------------------
//binary search
function binarySearch(arr, target)
{
    let start = 0;
    let end = arr.length - 1;
    while (start <= end)
    {
        let midpoint = math.floor((start + end) / 2);
        if (arr[midpoint] == target)
        {
            return midpoint;
        }
        if (arr[midpoint] > target)
        {
            start = midpoint + 1;
        }
        if (arr[midpoint] < target)
        {
            end = midpoint - 1;
        }
    }
    return -1; 
}
let y = binarySearch(3, numbers);
if (y != -1)
{
    console.log("found at" + y);
}
else
{
    console.log("not found");
}




