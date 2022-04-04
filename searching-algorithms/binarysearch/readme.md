accept a sorted array and value
create a left and right pointer
while left comes before right,
    get middle pointer
    if you get the value you want, return the index
    if the value is too small, move left pointer up
    if the value is too large, move right pointer down
if you never find the value, return -1