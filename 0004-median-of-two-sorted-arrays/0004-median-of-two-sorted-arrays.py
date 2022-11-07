class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        # sortedMergerArray=sorted(nums1+nums2)
        # print(sortedMergerArray)
        # if(len(sortedMergerArray)%2!=0):
        #     middle=len(sortedMergerArray)//2+1
        #     median=sortedMergerArray[middle-1]
        #     print("odd",median)
        #     return median
        # else:
        #     middle=len(sortedMergerArray)//2
        #     nextmiddle=middle+1
        #     print(middle,nextmiddle)
        #     median=(sortedMergerArray[middle-1]+sortedMergerArray[nextmiddle-1])/2
        #     print("even",median)
        #     return median
        nums3 = nums1 + nums2
        nums3 = sorted(nums3)
        middle = len(nums3)//2
        if len(nums3) % 2 == 0:
            return (nums3[middle-1] + nums3[middle]) / 2
        else:
            return nums3[middle]
        