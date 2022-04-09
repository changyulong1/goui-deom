rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "to update" &&
git branch -M master &&
git remote add origin git@github.com:changyulong1/guIu-1.git
git push -f -u origin master &&
cd -