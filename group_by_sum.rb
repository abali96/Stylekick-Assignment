def groupBySum(input, num)
  returnArr = []
  input.sort!
  while input.length > 0
    if input[0] > num
      break
    end
    sum = input[0]
    returnArr.push([input.shift]) # remove first element of input and put into returnArr
    j = input.length - 1
    while j >= 0 && sum < num
      if sum + input[j] <= num
        sum += input[j]
        returnArr[-1].push(input[j])
        input.delete_at(j)
      end
      j-=1
    end
  end
  if input.length > 0
    returnArr.push(input) # at this point we have just the bigger numbers
  end
  return returnArr
end

print groupBySum([1,2,1,1,1,2,2,1,1,1,2,2,1,1,1,1,2,1,1,1,1,1,1,2,1,1], 3)
puts ""
print groupBySum([6,2,1,1,1,2,2,1,1,1,5,2,1,1,1,1,2,1,1,1,1,1,1,2,1,1], 4)