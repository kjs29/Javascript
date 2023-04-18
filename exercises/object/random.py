import os

for filename in os.listdir('.'):
    if filename.endswith('.md'):
        with open(filename, 'r') as file:
            data = file.read()
        data = data.replace('***********************************************************************/', '')
        with open(filename, 'w') as file:
            file.write(data)
