class Solution:
    def firstMissingPositive(self, nums):
        uniqueSortedArray =sorted(set(nums))
        uniqueSortedArrayWithoutNegative=[]
        for i in uniqueSortedArray:
            if(i>=0):
                uniqueSortedArrayWithoutNegative.append(i)
                
        if(len(uniqueSortedArrayWithoutNegative)<=0):
            return 1
        elif(len(uniqueSortedArrayWithoutNegative)==1 and                                       uniqueSortedArrayWithoutNegative[0]!=1):
            return 1
        else:
            element=1
            for i in range(len(uniqueSortedArrayWithoutNegative)):
                if(i==0 and uniqueSortedArrayWithoutNegative[0]==0):
                    element=0
                if(uniqueSortedArrayWithoutNegative[i]!=element):
                    return element
                else:
                    element+=1
            return element