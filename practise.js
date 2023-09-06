/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
1. Given a sorted array A (which is sorted in ascending order), 
having N integers, examine if there exists any pair of elements (A[i], A[j]) such that their sum is equal to X.

int twopointer(int num[],int n,int sum)
{
    int i=nums[0];
    int j=nums[n-1];
    
    while(i<=j){
        if(arr[i]+arr[j]==sum)
        return true;
        else if(arr[i]+arr[j]<sum)
        i++;
        else
        j--;
        
    }
        return false;
}
2. Given an integer array nums of length n and an integer target, find two integers
    in nums such that the sum is closest to target.
    
    int twopointer(int num[],int n)
   {
    int i=arr[0];
    int j=arr[n-1];
    while(i<=j){
        if(arr[i]+arr[j]==0){
        cout<<arr[i]<<arr[j]<<endl;
       i++;
        j--;
        }
        else if(arr[i]+arr[j]<0)
        i++;
        else 
        j--;
    }
    return 0;
}
   
    

3. Given a sorted array of integers, find all pairs that sum to zero.
   
    int twopointer(int num[],int n)
   {
    int i=arr[0];
    int j=arr[n-1];
    while(i<=j){
        if(arr[i]+arr[j]==0){
        cout<<arr[i]<<arr[j]<<endl;
       i++;
        j--;
        }
        else if(arr[i]+arr[j]<0)
        i++;
        else 
        j--;
    }
    return 0;
}

4. Given a sorted array, count the unique values.


 int unique(int arr[],int n)
{
 int count =0;
 for(int i=0;i<n;i++){
     if(arr[i]==arr[i+1]){
         continue;
     }
     else if(arr[i]!=arr[i+1]){
         count++;
         }
         
 }
 return count;
}

5. Given a sorted array of integers and a target average,
  determine if there is a pair of values in the array that average to the target value.
  
  
int main() {

  vector<int>arr={2,1,1,4,12};
  int n=arr.size();
  int target=7;
  int i=0;
  int j=n-1;
  vector<pair<int,int>>vec;
  while(i<j){
  if((arr[i]+arr[j])/2==target){
      vec.push_back({arr[i],arr[j]});
      i++;
      j--;
  }
  else if((arr[i]+arr[j])/2<target)
  i++;
  else 
  j--;
}
for(int i=0;i<vec.size();i++)
cout<< vec[i].first<<" "<<vec[i].second;
return 0;
}

6. Given a string, find the length of the longest substring without repeating characters.

int lengthOfLongestSubstring(string s) {
        int i=0;
        int j=0;
        int n=s.size();
        int res=0;
        unordered_map<char,int>mp;
        while(j<n){
            mp[s[j]]++;
        if(mp.size()==j-i+1){
        res=max(res,j-i+1);
       
        }
       else if(mp.size()<j-i+1){
           while(mp.size()<j-i+1){
               mp[s[i]]--;
               if(mp[s[i]]==0)
               mp.erase(s[i]);
               i++;
               
           }
       }
       j++;

    }
    return res;
    }
    
    
