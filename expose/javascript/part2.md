1. at line 12, [value of i] will be printed. i is declared as a var, so it is accessible from outside its block. it is incremented until it reaches prices.length. If line 19 is run, then line 12 will print '3'. 
2. at line 13, [value of last loop discountedPrice] will be printed. discountedPrice is declared as a var, so it is accessible from outside its block. If line 19 is run, then line 13 will print '150'
3. at line 14, [value of last loop finalPrice] will be printed. finalPrice is declared as a var, so it is accessible from outside its block. If line 19 is run, then line 14 will print '150'. 
4. the function will return an array of prices with their discounts applied. the function will return [50, 100, 150]. 
5. line 12 will result in an error as i is declared as a let variable, so it is not accessible after the for-loop. Thus, it is unreachable on line 12. 
6. line 13 will result in an error as discountedPrice is declared as a let variable, so it is not accessible after the for-loop. Thus, it is unreachable on line 13. 
7. at line 14, [value of last loop finalPrice] will be printed. finalPrice is declared as a let variable in the same block as line 14, so it is accessible. If line 19 is run, then line 14 will print '150'. 
8. the function will return an array of prices with their discounts applied. discounted is declared as a let variable and is in the same block as line 16, so it is accessible. If line 19 is run, then [50, 100, 150] will be returned. 
9. line 11 will result in an error as i is declared as a let variable, so it is not accessible after the for-loop. Thus it is unreachable on line 11. 
10. at line 12, [value of length] will be printed. length is declared as a const variable, so its cannot be altered. If line 17 is run, then line 12 will print '3'.
11. line 14 will return the array discounted. You are allowed to push things to the array but not modify them, so the function will not return an error. Line 14 will return [50,100,150].
12. 
[a]. student.name
[b]. student['Grad Year']
[c]. student.greeting()
[d]. student['Favorite Teacher'].name
[e]. student.courseLoad[0] 

13. 
[a]. '32'. The 2 is converted to a string and it is concatenated to the 3, making '32'.
[b]. 1. The 3 is converted to a number and it is subtracted by 2, making 1. 
[c]. 3. the null value is becomes zero and is added to 3, making 3. 
[d]. '3null'. The null value becomes the string 'null' and is then concatenated to the 3, making '3null'. 
[e]. 4. The true value becomes a 1 and is added a 3, making it a 4.
[f]. 0. The false value becomes a 0 and the null value also becomes a 0, making 0.
[g]. 3undefined. The undefined is converted into a string and is concatenated to 3, making '3undefined'. 
[h]. NaN. The undefined becomes NaN and cannot be subtracted from 3, thus it becomes NaN. 

14.
[a]. true. The '2' becomes the number 2 and is greater than 1, so it returns true.
[b]. false. The comparator looks at the first character. Because 1 is less than 2, it returns false.
[c]. true. '2' becomes the number 2 and it is equal to 2.Thus it returns true.
[d]. false. === is the strict equality operator checks the equality without type conversion. It is false because they are different types. 
[e]. false. The true is converted to a 1 and is not equal to 2, returning false. 
[f]. true. The Boolean(2) returns a true since it is not a false value. true is exactly equal to true, so it returns true. 

15. The == operation is the regular equality, which converts different types of values into numbers and then compares them. The === operation is the strict equality, which does not convert the value types. It will only return true if they are exactly the same type and value. 

17. The modifyArray function will return the array [2,4,6]. [1,2,3] and the function doSomething are paramaters for modifyArray. The for-loop will push doSomething(array[i]) to the newArr. doSomething(array[i]) will return array[i] * 2. 

19. 1432
