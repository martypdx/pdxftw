#!/bin/bash

mv ../publish/.git ../
rm -rf ~/publish
gobble build -f ../publish
mv ../.git ../publish/
