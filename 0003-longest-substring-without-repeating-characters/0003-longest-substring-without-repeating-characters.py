class Solution:
    def lengthOfLongestSubstring(self, s):
        str=s
        start=0
        end=0
        max_length=end-start+1
        d={}
        if(str==""):
            return 0
        
        while end <len(str):
          if str[end] in d and d[str[end]] >=start:
            start=d[str[end]]+1
          max_length=max(max_length,end-start+1)
          d[str[end]]=end
          end+=1
        
        return max_length