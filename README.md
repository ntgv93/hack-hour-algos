## What are Hack Hours?
Hack hours are a series of algorithm problems to refine your problem solving skills. You will be presented a new algorithm problem every day.  Think of this as taking your brain to the gym.  The more you exercise these skills, the more prepared you'll be for the job search.  If you're working on these algorithm problems every day, the ones you see in interviews will just be another algorithm.  

Make sure you read through and understand the challenge, then work through your approach.  Often, the first attempt will be a brute force solution.  Examine that solution to see if there's some time or space complexity that could be saved using a different approach.  Other times, you may not get to the solution at all.  It is still valuable time spent making the effort.  Even if you don't solve the problem, you will benefit from the exercise.  Just keep building that muscle so it's there when you need it!

![Approach to Problem Solving](https://i.imgur.com/IyE4PRX.png)

## What do I need to do to get initial setup done for Hack Hours?
#### Note: Each of these steps should only be done once!

- Fork this hack hour repo.  This will create a repo on Github under your account.  
- Go to the forked version of this repo on your Github account and click the `Clone or Download` button.  Then grab the URL from that dropdown.
- Open a terminal session and navigate to the directory where you'll be working on your hack hours.
- Type `git clone <paste github URL>`.  This will create a hack-hour-# directory, where # is your cohort number.  `cd` to that directory.  
- Install your dependencies by typing `npm install` 
- On github, navigate back to this CodesmithLLC repo and click the `Clone or Download` button.  Then grab the URL from that dropdown.
- **Note:** Make sure you use the `https` version of the URL for CodesmithLLC, **NOT** the `ssh git@github` version.
- Back on your terminal, type `git remote add upstream <paste CodesmithLLC github URL>`.  
- Verify that you have aliases for origin and upstream by typing `git remote -v`
- These aliases should look something like this:
  - origin	https://github.com/yourGithubName/hack-hour-99.git (fetch)
  - origin	https://github.com/yourGithubName/hack-hour-99.git (push)
  - upstream	https://github.com/CodesmithLLC/hack-hour-99.git (fetch)
  - upstream	https://github.com/CodesmithLLC/hack-hour-99.git (push)

## How do I get new Hack Hours every day?
- Open a terminal session and navigate to your hack hour directory.
- Make sure you have added and committed your changes from previous hack hours.
- Type `git pull upstream main`.  This will pull down the latest released hack hour.
- **Note:** You **should not ever** need to create additional files.  The **only way** new files should be created is by pulling in the upstream main

## How do I test my daily Hack Hours?
- Open a terminal session and navigate to your hack hour directory
- Type `npm run test-hh <hh-filename>` 
  - ex. `npm run test-hh fizzbuzz`
- The tests for the extension hack hours are disabled by default so if you get to them, you'll need to enable them to check your work. To enable them, open up the appropriate test file in the `./__tests__` directory and change `xdescribe` to `describe`.

## What do I do after I complete my FIRST Hack Hour problem?
- Commit your changes to your local hack hour repo
- Once your changes are committed, type `git push origin main` to push your latest commit(s) up to your github repo.
- **NOTE:** The following three steps will only be done for the very first hack hour!! (fizzbuzz)
- Go to your hack hour repository on Github and click `New Pull Request`
- **Change the Base Fork branch to be your username.**  You should see a green checkmark and 'Able to Merge'
- **DON'T leave the Base Fork branch as** `main`
- Click on `Create Pull Request`.

## What do I do after I complete all FUTURE Hack Hour problems?
- Commit your changes to your local hack hour repo
- Once your changes are committed, type `git push origin main` to push your latest commit(s) up to your github repo.
- This will add your current changes to the existing Pull Request you opened initially

<kbd>![pr-example](https://i.imgur.com/uUhIjFB.png)</kbd>